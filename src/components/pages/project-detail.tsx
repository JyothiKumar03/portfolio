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
      <main className="mx-auto max-w-4xl px-6 pb-16 md:px-10">
        <div className="relative pt-16 md:pt-20">
          <div className="absolute right-0 top-6">
            <ThemeToggle />
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="size-3" /> Back to projects
          </Link>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
            {project.name}
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            {project.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {project.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-border/60 px-3 py-1"
              >
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
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Problem
              </p>
              <p className="mt-2 text-sm text-foreground">{project.problem}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Approach
              </p>
              <p className="mt-2 text-sm text-foreground">
                {project.approach}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Value
              </p>
              <p className="mt-2 text-sm text-foreground">{project.value}</p>
            </div>
          </div>
        </Panel>

        <Panel className="mt-8">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Snapshot
          </p>
          <p className="mt-3 text-sm text-foreground">{project.snapshot}</p>
        </Panel>

        <Panel className="mt-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Stack
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-foreground">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Role
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-foreground">
                {project.role.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Outcomes
              </p>
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
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Build notes
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-foreground">
                {project.buildNotes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Roadmap
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-foreground">
                {project.roadmap.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Panel>

        <Panel className="mt-12">
          <p className="text-lg font-semibold text-foreground">
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
