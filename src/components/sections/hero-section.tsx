import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { proof, site } from "@/data/content"

// The dealt "split" hero: text on columns 1-5, the real photograph on 7-12.
export function HeroSection() {
  return (
    <section id="top" className="section hero">
      <div className="wrap">
        <div className="grid hero-grid">
          <div className="lg:col-span-5 hero-text">
            <div className="hero-top">
              <p className="t-small">Jyothi Kumar · AI engineer, Hyderabad · available for AI builds</p>

              <h1 className="h1 hero-title">
                I build AI agents that <span className="accent-word">do the work.</span>
              </h1>

              <p className="lead hero-lead">
                Not demos. Production agents for research, sales and GTM teams: one orchestrator, the
                Claude Code skills it loads on demand, and narrow workers for the heavy lifting.
              </p>

              <div className="btn-row hero-actions">
                <a className="btn btn--primary" href={"mailto:" + site.email}>
                  Email me <ArrowRight className="m-arrow size-4" aria-hidden="true" />
                </a>
                <Link className="btn btn--secondary" href="#work">
                  See the work
                </Link>
              </div>
            </div>

            <div className="hero-foot">
              <dl className="hero-proof">
                {proof.map((item) => (
                  <div key={item.figure} className="hero-proof-item">
                    <dt className="hero-proof-figure">{item.figure}</dt>
                    <dd className="hero-proof-text">{item.text}</dd>
                  </div>
                ))}
              </dl>
              <p className="t-small hero-role">Driving AI solutions at InspireLabs · previously software engineer, AI at ProdGain</p>
            </div>
          </div>

          <div className="lg:col-start-7 lg:col-span-6 hero-media">
            <div className="frame hero-photo">
              <Image
                src="/images/profile.jpeg"
                alt="Jyothi Kumar Dummala"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 628px"
                className="object-cover"
              />

              <div className="hero-card">
                <p className="t-label hero-card-label">
                  <span className="hero-dot" aria-hidden="true" />
                  Status
                </p>
                <p className="hero-card-title">Available for AI builds</p>
                <p className="t-small">Agents, Claude Code skills and automations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
