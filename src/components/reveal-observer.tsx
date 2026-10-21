"use client"

import { useEffect, useRef } from "react"

/**
 * Hydration-safe reveal observer.
 *
 * - Never mutates className on first mount, so server-rendered HTML
 *   (`.rv` without `is-in`) matches the client initial render exactly
 *   and there is NO hydration mismatch.
 * - `is-in` is only added when an element enters the viewport AFTER the
 *   initial mount (i.e. on scroll), never during hydration.
 * - Content stays visible without JS (`.rv` is always opacity: 1 in CSS),
 *   satisfying PRD FR-23.
 */
export function RevealObserver() {
  const initialized = useRef(false)

  useEffect(() => {
    document.documentElement.classList.add("rv-ready")

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".rv")
    )
    if (elements.length === 0) return

    if (!("IntersectionObserver" in window)) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Skip the very first callback batch: elements that are already
        // intersecting at mount must NOT get `is-in`, otherwise React would
        // see a class mismatch after hydration.
        if (!initialized.current) {
          initialized.current = true
          return
        }

        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const element = entry.target as HTMLElement
          element.classList.add("is-in")

          const cleanup = () => {
            element.classList.remove("rv", "is-in")
            element.style.animationDelay = ""
          }
          element.addEventListener("animationend", cleanup, { once: true })

          observer.unobserve(element)
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return null
}
