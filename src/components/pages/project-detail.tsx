import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

import { Footer } from "@/components/footer"
import { Panel } from "@/components/panel"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { site, type Project } from "@/data/content"

type ProjectDetailProps = {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="min-h-screen">
      <main className="page-container-sm pb-16">
        <div className="relative pt-14 md:pt-20">
          <div className="absolute right-0 top-4 md:top-6">
            <ThemeToggle />
          </div>
          <Link
            href="/projects"
            className="eyebrow inline-flex items-center gap-2 transition hover:text-foreground"
          >
            <ArrowLeft className="size-3" /> Back to projects
          </Link>
          <h1 className="page-title mt-6 text-balance">{project.name}</h1>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            {project.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.highlights.map((highlight) => (
              <span key={highlight} className="pill">
                {highlight}
              </span>
            ))}
          </div>
          {project.link ? (
            <div className="mt-6">
              <Button variant="outline" asChild>
                <a href={project.link} target="_blank" rel="noreferrer">
                  External link <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>
          ) : null}
        </div>

        <Panel className="mt-12">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="eyebrow">Problem</p>
              <p className="mt-2 text-sm text-foreground">{project.problem}</p>
            </div>
            <div>
              <p className="eyebrow">Approach</p>
              <p className="mt-2 text-sm text-foreground">
                {project.approach}
              </p>
            </div>
            <div>
              <p className="eyebrow">Value</p>
              <p className="mt-2 text-sm text-foreground">{project.value}</p>
            </div>
          </div>
        </Panel>

        <Panel className="mt-8">
          <p className="eyebrow">Snapshot</p>
          <p className="mt-3 text-sm text-foreground">{project.snapshot}</p>
        </Panel>

        <Panel className="mt-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="eyebrow">Stack</p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-foreground">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Role</p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-foreground">
                {project.role.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Outcomes</p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-foreground">
                {project.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Panel>

        <Panel className="mt-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="eyebrow">Build notes</p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-foreground">
                {project.buildNotes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Roadmap</p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-foreground">
                {project.roadmap.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Panel>

        <Panel className="mt-12">
          <p className="text-base font-semibold text-foreground sm:text-lg">
            Want something similar built for your product?
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            I&apos;ll scope the path, then ship with reliability in mind.
          </p>
          <div className="mt-4">
            <Button asChild>
              <a href={`mailto:${site.email}`}>Start a project</a>
            </Button>
          </div>
        </Panel>

        <Footer />
      </main>
    </div>
  )
}
