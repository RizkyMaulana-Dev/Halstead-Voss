"use client"

import { useEffect, useState } from "react"
import { Brand } from "@/components/brand"
import { Button } from "@/components/ui/button"
import { navLinks } from "@/lib/site-data"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let frame = 0

    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8)
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
    <header
      data-scrolled={scrolled}
      className="site-header sticky top-0 z-40 bg-band/60 backdrop-blur-md backdrop-saturate-150 border-b border-line/50 pt-[env(safe-area-inset-top)]"
    >
      <div className="wrap flex h-14 items-center justify-between gap-6">
        <Brand />

        <nav aria-label="Primary" className="hidden min-[760px]:block">
          <ul className="flex items-center gap-[28px]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[13px] leading-5 text-ink/85 transition-opacity duration-200 hover:opacity-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          render={<a href="#contact" />}
          variant="outline" nativeButton={false}
          className="btn h-9 rounded-md border-ink bg-transparent px-4 text-[13px] font-medium text-ink shadow-none hover:bg-ink hover:text-page focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-band"
        >
          Get in Touch
        </Button>
      </div>
    </header>
  )
}
