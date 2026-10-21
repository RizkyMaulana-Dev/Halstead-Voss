import Image from "next/image"
import { cn } from "@/lib/utils"
import { featuredWork } from "@/lib/site-data"

export function FeaturedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="wrap py-[72px]">
      <div className="rv">
        <p className="eyebrow">{featuredWork.eyebrow}</p>
        <h2
          id="work-heading"
          className="mt-3 text-[clamp(24px,2.6vw,30px)] font-normal leading-[1.2] tracking-[-0.02em] text-ink"
        >
          {featuredWork.title}
        </h2>
        <p className="mt-3 text-[13px] leading-[1.6] text-ink-muted">
          {featuredWork.intro}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-[14px] min-[760px]:grid-cols-[1.1fr_1fr_1fr] min-[760px]:grid-rows-[230px_230px]">
        {featuredWork.items.map((item, index) => (
          <figure
            key={item.caption}
            className={cn(
              "rv group relative overflow-hidden rounded-md bg-sky1",
              index === 0
                ? "col-span-2 h-[300px] min-[760px]:col-span-1 min-[760px]:row-span-2 min-[760px]:h-auto"
                : "h-[200px] min-[760px]:h-auto"
            )}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes={
                index === 0
                  ? "(min-width: 760px) 36vw, 100vw"
                  : "(min-width: 760px) 32vw, 50vw"
              }
              className="photo work-photo object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.04]"
            />
            <figcaption className="work-caption absolute bottom-2.5 left-3 text-[11px] leading-none text-white">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
