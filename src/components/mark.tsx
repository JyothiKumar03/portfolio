type MarkProps = {
  className?: string
  size?: number
}

// The arc mark: a moss arc with a dot, drawn once and used beside the name.
export function Mark({ className, size }: MarkProps) {
  return (
    <svg
      className={className ? `mark ${className}` : "mark"}
      width={size}
      height={size}
      viewBox="0 0 22 22"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 17a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="11" cy="17" r="2" fill="currentColor" />
    </svg>
  )
}
