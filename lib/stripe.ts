import Stripe from 'stripe';
console.log("Check Key:", process.env.STRIPE_SECRET_KEY ? "Exists" : "Missing");
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not defined');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  // Use the default version associated with the Stripe account
});
