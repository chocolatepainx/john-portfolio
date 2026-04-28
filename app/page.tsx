"use client";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import MarqueeSection from "./components/Marquee";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#FAFAF7] min-h-screen">
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
