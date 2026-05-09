'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle2, User, Phone, ChevronRight, Share2, ShieldCheck, Calendar } from 'lucide-react';
import Link from 'next/link';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [details, setDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDetails() {
      if (sessionId) {
        try {
          const response = await fetch(`/api/get-checkout-session?session_id=${sessionId}`);
          const data = await response.json();
          if (!data.error) {
            setDetails(data);
          }
        } catch (err) {
          console.error("Failed to fetch session details:", err);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    }
    fetchDetails();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f3e5cb]">
        <div className="flex flex-col items-center gap-6">
          <div className="w-16 h-16 border-t-2 border-primary rounded-full animate-spin" />
          <p className="text-primary/60 font-light tracking-[0.2em] uppercase text-xs animate-pulse">Verifying Transaction</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3e5cb] font-sans selection:bg-primary/20 p-6 overflow-hidden">
      {/* Printable Receipt (Only visible during printing) */}
      <div className="hidden print:block w-full max-w-2xl mx-auto p-12 bg-white text-black font-sans">
        <div className="text-center mb-12 border-b border-gray-100 pb-10">
          <h1 className="text-3xl font-heading font-medium tracking-tight mb-2">Flowergrid</h1>
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">Official Booking Receipt</p>
        </div>

        <div className="grid grid-cols-2 gap-10 mb-12">
          <div className="space-y-4">
            <div>
              <p className="text-[8px] uppercase tracking-widest text-gray-400 font-bold mb-1">Billed To</p>
              <p className="text-sm font-medium">{details?.name}</p>
              <p className="text-xs text-gray-500">{details?.email}</p>
              <p className="text-xs text-gray-500">{details?.phone}</p>
            </div>
            <div>
              <p className="text-[8px] uppercase tracking-widest text-gray-400 font-bold mb-1">Booking Date</p>
              <p className="text-sm font-medium">{details?.bookingDate || '---'}</p>
            </div>
            <div>
              <p className="text-[8px] uppercase tracking-widest text-gray-400 font-bold mb-1">Receipt Date</p>
              <p className="text-sm font-medium">{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>
          </div>
          <div className="text-right space-y-4">
            <div>
              <p className="text-[8px] uppercase tracking-widest text-gray-400 font-bold mb-1">Transaction Ref</p>
              <p className="text-xs font-mono">{sessionId?.toUpperCase()}</p>
            </div>
            <div>
              <p className="text-[8px] uppercase tracking-widest text-gray-400 font-bold mb-1">Status</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-green-600">Paid in Full</p>
            </div>
          </div>
        </div>

        <div className="border-t border-b border-gray-100 py-8 mb-12">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[8px] uppercase tracking-widest text-gray-400 font-bold">Description</span>
            <span className="text-[8px] uppercase tracking-widest text-gray-400 font-bold">Amount</span>
          </div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium mb-1">{details?.serviceName}</p>
              <p className="text-[10px] text-gray-500 italic">Practitioner: {details?.practitionerName || 'Any Available'}</p>
            </div>
            <span className="text-sm font-bold">£110.00</span>
          </div>
        </div>

        <div className="flex justify-between items-center text-xl font-heading font-medium">
          <span className="uppercase tracking-widest text-xs font-bold text-gray-400">Total Charged</span>
          <span>£110.00</span>
        </div>

        <div className="mt-32 text-center border-t border-gray-50 pt-10">
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-gray-300 mb-2">Thank You</p>
          <p className="text-[8px] text-gray-400 max-w-xs mx-auto leading-relaxed italic">
            This is an automated receipt for your holistic wellness booking. A confirmation with session details has been sent to your email.
          </p>
        </div>
      </div>

      {/* Main UI (Hidden during printing) */}
      <div className="max-w-xl w-full print:hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <div className="flex justify-center mb-8">
            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
              className="bg-primary/5 p-6 rounded-full border border-primary/10 relative"
            >
              <CheckCircle2 className="w-12 h-12 text-primary" />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full border border-primary/20"
              />
            </motion.div>
          </div>
          <span className="text-primary font-medium tracking-[0.4em] uppercase text-[10px] mb-3 block">Booking Confirmed</span>
          <h1 className="text-4xl md:text-5xl font-heading font-medium text-text-heading mb-4 tracking-tight">
            Thank you, {details?.name?.split(' ')[0] || 'there'}
          </h1>
          <p className="text-text-body text-base leading-relaxed font-light">
            Your journey toward harmony has begun. We&apos;ve reserved your session for <span className="text-text-heading font-normal">{details?.serviceName || 'your selected service'}</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/40 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-primary/10 shadow-sm space-y-8"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-primary/5 pb-4">
              <h3 className="text-lg font-heading font-medium text-text-heading">Next Steps</h3>
              <ShieldCheck className="w-4 h-4 text-primary/40" />
            </div>
            
            <p className="text-sm text-text-body/80 leading-relaxed font-light">
              A detailed confirmation email has been dispatched. Please check your inbox for preparation guidelines and your session details.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: User, label: "Practitioner", value: details?.practitionerName || "Expert Assigned" },
                { icon: Phone, label: "Contact", value: details?.phone || "---" },
                { icon: Calendar, label: "Date", value: details?.bookingDate || "---" }
              ].map((item, i) => (
                <div key={i} className="bg-primary/3 p-4 rounded-xl border border-primary/5">
                  <p className="text-[7px] uppercase tracking-[0.2em] text-primary/50 font-bold mb-1 flex items-center gap-1">
                    <item.icon className="w-2.5 h-2.5" />
                    {item.label}
                  </p>
                  <p className="text-xs text-text-heading font-medium truncate">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Link 
              href="/"
              className="w-full bg-primary hover:bg-[#8b5630] text-white font-medium py-4 rounded-full shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 tracking-[0.2em] uppercase text-[10px]">Return Home</span>
              <ChevronRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button 
              onClick={() => window.print()}
              className="w-full bg-white/20 hover:bg-white/40 text-primary border border-primary/10 font-medium py-4 rounded-full transition-all flex items-center justify-center gap-3 group"
            >
              <span className="tracking-[0.2em] uppercase text-[10px]">Save Receipt</span>
              <Share2 className="w-4 h-4 text-primary/40 group-hover:text-primary transition-colors" />
            </button>
          </div>

        </motion.div>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#f3e5cb]">
        <div className="w-16 h-16 border-t-2 border-primary rounded-full animate-spin" />
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
