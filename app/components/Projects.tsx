"use client";

import { useEffect, useRef, useState } from "react";
import Terminal from "./Terminal";

type Status = "live" | "coming-soon" | "in-progress" | "shipped";

interface Project {
  name: string;
  desc: string;
  tags: string[];
  status: Status;
  isOpenSource?: boolean;
}

const SCOUT: Project = {
  name: "Scout",
  desc: "Sources via Pearch, scores against a dimensional rubric, surfaces top profiles in Slack, learns from emoji reactions. Runs 24/7 — top-of-funnel on autopilot.",
  tags: ["Python", "Claude Opus 4.6", "Pearch", "Slack Bolt", "GitHub Actions", "Flask"],
  status: "live",
  isOpenSource: true,
};

const PROJECTS: Project[] = [
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

const STATUS_CONFIG: Record<Status, { bg: string; color: string; label: string; borderColor: string }> = {
  live:           { bg: "rgba(74,122,42,0.15)",    color: "#8aad5a",  label: "Live",        borderColor: "#4a7a2a" },
  "coming-soon":  { bg: "rgba(250,200,0,0.1)",     color: "#8a7000",  label: "Coming soon", borderColor: "#b8920a" },
  "in-progress":  { bg: "rgba(255,255,255,0.05)",  color: "#555555",  label: "In progress", borderColor: "#333333" },
  shipped:        { bg: "rgba(100,120,255,0.1)",   color: "#6070d0",  label: "Shipped",     borderColor: "#4060c0" },
};

function StatusBadge({ status, isOpenSource }: { status: Status; isOpenSource?: boolean }) {
  const { bg, color, label } = STATUS_CONFIG[status];
  return (
    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
      <span style={{
        background: bg, color,
        fontSize: "11px",
        fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
        padding: "3px 8px", borderRadius: "6px", whiteSpace: "nowrap",
      }}>
        {label}
      </span>
      {isOpenSource && (
        <span style={{
          background: "rgba(74,122,42,0.15)", color: "#8aad5a",
          fontSize: "11px",
          fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
          padding: "3px 8px", borderRadius: "6px",
        }}>
          Open Source
        </span>
      )}
    </div>
  );
}

function TagPills({ tags }: { tags: string[] }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
      {tags.map((tag) => (
        <span key={tag} style={{
          fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
          fontSize: "10px", color: "#444",
          background: "rgba(255,255,255,0.04)",
          padding: "2px 7px", borderRadius: "4px",
        }}>
          {tag}
        </span>
      ))}
    </div>
  );
}

/* ── Featured Scout card (full-width, left text + right terminal) ── */
function FeaturedCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("in-view"); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { borderColor } = STATUS_CONFIG["live"];

  return (
    <div
      ref={ref}
      className="scroll-fade-up featured-card-grid"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#1a1a18",
        border: `1px solid ${hovered ? "rgba(74,122,42,0.45)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "14px",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? "0 8px 32px rgba(74,122,42,0.08)" : "none",
      }}
    >
      {/* Colored top bar spans full width */}
      <div style={{
        gridColumn: "1 / -1",
        height: "2px",
        background: `linear-gradient(to right, ${borderColor}, transparent)`,
      }} />

      {/* Left: text content */}
      <div className="featured-card-left" style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        borderRight: "1px solid rgba(255,255,255,0.06)",
      }}>
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <StatusBadge status="live" isOpenSource />
          <span style={{
            fontSize: "16px", color: hovered ? "#8aad5a" : "#333",
            transition: "color 0.2s", lineHeight: 1,
          }}>↗</span>
        </div>

        {/* Name */}
        <div>
          <h3 style={{
            fontSize: "1.4rem", fontWeight: 800, color: "#ffffff",
            letterSpacing: "-0.03em", lineHeight: 1.1, margin: 0,
          }}>
            Scout
          </h3>
          <p style={{
            fontSize: "13px", color: "#555", margin: "0.6rem 0 0 0",
            lineHeight: 1.7,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}>
            {SCOUT.desc}
          </p>
        </div>

        {/* Tags pinned to bottom */}
        <div style={{ marginTop: "auto" }}>
          <TagPills tags={SCOUT.tags} />
        </div>
      </div>

      {/* Right: terminal */}
      <div style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#0f0f0d",
      }}>
        <div style={{
          display: "flex", alignItems: "center", gap: "6px",
          marginBottom: "0.75rem",
        }}>
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#fff" }}>Scout</span>
          <div style={{
            display: "flex", alignItems: "center", gap: "4px",
            background: "rgba(74,122,42,0.15)", borderRadius: "10px",
            padding: "2px 7px",
          }}>
            <span className="animate-pulse-dot" style={{
              display: "inline-block", width: "5px", height: "5px",
              borderRadius: "50%", background: "#4a7a2a",
            }} />
            <span style={{
              fontSize: "10px", color: "#8aad5a",
              fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
            }}>running</span>
          </div>
        </div>
        <Terminal />
      </div>
    </div>
  );
}

/* ── Regular project card ── */
function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("in-view"); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { borderColor } = STATUS_CONFIG[project.status];

  return (
    <div
      ref={ref}
      className="scroll-fade-up"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#1a1a18",
        border: `1px solid ${hovered
          ? STATUS_CONFIG[project.status].borderColor + "66"
          : "rgba(255,255,255,0.07)"}`,
        borderRadius: "14px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? `0 8px 28px ${borderColor}14` : "none",
      }}
    >
      {/* Colored top border strip */}
      <div style={{
        height: "2px",
        background: `linear-gradient(to right, ${borderColor}, transparent)`,
        flexShrink: 0,
      }} />

      <div style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.85rem",
        flexGrow: 1,
      }}>
        {/* Badge + arrow row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <StatusBadge status={project.status} />
          <span style={{
            fontSize: "15px", color: hovered ? "#8aad5a" : "#333",
            transition: "color 0.2s", lineHeight: 1, flexShrink: 0,
          }}>↗</span>
        </div>

        {/* Name + desc */}
        <div style={{ flexGrow: 1 }}>
          <h3 style={{
            fontSize: "1rem", fontWeight: 700, color: "#ffffff",
            letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 0.5rem 0",
          }}>
            {project.name}
          </h3>
          <p style={{
            fontSize: "12px", color: "#555", margin: 0,
            lineHeight: 1.7,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}>
            {project.desc}
          </p>
        </div>

        {/* Tags pinned to bottom */}
        <div style={{ marginTop: "auto" }}>
          <TagPills tags={project.tags} />
        </div>
      </div>
    </div>
  );
}

/* ── Section ── */
export default function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
      style={{
        background: "#111111",
        padding: "4rem 2.5rem",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Label */}
        <div style={{
          fontFamily: "var(--font-dm-mono), 'DM Mono', monospace",
          fontSize: "11px", color: "#333",
          textTransform: "uppercase", letterSpacing: "0.1em",
          marginBottom: "1.5rem",
        }}>
          Projects
        </div>

        {/* Featured Scout card */}
        <div style={{ marginBottom: "16px" }}>
          <FeaturedCard />
        </div>

        {/* 2-column grid for remaining cards */}
        <div className="projects-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
        }}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
