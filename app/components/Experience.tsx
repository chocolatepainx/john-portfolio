"use client";

import { useEffect, useRef } from "react";

interface ExperienceItem {
  date: string;
  company: string;
  role: string;
  location: string;
  desc: string;
  chips: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    date: "Mar 2026 → Present",
    company: "Valence · Series B",
    role: "Founding Technical Recruiter",
    location: "New York",
    desc: "Building the team behind the system of record for human performance. Raising the bar for TA in the AI era. Building Scout in parallel.",
    chips: ["AI-native TA", "Scout", "0→1", "Ashby"],
  },
  {
    date: "Jul 2025 → Mar 2026",
    company: "Prospects+ · VC-backed",
    role: "Builder",
    location: "NYC/SF/Toronto",
    desc: "VC-backed founders across AI Health, Finance, Coaching, EdTech. Seed through Pre-IPO. Built the pipelines that became Scout.",
    chips: ["Seed→Pre-IPO", "AI sector", "Automation"],
  },
  {
    date: "Jan 2025 → Jul 2025",
    company: "Siena AI · Founding",
    role: "Founding Recruiter",
    location: "AI Customer Experience",
    desc: "First recruiter in. Deep AI adoption — Perplexity, Juicebox, Claude, Cursor. Built first recruiting workflow agent with Zapier + Gumloop.",
    chips: ["Claude", "Juicebox", "Gumloop", "Cursor"],
  },
  {
    date: "Aug 2023 → Jan 2025",
    company: "Cresta · Conversational AI",
    role: "Founding Recruiter",
    location: "Remote · Global",
    desc: "Recruiter #1. Hired for LLM, RAG, AI Agent, Infrastructure teams globally. Led AI events in Toronto. Campus at Waterloo + U of T.",
    chips: ["LLM", "RAG", "AI Agents", "Campus", "Global"],
  },
  {
    date: "2019 → 2023",
    company: "Fintech · Scale",
    role: "Senior Technical Recruiter",
    location: "Juniper Square · Wealthsimple · Terminal",
    desc: "Scaled Wealthsimple 200→400 engineers, 87% offer acceptance. 45+ hires at Juniper Square. TA Partner at Terminal for CTOs at Chime, Rippling, Nextdoor.",
    chips: ["200→400 eng", "87% acceptance", "CTO support"],
  },
  {
    date: "2014 → 2019",
    company: "Agency · Independent",
    role: "Agency Founder · Founding TA",
    location: "FreshBooks · Workbridge · Campbell North",
    desc: "Employee #7 Workbridge Toronto, #2 Campbell North. Founded own agency 1.5 years. Placed at Two Sigma, Citadel, D.E. Shaw, Palantir, Amazon Ads. 60+ hires.",
    chips: ["Hedge funds", "60+ hires", "Founder"],
  },
];

function ExperienceRow({ item }: { item: ExperienceItem }) {
  const ref = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="scroll-fade-up"
      style={{
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        gap: "2rem",
        padding: "1.75rem 0",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      {/* Left: date */}
      <div>
        <div
          style={{
            fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
            fontSize: "11px",
            color: "#333",
            lineHeight: 1.6,
            marginBottom: "0.5rem",
          }}
        >
          {item.date}
        </div>
        <span
          style={{
            display: "inline-block",
            background: "rgba(74,122,42,0.15)",
            color: "#8aad5a",
            fontSize: "11px",
            fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
            padding: "2px 8px",
            borderRadius: "6px",
          }}
        >
          {item.company}
        </span>
      </div>

      {/* Right: content */}
      <div>
        <div style={{ marginBottom: "0.4rem" }}>
          <span style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
            {item.role}
          </span>
          <span
            style={{ fontSize: "12px", color: "#444", marginLeft: "0.5rem" }}
          >
            · {item.location}
          </span>
        </div>
        <p
          style={{
            fontSize: "13px",
            color: "#555",
            margin: "0 0 0.75rem 0",
            lineHeight: 1.75,
          }}
        >
          {item.desc}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
          {item.chips.map((chip) => (
            <span
              key={chip}
              style={{
                fontSize: "11px",
                color: "#444",
                background: "rgba(255,255,255,0.04)",
                padding: "2px 8px",
                borderRadius: "4px",
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
        {EXPERIENCES.map((item) => (
          <ExperienceRow key={item.company + item.date} item={item} />
        ))}
      </div>
    </section>
  );
}
