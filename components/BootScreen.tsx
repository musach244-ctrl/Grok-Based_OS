"use client";

import { useEffect, useState } from "react";

type BootScreenProps = { onEnter: () => void };

const modules = ["Portfolio", "Projects", "Timeline", "AI Workspace"];

export default function BootScreen({ onEnter }: BootScreenProps) {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((value) => {
        if (value >= 100) {
          window.clearInterval(timer);
          setReady(true);
          return 100;
        }
        return Math.min(value + 4, 100);
      });
    }, 45);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="boot-screen" aria-label="Musa OS boot screen">
      <div className="boot-grid" />
      <div className="boot-panel">
        <p className="eyebrow">PERSONAL OPERATING SYSTEM / V1.0</p>
        <h1>MUSA<span>_</span>OS</h1>
        <div className="boot-rule" />
        <div className="boot-status">
          <div><span>INITIALIZING SYSTEM</span><strong>{String(progress).padStart(3, "0")}%</strong></div>
          <div className="progress-track"><i style={{ width: `${progress}%` }} /></div>
        </div>
        <ul className="boot-modules">
          {modules.map((module, index) => (
            <li key={module} className={progress >= (index + 1) * 20 ? "loaded" : ""}>
              <span>{progress >= (index + 1) * 20 ? "✓" : "·"}</span> Loading {module}
            </li>
          ))}
        </ul>
        <button className="enter-button" disabled={!ready} onClick={onEnter}>
          {ready ? "ENTER SYSTEM" : "BOOTING..."} <span>→</span>
        </button>
      </div>
      <p className="boot-footer">MUSA OS // INTERFACE READY WHEN YOU ARE</p>
    </section>
  );
}
