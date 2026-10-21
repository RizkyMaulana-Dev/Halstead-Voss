"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Counts a metric from zero to its value once it enters the viewport.
 * Without JS the .no-js-count fallback shows the final value; with reduced
 * motion the final value is rendered immediately.
 */
export function MetricValue({
  value,
  suffix,
}: {
  value: number
  suffix: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    )
    if (reduceMotion.matches) {
      setDisplay(value)
      return
    }

    let frame = 0
    let started = false

    const run = () => {
      if (started) return
      started = true
      const start = performance.now()
      const duration = 900

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplay(Math.round(value * eased))
        if (progress < 1) {
          frame = requestAnimationFrame(tick)
        }
      }

      frame = requestAnimationFrame(tick)
    }

    if (!("IntersectionObserver" in window)) {
      run()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          run()
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return (
    <span ref={ref} data-metric-value={value} data-metric-suffix={suffix}>
      <span className="sr-only">
        {value}
        {suffix}
      </span>
      <span aria-hidden="true" className="js-count">
        {display}
        {suffix}
      </span>
      <span aria-hidden="true" className="no-js-count">
        {value}
        {suffix}
      </span>
    </span>
  )
}
