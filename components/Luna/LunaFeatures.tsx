'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle, FlaskConical, Users, ShieldCheck,
  Brain, Activity, Heart, Zap, Send, CheckCircle2, User
} from 'lucide-react';
import Link from 'next/link';
import { getImageUrl } from "@/lib/utils";

// ─── Config ──────────────────────────────────────────────────────────────────
const DURATION = 6000;

const NAV = [
  { id: 0, label: 'AI Therapy Chat', Icon: MessageCircle },
  { id: 1, label: 'Self-Discovery Tests', Icon: FlaskConical },
  { id: 2, label: 'Meet Our Experts', Icon: Users },
  { id: 3, label: 'Private. Secure. Trusted', Icon: ShieldCheck },
];

const RIGHT_COPY = [
  { h: 'An AI that listens, gently.', p: 'A calm space to think out loud. No judgment, no rush—just a quiet companion that meets you where you are.' },
  { h: 'Discover the shape of you.', p: 'Thoughtful, science-backed self-discovery—for the mind, the body, the heart. Small insights that add up to something bigger.' },
  { h: 'Experts, when you want one.', p: 'When the moment calls for it, our verified therapists are a tap away. Warm, qualified, and ready to listen.' },
  { h: 'Your inner world, protected.', p: 'End-to-end encrypted, anonymous by default, and independently audited. What you share stays yours—always.' },
];

const MESSAGES = [
  { id: 1, text: 'How are you feeling today?', from: 'luna', delay: 400 },
  { id: 2, text: 'A little overwhelmed!', from: 'user', delay: 1600 },
  { id: 3, text: "Let's take a slow breath together.", from: 'luna', delay: 2800 },
];

const DISC_CARDS = [
  { Icon: Brain, label: 'Mind', sub: '3 tests' },
  { Icon: User, label: 'Body', sub: '3 tests' },
  { Icon: Heart, label: 'Heart', sub: '3 tests' },
  { Icon: Zap, label: 'Body', sub: '3 tests' },
];

const EXPERTS = [
  { name: 'Dr. Hana Patel', role: 'GP and mental health coach in South London', featured: true },
  { name: 'Samina Khan', role: 'Life Coach', featured: false },
  { name: 'Munira', role: 'Hypnotherapist', featured: false },
];

// ─── Phone wrapper ────────────────────────────────────────────────────────────
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
              <div className="relative w-[18px] h-[9px] border-[1px] border-[#2c1a0e]/30 rounded-[2px] flex items-center p-[1px]">
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

// ─── Screen 1: Chat ───────────────────────────────────────────────────────────
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

// ─── Screen 2: Discovery ──────────────────────────────────────────────────────
function CircleProgress({ pct, active }: { pct: number; active: boolean }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!active) { setVal(0); return; }
    let f = 0;
    const id = setInterval(() => {
      f++;
      setVal(Math.round((f / 70) * pct));
      if (f >= 70) clearInterval(id);
    }, 22);
    return () => clearInterval(id);
  }, [active, pct]);

  const r1 = 72, r2 = 56;
  const circ1 = 2 * Math.PI * r1, circ2 = 2 * Math.PI * r2;

  return (
    <div className="relative flex items-center justify-center mx-auto" style={{ width: 180, height: 180 }}>
      <svg width="180" height="180" viewBox="0 0 180 180" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="90" cy="90" r={r1} fill="none" stroke="#e8d5be" strokeWidth="12" />
        <motion.circle
          cx="90" cy="90" r={r1} fill="none" stroke="#2c1a0e" strokeWidth="12" strokeLinecap="round"
          strokeDasharray={circ1}
          initial={{ strokeDashoffset: circ1 }}
          animate={{ strokeDashoffset: circ1 - (val / 100) * circ1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />

        {/* Inner Round */}
        <circle cx="90" cy="90" r={r2} fill="none" stroke="#e8d5be" strokeWidth="10" strokeOpacity={0.6} />
        <motion.circle
          cx="90" cy="90" r={r2} fill="none" stroke="#9e7b5a" strokeWidth="10" strokeLinecap="round"
          strokeDasharray={circ2}
          initial={{ strokeDashoffset: circ2 }}
          animate={{ strokeDashoffset: circ2 - (Math.min(val + 12, 100) / 100) * circ2 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
        />

      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-2xl font-bold text-[#2c1a0e] tracking-tight">{val}%</span>
        <span className="text-[9px] text-[#9e7b5a] font-bold mt-0.5 uppercase tracking-wide">Score</span>
      </div>
    </div>
  );
}

function DiscoveryScreen({ active }: { active: boolean }) {
  return (
    <div className="flex flex-col h-[460px] pt-1">
      <div className="flex-1">
        <p className="text-center text-[11px] font-semibold text-[#2c1a0e]! mt-1">Self-Discovery</p>
        <p className="text-center text-[9px] text-[#9e7b5a] mb-1">12 tests completed • 2 new</p>
        <CircleProgress pct={73} active={active} />
      </div>
      <div className="grid grid-cols-2 gap-2 mt-auto">
        {DISC_CARDS.map(({ Icon, label, sub }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={active ? { opacity: 1, y: [0, -4, 0] } : { opacity: 0, y: 16 }}
            transition={{
              opacity: { delay: 0.25 + i * 0.12, duration: 0.4 },
              y: active ? { delay: 0.25 + i * 0.12, duration: 2.2 + i * 0.2, repeat: Infinity, ease: 'easeInOut' } : {},
            }}
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl"
            style={{ background: '#2c1a0e' }}
          >
            <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: '#4a2810' }}>
              <Icon size={13} color="#c9a07a" />
            </div>
            <div>
              <p className="text-[10px] font-semibold text-[#f5ebe0]! leading-none">{label}</p>
              <p className="text-[8px] text-[#c9a07a]! mt-0.5">{sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Screen 3: Experts ────────────────────────────────────────────────────────
function ExpertsScreen({ active }: { active: boolean }) {
  return (
    <div className="flex flex-col h-[460px] pt-1">
      <div className="flex-1">
        <p className="text-center text-[11px] font-semibold text-[#2c1a0e]! mt-1">Meet your Guides</p>
        <p className="text-center text-[9px] text-[#9e7b5a] mb-3">Therapists</p>
        <div className="flex flex-col gap-2.5">
          {EXPERTS.map(({ name, role, featured }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: [0, featured ? -5 : -3, 0] } : { opacity: 0, y: 20 }}
              transition={{
                opacity: { delay: 0.2 + i * 0.15, duration: 0.45 },
                y: active ? { delay: 0.2 + i * 0.15, duration: 2.4 + i * 0.3, repeat: Infinity, ease: 'easeInOut' } : {},
              }}
              className="flex items-center gap-3 p-3 rounded-2xl"
              style={{
                background: featured ? '#2c1a0e' : '#e8d5be',
                boxShadow: featured ? '0 6px 18px rgba(44,26,14,0.22)' : '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 border border-background"
                style={{ background: featured ? '#4a2810' : '#cdb49a' }}
              >
                <User size={16} color={featured ? '#c9a07a' : '#7a5540'} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold leading-none truncate" style={{ color: featured ? '#f5ebe0' : '#2c1a0e' }}>{name}</p>
                <p className="text-[8px] mt-0.5 leading-tight" style={{ color: featured ? '#c9a07a' : '#9e7b5a' }}>{role}</p>
                {featured && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: active ? 1 : 0 }}
                    transition={{ delay: 0.9 }}
                    className="mt-1.5 px-3 py-0.5 rounded-full text-[8px] font-semibold"
                    style={{ background: '#c9a07a', color: '#2c1a0e' }}
                  >
                    Book a Session
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 0.5 : 0 }}
        transition={{ delay: 1.2 }}
        className="text-center text-[8px] mt-auto pb-2"
      >
        Available today
      </motion.p>
    </div>
  );
}

// ─── Screen 4: Privacy ────────────────────────────────────────────────────────
function OrbDot({ r, size, dur, start, color }: { r: number; size: number; dur: number; start: number; color: string }) {
  const pts = 120;
  const xs = Array.from({ length: pts }, (_, i) => Math.cos(((start + (360 * i) / pts) * Math.PI) / 180) * r - size / 2);
  const ys = Array.from({ length: pts }, (_, i) => Math.sin(((start + (360 * i) / pts) * Math.PI) / 180) * r - size / 2);
  return (
    <motion.div
      className="absolute rounded-full"
      style={{ width: size, height: size, background: color, top: '50%', left: '50%' }}
      animate={{ x: xs, y: ys }}
      transition={{ duration: dur, repeat: Infinity, ease: 'linear' }}
    />
  );
}

function PrivacyScreen({ active }: { active: boolean }) {
  const items = [
    { label: 'End-to-end encrypted', sub: 'Only you can read your sessions' },
    { label: 'Anonymous by default', sub: 'No data sold, ever' },
  ];
  return (
    <div className="flex flex-col h-[460px] pt-1">
      <div className="flex-1">
        <p className="text-center text-[11px] font-semibold text-[#2c1a0e]! mt-1">Private by Design</p>
        <p className="text-center text-[9px] text-[#9e7b5a] mb-1">Your Space</p>

        <div className="relative flex items-center justify-center" style={{ height: 190 }}>
          {[44, 66, 88].map(rad => (
            <div key={rad} className="absolute rounded-full border" style={{ width: rad * 2, height: rad * 2, borderColor: 'rgba(44,26,14,0.14)' }} />
          ))}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: active ? 1 : 0, opacity: active ? 1 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22, delay: 0.3 }}
            className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center"
            style={{ background: 'radial-gradient(circle at 35% 35%, #fde68a, #e9a100)', boxShadow: '0 0 24px rgba(233,161,0,0.45)' }}
          >
            <ShieldCheck size={22} color="#2c1a0e" />
          </motion.div>
          {active && (
            <>
              <OrbDot r={44} size={7} dur={3} start={0} color="#2c1a0e" />
              <OrbDot r={66} size={5} dur={5} start={120} color="#9e7b5a" />
              <OrbDot r={66} size={5} dur={5} start={300} color="#c9a07a" />
              <OrbDot r={88} size={4} dur={8} start={60} color="#2c1a0e" />
              <OrbDot r={88} size={4} dur={8} start={240} color="#9e7b5a" />
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-auto pb-2">
        {items.map(({ label, sub }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: active ? 1 : 0, x: active ? 0 : -16 }}
            transition={{ delay: 0.5 + i * 0.18, duration: 0.45 }}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
            style={{ background: '#2c1a0e' }}
          >
            <CheckCircle2 size={15} className="shrink-0 text-background" />
            <div>
              <p className="text-[10px] font-semibold text-[#f5ebe0]! leading-none">{label}</p>
              <p className="text-[8px] text-[#c9a07a]! mt-0.5">{sub}</p>
            </div>
          </motion.div>
        ))}
        <p className="text-center text-[8px] text-[#9e7b5a] mt-2">Privacy. Secure. Trusted</p>
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function LunaFeatures() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const restart = (next?: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive(p => (p + 1) % NAV.length);
    }, DURATION);
    if (next !== undefined) setActive(next);
  };

  useEffect(() => { restart(); return () => { if (timerRef.current) clearInterval(timerRef.current); }; }, []);

  const screens = [
    <ChatScreen key="chat" active={active === 0} />,
    <DiscoveryScreen key="disc" active={active === 1} />,
    <ExpertsScreen key="exp" active={active === 2} />,
    <PrivacyScreen key="priv" active={active === 3} />,
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-28" style={{ background: '#f3e5cb' }}>
      <div className="container mx-auto px-5 sm:px-8">

        {/* Mobile: stacked nav pills on top */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 lg:hidden">
          {NAV.map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => restart(id)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300"
              style={{
                background: active === id ? '#2c1a0e' : '#e4ccb0',
                color: active === id ? '#f5ebe0' : '#5a3920',
              }}
            >
              <Icon size={13} />
              {label}
            </button>
          ))}
        </div>

        {/* Desktop: 3-col layout - Balanced 1fr auto 1fr to keep phone in dead center */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-16 xl:gap-24 items-center">

          {/* Left nav — desktop only, with responsive margin */}
          <div className="hidden lg:flex justify-end">
            <nav className="flex flex-col gap-6 w-[280px]">
              {NAV.map(({ id, label, Icon }) => (
                <button
                  key={id}
                  onClick={() => restart(id)}
                  className="flex items-center gap-3 w-full px-5 py-3 rounded-xl text-center transition-all duration-300"
                  style={{
                    background: active === id ? '#2c1a0e' : 'transparent',
                  }}
                >
                  <Icon
                    size={16}
                    color={active === id ? '#c9a07a' : '#7a5540'}
                    className="shrink-0"
                  />
                  <span
                    className="text-[15px] font-semibold transition-colors duration-300"
                    style={{
                      color: active === id ? '#f5ebe0' : '#2c1a0e',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {label}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Center: Phone + button + dots */}
          <div className="flex flex-col items-center gap-5">
            <Phone>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  {screens[active]}
                </motion.div>
              </AnimatePresence>
            </Phone>
            
            <Link href="https://flowergrid.vercel.app/" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-14 py-3 rounded-full text-sm font-semibold"
                style={{ background: '#2c1a0e', color: '#f5ebe0', fontFamily: 'var(--font-heading)', boxShadow: '0 4px 16px rgba(44,26,14,0.25)' }}
              >
                Try Luna
              </motion.button>
            </Link>

            <div className="flex gap-2 items-center">
              {NAV.map(({ id }) => (
                <button
                  key={id}
                  onClick={() => restart(id)}
                  className="rounded-full transition-all duration-300"
                  style={{ width: active === id ? 22 : 8, height: 8, background: active === id ? '#2c1a0e' : '#c9a07a' }}
                />
              ))}
            </div>
          </div>

          {/* Right: copy */}
          <div className="lg:pl-10 text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
                  style={{ color: '#2c1a0e', fontFamily: 'var(--font-heading)' }}
                >
                  {RIGHT_COPY[active].h}
                </h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xs lg:max-w-sm mx-auto lg:mx-0" style={{ color: '#6b4c35' }}>
                  {RIGHT_COPY[active].p}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}