"use client";
import { motion, type Variants } from "framer-motion";

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
    company: "Prospects+",
    role: "Builder",
    location: "NYC / SF / Toronto",
    desc: "VC-backed founders across AI Health, Finance, Coaching, EdTech. Seed through Pre-IPO. Built the pipelines that became Scout.",
    chips: ["Seed→Pre-IPO", "AI sector", "Automation"],
  },
  {
    date: "Jan 2025 → Jul 2025",
    company: "Siena AI",
    role: "Founding Recruiter",
    location: "AI Customer Experience",
    desc: "First recruiter in. Deep AI adoption — Perplexity, Juicebox, Claude, Cursor. Built first recruiting workflow agent with Zapier + Gumloop.",
    chips: ["Claude", "Juicebox", "Gumloop", "Cursor"],
  },
  {
    date: "Aug 2023 → Jan 2025",
    company: "Cresta",
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

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 md:px-10 py-20 md:py-28 border-t border-[#E8E3D6] bg-[#F5F0E7]"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="font-mono text-[10px] text-[#BDB9B1] tracking-[0.12em] uppercase mb-2">
            Career
          </p>
          <h2 className="text-[28px] md:text-[36px] font-semibold tracking-tight text-[#1A1917] leading-none">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            className="hidden md:block absolute left-[179px] top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(to bottom, transparent, #E8E3D6 8%, #E8E3D6 85%, transparent)",
              transformOrigin: "top",
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        >
          {EXPERIENCES.map((item) => (
            <motion.div
              key={item.company + item.date}
              variants={rowVariants}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-8 py-7 border-b border-[#E8E3D6]/60"
            >
              {/* Left: date + company badge */}
              <div className="flex md:flex-col gap-3 md:gap-2 items-start">
                <span className="font-mono text-[10px] text-[#9E9A92] leading-relaxed whitespace-nowrap">
                  {item.date}
                </span>
                <span className="font-mono text-[9px] px-2.5 py-1 rounded-full bg-[rgba(61,107,26,0.08)] text-[#3D6B1A]/80 border border-[rgba(61,107,26,0.18)] whitespace-nowrap">
                  {item.company}
                </span>
              </div>

              {/* Right: content */}
              <div>
                <div className="flex items-baseline gap-2 mb-2 flex-wrap">
                  <span className="text-[14px] font-semibold text-[#1A1917]">
                    {item.role}
                  </span>
                  <span className="text-[11px] text-[#9E9A92]">
                    · {item.location}
                  </span>
                </div>
                <p className="text-[13px] text-[#6E6B62] leading-[1.8] mb-3 max-w-[600px]">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.chips.map((chip) => (
                    <span
                      key={chip}
                      className="text-[10px] text-[#9E9A92] bg-[#EEE9DE] border border-[#E8E3D6] px-2.5 py-0.5 rounded"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  );
}
