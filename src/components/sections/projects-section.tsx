import Link from "next/link"
import { ArrowUpRight, Rocket } from "lucide-react"

import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/content"

export function ProjectsSection() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <Section
      id="projects"
      index="02"
      title="Recent work"
      subtitle="Selected builds"
      icon={<Rocket className="size-12" />}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-foreground/20"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold text-foreground">
                {project.name}
              </h3>
              <ArrowUpRight className="size-4 text-muted-foreground transition group-hover:text-foreground" />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {project.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {project.highlights.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/60 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
      <div>
        <Button variant="outline" asChild>
          <Link href="/projects">View all projects</Link>
        </Button>
      </div>
    </Section>
  )
}
