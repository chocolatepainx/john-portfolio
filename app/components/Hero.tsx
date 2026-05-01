"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ThinkingStream from "./ThinkingStream";
import { NumberTicker } from "./ui/NumberTicker";
import { BorderBeam } from "./ui/BorderBeam";
import MagneticButton from "./ui/MagneticButton";

const STATS = [
  { value: 100, suffix: "+", label: "Engineers placed" },
  { value: 87, suffix: "%", label: "Offer acceptance" },
  { value: 4, suffix: "+", label: "Agents built" },
];

const STACK_TAGS = ["Python", "Claude Opus 4.6", "Pearch", "Slack Bolt", "GitHub Actions"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-20 pb-16 overflow-hidden">
      <div className="relative w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-center">

          {/* Left: Editorial content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
              className="font-mono text-[10px] text-[#9E9A92] tracking-[0.16em] uppercase mb-8"
            >
              Talent Engineer ·{" "}
              <span className="text-[#3D6B1A]/80">Valence · Series B</span>
              {" "}· Toronto
            </motion.p>

            <div className="mb-8">
              <div className="overflow-hidden py-0.5">
                <motion.h1
                  initial={{ y: "105%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-[56px] md:text-[72px] lg:text-[84px] leading-[1.02] tracking-[-0.02em] text-[#1A1917]"
                >
                  You don&apos;t stop the
                </motion.h1>
              </div>
              <div className="overflow-hidden py-0.5">
                <motion.h1
                  initial={{ y: "105%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-[56px] md:text-[72px] lg:text-[84px] leading-[1.02] tracking-[-0.02em] text-[#1A1917]"
                >
                  plane to fix it.
                </motion.h1>
              </div>
              <div className="overflow-hidden py-0.5">
                <motion.h1
                  initial={{ y: "105%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-[56px] md:text-[72px] lg:text-[84px] leading-[1.02] tracking-[-0.02em] text-[#3D6B1A] italic"
                >
                  Fix it flying.
                </motion.h1>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
              className="text-[15px] text-[#6E6B62] leading-[1.85] max-w-[420px] mb-9"
            >
              Small, high-leverage tweaks while everything&apos;s in motion.
              Building Scout — an autonomous sourcing agent that finds, scores,
              and surfaces engineers 24/7.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
              className="flex items-center gap-4 flex-wrap"
            >
              <MagneticButton
                href="https://linkedin.com/in/john-duong-x"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A1917] text-[#FAFAF7] text-[13px] font-medium rounded-full hover:bg-[#2E2E28] transition-colors"
              >
                View profile
                <span className="text-[#FAFAF7]/40">↗</span>
              </MagneticButton>
              <MagneticButton
                href="mailto:johnle_10@hotmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#E8E3D6] text-[#6E6B62] text-[13px] rounded-full hover:text-[#1A1917] hover:border-[#C4BFB5] transition-colors"
              >
                Get in touch
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
              className="flex items-center gap-0 mt-12 pt-8 border-t border-[#E8E3D6]"
            >
              {STATS.map((stat, i) => (
                <div key={i} className="flex items-stretch">
                  <div className="flex flex-col gap-1 pr-7">
                    <div className="text-[22px] font-bold text-[#1A1917] leading-none tabular-nums">
                      <NumberTicker value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="font-mono text-[10px] text-[#BDB9B1] tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                  {i < STATS.length - 1 && (
                    <div className="w-px bg-[#D4CEBC] self-stretch mr-7" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Scout card */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <ScoutCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ScoutCard() {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { rawX.set(0); rawY.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ y: [0, -7, 0] }}
      transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="relative rounded-xl border border-[#2E2E28] bg-[#1A1916] overflow-hidden shadow-[0_8px_40px_rgba(26,25,22,0.12)]"
    >
      <BorderBeam duration={7} />

      {/* Card header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full bg-[#5A8430]"
            style={{ animation: "blink 2.4s ease-in-out infinite" }}
          />
          <span className="font-mono text-[11px] text-white/50 uppercase tracking-wider">
            Scout
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white/[0.08]" />
          <span className="w-2 h-2 rounded-full bg-white/[0.08]" />
          <span className="w-2 h-2 rounded-full bg-white/[0.08]" />
        </div>
      </div>

      {/* Thinking Stream */}
      <div className="px-4 py-3">
        <ThinkingStream />
      </div>

      {/* Card footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-white/[0.06]">
        <div className="flex items-center gap-1.5 flex-wrap">
          {STACK_TAGS.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[9px] text-white/30 bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href="https://github.com/chocolatepainx"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] text-white/20 hover:text-white/45 transition-colors"
        >
          github ↗
        </a>
      </div>
    </motion.div>
  );
}
