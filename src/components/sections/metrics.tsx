import { MetricValue } from "@/components/metric-value"
import { metrics } from "@/lib/site-data"

export function Metrics() {
  return (
    <>
      <section
        aria-labelledby="metrics-heading"
        className="wrap py-[72px]"
      >
        <div className="grid grid-cols-2 items-end gap-x-6 gap-y-10 min-[900px]:grid-cols-[1.1fr_repeat(4,1fr)]">
          <div className="rv col-span-2 min-[900px]:col-span-1">
            <p className="eyebrow">{metrics.eyebrow}</p>
            <h2
              id="metrics-heading"
              className="mt-3 text-[clamp(24px,2.6vw,30px)] font-normal leading-[1.2] tracking-[-0.02em] text-ink"
            >
              {metrics.title}
            </h2>
            <p className="mt-3 max-w-[24ch] text-[13px] leading-[1.6] text-ink-muted">
              {metrics.intro}
            </p>
          </div>

          {metrics.items.map((item, index) => (
            <div
              key={item.label}
              className="rv"
              style={{ animationDelay: `${(index + 1) * 80}ms` }}
            >
              <p className="text-[clamp(44px,6vw,76px)] font-light leading-none tracking-[-0.04em] text-ink">
                <MetricValue value={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-2.5 text-[13px] leading-[1.5] text-ink-muted">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className="wrap">
        <hr className="border-0 border-t border-line" />
      </div>
    </>
  )
}
