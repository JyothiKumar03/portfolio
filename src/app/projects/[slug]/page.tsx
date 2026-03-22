import { notFound } from "next/navigation"

import { ProjectDetail } from "@/components/pages/project-detail"
import { getProjectBySlug, projectSlugs } from "@/data/content"

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
