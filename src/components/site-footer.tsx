import Link from "next/link"
import { Brand } from "@/components/brand"
import { company, footer, navLinks } from "@/lib/site-data"

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-line bg-green text-green-ink">
      <div className="mx-auto max-w-[1160px] px-4 py-[56px] lg:px-32">
        <div className="grid gap-[32px] lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-[32px]">
          <div className="lg:col-span-1">
            <Brand className="flex items-center gap-2 invert" invert color="text-white" />
            <p className="mt-5 max-w-[38ch] text-[12px] leading-[1.5] opacity-65">
              {footer.description}
            </p>
          </div>

          <nav aria-label="Links" className="lg:col-span-1">
            <h2 className="text-[12px] font-[500] leading-[1.5] opacity-90 mb-6">
              Links
            </h2>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[12px] leading-[1.5] opacity-65 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="lg:col-span-1">
            <h2 className="text-[12px] font-[500] leading-[1.5] opacity-90 mb-6">
              Company
            </h2>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={company.emailHref}
                  className="text-[12px] leading-[1.5] opacity-65 transition-opacity hover:opacity-100"
                >
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={company.phoneHref}
                  className="text-[12px] leading-[1.5] opacity-65 transition-opacity hover:opacity-100"
                >
                  {company.phone}
                </a>
              </li>
              <li>
                <span className="text-[12px] leading-[1.5] opacity-65">
                  {company.address.street}
                </span>
              </li>
              <li>
                <span className="text-[12px] leading-[1.5] opacity-65">
                  {`${company.address.city}, ${company.address.region} ${company.address.postalCode}`}
                </span>
              </li>
              <li>
                <span className="text-[12px] leading-[1.5] opacity-65">
                  Founded {company.founded}
                </span>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-1">
            <h2 className="text-[12px] font-[500] leading-[1.5] opacity-90 mb-6">
              Social
            </h2>
            <ul className="flex flex-col gap-3">
              {footer.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[12px] leading-[1.5] opacity-65 transition-opacity hover:opacity-100"
                    rel={item.external ? "noopener" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-[48px] border-t border-[rgba(233,236,228,0.15)] pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-[11px] leading-[1.5] opacity-55">
            © {company.copyrightYear} {company.legalName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
