import Link from "next/link"

import { ProjectCard } from "@/components/project-card"
import { ProjectCover } from "@/components/project-cover"
import { SiteClosing } from "@/components/site-closing"
import { SiteHeader } from "@/components/site-header"
import { StackChip } from "@/components/stack-icon"
import { projects, site, type Project } from "@/data/content"
import { featuredSlugs, getProjectCard } from "@/data/project-cards"

type ProjectDetailProps = {
  project: Project
}

// Up to three featured projects that come after this one in the list, wrapping
// around. The current project is never included. A project that is not
// featured gets the first three featured projects.
function moreWork(slug: string): Project[] {
  const list = featuredSlugs as readonly string[]
  const index = list.indexOf(slug)
  const picks: Project[] = []

  for (let step = 1; step <= list.length && picks.length < 3; step++) {
    const nextSlug = list[(index + step + list.length) % list.length]
    if (nextSlug === slug) continue
    const next = projects.find((p) => p.slug === nextSlug)
    if (next) picks.push(next)
  }

  return picks
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const card = getProjectCard(project.slug)
  const cover = card.cover
  const kind = `${card.kind}${card.year ? " · " + card.year : ""}`
  const more = moreWork(project.slug)

  return (
    <>
      <SiteHeader />
      <main>
        <section className="section pd-head">
          <div className="wrap">
            <div className="grid">
              <div className="lg:col-span-5">
                <Link href="/projects" className="link t-small">
                  ← All projects
                </Link>
                <p className="t-label pd-kind">{kind}</p>
                <h1 className="h1 pd-title">{project.name}</h1>
                <p className="lead pd-summary">{project.summary}</p>
                <div className="btn-row pd-actions">
                  {project.link ? (
                    <a className="btn btn--primary" href={project.link} target="_blank" rel="noreferrer">
                      See the code on GitHub
                    </a>
                  ) : null}
                  <a className="btn btn--secondary" href={`mailto:${site.email}`}>
                    Ask me about it
                  </a>
                </div>
                {project.highlights.length > 0 ? (
                  <ul className="rows proj-fine pd-highlights">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>
                        <span className="rows__name">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div className="lg:col-start-7 lg:col-span-6">
                {cover ? (
                  <ProjectCover cover={cover} name={project.name} size="lg" className="pd-cover" />
                ) : (
                  <div className="card pd-stack-card">
                    <span className="t-label">Stack</span>
                    <ul className="pd-chips">
                      {project.stack.map((item) => (
                        <li key={item}>
                          <StackChip label={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="grid">
              <div className="lg:col-span-4">
                <h2 className="h2">How it works</h2>
              </div>
              <div className="lg:col-start-6 lg:col-span-7 pd-story">
                <div>
                  <h3 className="h3">The problem</h3>
                  <p className="t-body pd-body">{project.problem}</p>
                </div>
                <div>
                  <h3 className="h3">The approach</h3>
                  <p className="t-body pd-body">{project.approach}</p>
                </div>
                <div>
                  <h3 className="h3">The result</h3>
                  <p className="t-body pd-body">{project.value}</p>
                  <p className="t-small pd-snapshot">{project.snapshot}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="grid">
              <div className="lg:col-span-4 pd-col">
                <h3 className="h3">What it does</h3>
                <ul className="rows proj-fine">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome}>
                      <span className="rows__name">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-4 pd-col">
                <h3 className="h3">Build notes</h3>
                <ul className="rows proj-fine">
                  {project.buildNotes.map((note) => (
                    <li key={note}>
                      <span className="rows__name">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-4 pd-col">
                <h3 className="h3">Stack and role</h3>
                <ul className="pd-chips">
                  {project.stack.map((item) => (
                    <li key={item}>
                      <StackChip label={item} />
                    </li>
                  ))}
                </ul>
                <p className="t-label pd-role">Role</p>
                <ul className="pd-chips pd-role-chips">
                  {project.role.map((item) => (
                    <li key={item}>
                      <span className="pd-chip">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {project.roadmap.length > 0 ? (
              <div className="pd-next">
                <p className="t-label">Next</p>
                <ul className="rows proj-fine pd-next-list">
                  {project.roadmap.map((item) => (
                    <li key={item}>
                      <span className="rows__name">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head section-head--row">
              <h2 className="h2">More work</h2>
              <Link href="/projects" className="link">
                See all projects
              </Link>
            </div>
            <div className="grid">
              {more.map((next) => (
                <ProjectCard key={next.slug} project={next} className="lg:col-span-4" />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteClosing />
    </>
  )
}
