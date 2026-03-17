"use client";

import { useEffect, useRef, useState } from "react";

interface ExperienceItem {
  date: string;
  company: string;
  role: string;
  chips: string[];
  isCurrent?: boolean;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    date: "Mar 2026 → Present",
    company: "Valence · Series B",
    role: "Founding Technical Recruiter",
    chips: ["AI-native TA", "Scout", "0→1", "Ashby"],
    isCurrent: true,
  },
  {
    date: "Jul 2025 → Mar 2026",
    company: "Prospects+ · VC-backed",
    role: "Builder",
    chips: ["Seed→Pre-IPO", "AI sector", "Automation"],
  },
  {
    date: "Jan 2025 → Jul 2025",
    company: "Siena AI · Founding",
    role: "Founding Recruiter",
    chips: ["Claude", "Juicebox", "Gumloop", "Cursor"],
  },
  {
    date: "Aug 2023 → Jan 2025",
    company: "Cresta · Conversational AI",
    role: "Founding Recruiter",
    chips: ["LLM", "RAG", "AI Agents", "Campus", "Global"],
  },
  {
    date: "2019 → 2023",
    company: "Fintech · Scale",
    role: "Senior Technical Recruiter",
    chips: ["200→400 eng", "87% acceptance", "CTO support"],
  },
  {
    date: "2014 → 2019",
    company: "Agency · Independent",
    role: "Agency Founder · Founding TA",
    chips: ["Hedge funds", "60+ hires", "Founder"],
  },
];

function ExperienceRow({ item, isLast }: { item: ExperienceItem; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="scroll-fade-up"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "160px 1fr",
        gap: "2.5rem",
        padding: "2.25rem 0 2.25rem 1.25rem",
        borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.04)",
        borderLeft: `2px solid ${hovered ? "#4a7a2a" : item.isCurrent ? "rgba(74,122,42,0.35)" : "transparent"}`,
        transition: "border-left-color 0.2s ease, opacity 0.5s ease, transform 0.5s ease",
        cursor: "default",
        background: item.isCurrent && !hovered
          ? "linear-gradient(to right, rgba(74,122,42,0.03), transparent)"
          : hovered
          ? "linear-gradient(to right, rgba(74,122,42,0.05), transparent)"
          : "transparent",
      }}
    >
      {/* Left: date */}
      <div style={{ paddingTop: "3px" }}>
        <div
          style={{
            fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
            fontSize: "11px",
            color: "#333",
            lineHeight: 1.5,
            letterSpacing: "0.01em",
          }}
        >
          {item.date}
        </div>
      </div>

      {/* Right: company + role + chips */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {/* Company pill — visual anchor */}
        <div>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: item.isCurrent ? "6px" : undefined,
              background: item.isCurrent
                ? "rgba(74,122,42,0.18)"
                : "rgba(255,255,255,0.05)",
              color: item.isCurrent ? "#8aad5a" : "#666",
              fontSize: "12px",
              fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
              fontWeight: 500,
              padding: "4px 10px",
              borderRadius: "8px",
              letterSpacing: "0.01em",
              boxShadow: item.isCurrent
                ? "0 0 0 1px rgba(74,122,42,0.2)"
                : "none",
            }}
          >
            {item.isCurrent && (
              <span
                className="animate-pulse-dot"
                style={{
                  display: "inline-block",
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "#4a7a2a",
                  flexShrink: 0,
                }}
              />
            )}
            {item.company}
          </span>
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
        >
          {item.role}
        </div>

        {/* Chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
          {item.chips.map((chip) => (
            <span
              key={chip}
              style={{
                fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
                fontSize: "10px",
                color: "#3a3a3a",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                padding: "2px 7px",
                borderRadius: "4px",
                letterSpacing: "0.01em",
              }}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "4rem 2.5rem",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div
          style={{
            fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
            fontSize: "11px",
            color: "#333",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "0.5rem",
          }}
        >
          Experience
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          {EXPERIENCES.map((item, i) => (
            <ExperienceRow
              key={item.company + item.date}
              item={item}
              isLast={i === EXPERIENCES.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
