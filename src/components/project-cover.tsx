import type { Cover } from "@/data/project-cards"

type ProjectCoverProps = {
  cover: Cover
  name: string
  size?: "lg" | "md" | "thumb"
  className?: string
}

// An editorial cover instead of a screenshot: a flat tone field, the
// project's one idea set in serif italic, its parts as quiet chips, and a
// faint oversized monogram bleeding off the corner.
export function ProjectCover({ cover, name, size = "md", className }: ProjectCoverProps) {
  const monogram = name.replace(/[^A-Za-z]/g, "").slice(0, 1).toUpperCase()

  if (size === "thumb") {
    return (
      <div className={`cover cover-thumb cover-${cover.tone} ${className ?? ""}`} aria-hidden="true">
        <span className="cover-mono">{monogram}</span>
      </div>
    )
  }

  return (
    <div className={`cover cover-${size} cover-${cover.tone} ${className ?? ""}`} aria-hidden="true">
      <span className="cover-mono">{monogram}</span>
      <p className="cover-phrase serif">{cover.phrase}</p>
      <div className="cover-chips">
        {cover.chips.map((chip, i) => (
          <span key={chip} className="cover-chip">
            {i > 0 ? <i className="cover-link" /> : null}
            {chip}
          </span>
        ))}
      </div>
    </div>
  )
}
