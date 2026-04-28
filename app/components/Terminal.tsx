"use client";
import { useState, useEffect } from "react";

type TerminalLine =
  | { type: "command"; text: string }
  | { type: "kv"; key: string; value: string }
  | { type: "string"; text: string }
  | { type: "done"; text: string };

const LINES: TerminalLine[] = [
  { type: "command", text: "$ scout run --role 'Senior AI Engineer'" },
  { type: "kv", key: "→ sourcing  ", value: "pearch.search(role, signals=True)" },
  { type: "kv", key: "→ scoring   ", value: "rubric.evaluate(42 profiles)" },
  { type: "string", text: "→ surfaced  10 candidates → #talent-pipeline" },
  { type: "kv", key: "→ learning  ", value: "feedback.apply(reactions)" },
  { type: "done", text: "✓ done · next run in 6h" },
];

export default function Terminal() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleCount((prev) => {
          if (prev >= LINES.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 420);
      return () => clearInterval(interval);
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-[#0a0a08] rounded-lg p-3.5 font-mono text-[11px] leading-[1.85] min-h-[120px]">
      {LINES.slice(0, visibleCount).map((line, i) => (
        <div key={i} className="flex whitespace-pre animate-line-in">
          {line.type === "command" && (
            <span className="text-white/80">{line.text}</span>
          )}
          {line.type === "kv" && (
            <>
              <span style={{ color: "#8aad5a" }}>{line.key}</span>
              <span className="text-white/20">{line.value}</span>
            </>
          )}
          {line.type === "string" && (
            <span style={{ color: "rgba(138,173,90,0.7)" }}>{line.text}</span>
          )}
          {line.type === "done" && (
            <span className="text-green-400/70">
              {line.text}
              {i === visibleCount - 1 && (
                <span className="animate-blink text-green-400/50"> ▋</span>
              )}
            </span>
          )}
        </div>
      ))}
      {visibleCount === 0 && (
        <span className="animate-blink text-white/15">▋</span>
      )}
    </div>
  );
}
