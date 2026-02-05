import { notFound } from "next/navigation"

import { BlogDetail } from "@/components/pages/blog-detail"
import { getPostBySlug, postSlugs } from "@/data/content"

type BlogPostPageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogDetail post={post} />
}
