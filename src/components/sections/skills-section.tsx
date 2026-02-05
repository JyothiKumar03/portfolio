import { Wrench } from "lucide-react"

import { Section } from "@/components/section"
import { skills, tiers } from "@/data/content"

export function SkillsSection() {
  return (
    <Section
      id="skills"
      index="03"
      title="Skills"
      subtitle="Toolbox"
      icon={<Wrench className="size-12" />}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm"
          >
            <h3 className="text-base font-semibold text-foreground">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm">
        <p className="text-sm font-semibold text-foreground">
          My 5-tier GenAI build approach
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {tiers.map((tier) => (
            <div key={tier.title}>
              <p className="text-sm font-medium text-foreground">{tier.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {tier.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
