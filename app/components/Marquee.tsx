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

export default function MarqueeSection() {
  return (
    <div className="border-y border-white/[0.05] bg-[#0a0a08] py-2.5 overflow-hidden marquee-container">
      <div className="flex w-max animate-marquee">
        {[...ALL_ITEMS, ...ALL_ITEMS].map((item, i) => {
          const highlighted = HIGHLIGHTED.has(item);
          return (
            <span
              key={i}
              className="inline-flex items-center gap-5 px-5 font-mono text-[10px] tracking-[0.06em] whitespace-nowrap select-none"
              style={{ color: highlighted ? "rgba(138,173,90,0.55)" : "#1e1e1c" }}
            >
              {item}
              <span className="text-[7px]" style={{ color: "#161614" }}>
                ◆
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
