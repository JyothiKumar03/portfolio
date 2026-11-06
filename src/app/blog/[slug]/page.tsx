import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { BlogDetail } from "@/components/pages/blog-detail"
import { getPostBySlug, postSlugs } from "@/data/content"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title + " — Jyothi Kumar",
    description: post.summary,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return <BlogDetail post={post} />
}
