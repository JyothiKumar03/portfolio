import { Briefcase } from "lucide-react"

import { Panel } from "@/components/panel"
import { Section } from "@/components/section"
import { experience } from "@/data/content"

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      index="01"
      title="Experience"
      subtitle="Where I shipped"
      icon={<Briefcase className="size-10 sm:size-12" />}
    >
      <div className="space-y-6">
        {experience.map((item) => (
          <Panel key={item.company}>
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                  {item.company}
                </h3>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
              <div className="eyebrow md:text-right">
                {item.location} - {item.dates}
              </div>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Panel>
        ))}
      </div>
    </Section>
  )
}
