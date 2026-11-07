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

// Replace or expand these starter entries with final approved portfolio content.
// Keep client work anonymised unless you have permission to identify the client.
export const projects: Project[] = [
  {
    slug: "dineease",
    title: "DineEase",
    category: "UI/UX Design",
    discipline: "Design",
    year: "2026",
    summary:
      "A mobile restaurant experience concept that brings discovery, queueing, pre-ordering, and payment into one considered journey.",
    role: "Product concept, UX flow, and interface design",
    tools: ["Figma", "FigJam", "Design systems"],
    visual: "dineease",
    status: "Self-initiated concept",
    challenge:
      "Restaurant visits can involve several disconnected steps: finding a place, joining a queue, browsing a menu, and paying. The concept explores how those steps could feel more connected.",
    approach: [
      "Mapped the key customer journey from restaurant discovery to payment.",
      "Explored navigation and information hierarchy for menu browsing and queue status.",
      "Developed a consistent visual direction and reusable interface patterns.",
    ],
    outcome:
      "A product concept and interface direction designed to communicate the end-to-end experience. Add final prototype links and validated findings when available.",
  },
  {
    slug: "packaging-concept-studies",
    title: "Packaging concept studies",
    category: "Graphic & Packaging Design",
    discipline: "Design",
    year: "2026",
    summary:
      "A series of visual explorations into brand expression, packaging hierarchy, typography, and production-aware layouts.",
    role: "Visual direction, layout, and packaging exploration",
    tools: ["Adobe Illustrator", "Mockup tools"],
    visual: "packaging",
    status: "Concept exploration",
    challenge:
      "Packaging needs to balance shelf appeal, brand recognition, product information, and the practical constraints of its physical format.",
    approach: [
      "Explored visual territories before committing to a final direction.",
      "Considered typography, hierarchy, and information placement across packaging panels.",
      "Used dieline-aware thinking to connect the flat artwork with the assembled object.",
    ],
    outcome:
      "A developing collection of packaging concepts. Replace this description with the final brief, dieline, and production considerations for each selected project.",
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
