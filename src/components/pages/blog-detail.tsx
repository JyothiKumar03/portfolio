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
      <main className="page-container-xs pb-16">
        <div className="relative pt-14 md:pt-20">
          <div className="absolute right-0 top-4 md:top-6">
            <ThemeToggle />
          </div>
          <Link
            href="/blog"
            className="eyebrow inline-flex items-center gap-2 transition hover:text-foreground"
          >
            <ArrowLeft className="size-3" /> Back to blog
          </Link>
          <h1 className="page-title mt-6 text-balance">{post.title}</h1>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            {post.summary}
          </p>
          <span className="pill mt-6 inline-flex">{post.status}</span>
        </div>

        <Panel className="mt-12">
          <p className="eyebrow">Topics</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.topics.map((topic) => (
              <span key={topic} className="pill">
                {topic}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">{post.intro}</p>
        </Panel>

        <Panel className="mt-8">
          <p className="eyebrow">Outline</p>
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
