import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { ProjectCover } from "@/components/project-cover"
import type { Project } from "@/data/content"
import { getProjectCard } from "@/data/project-cards"

type ProjectCardProps = {
  project: Project
  /** "card": the one card (kind, name, line, cover panel). "row": a list row with a 56px thumb. */
  variant?: "card" | "row"
  className?: string
}

// The page's one card recipe for a project: name and one line first, the
// flat-colour cover as its picture panel last, running to the card's bottom.
export function ProjectCard({ project, variant = "card", className }: ProjectCardProps) {
  const card = getProjectCard(project.slug)
  const href = `/projects/${project.slug}`

  if (variant === "row") {
    return (
      <Link href={href} className={`pcard-row ${className ?? ""}`}>
        {card.cover ? (
          <ProjectCover cover={card.cover} name={project.name} size="thumb" />
        ) : (
          <span className="pcard-thumb" aria-hidden="true">{project.name.slice(0, 1)}</span>
        )}
        <span className="pcard-row-text">
          <span className="t-card">{project.name}</span>
          <span className="t-small">{card.line || project.summary}</span>
        </span>
        <span className="t-label pcard-row-kind">{card.kind}</span>
        <ArrowRight className="m-arrow size-4 muted" aria-hidden="true" />
      </Link>
    )
  }

  return (
    <Link href={href} className={`card pcard ${className ?? ""}`}>
      <span className="t-label">{card.kind}</span>
      <h3 className="pcard-name t-card">
        {project.name}
        <ArrowRight className="m-arrow size-4" aria-hidden="true" />
      </h3>
      <p className="t-body pcard-line">{card.line || project.summary}</p>
      {card.cover ? <ProjectCover cover={card.cover} name={project.name} size="md" className="pcard-cover" /> : null}
    </Link>
  )
}
