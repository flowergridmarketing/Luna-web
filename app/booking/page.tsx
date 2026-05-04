'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';

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
    <div className="min-h-screen pt-44 pb-20 px-6 md:px-12 bg-[#f3e5cb] font-sans selection:bg-primary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <span className="text-primary font-medium tracking-[0.4em] uppercase text-[10px] mb-4 block">Reservation Portal</span>
          <h1 className="text-6xl md:text-8xl font-heading font-medium text-text-heading mb-6 tracking-tight leading-none">
            Book Your Session
          </h1>
          <p className="text-text-body text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Experience a tailored journey toward balance and harmony. Choose your preferred service and practitioner below.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Form Column - 60% width on LG */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-3/5"
          >
            <div className="bg-white/40 backdrop-blur-md p-10 md:p-14 rounded-[2.5rem] border border-primary/10 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-10">
                  {/* Row 1: Identification */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] block">Full Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-primary/20 py-3 focus:outline-none focus:border-primary transition-all text-text-heading placeholder:text-text-body/20 font-light text-base"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] block">Email Address</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-primary/20 py-3 focus:outline-none focus:border-primary transition-all text-text-heading placeholder:text-text-body/20 font-light text-base"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Row 2: Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <div className="space-y-3 relative group">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] block">Service Category</label>
                      <select
                        required
                        name="serviceName"
                        value={formData.serviceName}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-primary/20 py-3 focus:outline-none focus:border-primary transition-all text-text-heading appearance-none cursor-pointer font-light text-base"
                      >
                        <option value="" disabled>Select Service</option>
                        {services.map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                      <ChevronRight className="absolute right-0 bottom-4 w-4 h-4 text-primary/30 rotate-90 pointer-events-none" />
                    </div>
                    <div className="space-y-3 relative group">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] block">Preferred Practitioner</label>
                      <select
                        name="practitionerName"
                        value={formData.practitionerName}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-primary/20 py-3 focus:outline-none focus:border-primary transition-all text-text-heading appearance-none cursor-pointer font-light text-base"
                      >
                        <option value="">Any Available Expert</option>
                        {practitioners.map(p => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                      <ChevronRight className="absolute right-0 bottom-4 w-4 h-4 text-primary/30 rotate-90 pointer-events-none" />
                    </div>
                  </div>

                  {/* Row 3: Preferences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] block">Interaction Format</label>
                      <div className="flex gap-2 p-1.5 bg-white/20 rounded-full border border-primary/5">
                        {['Online', 'In-person'].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setFormData({ ...formData, format: opt })}
                            className={`flex-1 py-3 px-4 rounded-full text-[10px] tracking-[0.1em] font-medium transition-all duration-500 ${
                              formData.format === opt
                                ? 'bg-primary text-white shadow-md'
                                : 'text-text-body hover:bg-white/30'
                            }`}
                          >
                            {opt.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] block">Session Length</label>
                      <div className="flex gap-2 p-1.5 bg-white/20 rounded-full border border-primary/5">
                        {['60', '90'].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setFormData({ ...formData, sessionLength: opt })}
                            className={`flex-1 py-3 px-4 rounded-full text-[10px] tracking-[0.1em] font-medium transition-all duration-500 ${
                              formData.sessionLength === opt
                                ? 'bg-primary text-white shadow-md'
                                : 'text-text-body hover:bg-white/30'
                            }`}
                          >
                            {opt} MINS
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-10 border-t border-primary/5">
                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full bg-primary hover:bg-[#8b5630] text-white font-medium py-5 rounded-full shadow-lg shadow-primary/20 transition-all transform hover:translate-y-[-2px] active:translate-y-[0px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="relative z-10 tracking-[0.2em] uppercase text-xs">Finalize Booking</span>
                    <ChevronRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex items-center justify-center gap-4 mt-8 opacity-40">
                    <div className="h-[1px] flex-grow bg-primary/20" />
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                    <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-primary">Secure Checkout</span>
                    <div className="h-[1px] flex-grow bg-primary/20" />
                  </div>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Summary Column - 40% width on LG */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-2/5"
          >
            <div className="bg-white/60 backdrop-blur-md p-10 md:p-12 rounded-[3rem] border border-primary/10 shadow-sm">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-heading font-medium text-text-heading">Summary</h3>
                <div className="p-2 bg-primary/5 rounded-lg">
                  <Calendar className="w-4 h-4 text-primary" />
                </div>
              </div>
              
              <div className="space-y-8">
                {[
                  { label: "Selected Service", value: formData.serviceName || '---' },
                  { label: "Expert Practitioner", value: formData.practitionerName || 'Any Available' },
                  { label: "Timeframe", value: `${formData.sessionLength} Minute Session` },
                  { label: "Environment", value: formData.format },
                ].map((item, i) => (
                  <div key={i} className="border-b border-primary/5 pb-4">
                    <p className="text-[8px] uppercase tracking-[0.25em] text-primary/50 font-bold mb-2">{item.label}</p>
                    <p className="text-base text-text-heading font-light">{item.value}</p>
                  </div>
                ))}

                <div className="pt-6 flex justify-between items-center">
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-primary/40 font-bold mb-1">Total Fee</p>
                    <p className="text-5xl font-heading font-medium text-text-heading leading-none">
                      £{formData.sessionLength === '90' ? '150' : '100'}
                    </p>
                  </div>
                  <div className="text-[9px] text-primary/40 uppercase tracking-widest font-bold border border-primary/10 px-3 py-1 rounded-full">
                    GBP
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 rounded-2xl bg-primary/[0.03] border border-primary/5">
                <p className="text-[10px] text-text-body/60 leading-relaxed font-light italic">
                  * All sessions are conducted under strict confidentiality. Confirmation details will be dispatched to your inbox upon completion.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
