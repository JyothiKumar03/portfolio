import { notFound } from "next/navigation"

import { BlogDetail } from "@/components/pages/blog-detail"
import { getPostBySlug } from "@/data/content"

export default function BlogDetailPage() {
  const post = getPostBySlug("reliability-first-llm-systems")

  if (!post) {
    notFound()
  }

  return <BlogDetail post={post} />
}
