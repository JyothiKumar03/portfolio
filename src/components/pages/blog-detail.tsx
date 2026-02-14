import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

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
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="pill inline-flex">{post.status}</span>
            <span className="pill inline-flex">{post.publishedAt}</span>
            <span className="pill inline-flex">{post.readTime}</span>
          </div>
        </div>

        <Panel className="mt-12">
          <article className="text-foreground/90">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ ...props }) => (
                  <h2
                    className="mt-8 text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
                    {...props}
                  />
                ),
                h3: ({ ...props }) => (
                  <h3
                    className="mt-6 text-lg font-semibold tracking-tight text-foreground sm:text-xl"
                    {...props}
                  />
                ),
                p: ({ ...props }) => (
                  <p
                    className="mt-4 text-sm leading-7 text-foreground/90 sm:text-base"
                    {...props}
                  />
                ),
                ul: ({ ...props }) => (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm sm:text-base" {...props} />
                ),
                ol: ({ ...props }) => (
                  <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm sm:text-base" {...props} />
                ),
                li: ({ ...props }) => <li className="leading-7" {...props} />,
                a: ({ ...props }) => (
                  <a
                    className="text-primary underline underline-offset-4 hover:text-primary/90"
                    target="_blank"
                    rel="noreferrer"
                    {...props}
                  />
                ),
                strong: ({ ...props }) => (
                  <strong className="font-semibold text-foreground" {...props} />
                ),
                code: ({ ...props }) => (
                  <code
                    className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground"
                    {...props}
                  />
                ),
              }}
            >
              {post.body}
            </ReactMarkdown>
          </article>
        </Panel>

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
