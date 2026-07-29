import SectionHeading from "./SectionHeading";

const projects = [
  { id: "01", title: "Musa OS", status: "IN DEVELOPMENT", description: "A personal AI workspace with an intelligent model router and specialist agents.", tags: ["Next.js", "AI", "Product"] },
  { id: "02", title: "Project Archive", status: "AWAITING DATA", description: "Your strongest work will live here as interactive case studies, not simple links.", tags: ["Case study", "Web", "Build log"] },
  { id: "03", title: "Open Build", status: "IN QUEUE", description: "A slot for the next ambitious idea. The operating system keeps expanding.", tags: ["Experimental", "R&D"] },
];

export default function Projects() {
  return <section id="projects" className="section projects-section">
    <SectionHeading index="02" eyebrow="SELECTED BUILDS" title="Projects in orbit." copy="A growing collection of systems, experiments and products." />
    <div className="project-grid">
      {projects.map((project) => <article className="project-card" key={project.id}>
        <div className="card-top"><span>/{project.id}</span><span className="badge">{project.status}</span></div>
        <div><h3>{project.title}</h3><p>{project.description}</p></div>
        <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <span className="card-arrow">↗</span>
      </article>)}
    </div>
  </section>;
}
