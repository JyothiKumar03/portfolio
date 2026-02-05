import { notFound } from "next/navigation"

import { BlogDetail } from "@/components/pages/blog-detail"
import { getPostBySlug } from "@/data/content"

export default function BlogDetailPage() {
  const post = getPostBySlug("context-engineering-playbook")

  if (!post) {
    notFound()
  }

  return <BlogDetail post={post} />
}
