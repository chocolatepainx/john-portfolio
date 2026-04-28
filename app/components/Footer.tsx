"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="border-t border-white/[0.05] px-6 md:px-10 py-6 flex items-center justify-between flex-wrap gap-3">
      <span className="font-mono text-[11px] text-white/18">
        John Duong · Talent Engineer · Toronto · 2026
      </span>
      <div className="flex items-center gap-2 font-mono text-[10px]">
        <span
          className="w-1.5 h-1.5 rounded-full bg-[#8aad5a]"
          style={{ animation: "blink 2.4s ease-in-out infinite" }}
        />
        <span className="text-[#8aad5a]/60">Scout running</span>
        {time && (
          <span className="text-white/15 tabular-nums">{time}</span>
        )}
      </div>
    </footer>
  );
}
