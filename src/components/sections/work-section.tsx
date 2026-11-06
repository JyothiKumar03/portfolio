import type { CSSProperties } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { ProjectCard } from "@/components/project-card"
import { projects, type Project } from "@/data/content"

const workSlugs = [
  "just-jev-it",
  "agent-bridge",
  "agent-receipts",
  "live-slides",
  "aarogya-medical-support",
  "merchant-underwriting-agent",
] as const

export function WorkSection() {
  const picked = workSlugs
    .map((slug) => projects.find((project: Project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project))

  return (
    <section id="work" className="section" style={{ "--h": 2 } as CSSProperties}>
      <div className="wrap">
        <div className="section-head section-head--row">
          <div>
            <h2 className="h2">Selected work</h2>
            <p className="t-body muted work-sub">Skills, an MCP server, voice agents and production workflows.</p>
          </div>
          <Link className="link inline-flex items-center gap-1 whitespace-nowrap" href="/projects">
            See all {projects.length} projects
            <ArrowRight className="m-arrow size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid work-grid">
          {picked.map((project) => (
            <ProjectCard key={project.slug} project={project} className="work-card lg:col-span-4" />
          ))}
        </div>
      </div>
    </section>
  )
}
