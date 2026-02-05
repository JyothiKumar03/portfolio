import Link from "next/link"
import { ArrowLeft, BookOpenText, Mail } from "lucide-react"

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
          <div className="mt-6 flex items-center gap-3">
            <BookOpenText className="size-6 text-foreground" />
            <p className="eyebrow">Writing</p>
          </div>
          <h1 className="page-title mt-4 text-balance">Notes on GenAI systems</h1>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Field notes, frameworks, and reliability lessons from shipping.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="surface-card group block transition hover:-translate-y-1 hover:border-foreground/20"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <h2 className="min-w-0 text-xl font-semibold text-foreground text-balance">
                  {post.title}
                </h2>
                <span className="pill">{post.status}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{post.summary}</p>
            </Link>
          ))}
        </div>

        <div className="surface-card mt-12">
          <div className="flex items-center gap-3">
            <Mail className="size-5 text-foreground" />
            <p className="text-base font-semibold text-foreground">
              Want a topic covered sooner?
            </p>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Send a note and I will prioritize it.
          </p>
          <div className="mt-4">
            <Button asChild>
              <a href={`mailto:${site.email}`}>Request a post</a>
            </Button>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  )
}
