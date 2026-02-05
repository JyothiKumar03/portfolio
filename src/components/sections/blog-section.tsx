import Link from "next/link"
import { BookOpenText } from "lucide-react"

import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { posts } from "@/data/content"

export function BlogSection() {
  const featuredPosts = posts.slice(0, 2)

  return (
    <Section
      id="blog"
      index="04"
      title="Blog"
      subtitle="Writing"
      icon={<BookOpenText className="size-10 sm:size-12" />}
    >
      <div className="space-y-4">
        {featuredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="surface-card group flex flex-col gap-2 transition hover:-translate-y-1 hover:border-foreground/20"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="min-w-0 text-base font-semibold text-foreground text-balance">
                {post.title}
              </h3>
              <span className="pill">{post.status}</span>
            </div>
            <p className="text-sm text-muted-foreground">{post.summary}</p>
          </Link>
        ))}
      </div>
      <div>
        <Button variant="outline" asChild>
          <Link href="/blog">View all posts</Link>
        </Button>
      </div>
    </Section>
  )
}
