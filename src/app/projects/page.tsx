import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Rocket } from "lucide-react"

import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { projects, site } from "@/data/content"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-5xl px-6 pb-16 md:px-10">
        <div className="relative pt-16 md:pt-20">
          <div className="absolute right-0 top-6">
            <ThemeToggle />
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="size-3" /> Back home
          </Link>
          <div className="mt-6 flex items-center gap-3">
            <Rocket className="size-6 text-foreground" />
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Projects
            </p>
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Recent work, deeper cuts
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            Detailed breakdowns of the systems, outcomes, and reliability patterns
            I ship.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {projects.map((project) => (
            <section
              key={project.slug}
              className="rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">
                    {project.name}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.summary}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/projects/${project.slug}`}>
                      View details <ArrowUpRight className="size-3" />
                    </Link>
                  </Button>
                  {project.link ? (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noreferrer">
                        External link
                      </a>
                    </Button>
                  ) : null}
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {project.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-border/60 px-3 py-1"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Problem
                  </p>
                  <p className="mt-2 text-sm text-foreground">
                    {project.problem}
                  </p>
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
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm">
          <p className="text-lg font-semibold text-foreground">
            Want a custom GenAI system built end-to-end?
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Reach out and I'll scope it fast, then ship with reliability in mind.
          </p>
          <div className="mt-4">
            <Button asChild>
              <a href={`mailto:${site.email}`}>Start a project</a>
            </Button>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  )
}
