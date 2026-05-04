'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { motion } from 'framer-motion';

// Hardcoded for now as fetching them dynamically would require a server action or a separate API
// but since these are static data files, we can just list them here for better UX
const services = [
  "Reiki Healing",
  "Personal Development Coaching",
  "Professional Development Coaching",
  "Relationship Coaching",
  "Conscious Living Coaching",
  "Stress and Anxiety Support",
  "Craniosacral Therapy",
  "Hypnotherapy",
  "Emotional Wellbeing Support",
  "Mindfulness Session"
];

const practitioners = [
  "Nudrat Chagtai",
  "Dr. Hana Patel",
  "Aysha Iqbal",
  "Dr. Ayla Gokce",
  "Tarun Sharma",
  "Angelina Ray",
  "Tamkin Riaz",
  "Yvonne Hewitt",
  "Dr. Ravinder",
  "Runa Boolaky",
  "Rico Wagner Caleap",
  "Rebecca",
  "Husna Hoque",
  "Uzma",
  "Dr. Renuka Marley"
];

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function BookingPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceName: '',
    practitionerName: '',
    format: 'Online',
    sessionLength: '60',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      alert("Stripe Publishable Key is not configured. Please check your .env.local file.");
      return;
    }
    
    setLoading(true);

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err: any) {
      alert(err.message || 'Something went wrong');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-[#0B0F19] text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-medium tracking-widest uppercase text-sm mb-4 block">Secure Booking</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white/50 bg-clip-text text-transparent">
            Your Journey Starts Here
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Choose your service and practitioner. We'll handle the rest with a secure and seamless payment process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-[#151C2C]/50 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">First Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#0B0F19] border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white placeholder:text-gray-600"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#0B0F19] border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white placeholder:text-gray-600"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Service</label>
                    <div className="relative">
                      <select
                        required
                        name="serviceName"
                        value={formData.serviceName}
                        onChange={handleChange}
                        className="w-full bg-[#0B0F19] border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="text-gray-600">Select Service</option>
                        {services.map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="Step 19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Practitioner</label>
                    <div className="relative">
                      <select
                        name="practitionerName"
                        value={formData.practitionerName}
                        onChange={handleChange}
                        className="w-full bg-[#0B0F19] border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white appearance-none cursor-pointer"
                      >
                        <option value="" className="text-gray-600">Any Practitioner (Optional)</option>
                        {practitioners.map(p => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Format</label>
                    <div className="grid grid-cols-2 gap-3 p-1 bg-[#0B0F19] rounded-2xl border border-white/5">
                      {['Online', 'In-person'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, format: opt })}
                          className={`py-3 rounded-xl transition-all text-sm font-medium ${
                            formData.format === opt
                              ? 'bg-blue-600 text-white shadow-lg'
                              : 'text-gray-500 hover:text-gray-300'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Duration</label>
                    <div className="grid grid-cols-2 gap-3 p-1 bg-[#0B0F19] rounded-2xl border border-white/5">
                      {['60', '90'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, sessionLength: opt })}
                          className={`py-3 rounded-xl transition-all text-sm font-medium ${
                            formData.sessionLength === opt
                              ? 'bg-purple-600 text-white shadow-lg'
                              : 'text-gray-500 hover:text-gray-300'
                          }`}
                        >
                          {opt} Min
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-5 rounded-2xl shadow-2xl transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Proceed to Secure Payment</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </>
                    )}
                  </button>
                  <p className="text-center text-gray-500 text-xs mt-4 flex items-center justify-center gap-2">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                    Payments are securely processed by Stripe
                  </p>
                </div>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold mb-6">Booking Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Service</span>
                  <span className="text-gray-200">{formData.serviceName || '—'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Practitioner</span>
                  <span className="text-gray-200">{formData.practitionerName || 'Any'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Duration</span>
                  <span className="text-gray-200">{formData.sessionLength} Minutes</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Format</span>
                  <span className="text-gray-200">{formData.format}</span>
                </div>
                <div className="border-t border-white/5 pt-4 mt-4 flex justify-between items-end">
                  <span className="text-gray-400 font-medium">Total Price</span>
                  <span className="text-2xl font-bold text-white">
                    £{formData.sessionLength === '90' ? '150' : '100'}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-blue-600/10 p-8 rounded-3xl border border-blue-500/20">
              <h4 className="text-blue-400 font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Why book with us?
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">●</span>
                  <span>Handpicked expert practitioners</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">●</span>
                  <span>Seamless secure payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">●</span>
                  <span>Full integrated wellness grid</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
