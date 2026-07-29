"use client";

import { useState } from "react";
import BootScreen from "@/components/BootScreen";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import WorkspacePreview from "@/components/WorkspacePreview";

const systemData = [
  ["LOCATION", "Lahore, Pakistan"],
  ["ROLE", "Business Development"],
  ["FOCUS", "Artificial Intelligence"],
  ["CURRENT MISSION", "Building Musa OS"],
];

export default function Home() {
  const [entered, setEntered] = useState(false);
  if (!entered) return <BootScreen onEnter={() => setEntered(true)} />;

  return <main id="top">
    <Navbar />
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow">// SYSTEM ONLINE · 2026</p><h1>Build the <span>future</span><br />with intent.</h1><p className="hero-text">Musa Chaudhary is building at the intersection of business, technology and artificial intelligence.</p><div className="hero-actions"><a className="button-primary" href="#lab">LAUNCH WORKSPACE <span>→</span></a><a className="text-link" href="#projects">EXPLORE PROJECTS <span>↓</span></a></div></div>
      <div className="orbital-scene" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="core"><i /><i /><i /></div><span className="scene-label label-one">MUSA / AI BUILDER</span><span className="scene-label label-two">SYSTEM / ONLINE</span></div>
      <p className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></p>
    </section>
    <section id="system" className="section system-section"><div className="system-content"><SectionHeading index="01" eyebrow="SYSTEM PROFILE" title="A builder with a systems mindset." copy="This site is the public interface for an evolving body of work." /><div className="system-grid">{systemData.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div></section>
    <Projects />
    <Timeline />
    <WorkspacePreview />
    <Contact />
    <footer><a className="wordmark" href="#top">MUSA<span>_</span>OS</a><span>© 2026 // BUILT IN LAHORE</span><a href="#top">BACK TO TOP ↑</a></footer>
  </main>;
}
