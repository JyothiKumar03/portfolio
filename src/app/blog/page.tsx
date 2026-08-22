import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { posts, site } from "@/data/content"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <main className="page-container-sm pb-16">
        <div className="relative pt-14 md:pt-20">
          <div className="absolute right-0 top-4 md:top-6">
            <ThemeToggle />
          </div>
          <Link
            href="/"
            className="eyebrow inline-flex items-center gap-2 transition hover:text-foreground"
          >
            <ArrowLeft className="size-3" /> Back home
          </Link>
          <p className="eyebrow mt-6">Writing</p>
          <h1 className="page-title mt-4 text-balance">Notes on GenAI systems</h1>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Field notes from shipping, updated with 2025-2026 ecosystem signals.
          </p>
        </div>

        <div className="spec-log mt-12">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="spec-row post-row group"
            >
              <span className="spec-index">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="spec-name">
                {post.title}
                <ArrowUpRight className="size-4 shrink-0 text-primary opacity-0 transition group-hover:opacity-100" />
              </h2>
              <p className="spec-meta">
                {post.publishedAt}
                <br />
                {post.readTime}
              </p>
              <p className="spec-body">{post.summary}</p>
            </Link>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-y border-border/60 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-semibold text-foreground">
              Want a topic covered sooner?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Send a note and I will prioritize it.
            </p>
          </div>
          <Button asChild>
            <a href={`mailto:${site.email}`}>Request a post</a>
          </Button>
        </div>

        <Footer />
      </main>
    </div>
  )
}
