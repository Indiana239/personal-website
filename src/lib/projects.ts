export type Discipline = "Design" | "SEO" | "Development";
export type ProjectVisual = "dineease" | "packaging" | "seo" | "code";

export const disciplinePaths: Record<Discipline, string> = {
  Design: "/design",
  SEO: "/seo",
  Development: "/development",
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  discipline: Discipline;
  year: string;
  summary: string;
  role: string;
  tools: string[];
  visual: ProjectVisual;
  status: string;
  challenge: string;
  approach: string[];
  outcome: string;
};

// Keep client work anonymised unless you have permission to identify the client.
export const projects: Project[] = [
  {
    slug: "dineease",
    title: "DineEase",
    category: "UI/UX Design",
    discipline: "Design",
    year: "2026",
    summary:
      "A mobile queueing and pre-order concept that reframes idle waiting as a more purposeful part of the dining experience.",
    role: "Product concept, exploratory UX research, UX flow, and interface design",
    tools: ["Figma", "FigJam", "Apple Human Interface Guidelines (iOS reference)"],
    visual: "dineease",
    status: "Self-initiated concept",
    challenge:
      "The concept began with the dead time between waiting for a table and waiting for food, alongside the uncertainty of not knowing how long the queue would take.",
    approach: [
      "Combined desk research with first-hand experience of restaurant reservations and dining processes.",
      "Used two exploratory user archetypes to frame different time-conscious dining needs.",
      "Refined the experience around virtual queueing, pre-ordering, and timely queue updates.",
      "Reconsidered always-on GPS geofencing in favour of a more privacy-conscious, context-aware check-in direction.",
    ],
    outcome:
      "A focused mobile product concept connecting queue status, pre-ordering, and timely updates. The showcased interface exploration is iOS-focused; Android-specific screens were outside this iteration. Intended benefits have not been validated through usability testing or live operational metrics.",
  },
  {
    slug: "titik-pagi",
    title: "Titik Pagi",
    category: "Brand Identity & Packaging Design",
    discipline: "Design",
    year: "2026",
    summary:
      "A fictional Indonesian specialty coffee brand inspired by the Gayo highlands, expressed through an earthy visual identity and a 250 g stand-up pouch concept.",
    role: "Brand concept, visual direction, typography, packaging layout, and mockup",
    tools: ["Adobe Illustrator", "Fraunces", "DM Sans"],
    visual: "packaging",
    status: "Self-initiated concept · Fictional brand",
    challenge:
      "The packaging needed to balance a clear brand story, coffee origin, tasting notes, and practical product information within a compact 250 g stand-up pouch format.",
    approach: [
      "Built the brand story around the idea of a thoughtful morning ritual and an imagined connection to the Gayo highlands in Aceh.",
      "Developed an earthy colour palette using Olive Green (#626A46), Terracotta (#B96849), and Warm Cream (#E9E2D1).",
      "Combined Fraunces for expressive display typography with DM Sans for clear supporting and product information.",
      "Used layered mountain contour illustrations as a visual signature, then organised the front and back panels around brand recognition and product information.",
    ],
    outcome:
      "A fictional specialty coffee brand concept and 250 g stand-up pouch packaging exploration. Product details, tasting notes, origin references, and production considerations are illustrative and have not been commercially or production validated.",
  },
  {
    slug: "sela-skin",
    title: "Sela Skin",
    category: "Brand Identity & Packaging Design",
    discipline: "Design",
    year: "2026",
    summary:
      "A fictional contemporary skincare brand built around thoughtful everyday care, expressed through a soft minimalist identity and a 50 g folding carton concept.",
    role: "Brand concept, visual direction, typography, packaging layout, and mockup",
    tools: ["Adobe Illustrator", "Instrument Serif", "Manrope"],
    visual: "packaging",
    status: "Self-initiated concept · Fictional brand",
    challenge:
      "The packaging needed to balance a calm, distinctive brand identity with clear product information across the limited panels of a 50 g reverse tuck end carton.",
    approach: [
      "Built the brand story around the meaning of Sela: a pause or a little space between moments, expressed through the tagline “Make Space for Your Skin.”",
      "Developed a muted palette using Warm Ivory (#F4F1EB), Soft Lilac (#DCD9EA), Mist Blue (#9EBAC7), and Ink Navy (#303947).",
      "Paired Instrument Serif for the wordmark and expressive brand typography with Manrope for functional product information and supporting text.",
      "Used abstract water ripples and concentric forms as a graphic signature, then organised the front, back, and side panels around brand recognition and product information.",
    ],
    outcome:
      "A fictional skincare brand concept and 50 g Daily Hydration Cream folding carton exploration. Product descriptions, ingredient areas, directions, and packaging specifications are illustrative and have not been validated as a commercial formulation or production-ready package.",
  },
  {
    slug: "technical-seo-workflow",
    title: "Technical SEO workflow",
    category: "Technical SEO",
    discipline: "SEO",
    year: "2024–2025",
    summary:
      "An anonymised look at turning technical findings into prioritised, developer-ready recommendations across business websites.",
    role: "SEO audit, issue analysis, and implementation coordination",
    tools: ["Screaming Frog", "Google Search Console", "PageSpeed Insights"],
    visual: "seo",
    status: "Professional experience · anonymised",
    challenge:
      "Technical audits often produce long issue lists that are difficult for development teams to prioritise or translate into action.",
    approach: [
      "Reviewed crawlability, indexation, internal linking, page performance, and site structure.",
      "Inspected page templates and implementation details to understand the underlying causes.",
      "Translated findings into clearer recommendations and developer-ready tasks.",
    ],
    outcome:
      "A more actionable audit workflow. Add only verified outcomes and metrics that can be shared publicly and are not covered by client confidentiality.",
  },
];

export const disciplines = [
  {
    number: "01",
    title: "Design & Product",
    eyebrow: "MAKE IT MEANINGFUL",
    description:
      "Shaping ideas into useful, clear, and distinctive experiences across digital products and visual communication.",
    capabilities: ["UI/UX Design", "Graphic Design", "Packaging Design"],
    href: "/design/",
    tone: "lime" as const,
  },
  {
    number: "02",
    title: "SEO & Digital Growth",
    eyebrow: "MAKE IT DISCOVERABLE",
    description:
      "Connecting technical foundations, search intent, and content strategy to help digital experiences get found.",
    capabilities: ["Technical SEO", "On-page SEO", "Content Strategy"],
    href: "/seo/",
    tone: "coral" as const,
  },
  {
    number: "03",
    title: "Web & Technology",
    eyebrow: "MAKE IT WORK",
    description:
      "Bringing designs to life with front-end thinking, responsive interfaces, and an understanding of the underlying technology.",
    capabilities: ["Frontend Development", "Responsive Websites", "Web Fundamentals"],
    href: "/development/",
    tone: "blue" as const,
  },
];
