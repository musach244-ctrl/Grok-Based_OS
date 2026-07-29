type SectionHeadingProps = { index: string; eyebrow: string; title: string; copy?: string };

export default function SectionHeading({ index, eyebrow, title, copy }: SectionHeadingProps) {
  return <div className="section-heading">
    <p><span>{index}</span>{eyebrow}</p>
    <h2>{title}</h2>
    {copy && <p className="section-copy">{copy}</p>}
  </div>;
}
