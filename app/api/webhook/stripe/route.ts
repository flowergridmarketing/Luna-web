import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { headers } from 'next/headers';
import { appendToSheet } from '@/lib/google-sheets';
import { transporter } from '@/lib/nodemailer';

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
  console.log('--- WEBHOOK HIT ---');
  const body = await req.text();
  const sig = (await headers()).get('stripe-signature') as string;

  let event;

  try {
    if (!endpointSecret) throw new Error('Webhook secret is not configured');
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as any;
    const metadata = session.metadata;

    console.log('Webhook metadata received:', metadata);

    if (!metadata || !metadata.email) {
      console.error('Missing metadata or email in session');
      return NextResponse.json({ error: 'Missing metadata' }, { status: 400 });
    }

    try {
      // 1. Store in Google Sheets
      console.log('Attempting to append to Google Sheets...');
      await appendToSheet(metadata);
      console.log('Successfully appended to Google Sheets');

      // 2. Send confirmation email
      console.log('Attempting to send confirmation email to:', metadata.email);

      // Send email using Nodemailer
      const info = await transporter.sendMail({
        from: '"FlowerGrid" <flowergridmarketing@gmail.com>', // sender address
        to: metadata.email, // list of receivers
        subject: 'Booking Confirmation - FlowerGrid',
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h1 style="color: #000;">Booking Confirmed!</h1>
            <p>Hi ${metadata.name},</p>
            <p>Your booking for <strong>${metadata.serviceName}</strong> has been confirmed.</p>
            <div style="background: #f4f4f4; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Service:</strong> ${metadata.serviceName}</p>
              <p><strong>Practitioner:</strong> ${metadata.practitionerName || 'Expert Assigned'}</p>
              <p><strong>Date:</strong> ${metadata.bookingDate}</p>
            </div>
            <p>We will contact you shortly with the next steps.</p>
            <p>Best regards,<br/>The Luna Team</p>
          </div>
        `,
      });
      
      console.log('Email sent successfully. Message ID:', info.messageId);

    } catch (error) {
      console.error('CRITICAL WEBHOOK ERROR:', error);
    }
  }

  return NextResponse.json({ received: true });
}