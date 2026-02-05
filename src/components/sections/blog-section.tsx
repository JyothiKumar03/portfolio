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
      icon={<BookOpenText className="size-12" />}
    >
      <div className="space-y-4">
        {featuredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-2 rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-foreground/20"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">
                {post.title}
              </h3>
              <span className="rounded-full border border-border/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {post.status}
              </span>
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
