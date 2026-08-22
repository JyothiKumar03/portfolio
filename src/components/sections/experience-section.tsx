import { Section } from "@/components/section"
import { experience } from "@/data/content"

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      index="01"
      title="Experience"
      subtitle="Where I shipped"
    >
      <div className="career-log">
        {experience.map((item, index) => (
          <article key={item.company} className="career-entry">
            <div className="career-count">0{index + 1}</div>
            <div className="career-company"><h3>{item.company}</h3><p>{item.role}</p></div>
            <p className="career-meta">{item.location}<br />{item.dates}</p>
            <ul>{item.points.slice(0, 3).map((point) => <li key={point}>{point}</li>)}</ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
