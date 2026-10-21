import Link from "next/link"
import { cn } from "@/lib/utils"

/**
 * The mark is a single geometric glyph: an H drawn inside a thin square frame.
 * It stays legible at 22px and inverts to the footer's green-ink colour.
 */
export function BrandMark({
  className,
  invert = false,
  color,
}: {
  className?: string
  invert?: boolean
  color?: string
}) {
  const markColor = color || (invert ? "text-green-ink" : "text-ink")
  return (
    <svg
      viewBox="0 0 22 22"
      width="22"
      height="22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("size-[22px] shrink-0", markColor, className)}
    >
      <rect
        x="1"
        y="1"
        width="20"
        height="20"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M7 6.5v9M15 6.5v9M7 11h8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Brand({
  className,
  invert = false,
  color,
}: {
  className?: string
  invert?: boolean
  color?: string
}) {
  const brandColor = color || (invert ? "text-green-ink" : "text-ink")
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2", className)}
      aria-label="Halstead Voss, home"
    >
      <BrandMark invert={invert} color={color} />
      <span
        className={cn(
          "text-[15px] font-semibold leading-none tracking-[0.01em]",
          brandColor
        )}
      >
        Halstead Voss
      </span>
    </Link>
  )
}
