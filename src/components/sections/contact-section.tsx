import { Mail } from "lucide-react";

import { Panel } from "@/components/panel";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { capabilities, site } from "@/data/content";

export function ContactSection() {
  return (
    <Section
      id="contact"
      index="05"
      title="Contact"
      subtitle="Let's build"
      icon={<Mail className="size-12" />}
    >
      <div className="flex flex-col gap-6 md:flex-row">
        <Panel className="md:flex-[1.2]">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Build together
          </p>
          <p className="mt-3 text-lg font-semibold text-foreground">
            I design roadmaps, run reviews, and ship full-stack + AI systems
            end-to-end.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Clear scope, fast iteration, and production-ready reliability.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {capabilities.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border/60 px-3 py-1"
              >
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
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Contact
          </p>
          <div className="mt-5 space-y-4 text-sm text-muted-foreground">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Email
              </p>
              <a
                className="text-base text-foreground"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Location
              </p>
              <p className="text-base text-foreground">{site.location}</p>
            </div>
            {site.social.linkedin ? (
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  LinkedIn
                </p>
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
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  GitHub
                </p>
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
  );
}
