import { Bot, Cloud, Code2, Database, Globe, Wrench } from "lucide-react"

import { Section } from "@/components/section"
import { skills, tiers } from "@/data/content"

const categoryIcons: Record<string, React.ReactNode> = {
  "AI / GenAI": <Bot className="size-3.5" />,
  "Web Development": <Globe className="size-3.5" />,
  "Programming": <Code2 className="size-3.5" />,
  "Databases": <Database className="size-3.5" />,
  "Cloud / DevOps": <Cloud className="size-3.5" />,
}

export function SkillsSection() {
  return (
    <Section
      id="skills"
      index="03"
      title="Skills"
      subtitle="Toolbox"
      icon={<Wrench className="size-10 sm:size-12" />}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category} className="surface-card">
            <div className="flex items-center gap-2 text-muted-foreground">
              {categoryIcons[group.category]}
              <h3 className="text-sm font-semibold text-foreground">
                {group.category}
              </h3>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="surface-card">
        <p className="text-sm font-semibold text-foreground">
          My 5-tier GenAI build approach
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {tiers.map((tier, i) => (
            <div key={tier.title} className="flex gap-3">
              <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[9px] font-bold text-primary">
                {i + 1}
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">{tier.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {tier.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
