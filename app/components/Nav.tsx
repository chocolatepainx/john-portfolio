"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 h-14 flex items-center px-6 md:px-10 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-[#111111]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between">
        <a
          href="/"
          className="text-sm font-medium text-white/90 hover:text-white transition-colors tracking-tight"
        >
          John Duong
        </a>

        <nav className="flex items-center gap-5">
          <a
            href="#work"
            className="hidden md:block text-xs text-white/35 hover:text-white/70 transition-colors"
          >
            Work
          </a>
          <a
            href="#experience"
            className="hidden md:block text-xs text-white/35 hover:text-white/70 transition-colors"
          >
            Experience
          </a>
          <a
            href="https://linkedin.com/in/john-duong-x"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-xs text-white/35 hover:text-white/70 transition-colors"
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
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/8 bg-white/[0.02]">
      <span
        className="w-1.5 h-1.5 rounded-full bg-[#8aad5a]"
        style={{ animation: "blink 2.4s ease-in-out infinite" }}
      />
      <span className="font-mono text-[10px] text-[#8aad5a] tracking-wider uppercase">
        Scout
      </span>
      {time && (
        <span className="font-mono text-[10px] text-white/20 tabular-nums">
          {time}
        </span>
      )}
    </div>
  );
}
