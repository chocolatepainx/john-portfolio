"use client";

import { useEffect, useRef } from "react";

type Status = "live" | "coming-soon" | "in-progress" | "shipped";

interface Project {
  name: string;
  desc: string;
  tags: string[];
  status: Status;
  isOpenSource?: boolean;
}

const PROJECTS: Project[] = [
  {
    name: "Scout",
    desc: "Sources via Pearch, scores against a dimensional rubric, surfaces top profiles in Slack, learns from emoji reactions. Runs 24/7 — top-of-funnel on autopilot.",
    tags: ["Python", "Claude Opus 4.6", "Pearch", "Slack Bolt", "GitHub Actions", "Flask"],
    status: "live",
    isOpenSource: true,
  },
  {
    name: "Outreach Nurture Campaign",
    desc: "AI-powered outbound layer for Scout. Personalised multi-touch drip sequences triggered autonomously from the sourcing pipeline.",
    tags: ["Claude", "Python", "Scout"],
    status: "coming-soon",
  },
  {
    name: "AI Video Outreach Pipeline",
    desc: "Personalised talking-head videos at scale. Voice cloning, LoRA fine-tuning, GPU inference. Built to own it — not rent it from HeyGen.",
    tags: ["Wan 2.2", "Qwen3 TTS", "ComfyUI", "RunPod", "Lightning LoRA"],
    status: "in-progress",
  },
  {
    name: "GitHub Sourcing + CTO Audit Rubric",
    desc: "Engineers scored 1–5 across infra ownership, complexity, collaboration, recency. Surfaces what LinkedIn flattens. Ashby integrated.",
    tags: ["GitHub API", "Claude", "Python", "Ashby"],
    status: "shipped",
  },
  {
    name: "Interview Scheduler Bot",
    desc: "Slack-based rescheduling bot. Claude-powered intent parsing, Google Calendar OAuth. Built at a Valence hackathon, live in production the next day.",
    tags: ["Slack Bolt", "Claude", "Google Calendar", "Node.js"],
    status: "shipped",
  },
];

function statusBadge(status: Status, isOpenSource?: boolean) {
  const configs: Record<Status, { bg: string; color: string; label: string }> = {
    live: { bg: "rgba(74,122,42,0.15)", color: "#8aad5a", label: "Live" },
    "coming-soon": { bg: "rgba(250,200,0,0.1)", color: "#8a7000", label: "Coming soon" },
    "in-progress": { bg: "rgba(255,255,255,0.05)", color: "#555", label: "In progress" },
    shipped: { bg: "rgba(100,120,255,0.1)", color: "#6070d0", label: "Shipped" },
  };
  const { bg, color, label } = configs[status];
  return (
    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
      <span
        style={{
          background: bg,
          color,
          fontSize: "11px",
          fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
          padding: "3px 8px",
          borderRadius: "6px",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      {isOpenSource && (
        <span
          style={{
            background: "rgba(74,122,42,0.15)",
            color: "#8aad5a",
            fontSize: "11px",
            fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
            padding: "3px 8px",
            borderRadius: "6px",
          }}
        >
          Open Source
        </span>
      )}
    </div>
  );
}

function ProjectRow({ project }: { project: Project }) {
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
        gridTemplateColumns: "1fr auto",
        gap: "2rem",
        padding: "1.75rem 0",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        alignItems: "start",
        cursor: "default",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
      onMouseEnter={(e) => {
        const arrow = e.currentTarget.querySelector<HTMLElement>(".proj-arrow");
        if (arrow) arrow.style.color = "#8aad5a";
      }}
      onMouseLeave={(e) => {
        const arrow = e.currentTarget.querySelector<HTMLElement>(".proj-arrow");
        if (arrow) arrow.style.color = "#333";
      }}
    >
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.4rem" }}>
          <span style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>
            {project.name}
          </span>
          {statusBadge(project.status, project.isOpenSource)}
        </div>
        <p
          style={{
            fontSize: "13px",
            color: "#555",
            margin: "0 0 0.75rem 0",
            lineHeight: 1.65,
            maxWidth: "680px",
          }}
        >
          {project.desc}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
                fontSize: "10px",
                color: "#444",
                background: "rgba(255,255,255,0.04)",
                padding: "2px 7px",
                borderRadius: "4px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <span
        className="proj-arrow"
        style={{
          fontSize: "16px",
          color: "#333",
          transition: "color 0.2s",
          paddingTop: "2px",
        }}
      >
        →
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        background: "#111111",
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
          Projects
        </div>
        {PROJECTS.map((project) => (
          <ProjectRow key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
