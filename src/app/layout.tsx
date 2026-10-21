import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { RevealObserver } from "@/components/reveal-observer"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://halsteadvoss.com"),
  title: "Halstead Voss | Architecture and Construction",
  description:
    "Halstead Voss plans, builds, and stewards low-carbon architecture and property across the American Midwest from its Cleveland studio.",
  applicationName: "Halstead Voss",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://halsteadvoss.com",
    siteName: "Halstead Voss",
    title: "Halstead Voss | Architecture and Construction",
    description:
      "A Cleveland practice designing, building, and stewarding low-carbon places across the American Midwest since 1987.",
    images: [
      {
        url: "/images/hero-architecture.jpg",
        width: 1600,
        height: 1067,
        alt: "Angular white and glass building against a pale sky",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halstead Voss | Architecture and Construction",
    description:
      "A Cleveland practice designing, building, and stewarding low-carbon places across the American Midwest since 1987.",
    images: ["/images/hero-architecture.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fbfaf7",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-page text-ink">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');setTimeout(function(){if(!document.documentElement.classList.contains('rv-ready'))document.documentElement.classList.remove('js')},3000)",
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-page"
        >
          Skip to content
        </a>
        {children}
        <RevealObserver />
      </body>
    </html>
  )
}
