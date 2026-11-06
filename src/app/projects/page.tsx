import type { Metadata } from "next"
import type { CSSProperties } from "react"

import { ProjectCard } from "@/components/project-card"
import { SiteClosing } from "@/components/site-closing"
import { SiteHeader } from "@/components/site-header"
import { projects, type Project } from "@/data/content"
import { featuredSlugs } from "@/data/project-cards"

export const metadata: Metadata = {
  title: "Projects — Jyothi Kumar",
  description: "Claude Code skills, agents, developer tools and earlier full-stack work by Jyothi Kumar.",
}

// The three featured projects that are Claude Code skills or developer tools.
// Every other featured project is an agent.
const skillSlugs = ["just-jev-it", "agent-bridge", "agent-receipts"]

export default function ProjectsPage() {
  const featured = featuredSlugs.flatMap((slug): Project[] => {
    const project = projects.find((p) => p.slug === slug)
    return project ? [project] : []
  })
  const skills = featured.filter((p) => skillSlugs.includes(p.slug))
  const agents = featured.filter((p) => !skillSlugs.includes(p.slug))
  const earlier = projects.filter((p) => !(featuredSlugs as readonly string[]).includes(p.slug))

  return (
    <>
      <SiteHeader />
      <main>
        <section className="section proj-intro">
          <div className="wrap">
            <div className="grid">
              <div className="lg:col-span-7">
                <p className="t-small">Projects</p>
                <h1 className="h1">Everything I&apos;ve built</h1>
                <p className="lead">
                  {projects.length} projects: Claude Code skills, agents, developer tools and earlier full-stack work.
                </p>
              </div>
              <div className="lg:col-start-9 lg:col-span-4 lg:self-end">
                <ul className="rows proj-fine proj-index">
                  <li>
                    <span className="rows__name">Skills and tools</span>
                    <span className="rows__value">{skills.length}</span>
                  </li>
                  <li>
                    <span className="rows__name">Agents</span>
                    <span className="rows__value">{agents.length}</span>
                  </li>
                  <li>
                    <span className="rows__name">Earlier builds</span>
                    <span className="rows__value">{earlier.length}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ "--h": 2 } as CSSProperties}>
          <div className="wrap">
            <h2 className="h2 proj-h2">Agents and developer tools</h2>
            <div className="grid proj-cards">
              {featured.map((project) => (
                <ProjectCard key={project.slug} project={project} className="lg:col-span-4" />
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="grid">
              <div className="lg:col-span-4">
                <h2 className="h2">Earlier builds</h2>
                <p className="t-body muted proj-earlier-note">
                  Full-stack, cloud and ML work from before the agent era.
                </p>
              </div>
              <div className="lg:col-start-6 lg:col-span-7 proj-list">
                {earlier.map((project) => (
                  <ProjectCard key={project.slug} project={project} variant="row" />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteClosing />
    </>
  )
}
