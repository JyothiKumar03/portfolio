import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { site } from "@/data/content"
import { ENV } from "@/lib/env"
import { getDriveEmbedUrl } from "@/lib/utils"

const RESUME_DRIVE_URL = ENV.NEXT_PUBLIC_RESUME_DRIVE_URL
const embedUrl = getDriveEmbedUrl(RESUME_DRIVE_URL)

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="page-container-md flex flex-col flex-1 pb-16 pt-14 md:pt-20">
        {/* Header */}
        <div className="relative">
          <div className="absolute right-0 top-0">
            <ThemeToggle />
          </div>
          <Link
            href="/"
            className="eyebrow inline-flex items-center gap-2 transition hover:text-foreground"
          >
            <ArrowLeft className="size-3" /> Back home
          </Link>
          <div className="mt-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="page-title text-balance">{site.name}</h1>
              <p className="mt-1 text-sm text-muted-foreground">{site.title}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 sm:mt-0">
              <Button variant="outline" size="sm" asChild>
                <a href={RESUME_DRIVE_URL} target="_blank" rel="noreferrer">
                  Open in Drive <ExternalLink className="size-3" />
                </a>
              </Button>
              
            </div>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="mt-8 flex-1">
          <div className="surface-card overflow-hidden p-0" style={{ minHeight: "80vh" }}>
            <iframe
              src={embedUrl}
              className="h-full w-full"
              style={{ minHeight: "80vh", border: "none" }}
              allow="autoplay"
              title={`${site.name} — Resume`}
            />
          </div>
          {/* Fallback for browsers that block iframes */}
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Can&apos;t see the PDF?{" "}
            <a
              href={RESUME_DRIVE_URL}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition"
            >
              Open it directly in Google Drive
            </a>
          </p>
        </div>

        <Footer />
      </main>
    </div>
  )
}
