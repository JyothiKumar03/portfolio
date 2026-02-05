import { notFound } from "next/navigation"

import { ProjectDetail } from "@/components/pages/project-detail"
import { getProjectBySlug, projectSlugs } from "@/data/content"

type ProjectPageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
