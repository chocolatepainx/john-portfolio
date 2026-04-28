"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

type StepType = "source" | "score" | "candidate" | "surface" | "next";

interface Step {
  symbol: string;
  label: string;
  detail: string;
  badge: string;
  type: StepType;
}

const STEPS: Step[] = [
  { symbol: "◈", label: "SOURCE",    detail: "pearch · senior ai eng",    badge: "142",    type: "source" },
  { symbol: "◎", label: "SCORE",     detail: "evaluate( 42 profiles )",   badge: "38 pass", type: "score" },
  { symbol: "◉", label: "CANDIDATE", detail: "Yuki T.  ·  Staff ML Eng",  badge: "94",     type: "candidate" },
  { symbol: "↑", label: "SURFACE",   detail: "#talent-pipeline",           badge: "×10",    type: "surface" },
  { symbol: "◷", label: "NEXT RUN",  detail: "",                           badge: "6h 14m", type: "next" },
];

const SYMBOL_COLOR: Record<StepType, string> = {
  source:    "text-[#5A8430]",
  score:     "text-[#7B9FD4]",
  candidate: "text-[#D4A84B]",
  surface:   "text-[#5A8430]",
  next:      "text-white/20",
};

const BADGE_STYLE: Record<StepType, string> = {
  source:    "text-[#5A8430]/80 bg-[rgba(61,107,26,0.12)] border-[rgba(61,107,26,0.2)]",
  score:     "text-[#7B9FD4]/80 bg-[rgba(123,159,212,0.1)] border-[rgba(123,159,212,0.2)]",
  candidate: "text-[#D4A84B]   bg-[rgba(212,168,75,0.15)] border-[rgba(212,168,75,0.3)]",
  surface:   "text-[#5A8430]/80 bg-[rgba(61,107,26,0.12)] border-[rgba(61,107,26,0.2)]",
  next:      "text-white/25    bg-white/[0.04]             border-white/[0.08]",
};

export default function AgentFeed() {
  const [visibleCount, setVisibleCount] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const run = () => {
      setVisibleCount(0);
      timeoutRef.current = setTimeout(() => {
        intervalRef.current = setInterval(() => {
          setVisibleCount((prev) => {
            if (prev >= STEPS.length) {
              if (intervalRef.current) clearInterval(intervalRef.current);
              timeoutRef.current = setTimeout(run, 3500);
              return prev;
            }
            return prev + 1;
          });
        }, 620);
      }, 800);
    };

    run();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="space-y-1.5">
      {STEPS.slice(0, visibleCount).map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg ${
            step.type === "candidate"
              ? "bg-[rgba(212,168,75,0.06)] border border-[rgba(212,168,75,0.18)]"
              : "bg-white/[0.03] border border-transparent"
          }`}
        >
          {/* Symbol */}
          <span className={`font-mono text-[12px] w-4 text-center flex-shrink-0 ${SYMBOL_COLOR[step.type]}`}>
            {step.symbol}
          </span>

          {/* Label */}
          <span className="font-mono text-[9px] tracking-[0.1em] text-white/25 uppercase w-[54px] flex-shrink-0">
            {step.label}
          </span>

          {/* Detail */}
          <span className="font-mono text-[10px] text-white/35 flex-1 truncate">
            {step.detail}
          </span>

          {/* Badge */}
          <span className={`font-mono text-[9px] px-2 py-0.5 rounded border flex-shrink-0 ${BADGE_STYLE[step.type]}`}>
            {step.badge}
          </span>

          {/* Status */}
          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
            i === visibleCount - 1 && visibleCount < STEPS.length
              ? "bg-[#5A8430]"
              : step.type === "next"
              ? "bg-white/10"
              : "bg-[#3D6B1A]/50"
          }`}
          style={i === visibleCount - 1 && visibleCount < STEPS.length
            ? { animation: "blink 1s ease-in-out infinite" }
            : undefined}
          />
        </motion.div>
      ))}

      {visibleCount === 0 && (
        <div className="px-3 py-3">
          <span className="animate-blink text-white/15 font-mono text-sm">▋</span>
        </div>
      )}
    </div>
  );
}
