/**
 * Single source of truth for the Halstead Voss company profile.
 * The content follows docs/PRD.md and docs/DESIGN.md; replace the placeholder
 * company details and photography with real project material before launch.
 */

export const company = {
  name: "Halstead Voss",
  legalName: "Halstead Voss Architecture & Construction",
  founded: "1987",
  copyrightYear: 2026,
  email: "studio@halsteadvoss.com",
  emailHref: "mailto:studio@halsteadvoss.com",
  phone: "+1 (216) 555-0142",
  phoneHref: "tel:+12165550142",
  address: {
    street: "1420 Lakeside Avenue, Suite 300",
    city: "Cleveland",
    region: "OH",
    postalCode: "44113",
  },
  description:
    "A Cleveland practice designing, building, and stewarding places since 1987.",
} as const

/**
 * "Our Story" and "Capabilities" both belong to the About & Value band, so the
 * PRD anchors both to #about. Portfolio and Contact keep their own anchors.
 */
export const navLinks = [
  { label: "Our Story", href: "#about" },
  { label: "Capabilities", href: "#about" },
  { label: "Portfolio", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const

export const hero = {
  headline: ["Making places that", "earn their years."],
  lead: "Halstead Voss plans, builds, and cares for low-carbon places across the American Midwest.",
  image: {
    src: "/images/hero-architecture.jpg",
    alt: "Angular white and glass building against a pale sky",
  },
} as const

export const about = {
  eyebrow: "Our Story",
  title: "A practice of quiet precision.",
  intro: "We design, build, and care for places with a long view.",
  cards: [
    {
      badge: "Design",
      title: "Design with restraint",
      description:
        "We test massing, daylight, and material choices before a single line is fixed.",
      href: "#contact",
      icon: "design",
    },
    {
      badge: "Develop",
      title: "Build what lasts",
      description:
        "Our site teams coordinate every trade against one schedule, one budget, one standard.",
      href: "#contact",
      icon: "develop",
    },
    {
      badge: "Sustain",
      title: "Steward the years",
      description:
        "We detail buildings to weather quietly, then stay on for the years after handover.",
      href: "#contact",
      icon: "sustain",
    },
  ],
} as const

export const metrics = {
  eyebrow: "Metrics & Impact",
  title: "Measured over time.",
  intro: "Every figure is reviewed annually.",
  items: [
    { value: 15, suffix: "+", label: "Years" },
    { value: 120, suffix: "+", label: "Projects" },
    { value: 98, suffix: "%", label: "Sustainability rate" },
    { value: 24, suffix: "", label: "Awards" },
  ],
} as const

export const valueBlocks = [
  {
    title: "Material honesty, measured twice.",
    description:
      "We specify materials for how they weather, not how they photograph. Concrete, timber, and glass are chosen to age without apology.",
    image: {
      src: "/images/value-interior.jpg",
      alt: "Glass-walled office interior with a long view through the building",
    },
    imageFirst: false,
  },
  {
    title: "Build for the century, not the opening.",
    description:
      "Every drawing is tested against the people who use it and the crews who build it. Fewer surprises, fewer change orders.",
    image: {
      src: "/images/value-living.jpg",
      alt: "Living room with timber panelling and full-height glazing",
    },
    imageFirst: true,
  },
] as const

export const featuredWork = {
  eyebrow: "Portfolio",
  title: "Selected work.",
  intro: "Five projects, one standard.",
  items: [
    {
      caption: "Featured Work 01",
      image: {
        src: "/images/work-curve.jpg",
        alt: "Curved glass and concrete building seen from below",
      },
    },
    {
      caption: "Featured Work 02",
      image: {
        src: "/images/work-concrete.jpg",
        alt: "Layered concrete and glass facade on a modern building",
      },
    },
    {
      caption: "Featured Work 03",
      image: {
        src: "/images/work-site.jpg",
        alt: "Construction crew working across a large concrete slab",
      },
    },
    {
      caption: "Featured Work 04",
      image: {
        src: "/images/work-house.jpg",
        alt: "Modern house with timber cladding and a mature tree",
      },
    },
    {
      caption: "Featured Work 05",
      image: {
        src: "/images/work-towers.jpg",
        alt: "Glass office towers seen from street level",
      },
    },
  ],
} as const

export const footer = {
  description:
    "A Cleveland practice designing, building, and stewarding places since 1987.",
  company: [
    {
      label: company.address.street,
      href: null,
    },
    {
      label: `${company.address.city}, ${company.address.region} ${company.address.postalCode}`,
      href: null,
    },
    { label: `Founded ${company.founded}`, href: null },
  ],
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
      external: true,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      external: true,
    },
    {
      label: "Email",
      href: company.emailHref,
      external: false,
    },
  ],
} as const
