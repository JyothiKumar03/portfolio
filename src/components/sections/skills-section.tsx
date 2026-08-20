import { Bot, Cloud, Code2, Database, Globe } from "lucide-react"

import { Section } from "@/components/section"
import { skills, tiers } from "@/data/content"

const categoryIcons: Record<string, React.ReactNode> = {
  "AI / GenAI": <Bot className="size-3.5" />,
  "Web Development": <Globe className="size-3.5" />,
  "Programming": <Code2 className="size-3.5" />,
  "Databases": <Database className="size-3.5" />,
  "Cloud / DevOps": <Cloud className="size-3.5" />,
}

const pad = (index: number) => String(index + 1).padStart(2, "0")

export function SkillsSection() {
  return (
    <Section id="skills" index="03" title="Skills" subtitle="Toolbox">
      <div className="spec-log">
        {skills.map((group, i) => (
          <div key={group.category} className="spec-row skill-row">
            <span className="spec-index">{pad(i)}</span>
            <h3 className="spec-name">
              {categoryIcons[group.category]}
              {group.category}
            </h3>
            <div className="spec-chips">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <p className="eyebrow-mono">My 5-tier GenAI build approach</p>
        <div className="spec-log mt-5">
          {tiers.map((tier, i) => (
            <div key={tier.title} className="spec-row tier-row">
              <span className="spec-index">{pad(i)}</span>
              <h4 className="spec-name">{tier.title}</h4>
              <p className="spec-body">{tier.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
