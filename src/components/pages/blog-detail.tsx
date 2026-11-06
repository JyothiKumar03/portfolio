import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { SiteClosing } from "@/components/site-closing"
import { SiteHeader } from "@/components/site-header"
import { posts, site, type Post } from "@/data/content"

type BlogDetailProps = {
  post: Post
}

function MdAnchor({ href, children }: { href?: string; children?: ReactNode }) {
  const external = typeof href === "string" && /^https?:\/\//.test(href)
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  )
}

function MdTable({ children }: { children?: ReactNode }) {
  return (
    <div className="prose-table-wrap">
      <table>{children}</table>
    </div>
  )
}

export function BlogDetail({ post }: BlogDetailProps) {
  const more = posts.filter((other) => other.slug !== post.slug).slice(0, 2)

  return (
    <>
      <SiteHeader />
      <main>
        <article>
          <section className="section post-head">
            <div className="wrap">
              <div className="grid">
                <div className="lg:col-start-3 lg:col-span-8">
                  <Link href="/blog" className="link t-small">
                    ← All writing
                  </Link>
                  <p className="t-small post-meta">
                    {post.publishedAt} · {post.readTime}
                  </p>
                  <h1 className="h1 post-title">{post.title}</h1>
                  <p className="lead post-summary">{post.summary}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="post-body">
            <div className="wrap">
              <div className="grid">
                <div className="prose-post lg:col-start-3 lg:col-span-7">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{ a: MdAnchor, table: MdTable }}
                  >
                    {post.body}
                  </ReactMarkdown>
                </div>

                <aside className="hidden lg:block post-aside lg:col-start-11 lg:col-span-2">
                  <span className="post-avatar">
                    <Image
                      src="/images/profile.jpeg"
                      alt="Jyothi Kumar Dummala"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </span>
                  <p className="post-author-name">Jyothi Kumar</p>
                  <p className="t-small post-author-bio">
                    AI engineer building agents and Claude Code skills.
                  </p>
                  <a className="link t-small post-contact" href={"mailto:" + site.email}>
                    Write to me
                  </a>
                </aside>
              </div>
            </div>
          </section>
        </article>

        {more.length > 0 && (
          <section className="section post-more">
            <div className="wrap">
              <h2 className="h2 post-more-head">More writing</h2>
              <div className="grid">
                {more.map((other) => (
                  <Link key={other.slug} href={`/blog/${other.slug}`} className="card blog-card lg:col-span-6">
                    <p className="t-label">{other.publishedAt}</p>
                    <h2 className="h3 blog-card-title">{other.title}</h2>
                    <span className="blog-card-foot">
                      <span className="t-small">Read the essay</span>
                      <ArrowRight className="m-arrow size-4" aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteClosing />
    </>
  )
}
