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
    const initialTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleCount((prev) => {
          if (prev >= LINES.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 400);
      return () => clearInterval(interval);
    }, 1500);

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <div
      style={{
        background: "#0a0a08",
        borderRadius: "8px",
        padding: "1rem",
        fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
        fontSize: "11px",
        lineHeight: "1.8",
        minHeight: "120px",
      }}
    >
      {LINES.slice(0, visibleCount).map((line, i) => (
        <div
          key={i}
          className="animate-line-in"
          style={{ display: "flex", whiteSpace: "pre" }}
        >
          {line.type === "command" && (
            <span style={{ color: "#ffffff" }}>{line.text}</span>
          )}
          {line.type === "kv" && (
            <>
              <span style={{ color: "#8aad5a" }}>{line.key}</span>
              <span style={{ color: "#444444" }}>{line.value}</span>
            </>
          )}
          {line.type === "string" && (
            <span style={{ color: "#c8e89a" }}>{line.text}</span>
          )}
          {line.type === "done" && (
            <span style={{ color: "#4ade80" }}>
              {line.text}{" "}
              {i === visibleCount - 1 && (
                <span className="animate-blink" style={{ color: "#4ade80" }}>
                  ▋
                </span>
              )}
            </span>
          )}
        </div>
      ))}
      {visibleCount === 0 && (
        <span
          className="animate-blink"
          style={{ color: "#333", fontSize: "11px" }}
        >
          ▋
        </span>
      )}
    </div>
  );
}
