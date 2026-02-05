import { Mail } from "lucide-react"

import { Panel } from "@/components/panel"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { capabilities, site } from "@/data/content"

export function ContactSection() {
  return (
    <Section
      id="contact"
      index="05"
      title="Contact"
      subtitle="Let's build"
      icon={<Mail className="size-10 sm:size-12" />}
    >
      <div className="flex flex-col gap-6 md:flex-row">
        <Panel className="md:flex-[1.2]">
          <p className="eyebrow">Build together</p>
          <p className="mt-3 text-base font-semibold text-foreground sm:text-lg">
            I design roadmaps, run reviews, and ship full-stack + AI systems
            end-to-end.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Clear scope, fast iteration, and production-ready reliability.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {capabilities.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <a href={`mailto:${site.email}`}>Book a call</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={`mailto:${site.email}?subject=Project%20inquiry`}>
                Start a project
              </a>
            </Button>
          </div>
        </Panel>
        <Panel className="md:flex-[0.8]">
          <p className="eyebrow">Contact</p>
          <div className="mt-5 space-y-4 text-sm text-muted-foreground">
            <div>
              <p className="eyebrow">Email</p>
              <a
                className="text-base text-foreground"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="eyebrow">Location</p>
              <p className="text-base text-foreground">{site.location}</p>
            </div>
            {site.social.linkedin ? (
              <div>
                <p className="eyebrow">LinkedIn</p>
                <a
                  className="text-base text-foreground"
                  href={site.social.linkedin}
                >
                  View profile
                </a>
              </div>
            ) : null}
            {site.social.github ? (
              <div>
                <p className="eyebrow">GitHub</p>
                <a
                  className="text-base text-foreground"
                  href={site.social.github}
                >
                  View repos
                </a>
              </div>
            ) : null}
          </div>
        </Panel>
      </div>
    </Section>
  )
}
