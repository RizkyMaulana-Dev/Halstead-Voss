"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export function HeroMedia({
  src,
  alt,
}: {
  src: string
  alt: string
}) {
  const mediaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const media = mediaRef.current
    if (!media) return

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    )
    if (reduceMotion.matches) return

    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY * 0.04, 24)
        media.style.setProperty("--parallax", `${offset}px`)
      })
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", update)
    }
  }, [])

  return (
    <div
      ref={mediaRef}
      className="hero-media relative min-h-[300px] overflow-hidden bg-sky1 min-[820px]:min-h-[560px]"
    >
      <Image
        src={src}
        alt={alt}
        fill
        preload
        sizes="(min-width: 820px) 52vw, 100vw"
        className="photo object-cover"
      />
    </div>
  )
}
