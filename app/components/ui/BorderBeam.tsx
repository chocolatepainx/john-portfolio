"use client";

interface BorderBeamProps {
  duration?: number;
  className?: string;
}

export function BorderBeam({ duration = 6, className = "" }: BorderBeamProps) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 rounded-[inherit] pointer-events-none ${className}`}
      style={{
        padding: "1px",
        background: `conic-gradient(
          from var(--beam-angle),
          transparent 0%,
          transparent 65%,
          rgba(138, 173, 90, 0.5) 75%,
          rgba(138, 173, 90, 0.7) 80%,
          rgba(138, 173, 90, 0.5) 85%,
          transparent 90%
        )`,
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        maskComposite: "exclude",
        animation: `border-beam ${duration}s linear infinite`,
      }}
    />
  );
}
