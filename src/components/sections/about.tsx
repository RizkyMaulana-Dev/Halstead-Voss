import { Compass, Hammer, Leaf } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { about } from "@/lib/site-data"

const icons = {
  design: Compass,
  develop: Hammer,
  sustain: Leaf,
} as const

export function About() {
  return (
    <>
      <section
        id="about"
        aria-labelledby="about-heading"
        className="wrap py-[72px]"
      >
        <div className="grid gap-12 min-[900px]:grid-cols-[0.8fr_2.2fr]">
          <div className="rv">
            <p className="eyebrow">{about.eyebrow}</p>
            <h2
              id="about-heading"
              className="mt-3 max-w-[14ch] text-[clamp(24px,2.6vw,30px)] font-normal leading-[1.2] tracking-[-0.02em] text-ink"
            >
              {about.title}
            </h2>
            <p className="mt-4 max-w-[32ch] text-[13px] leading-[1.6] text-ink-muted">
              {about.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 min-[900px]:grid-cols-3">
            {about.cards.map((card, index) => {
              const Icon = icons[card.icon]

              return (
                <article
                  key={card.title}
                  className="rv group/card relative flex h-full flex-col gap-2.5 rounded-[10px] border border-line bg-surface px-5 pb-[18px] pt-[22px] shadow-[0_1px_2px_rgba(22,22,22,0.04),0_8px_24px_-12px_rgba(22,22,22,0.08)] transition-[transform,border-color] duration-300 hover:-translate-y-[3px] hover:border-sage"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <Badge className="absolute right-3 top-3 h-auto rounded-[4px] bg-green px-[7px] py-1 text-[10px] font-normal leading-none text-green-ink">
                    {card.badge}
                  </Badge>

                  <span className="flex size-[34px] items-center justify-center rounded-full bg-green card-icon">
                    <Icon
                      aria-hidden="true"
                      className="size-[17px] text-green-ink"
                      strokeWidth={1.5}
                    />
                  </span>

                  <h3 className="text-[14px] font-medium leading-[1.5] text-ink">
                    {card.title}
                  </h3>
                  <p className="text-[12px] leading-[1.6] text-ink-muted">
                    {card.description}
                  </p>
                  <a
                    href={card.href}
                    className="more mt-auto pt-3 text-ink"
                    aria-label={`Learn more about ${card.title}`}
                  >
                    Learn More
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </section>
      <div className="wrap">
        <hr className="border-0 border-t border-line" />
      </div>
    </>
  )
}
