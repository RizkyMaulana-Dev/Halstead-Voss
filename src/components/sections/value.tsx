import Image from "next/image"
import { valueBlocks } from "@/lib/site-data"

export function Value() {
  return (
    <section aria-labelledby="value-heading" className="wrap py-[72px]">
      <h2 id="value-heading" className="sr-only">
        Our approach
      </h2>

      <div className="grid gap-5 min-[900px]:grid-cols-2">
        {valueBlocks.map((block, index) => {
          const text = (
            <div>
              <h3 className="text-[15px] font-medium leading-[1.5] text-ink">
                {block.title}
              </h3>
              <p className="mt-2 max-w-[44ch] text-[13px] leading-[1.6] text-ink-muted">
                {block.description}
              </p>
            </div>
          )

          const image = (
            <div className="relative aspect-[1.15] overflow-hidden rounded-md bg-sky1">
              <Image
                src={block.image.src}
                alt={block.image.alt}
                fill
                sizes="(min-width: 900px) 50vw, 100vw"
                className="photo object-cover"
              />
            </div>
          )

          return (
            <div
              key={block.title}
              className="rv flex flex-col gap-4"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {block.imageFirst ? image : text}
              {block.imageFirst ? text : image}
            </div>
          )
        })}
      </div>
    </section>
  )
}
