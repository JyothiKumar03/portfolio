export type TEnv = {
  NEXT_PUBLIC_RESUME_DRIVE_URL: string
}

export const ENV: TEnv = {
  NEXT_PUBLIC_RESUME_DRIVE_URL: process.env.NEXT_PUBLIC_RESUME_DRIVE_URL ?? "not-set",
}
