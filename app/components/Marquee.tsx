"use client";

const HIGHLIGHTED = new Set([
  "Claude Opus 4.6",
  "Scout ● live",
  "Wan 2.2",
  "GitHub Actions",
  "Building since 2019",
]);

const ALL_ITEMS = [
  "Claude Opus 4.6",
  "Pearch",
  "Scout ● live",
  "Firecrawl",
  "Wan 2.2",
  "Tavily",
  "GitHub Actions",
  "Brave Search",
  "Building since 2019",
  "Qwen3 TTS",
  "ComfyUI",
  "RunPod",
  "Ashby",
  "Slack Bolt",
  "Whisperflow",
  "Juicebox AI",
  "Perplexity",
  "Cursor",
];

function MarqueeItem({ label }: { label: string }) {
  const isHighlighted = HIGHLIGHTED.has(label);
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "1.5rem",
        padding: "0 1.5rem",
        fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
        fontSize: "11px",
        color: isHighlighted ? "#4a7a2a" : "#222",
        letterSpacing: "0.04em",
        whiteSpace: "nowrap",
        userSelect: "none",
      }}
    >
      {label}
      <span style={{ color: "#1a1a1a", fontSize: "8px" }}>◆</span>
    </span>
  );
}

export default function Marquee() {
  return (
    <div
      style={{
        background: "#0a0a08",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "9px 0",
        overflow: "hidden",
      }}
      className="marquee-container"
    >
      <div
        className="animate-marquee"
        style={{
          display: "flex",
          width: "max-content",
        }}
      >
        {/* First set */}
        {ALL_ITEMS.map((item, i) => (
          <MarqueeItem key={`a-${i}`} label={item} />
        ))}
        {/* Duplicate for seamless loop */}
        {ALL_ITEMS.map((item, i) => (
          <MarqueeItem key={`b-${i}`} label={item} />
        ))}
      </div>
    </div>
  );
}
