import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDriveEmbedUrl(driveUrl: string) {
  const match = driveUrl.match(/\/d\/([^/]+)/)
  if (!match) return driveUrl
  return `https://drive.google.com/file/d/${match[1]}/preview`
}
