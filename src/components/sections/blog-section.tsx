import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { posts } from "@/data/content"

export function BlogSection() {
  const featuredPosts = posts.slice(0, 2)

  return (
    <Section id="blog" index="04" title="Blog" subtitle="Writing">
      <div className="spec-log">
        {featuredPosts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="spec-row post-row group"
          >
            <span className="spec-index">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="spec-name">
              {post.title}
              <ArrowUpRight className="size-4 shrink-0 text-primary opacity-0 transition group-hover:opacity-100" />
            </h3>
            <p className="spec-meta">
              {post.publishedAt}
              <br />
              {post.readTime}
            </p>
            <p className="spec-body">{post.summary}</p>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Button variant="outline" asChild>
          <Link href="/blog">View all posts</Link>
        </Button>
      </div>
    </Section>
  )
}
