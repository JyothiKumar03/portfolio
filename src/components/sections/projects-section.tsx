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
      icon={<Rocket className="size-10 sm:size-12" />}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="surface-card group transition hover:-translate-y-1 hover:border-foreground/20"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="min-w-0 text-lg font-semibold text-foreground text-balance">
                {project.name}
              </h3>
              <ArrowUpRight className="size-4 text-muted-foreground transition group-hover:text-foreground" />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {project.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.highlights.slice(0, 2).map((tag) => (
                <span key={tag} className="pill">
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
