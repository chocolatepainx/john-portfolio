"use client";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import MarqueeSection from "./components/Marquee";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Spotlight() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      style={{
        background: `radial-gradient(500px at ${pos.x}px ${pos.y}px, rgba(74,122,42,0.04), transparent 75%)`,
      }}
    />
  );
}

export default function Home() {
  return (
    <main className="bg-[#111111] min-h-screen">
      <Spotlight />
      <Nav />
      <Hero />
      <MarqueeSection />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
