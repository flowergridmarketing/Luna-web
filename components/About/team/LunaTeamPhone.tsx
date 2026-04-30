'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import { getImageUrl } from "@/lib/utils";

const MESSAGES = [
  { id: 1, text: 'How are you feeling today?', from: 'luna', delay: 400 },
  { id: 2, text: 'A little overwhelmed!', from: 'user', delay: 1600 },
  { id: 3, text: "Let's take a slow breath together.", from: 'luna', delay: 2800 },
];

function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto" style={{ width: 280 }}>
      {/* Outer frame */}
      <div
        className="rounded-[48px] overflow-hidden relative bg-black p-[6px] isolation-isolate"
        style={{
          transform: 'translateZ(0)',
        }}
      >
        {/* Inner screen */}
        <div 
          className="rounded-[38px] overflow-hidden relative" 
          style={{ 
            background: '#f5ebe0', 
            minHeight: 540,
            transform: 'translateZ(0)',
          }}
        >
          {/* Status bar */}
          <div className="relative flex items-center justify-between px-7 pt-4 pb-2 z-20">
            <span className="text-[11px] font-bold text-[#2c1a0e]">7:13</span>

            {/* Dynamic Island */}
            <div className="absolute left-1/2 -translate-x-1/2 top-3 w-[72px] h-[22px] bg-black rounded-full" />

            <div className="flex items-center gap-1.5">
              {/* Cellular */}
              <div className="flex gap-[1.5px] items-end h-[10px]">
                {[3, 5, 7, 10].map(h => <div key={h} className="w-[2.5px] rounded-[0.5px] bg-[#2c1a0e]" style={{ height: h }} />)}
              </div>
              {/* Wifi */}
              <svg width="14" height="10" viewBox="0 0 14 10" className="opacity-90 mb-1">
                <path d="M1 7c2-2 4.5-3 7-3s5 1 7 3" stroke="#2c1a0e" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                <path d="M3.5 9c1.5-1 3-1.5 4.5-1.5s3 .5 4.5 1.5" stroke="#2c1a0e" strokeWidth="1.4" fill="none" strokeLinecap="round" />
              </svg>
              {/* Battery */}
              <div className="relative w-[18px] h-[9px] border border-[#2c1a0e]/30 rounded-[2px] flex items-center p-px">
                <div className="h-full w-[65%] bg-[#2c1a0e] rounded-[0.5px]" />
                <div className="absolute -right-[2.5px] w-[1.5px] h-[3px] bg-[#2c1a0e]/30 rounded-r-[1px]" />
              </div>
            </div>
          </div>

          <div className="px-5 pb-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

function ChatScreen({ active }: { active: boolean }) {
  const [shown, setShown] = useState<number[]>([]);

  useEffect(() => {
    if (!active) { setShown([]); return; }
    const ts = MESSAGES.map(m => setTimeout(() => setShown(p => [...p, m.id]), m.delay));
    return () => ts.forEach(clearTimeout);
  }, [active]);

  return (
    <div className="flex flex-col h-[460px] pt-1">
      <div className="flex-1 flex flex-col gap-2.5 overflow-y-auto scrollbar-hidden">
        <p className="text-center text-[11px] font-semibold text-[#2c1a0e]! mt-1">AI Therapy Chat</p>

        {/* Messages */}
        {MESSAGES.map((msg, idx) => (
          <div key={msg.id}>
            <AnimatePresence>
              {shown.includes(msg.id) && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className="px-3.5 py-2 text-[11px] font-medium leading-snug max-w-[78%]"
                    style={{
                      background: msg.from === 'luna' ? '#e8d5be' : '#2c1a0e',
                      color: msg.from === 'luna' ? '#2c1a0e' : '#f5ebe0',
                      borderRadius: msg.from === 'luna' ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
                    }}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Luna head appears after first message */}
            {idx === 0 && shown.includes(msg.id) && (
              <motion.div
                initial={{ scale: 0.6, opacity: 0, y: 10 }}
                animate={{ scale: active ? 1 : 0.6, opacity: active ? 1 : 0, y: active ? 0 : 10 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22, delay: 0.3 }}
                className="flex justify-center my-8 relative group"
              >
                {/* Shadow Beam / Glow Effect */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-28 h-28 bg-amber-400/20 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute w-36 h-36 bg-amber-200/10 rounded-full blur-2xl" />

                  {/* Rotating beam rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute w-32 h-32 border border-amber-400/20 rounded-full border-dashed"
                  />

                  {/* Subtle 'beam' lines */}
                  <div className="absolute w-px h-40 bg-linear-to-b from-transparent via-amber-400/40 to-transparent rotate-45 blur-[1px]" />
                  <div className="absolute w-px h-40 bg-linear-to-b from-transparent via-amber-400/40 to-transparent -rotate-45 blur-[1px]" />
                  <div className="absolute h-px w-40 bg-linear-to-r from-transparent via-amber-400/30 to-transparent blur-[1px]" />
                </div>

                <div className="relative w-20 h-20 z-10" style={{ filter: 'drop-shadow(0 0 15px rgba(251,191,36,0.6)) drop-shadow(0 0 30px rgba(251,191,36,0.2))' }}>
                  <Image src={getImageUrl("luna/luna-head.png")} alt="Luna" fill className="object-contain" />
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ delay: 3.2, duration: 0.5 }}
        className="flex items-center gap-2 mt-auto px-3 py-2 rounded-full"
        style={{ background: '#e8d5be' }}
      >
        <span className="flex-1 text-[10px] text-[#9e7b5a]">Start typing here...</span>
        <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: '#2c1a0e' }}>
          <Send size={10} color="#f5ebe0" />
        </div>
      </motion.div>
    </div>
  );
}

export default function LunaTeamPhone() {
  const [active, setActive] = useState(true);

  // Loop the animation every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActive(false);
      setTimeout(() => setActive(true), 50);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Phone>
        <ChatScreen active={active} />
      </Phone>
    </div>
  );
}
