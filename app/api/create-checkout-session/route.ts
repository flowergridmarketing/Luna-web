import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: Request) {
  try {
    const { name, email, phone, serviceName, practitionerName, bookingDate } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !serviceName || !bookingDate) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const unitAmount = 100;
    // const unitAmount = 11000;

    const origin = process.env.NEXT_PUBLIC_BASE_URL || new URL(req.url).origin;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: serviceName,
              description: `Practitioner: ${practitionerName || 'Any'}. Contact: ${phone}`,
            },
            unit_amount: unitAmount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/booking`,
      customer_email: email,
      metadata: {
        name,
        email,
        phone,
        serviceName,
        practitionerName: practitionerName || '',
        bookingDate,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
