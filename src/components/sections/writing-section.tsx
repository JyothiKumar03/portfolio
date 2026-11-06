import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { posts } from "@/data/content"

export function WritingSection() {
  const featured = posts.slice(0, 2)
  const rest = posts.slice(2)

  return (
    <section id="writing" className="section">
      <div className="wrap">
        <div className="section-head section-head--row">
          <h2 className="h2">Writing</h2>
          <Link className="link" href="/blog">
            See all writing
          </Link>
        </div>

        <div className="grid">
          {featured.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card writing-feature lg:col-span-6">
              <span className="t-label">
                {post.publishedAt} · {post.readTime}
              </span>
              <h3 className="h3 writing-title">{post.title}</h3>
              <p className="t-body writing-summary">{post.summary}</p>
              <span className="t-small writing-go">
                Read the essay
                <ArrowRight className="m-arrow size-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>

        <div className="rows writing-rows">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <span className="rows__name">{post.title}</span>
              <span className="rows__value">{post.publishedAt}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
