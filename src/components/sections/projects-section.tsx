import Link from "next/link"
import { ArrowUpRight, Orbit } from "lucide-react"

import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/content"

export function ProjectsSection() {
  const featuredSlugs = ["agent-receipts", "live-slides", "agent-bridge", "speech-ai-agent", "critic-agent", "aarogya-medical-support"]
  const featuredProjects = featuredSlugs.map((slug) => projects.find((p) => p.slug === slug)!)

  return (
    <Section
      id="projects"
      index="02"
      title="Recent work"
      subtitle="Selected builds · 2026"
    >
      <div className="project-grid">
        {featuredProjects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={`project-card project-card-${index + 1} group`}
          >
            <div className="flex items-start justify-between gap-3">
              <span className="font-mono text-xs text-primary/80">0{index + 1}</span>
              <span className="project-status"><Orbit className="size-3" /> shipped</span>
            </div>
            <div className="mt-9 flex items-start justify-between gap-3">
              <h3 className="min-w-0 text-lg font-semibold text-foreground text-balance">
                {project.name}
              </h3>
              <ArrowUpRight className="size-5 shrink-0 text-primary transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {project.summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-2 border-t border-border/60 pt-4">
              {project.highlights.slice(0, 2).map((tag) => (
                <span key={tag} className="pill">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6">
        <p className="max-w-md text-sm text-muted-foreground">More systems, prototypes, and technical experiments live in the project archive.</p>
        <Button variant="outline" asChild>
          <Link href="/projects">Browse project archive <ArrowUpRight className="size-4" /></Link>
        </Button>
      </div>
    </Section>
  )
}
