const links = [
  ["SYSTEM", "system"],
  ["PROJECTS", "projects"],
  ["TIMELINE", "timeline"],
  ["LAB", "lab"],
  ["CONTACT", "contact"],
];

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="wordmark" href="#top" aria-label="Musa OS home">MUSA<span>_</span>OS</a>
      <nav aria-label="Primary navigation">
        {links.map(([label, target]) => <a key={target} href={`#${target}`}>{label}</a>)}
      </nav>
      <a className="nav-status" href="#lab"><i />AI CORE / STANDBY</a>
    </header>
  );
}
