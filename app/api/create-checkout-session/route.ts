import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, serviceName, practitionerName, format, sessionLength } = body;

    // Validate required fields
    if (!name || !email || !serviceName || !format || !sessionLength) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Determine price based on session length (Placeholder logic - you should use Stripe Price IDs in production)
    // For now, we'll create a line item with a custom price  
    const unitAmount = sessionLength === '90' ? 15000 : 10000; // $150 vs $100 in cents

    const origin = process.env.NEXT_PUBLIC_BASE_URL || new URL(req.url).origin;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: `${serviceName} (${sessionLength} min)`,
              description: `Practitioner: ${practitionerName || 'Any'}. Format: ${format}`,
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
        serviceName,
        practitionerName: practitionerName || '',
        format,
        sessionLength,
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
