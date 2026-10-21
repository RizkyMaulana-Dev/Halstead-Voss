import { HeroMedia } from "@/components/hero-media"
import { hero } from "@/lib/site-data"

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="wrap">
      <div className="grid min-[820px]:grid-cols-[1fr_1.05fr]">
        <div className="hero-copy flex flex-col bg-band">
          <h1
            id="hero-heading"
            className="text-[clamp(34px,4.4vw,52px)] font-normal leading-[1.12] tracking-[-0.025em] text-ink"
          >
            {hero.headline[0]}
            <br />
            {hero.headline[1]}
          </h1>
          <p className="mt-7 max-w-[36ch] text-[clamp(17px,1.8vw,21px)] font-light leading-[1.45] text-ink/80">
            {hero.lead}
          </p>
        </div>

        <HeroMedia src={hero.image.src} alt={hero.image.alt} />
      </div>
    </section>
  )
}
