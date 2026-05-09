import { existsSync } from "fs"
import path from "path"
import Image from "next/image"

function Placeholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute inset-0 surface-grid opacity-80" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(60% 50% at 50% 25%, var(--accent-glow), transparent 70%)" }}
      />
      <div className="relative flex items-center justify-center">
        <div className="absolute size-36 rounded-full border border-dashed border-primary/20" />
        <div className="relative size-24 rounded-full bg-background/60 border border-primary/30 backdrop-blur-sm flex items-center justify-center shadow-[0_0_40px_var(--accent-glow)]">
          <span className="text-3xl font-extrabold text-primary/80 tracking-tighter leading-none">JK</span>
        </div>
      </div>
    </div>
  )
}

export function ProfilePhoto() {
  const src = ["/images/profile.jpg", "/images/profile.jpeg", "/images/profile.png"]
    .find((p) => existsSync(path.join(process.cwd(), "public", p)))

  return (
    <div className="relative h-[32rem] overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      {src ? (
        <Image
          src={src}
          alt="Jyothi Kumar Dummala"
          fill
          sizes="(max-width: 1024px) 100vw, 40rem"
          className="object-cover object-center"
          priority
        />
      ) : (
        <Placeholder />
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card/80 to-transparent" />
    </div>
  )
}
