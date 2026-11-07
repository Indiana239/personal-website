"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, BriefcaseBusiness, GraduationCap, Plus, Sparkles } from "lucide-react";

type Category = "experience" | "learning" | "education";
type CareerItem = {
  id: string;
  category: Category;
  period: string;
  title: string;
  role: string;
  mark: string;
  summary: string;
  details: string[];
  duration?: string;
  accent?: "lime" | "coral" | "blue";
  isCurrent?: boolean;
};

// Ordered by when each chapter or milestone began, from earliest to latest.
// Crawlyo remains marked as current because it has continued alongside later milestones.
const careerItems: CareerItem[] = [
  {
    id: "trisakti",
    category: "education",
    period: "GRADUATED 2022",
    title: "Universitas Trisakti",
    role: "Bachelor's Degree · Finance",
    mark: "UT",
    summary: "My formal academic background began in Finance, while my curiosity was already taking me toward technology.",
    details: [
      "Graduated with a degree in Finance in 2022.",
      "Started exploring frontend development independently while at university.",
    ],
    accent: "blue",
  },
  {
    id: "bintang",
    category: "experience",
    period: "OCTOBER 2022 — MAY 2024",
    title: "Bintang Sempurna",
    role: "SEO Specialist · First professional role",
    mark: "BS",
    summary: "My first professional role introduced me to SEO and the practical challenges of growing and improving business websites.",
    details: [
      "Worked across two digital platforms: a corporate website and an e-commerce website.",
      "Contributed to technical SEO, on-page improvements, content optimization, and website migration work.",
      "During my second year in this role, I also pursued a Frontend Engineering Bootcamp at Binar Academy.",
    ],
    accent: "coral",
  },
  {
    id: "binar",
    category: "learning",
    period: "DURING MY SECOND YEAR AT BINTANG SEMPURNA",
    title: "Binar Academy",
    role: "Frontend Engineering Bootcamp",
    mark: "BA",
    summary: "I turned my earlier self-directed interest in frontend development into more structured, hands-on learning.",
    details: [
      "Focus: Frontend Engineering.",
      "Taken alongside my role at Bintang Sempurna; this learning milestone overlapped with that work experience.",
    ],
    accent: "lime",
  },
  {
    id: "transcosmos",
    category: "experience",
    period: "JANUARY — JULY 2025",
    title: "transcosmos Indonesia",
    role: "SEO Specialist",
    mark: "tc",
    summary: "I continued developing my SEO expertise in an agency environment, supporting websites across different industries.",
    details: [
      "Built on my earlier in-house experience with a broader agency-side perspective.",
      "Worked on technical and on-page SEO improvements across client websites.",
    ],
    accent: "blue",
  },
  {
    id: "crawlyo",
    category: "experience",
    period: "JUNE 2025 — PRESENT",
    title: "Crawlyo",
    role: "Co-founder & Lead Designer",
    mark: "Cr.",
    summary: "This is my current chapter: building a digital growth partner that connects strategy, design, and technology.",
    details: [
      "Co-founded Crawlyo with a partner in June 2025.",
      "Lead design initiatives and contribute to digital projects across design, digital growth, and technology.",
      "This ongoing role has continued alongside subsequent learning and short virtual internship experiences.",
    ],
    accent: "lime",
    isCurrent: true,
  },
  {
    id: "myskill",
    category: "learning",
    period: "2025 · AFTER TRANSCOSMOS",
    title: "MySkill",
    role: "UI/UX & Graphic Design Bootcamp",
    mark: "My",
    summary: "After building experience in SEO and frontend, I expanded my creative practice into product interfaces and visual communication.",
    details: [
      "Focus areas: UI/UX Design and Graphic Design.",
      "A structured learning step toward a broader design and product skill set.",
    ],
    accent: "coral",
  },
  {
    id: "nodokter",
    category: "experience",
    period: "DECEMBER 2025",
    title: "NoDokter",
    role: "Virtual Intern · UI/UX Design",
    mark: "ND",
    duration: "1 month",
    summary: "I gained additional practical exposure to UI/UX design through a short virtual internship.",
    details: [
      "Discipline: UI/UX Design.",
      "Format: Virtual internship.",
      "Duration: One month.",
    ],
    accent: "coral",
  },
  {
    id: "nanotechnology",
    category: "experience",
    period: "JANUARY 2026",
    title: "Nanotechnology Indonesia",
    role: "Virtual Intern · Graphic Design",
    mark: "NI",
    duration: "1 month",
    summary: "A short virtual internship that added practical exposure to graphic design and visual communication.",
    details: [
      "Discipline: Graphic Design.",
      "Format: Virtual internship.",
      "Duration: One month.",
    ],
    accent: "lime",
  },

];

const filters: { label: string; value: "all" | Category }[] = [
  { label: "All milestones", value: "all" },
  { label: "Experience", value: "experience" },
  { label: "Learning", value: "learning" },
  { label: "Education", value: "education" },
];

function CategoryIcon({ category }: { category: Category }) {
  if (category === "experience") return <BriefcaseBusiness size={15} aria-hidden="true" />;
  if (category === "education") return <GraduationCap size={15} aria-hidden="true" />;
  return <Sparkles size={15} aria-hidden="true" />;
}

function BrandMark({ item }: { item: CareerItem }) {
  const markStyles = {
    lime: "bg-[var(--accent)] text-[#191b16]",
    coral: "bg-[var(--coral)] text-[#191b16]",
    blue: "bg-[var(--blue)] text-[#171916]",
  };

  return (
    <span
      className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-foreground/10 font-display text-[1.35rem] font-semibold tracking-[-0.09em] shadow-sm transition duration-300 group-hover:-rotate-3 group-hover:scale-105 sm:h-16 sm:w-16 sm:text-2xl ${markStyles[item.accent ?? "lime"]}`}
      aria-hidden="true"
    >
      {item.mark}
    </span>
  );
}

export function CareerTimeline() {
  const [filter, setFilter] = useState<"all" | Category>("all");
  // Keep every milestone closed on first view so the timeline feels airy and scannable.
  const [expanded, setExpanded] = useState<string | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 72%", "end 58%"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const visibleItems = useMemo(
    () => careerItems.filter((item) => filter === "all" || item.category === filter),
    [filter],
  );

  return (
    <div className="mx-auto max-w-[1040px]">
      <div className="mb-12 flex flex-col gap-5 border-b border-border pb-6 sm:mb-14 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter career milestones">
          {filters.map((item) => {
            const active = filter === item.value;
            return (
              <button
                key={item.value}
                type="button"
                onClick={() => {
                  setFilter(item.value);
                  setExpanded(null);
                }}
                aria-pressed={active}
                className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition duration-200 ${
                  active
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-transparent text-muted hover:border-foreground/50 hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted">
          {visibleItems.length} {visibleItems.length === 1 ? "milestone" : "milestones"}
        </p>
      </div>

      <div ref={timelineRef} className="relative">
        <div
          aria-hidden="true"
          className="absolute bottom-7 left-[22px] top-7 w-px bg-border sm:left-[30px]"
        />
        <motion.div
          aria-hidden="true"
          className="absolute left-[22px] top-7 w-px origin-top bg-[var(--coral)] sm:left-[30px]"
          style={{ height: reduceMotion ? "100%" : progressHeight }}
        />

        <div className="space-y-9 sm:space-y-11">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleItems.map((item, index) => {
              const isExpanded = expanded === item.id;
              return (
                <motion.article
                  key={item.id}
                  layout={!reduceMotion}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, delay: index * 0.035 }}
                  className="group relative pl-[62px] sm:pl-[84px]"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute left-[15px] top-8 z-10 grid h-[16px] w-[16px] place-items-center rounded-full border-[4px] border-background transition-colors sm:left-[23px] ${
                      item.isCurrent
                        ? "bg-[var(--accent)] shadow-[0_0_0_6px_color-mix(in_srgb,var(--accent)_18%,transparent)]"
                        : isExpanded
                          ? "bg-[var(--coral)] shadow-[0_0_0_5px_color-mix(in_srgb,var(--coral)_16%,transparent)]"
                          : "bg-muted/60"
                    }`}
                  />

                  <div
                    className={`overflow-hidden rounded-[1.5rem] border transition duration-300 ${
                      item.isCurrent
                        ? "border-[var(--accent)]/45 bg-[var(--accent)]/[0.055] shadow-[var(--soft-shadow)]"
                        : isExpanded
                          ? "border-foreground/25 bg-surface-raised shadow-[var(--soft-shadow)]"
                          : "border-border bg-surface/45 hover:border-foreground/30 hover:bg-surface-raised"
                    }`}
                  >
                    <button
                      type="button"
                      className="flex w-full items-center gap-4 p-5 text-left sm:gap-7 sm:p-7"
                      aria-expanded={isExpanded}
                      aria-controls={`career-details-${item.id}`}
                      onClick={() => setExpanded(isExpanded ? null : item.id)}
                    >
                      <BrandMark item={item} />

                      <span className="min-w-0 flex-1">
                        <span className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.72rem] font-bold uppercase tracking-[0.13em] text-muted sm:text-xs">
                          <span>{item.period}</span>
                          {item.duration && (
                            <span className="text-[var(--coral)]">· {item.duration}</span>
                          )}
                          {item.isCurrent && (
                            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/45 bg-[var(--accent)]/15 px-3 py-1 text-[0.65rem] tracking-[0.12em] text-foreground">
                              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                              Current chapter
                            </span>
                          )}
                        </span>
                        <span className="block font-display text-[1.55rem] leading-[1.08] tracking-[-0.05em] sm:text-[2rem]">
                          {item.title}
                        </span>
                        <span className="mt-2 block text-[0.95rem] leading-6 text-muted sm:text-base">
                          {item.role}
                        </span>
                      </span>

                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border transition duration-300 sm:h-11 sm:w-11 ${
                          isExpanded
                            ? "rotate-45 bg-foreground text-background"
                            : "bg-background text-foreground group-hover:border-foreground"
                        }`}
                      >
                        <Plus size={18} />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          id={`career-details-${item.id}`}
                          key="details"
                          initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: reduceMotion ? 0 : 0.32,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-6 border-t border-border px-5 pb-7 pt-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:px-7 sm:pb-8 sm:pt-7">
                            <div>
                              <p className="max-w-3xl text-base leading-7 text-muted sm:text-[1.05rem] sm:leading-8">
                                {item.summary}
                              </p>
                              <ul className="mt-5 space-y-3">
                                {item.details.map((detail) => (
                                  <li key={detail} className="flex gap-3 text-sm leading-6 text-muted sm:text-[0.95rem]">
                                    <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--coral)]" />
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex items-end sm:justify-end">
                              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted">
                                <CategoryIcon category={item.category} /> {item.category}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-3 text-center sm:mt-14">
        <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted">
          <ArrowDown size={15} className="text-[var(--coral)]" />
        </span>
        <p className="max-w-lg text-sm leading-6 text-muted">
          Crawlyo began in June 2025 and remains my current role. The later learning and internship milestones took place alongside that ongoing work.
        </p>
      </div>
    </div>
  );
}
