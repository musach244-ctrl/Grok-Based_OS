import SectionHeading from "./SectionHeading";

export default function Contact() {
  return <section id="contact" className="section contact-section">
    <SectionHeading index="05" eyebrow="OPEN CHANNEL" title="Let’s build something useful." copy="Have an idea, opportunity or ambitious problem? Send a transmission." />
    <div className="contact-terminal">
      <p className="terminal-prompt">musa@os:~$ <span>contact --open</span></p>
      <div className="contact-row"><span>EMAIL</span><a href="mailto:musach244@gmail.com">musach244@gmail.com ↗</a></div>
      <div className="contact-row"><span>GITHUB</span><a href="https://github.com/musach244-ctrl" target="_blank" rel="noreferrer">github.com/musach244-ctrl ↗</a></div>
      <div className="contact-row"><span>STATUS</span><strong><i /> AVAILABLE FOR SELECTED WORK</strong></div>
    </div>
  </section>;
}
