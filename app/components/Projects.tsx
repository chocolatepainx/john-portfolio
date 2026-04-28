"use client";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";

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

const STATUS_CONFIG: Record<Status, { label: string; className: string }> = {
  live: {
    label: "Live",
    className: "bg-[rgba(74,122,42,0.12)] text-[#8aad5a] border border-[rgba(138,173,90,0.2)]",
  },
  "coming-soon": {
    label: "Soon",
    className: "bg-[rgba(250,200,0,0.07)] text-[#7a6a00] border border-[rgba(250,200,0,0.15)]",
  },
  "in-progress": {
    label: "In progress",
    className: "bg-white/4 text-white/30 border border-white/8",
  },
  shipped: {
    label: "Shipped",
    className: "bg-[rgba(100,120,255,0.08)] text-[#5060b0] border border-[rgba(100,120,255,0.2)]",
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const { label, className } = STATUS_CONFIG[project.status];

  return (
    <motion.div
      variants={rowVariants}
      className="group grid grid-cols-[28px_1fr_auto] gap-4 md:gap-6 py-7 border-b border-white/[0.06] cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Index */}
      <span className="font-mono text-[11px] text-white/15 pt-[3px] tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Content */}
      <div>
        <div className="flex items-center gap-2.5 mb-2 flex-wrap">
          <span
            className="text-[15px] font-semibold transition-colors duration-200"
            style={{ color: hovered ? "#8aad5a" : "#ffffff" }}
          >
            {project.name}
          </span>
          <span
            className={`font-mono text-[9px] px-2 py-0.5 rounded-full ${className}`}
          >
            {label}
          </span>
          {project.isOpenSource && (
            <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-[rgba(74,122,42,0.08)] text-[#8aad5a]/60 border border-[rgba(138,173,90,0.15)]">
              Open Source
            </span>
          )}
        </div>
        <p className="text-[13px] text-white/35 leading-[1.75] max-w-[620px] mb-3">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[9px] text-white/22 bg-white/[0.035] border border-white/[0.06] px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <motion.span
        className="text-sm pt-0.5 text-white/20"
        animate={{ x: hovered ? 3 : 0, color: hovered ? "#8aad5a" : "rgba(255,255,255,0.2)" }}
        transition={{ duration: 0.15 }}
      >
        →
      </motion.span>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="px-6 md:px-10 py-20 md:py-28 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="font-mono text-[10px] text-white/20 tracking-[0.12em] uppercase mb-2">
            Selected
          </p>
          <h2 className="text-[28px] md:text-[36px] font-semibold tracking-tight text-white leading-none">
            Work
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        >
          {PROJECTS.map((project, i) => (
            <ProjectRow key={project.name} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
