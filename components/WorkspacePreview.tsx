import SectionHeading from "./SectionHeading";

const features = ["Multi-model routing", "Specialist AI agents", "Study & research tools", "Code workspace"];

export default function WorkspacePreview() {
  return <section id="lab" className="section lab-section">
    <div className="lab-card">
      <div>
        <SectionHeading index="04" eyebrow="THE LAB" title="An AI workspace is coming online." copy="Musa OS will be more than a portfolio: a focused place to think, build and ship." />
        <ul>{features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul>
        <button className="button-primary" type="button">LAUNCH BETA <span>↗</span></button>
      </div>
      <div className="terminal-window" aria-label="AI workspace preview">
        <div className="terminal-bar"><span /><span /><span /><b>musa-ai / router</b></div>
        <div className="terminal-content"><p><em>›</em> system status</p><p className="muted">AI CORE · PREPARING</p><p><em>›</em> available agents</p><p className="agent">✓ research <small>ready</small></p><p className="agent">✓ code <small>ready</small></p><p className="agent">✓ study <small>ready</small></p><p className="cursor">› _</p></div>
      </div>
    </div>
  </section>;
}
