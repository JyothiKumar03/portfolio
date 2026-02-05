import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"

import { Footer } from "@/components/footer"
import { Panel } from "@/components/panel"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { site, type Post } from "@/data/content"

type BlogDetailProps = {
  post: Post
}

export function BlogDetail({ post }: BlogDetailProps) {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-3xl px-6 pb-16 md:px-10">
        <div className="relative pt-16 md:pt-20">
          <div className="absolute right-0 top-6">
            <ThemeToggle />
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="size-3" /> Back to blog
          </Link>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-3 text-base text-muted-foreground">{post.summary}</p>
          <span className="mt-6 inline-flex rounded-full border border-border/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {post.status}
          </span>
        </div>

        <Panel className="mt-12">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Topics
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {post.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-border/60 px-3 py-1"
              >
                {topic}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">{post.intro}</p>
        </Panel>

        <Panel className="mt-8">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Outline
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-foreground">
            {post.outline.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Panel>

        <div className="mt-8 space-y-6">
          {post.sections.map((section) => (
            <Panel key={section.title}>
              <p className="text-sm font-semibold text-foreground">
                {section.title}
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Panel>
          ))}
        </div>

        <Panel className="mt-10">
          <div className="flex items-center gap-3">
            <Mail className="size-5 text-foreground" />
            <p className="text-base font-semibold text-foreground">
              Want a specific angle covered?
            </p>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Tell me what you&apos;re building and I&apos;ll write it.
          </p>
          <div className="mt-4">
            <Button asChild>
              <a href={`mailto:${site.email}`}>Request a post</a>
            </Button>
          </div>
        </Panel>

        <Footer />
      </main>
    </div>
  )
}
