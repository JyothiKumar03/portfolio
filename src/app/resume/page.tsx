import { SiteClosing } from "@/components/site-closing"
import { SiteHeader } from "@/components/site-header"
import { site } from "@/data/content"
import { ENV } from "@/lib/env"
import { getDriveEmbedUrl } from "@/lib/utils"

const RESUME_DRIVE_URL = ENV.NEXT_PUBLIC_RESUME_DRIVE_URL
const embedUrl = getDriveEmbedUrl(RESUME_DRIVE_URL)

export default function ResumePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section resume">
          <div className="wrap">
            <div className="section-head--row">
              <div>
                <p className="t-small">Résumé</p>
                <h1 className="h2 resume-name">{site.name}</h1>
                <p className="t-body muted">{site.title}</p>
              </div>
              <a
                className="btn btn--secondary"
                href={RESUME_DRIVE_URL}
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Drive
              </a>
            </div>

            <div className="frame resume-frame">
              <iframe
                src={embedUrl}
                className="resume-iframe"
                allow="autoplay"
                title={`${site.name} — Resume`}
              />
            </div>
            {/* Fallback for browsers that block iframes */}
            <p className="t-small resume-fallback">
              Can&apos;t see the PDF?{" "}
              <a className="link" href={RESUME_DRIVE_URL} target="_blank" rel="noreferrer">
                Open it directly in Google Drive
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteClosing />
    </>
  )
}
