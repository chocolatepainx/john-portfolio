"use client";
import { useState, useEffect, useRef } from "react";

type Line = { text: string; dim?: boolean; color?: "amber" | "green"; pause?: boolean };

const LINES: Line[] = [
  { text: "run  scout-2847  ·  senior ai eng",   dim: true },
  { text: "source  →  pearch  (142 profiles)",    dim: true },
  { text: "──────────────────────────────────",   dim: true },
  { text: "eval   Yuki T.  ·  Staff ML Eng",      pause: true },
  { text: "  ✓  llm infra experience" },
  { text: "  ✓  systems design" },
  { text: "  ✓  open-source contributor" },
  { text: "  score: 94  ████████░░  surfacing ↑", color: "amber" },
  { text: "──────────────────────────────────",   dim: true },
  { text: "eval   Marcus W.  ·  Sr AI Eng",       pause: true },
  { text: "  ✓  fine-tuning pipelines" },
  { text: "  ✓  inference stack" },
  { text: "  –  mgmt exp (skip)",                 dim: true },
  { text: "  score: 89  ███████░░░  surfacing ↑", color: "amber" },
  { text: "──────────────────────────────────",   dim: true },
  { text: "eval   Priya S.  ·  ML Platform",      pause: true },
  { text: "  ✓  distributed training" },
  { text: "  –  no llm exp (partial)",            dim: true },
  { text: "  score: 82  ██████░░░░  surfacing ↑", color: "amber" },
  { text: "──────────────────────────────────",   dim: true },
  { text: "done  ·  3 surfaced  ·  next: 6h",     color: "green" },
];

const sleep = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

function lineClass(line: Line) {
  if (line.color === "amber") return "text-[#D4A84B]";
  if (line.color === "green") return "text-[#5A8430]";
  if (line.dim) return "text-white/20";
  return "text-white/50";
}

export default function ThinkingStream() {
  const [done, setDone] = useState<Line[]>([]);
  const [typing, setTyping] = useState("");
  const [typingLine, setTypingLine] = useState<Line | null>(null);
  const [thinking, setThinking] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cancel = useRef(false);

  const scroll = () => {
    if (containerRef.current)
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
  };

  useEffect(() => {
    cancel.current = false;

    const run = async () => {
      setDone([]);
      setTyping("");
      setTypingLine(null);
      setThinking(false);

      for (const line of LINES) {
        if (cancel.current) return;

        if (line.pause) {
          setThinking(true);
          await sleep(650);
          if (cancel.current) return;
          setThinking(false);
        }

        setTypingLine(line);
        const speed = line.dim ? 8 : line.color ? 16 : 20;

        for (let j = 1; j <= line.text.length; j++) {
          if (cancel.current) return;
          setTyping(line.text.slice(0, j));
          scroll();
          await sleep(speed);
        }

        if (cancel.current) return;
        setDone((prev) => [...prev, line]);
        setTyping("");
        setTypingLine(null);
        await sleep(40);
      }

      await sleep(3200);
      if (!cancel.current) run();
    };

    run();
    return () => { cancel.current = true; };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[172px] overflow-hidden font-mono text-[9px] leading-[1.8] select-none"
    >
      {done.map((line, i) => (
        <div key={i} className={lineClass(line)}>
          {line.text}
        </div>
      ))}

      {/* Thinking dots */}
      {thinking && (
        <div className="text-white/20">···</div>
      )}

      {/* Currently typing line */}
      {typingLine && typing && (
        <div className={lineClass(typingLine)}>
          {typing}
          <span className="animate-blink text-white/25">▋</span>
        </div>
      )}
    </div>
  );
}
