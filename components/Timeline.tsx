import SectionHeading from "./SectionHeading";

const events = [
  ["NOW", "Musa OS", "Designing an intelligent personal workspace."],
  ["2026", "AI Builder", "Exploring useful AI products and model routing."],
  ["NEXT", "Your next chapter", "This timeline will grow with your experience."],
];

export default function Timeline() {
  return <section id="timeline" className="section timeline-section">
    <SectionHeading index="03" eyebrow="BUILD LOG" title="The work is in motion." />
    <div className="timeline-list">
      {events.map(([date, title, description]) => <article key={date}>
        <time>{date}</time><i /><div><h3>{title}</h3><p>{description}</p></div>
      </article>)}
    </div>
  </section>;
}
