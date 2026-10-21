import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Metrics } from "@/components/sections/metrics"
import { Value } from "@/components/sections/value"
import { FeaturedWork } from "@/components/sections/featured-work"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Metrics />
        <Value />
        <FeaturedWork />
      </main>
      <SiteFooter />
    </>
  )
}
