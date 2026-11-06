import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { SiteClosing } from "@/components/site-closing"
import { SiteHeader } from "@/components/site-header"
import { posts } from "@/data/content"

export const metadata: Metadata = {
  title: "Writing — Jyothi Kumar",
  description:
    "Field notes from shipping AI agents for research, sales and GTM, and from building my own Claude Code tools.",
}

export default function BlogPage() {
  const featured = posts.slice(0, 2)

  return (
    <>
      <SiteHeader />
      <main>
        <section className="section blog-intro">
          <div className="wrap">
            <div className="grid">
              <div className="lg:col-span-7">
                <p className="t-small">Writing</p>
                <h1 className="h1 blog-intro-title">Notes on agents, skills and Jev</h1>
                <p className="lead blog-intro-lead">
                  Field notes from shipping agents for research, sales and GTM, and from building my
                  own Claude Code tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section blog-feature">
          <div className="wrap">
            <div className="grid">
              {featured.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="card blog-card lg:col-span-6">
                  <p className="t-label">
                    {post.publishedAt} · {post.readTime}
                  </p>
                  <h2 className="h3 blog-card-title">{post.title}</h2>
                  <p className="t-body blog-card-summary">{post.summary}</p>
                  <span className="blog-card-foot">
                    <span className="t-small">Read the essay</span>
                    <ArrowRight className="m-arrow size-4" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="blog-all">
              <h2 className="h2 blog-all-head">All writing</h2>
              <div className="rows">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-row">
                    <span className="t-small blog-row-date">{post.publishedAt}</span>
                    <span className="blog-row-body">
                      <span className="blog-row-title">{post.title}</span>
                      <span className="t-small blog-row-summary">{post.summary}</span>
                    </span>
                    <ArrowRight className="m-arrow size-4 blog-row-arrow" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteClosing />
    </>
  )
}
