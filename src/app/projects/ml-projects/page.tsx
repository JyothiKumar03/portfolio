import { notFound } from "next/navigation"

import { ProjectDetail } from "@/components/pages/project-detail"
import { getProjectBySlug } from "@/data/content"

export default function ProjectDetailPage() {
  const project = getProjectBySlug("ml-projects")

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
