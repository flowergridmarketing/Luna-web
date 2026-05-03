'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, User, Clock, MapPin, Mail, ArrowRight, Share2 } from 'lucide-react';
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
      <div className="min-h-screen flex items-center justify-center bg-[#0B0F19]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-400 font-medium animate-pulse">Verifying your booking...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-[#0B0F19] text-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#151C2C]/80 backdrop-blur-2xl p-8 md:p-14 rounded-[2.5rem] border border-white/5 shadow-2xl text-center relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50" />
          
          <div className="flex justify-center mb-8">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
              className="bg-green-500/10 p-6 rounded-full border border-green-500/20"
            >
              <CheckCircle2 className="w-16 h-16 text-green-500" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Payment Successful
            </h1>
            <p className="text-gray-400 mb-10 text-lg max-w-md mx-auto">
              Thank you {details?.name || 'there'}! Your booking for <span className="text-white font-medium">{details?.serviceName || 'your session'}</span> has been confirmed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
            {[
              { icon: User, label: "Practitioner", value: details?.practitionerName || "Team Member" },
              { icon: Clock, label: "Duration", value: `${details?.sessionLength || '--'} Minutes` },
              { icon: MapPin, label: "Format", value: details?.format || "Online" },
              { icon: Mail, label: "Confirmation", value: "Sent to your email" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="bg-[#0B0F19]/50 p-4 rounded-2xl border border-white/5 flex items-center gap-4"
              >
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <item.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{item.label}</p>
                  <p className="text-sm text-gray-200 font-medium">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/"
                className="flex-1 bg-white text-black font-bold py-4 rounded-2xl transition-all hover:bg-gray-200 flex items-center justify-center gap-2 group"
              >
                <span>Return to Home</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => window.print()}
                className="flex-1 bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-2xl transition-all border border-white/10 flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                <span>Save Receipt</span>
              </button>
            </div>
            
            <div className="pt-6 border-t border-white/5 flex flex-col items-center gap-2">
              <p className="text-xs text-gray-500 font-medium">
                TRANSACTION ID: <span className="text-gray-400">{sessionId?.slice(-12).toUpperCase()}</span>
              </p>
              <p className="text-[10px] text-gray-600 max-w-xs leading-relaxed uppercase tracking-tighter">
                A confirmation email with the session link and next steps has been sent to {details?.email || 'your registered email'}.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#0B0F19]">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
