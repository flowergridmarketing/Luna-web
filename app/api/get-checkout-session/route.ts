import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get('session_id');

  if (!sessionId) {
    return NextResponse.json({ error: 'Missing session_id' }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    // Only return necessary metadata to the client
    return NextResponse.json({
      name: session.metadata?.name,
      email: session.metadata?.email,
      phone: session.metadata?.phone,
      serviceName: session.metadata?.serviceName,
      practitionerName: session.metadata?.practitionerName,
      amount: session.amount_total ? session.amount_total / 100 : 0,
    });
  } catch (error: any) {
    console.error('Error retrieving session:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
