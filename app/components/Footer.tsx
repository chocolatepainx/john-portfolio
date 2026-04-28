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
    <footer className="border-t border-[#E8E3D6] px-6 md:px-10 py-6 flex items-center justify-between flex-wrap gap-3">
      <span className="font-mono text-[11px] text-[#BDB9B1]">
        John Duong · Talent Engineer · Toronto · 2026
      </span>
      <div className="flex items-center gap-2 font-mono text-[10px]">
        <span
          className="w-1.5 h-1.5 rounded-full bg-[#3D6B1A]"
          style={{ animation: "blink 2.4s ease-in-out infinite" }}
        />
        <span className="text-[#3D6B1A]/70">Scout running</span>
        {time && (
          <span className="text-[#BDB9B1] tabular-nums">{time}</span>
        )}
      </div>
    </footer>
  );
}
