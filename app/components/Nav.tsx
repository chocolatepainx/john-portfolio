"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const SECTIONS = ["work", "experience", "contact"] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 h-14 flex items-center px-6 md:px-10 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#E8E3D6] bg-[#FAFAF7]/92 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium text-[#1A1917] hover:text-[#3D6B1A] transition-colors tracking-tight"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/john-portfolio/avatar.jpg"
            alt="John Duong"
            width={22}
            height={22}
            className="rounded-full object-cover ring-1 ring-[#E8E3D6] w-[22px] h-[22px]"
          />
          John Duong
        </Link>

        <nav className="flex items-center gap-5">
          {[
            { id: "work", label: "Work" },
            { id: "experience", label: "Experience" },
            { id: "contact", label: "Contact" },
          ].map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`hidden md:block text-xs transition-colors ${
                active === id
                  ? "text-[#1A1917] font-medium"
                  : "text-[#9E9A92] hover:text-[#1A1917]"
              }`}
            >
              {label}
              {active === id && (
                <motion.span
                  layoutId="nav-dot"
                  className="ml-1.5 inline-block w-1 h-1 rounded-full bg-[#3D6B1A] align-middle"
                />
              )}
            </a>
          ))}
          <a
            href="https://linkedin.com/in/john-duong-x"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-xs text-[#9E9A92] hover:text-[#1A1917] transition-colors"
          >
            LinkedIn
          </a>
          <ScoutPill />
        </nav>
      </div>
    </motion.header>
  );
}

function ScoutPill() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3D6B1A]/20 bg-[#3D6B1A]/[0.05]">
      <span
        className="w-1.5 h-1.5 rounded-full bg-[#3D6B1A]"
        style={{ animation: "blink 2.4s ease-in-out infinite" }}
      />
      <span className="font-mono text-[10px] text-[#3D6B1A] tracking-wider uppercase">
        Scout
      </span>
      {time && (
        <span className="font-mono text-[10px] text-[#9E9A92] tabular-nums">
          {time}
        </span>
      )}
    </div>
  );
}
