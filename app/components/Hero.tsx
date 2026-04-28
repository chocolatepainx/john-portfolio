"use client";
import { motion } from "framer-motion";
import Terminal from "./Terminal";
import { NumberTicker } from "./ui/NumberTicker";
import { BorderBeam } from "./ui/BorderBeam";

const STATS = [
  { value: 100, suffix: "+", label: "Engineers placed" },
  { value: 87, suffix: "%", label: "Offer acceptance" },
  { value: 4, suffix: "+", label: "Agents built" },
];

const STACK_TAGS = ["Python", "Claude Opus 4.6", "Pearch", "Slack Bolt", "GitHub Actions"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-20 pb-16 overflow-hidden">
      {/* Spotlight glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(74,122,42,0.12), transparent)",
        }}
      />

      <div className="relative w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-center">

          {/* Left: Editorial content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
              className="font-mono text-[10px] text-white/30 tracking-[0.16em] uppercase mb-8"
            >
              Talent Engineer ·{" "}
              <span className="text-[#8aad5a]/60">Valence · Series B</span>
              {" "}· Toronto
            </motion.p>

            <div className="mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
                className="font-serif text-[56px] md:text-[68px] lg:text-[76px] leading-[1.04] tracking-[-0.01em] text-white"
              >
                I don&apos;t just hire
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.25, ease: "easeOut" }}
                className="font-serif text-[56px] md:text-[68px] lg:text-[76px] leading-[1.04] tracking-[-0.01em] text-white"
              >
                AI builders.
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.35, ease: "easeOut" }}
                className="font-serif text-[56px] md:text-[68px] lg:text-[76px] leading-[1.04] tracking-[-0.01em] text-[#8aad5a] italic"
              >
                I am one.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
              className="text-[15px] text-white/45 leading-[1.85] max-w-[420px] mb-9"
            >
              Building Scout — an autonomous sourcing agent that finds, scores,
              and surfaces engineers 24/7. Most recruiters use AI tools. I build
              them.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
              className="flex items-center gap-4 flex-wrap"
            >
              <a
                href="https://linkedin.com/in/john-duong-x"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#111] text-[13px] font-medium rounded-full hover:bg-white/88 transition-colors"
              >
                View profile
                <span className="text-[#111]/40">↗</span>
              </a>
              <a
                href="mailto:johnle_10@hotmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/12 text-white/55 text-[13px] rounded-full hover:text-white/80 hover:border-white/25 transition-colors"
              >
                Get in touch
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
              className="flex items-center gap-0 mt-12 pt-8 border-t border-white/[0.06]"
            >
              {STATS.map((stat, i) => (
                <div key={i} className="flex items-stretch">
                  <div className="flex flex-col gap-1 pr-7">
                    <div className="text-[22px] font-bold text-white leading-none tabular-nums">
                      <NumberTicker value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="font-mono text-[10px] text-white/25 tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                  {i < STATS.length - 1 && (
                    <div className="w-px bg-white/8 self-stretch mr-7" />
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
  return (
    <div className="relative rounded-xl border border-white/8 bg-[#0d0d0b] overflow-hidden">
      <BorderBeam duration={7} />

      {/* Card header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full bg-[#8aad5a]"
            style={{ animation: "blink 2.4s ease-in-out infinite" }}
          />
          <span className="font-mono text-[11px] text-white/50 uppercase tracking-wider">
            Scout
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white/8" />
          <span className="w-2 h-2 rounded-full bg-white/8" />
          <span className="w-2 h-2 rounded-full bg-white/8" />
        </div>
      </div>

      {/* Terminal */}
      <div className="p-4">
        <Terminal />
      </div>

      {/* Card footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-white/5">
        <div className="flex items-center gap-1.5 flex-wrap">
          {STACK_TAGS.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[9px] text-white/30 bg-white/4 border border-white/6 px-2 py-0.5 rounded"
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
    </div>
  );
}
