import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Mark } from "@/components/mark"
import { site } from "@/data/content"

const elsewhere = [
  { label: "GitHub", href: site.social.github },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "X", href: site.social.twitter },
]

export function SiteClosing() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="closing">
      <div className="wrap">
        <div className="closing-top">
          <h2 className="h2 closing-title">Work with me on your next agent</h2>
          <p className="closing-line">
            Available for AI builds: agents, Claude Code skills and automations. Working remotely from Hyderabad.
          </p>
          <a className="btn btn--primary btn--xl closing-btn" href={"mailto:" + site.email}>
            <span>Email me</span>
            <ArrowRight className="m-arrow size-6" aria-hidden="true" />
          </a>
        </div>

        <div className="closing-dir">
          <div className="closing-grid">
            <div className="closing-brand">
              <Mark className="closing-mark" />
              <p className="closing-name">Jyothi Kumar Dummala</p>
              <p className="closing-role">AI engineer · Hyderabad, India</p>
            </div>

            <div>
              <p className="closing-head">Site</p>
              <ul className="closing-links">
                <li><Link className="closing-link" href="/#work">Work</Link></li>
                <li><Link className="closing-link" href="/blog">Writing</Link></li>
                <li><Link className="closing-link" href="/projects">Projects</Link></li>
                <li><Link className="closing-link" href="/resume">Résumé</Link></li>
              </ul>
            </div>

            <div>
              <p className="closing-head">Elsewhere</p>
              <ul className="closing-links">
                {elsewhere.map((item) => (
                  <li key={item.label}>
                    <a className="closing-link" href={item.href} target="_blank" rel="noreferrer">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="closing-head">For agents</p>
              <ul className="closing-links">
                <li><a className="closing-link" href="/llms.txt">llms.txt</a></li>
              </ul>
            </div>
          </div>

          <div className="closing-legal">
            <span>© {year} Jyothi Kumar Dummala</span>
            <span>Product names and logos are trademarks of their owners.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
