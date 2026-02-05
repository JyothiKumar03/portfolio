import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Rocket } from "lucide-react"

import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { projects, site } from "@/data/content"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <main className="page-container-md pb-16">
        <div className="relative pt-14 md:pt-20">
          <div className="absolute right-0 top-4 md:top-6">
            <ThemeToggle />
          </div>
          <Link
            href="/"
            className="eyebrow inline-flex items-center gap-2 transition hover:text-foreground"
          >
            <ArrowLeft className="size-3" /> Back home
          </Link>
          <div className="mt-6 flex items-center gap-3">
            <Rocket className="size-6 text-foreground" />
            <p className="eyebrow">Projects</p>
          </div>
          <h1 className="page-title mt-4 text-balance">Recent work, deeper cuts</h1>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Detailed breakdowns of the systems, outcomes, and reliability patterns
            I ship.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {projects.map((project) => (
            <section
              key={project.slug}
              className="surface-card"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="min-w-0 text-xl font-semibold text-foreground text-balance sm:text-2xl">
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
              <div className="mt-4 flex flex-wrap gap-2">
                {project.highlights.map((highlight) => (
                  <span key={highlight} className="pill">
                    {highlight}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div>
                  <p className="eyebrow">Problem</p>
                  <p className="mt-2 text-sm text-foreground">
                    {project.problem}
                  </p>
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
            </section>
          ))}
        </div>

        <div className="surface-card mt-12">
          <p className="text-base font-semibold text-foreground sm:text-lg">
            Want a custom GenAI system built end-to-end?
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Reach out and I will scope it fast, then ship with reliability in mind.
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
