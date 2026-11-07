import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import { CareerTimeline } from "./career-timeline";

export const metadata: Metadata = {
  title: "About",
  description:
    "Get to know Indira Diana: a Finance graduate whose path spans SEO, frontend engineering, UI/UX, and graphic design.",
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <section className="mx-auto grid w-full max-w-[1320px] gap-12 px-5 pb-20 pt-16 sm:px-8 md:grid-cols-[0.78fr_1.22fr] md:gap-16 md:pb-28 md:pt-24 lg:px-12">
        <div className="flex flex-col justify-between gap-10">
          <div>
            <p className="eyebrow">
              <span className="eyebrow__dot" /> ABOUT / THE PERSON BEHIND THE WORK
            </p>
            <div className="mt-12 flex items-end gap-3 md:mt-20">
              <span className="font-display text-[clamp(6rem,13vw,11rem)] leading-[0.72] tracking-[-0.12em] text-[var(--coral)]">
                id
              </span>
              <span className="mb-1 font-display text-6xl italic leading-none text-foreground">.</span>
            </div>
          </div>
          <div className="hidden border-t border-border pt-5 md:block">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
              A multidisciplinary perspective
            </p>
            <p className="mt-3 max-w-xs text-base leading-7 text-muted">
              Analytical thinking, visual problem-solving, and technical curiosity in one practice.
            </p>
          </div>
        </div>

        <div className="max-w-3xl self-end">
          <p className="eyebrow">
            <Sparkles size={14} className="text-[var(--coral)]" /> A PATH SHAPED BY CURIOSITY
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(3.25rem,7.1vw,6.9rem)] leading-[0.91] tracking-[-0.075em]">
            My path didn&apos;t follow <em className="font-normal text-[var(--coral)]">one</em> direction.
          </h1>
          <div className="mt-8 grid gap-5 text-[1.05rem] leading-[1.85] text-muted sm:text-lg">
            <p>
              I graduated in Finance from Universitas Trisakti in 2022. While at university, I started exploring frontend development on my own. That curiosity eventually led me to my first professional role in SEO, where I learned to understand how websites are structured, discovered, and improved.
            </p>
            <p>
              I kept expanding that perspective through a Frontend Engineering Bootcamp at Binar Academy, followed by UI/UX and Graphic Design training at MySkill. Along the way, I gained experience across in-house and agency environments, as well as short virtual internships in design.
            </p>
            <p>
              Today, I bring these different perspectives together as a Co-founder and Lead Designer at Crawlyo — connecting creative thinking, digital strategy, and technology.
            </p>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/work/" className="button button--primary">
              Explore my work <ArrowUpRight size={16} />
            </Link>
            <a href="#career-journey" className="button button--outline">
              Explore my journey <ArrowDownRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section
        id="career-journey"
        className="mx-auto w-full max-w-[1320px] scroll-mt-28 px-5 pb-24 sm:px-8 md:pb-32 lg:px-12"
      >
        <div className="mb-14 grid gap-6 md:grid-cols-[1fr_0.72fr] md:items-end md:gap-14 md:mb-16">
          <div>
            <p className="eyebrow">
              <span className="eyebrow__dot" /> THE JOURNEY SO FAR
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-[clamp(3rem,6.5vw,6rem)] leading-[0.92] tracking-[-0.075em]">
              Learning by <em className="font-normal text-[var(--coral)]">doing.</em>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            The timeline moves from my earliest foundations toward more recent milestones. Crawlyo began in June 2025 and remains my ongoing role; the learning and internship experiences that came later happened alongside it.
          </p>
        </div>
        <CareerTimeline />
      </section>

      <section className="mx-auto w-full max-w-[1320px] px-5 pb-24 sm:px-8 md:pb-32 lg:px-12">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5 border-b border-border pb-6">
          <div>
            <p className="eyebrow">
              <span className="eyebrow__dot" /> WHAT CONNECTS IT ALL
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.07em]">
              Different disciplines. <em className="font-normal text-[var(--coral)]">One perspective.</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted sm:text-base">
            I like understanding a challenge from more than one angle — then finding a thoughtful way to move it forward.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Design & Product",
              description: "Turning ideas into clear interfaces and visual systems.",
              tags: "UI/UX · Graphic · Packaging",
            },
            {
              number: "02",
              title: "SEO & Digital Growth",
              description: "Understanding how websites perform, reach people, and grow.",
              tags: "Technical SEO · On-page · Content",
            },
            {
              number: "03",
              title: "Web & Technology",
              description: "Bringing a closer understanding of how digital experiences are built.",
              tags: "Frontend · React · Web",
            },
          ].map((item) => (
            <article
              key={item.number}
              className="group rounded-2xl border border-border bg-surface/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-foreground/35 hover:bg-surface-raised sm:p-8"
            >
              <p className="text-sm font-bold tracking-[0.18em] text-[var(--coral)]">
                {item.number} / 03
              </p>
              <h3 className="mt-10 font-display text-3xl tracking-[-0.055em] sm:text-4xl">
                {item.title}
              </h3>
              <p className="mt-4 min-h-14 text-base leading-7 text-muted">{item.description}</p>
              <p className="mt-7 border-t border-border pt-4 text-xs font-bold uppercase tracking-[0.11em] text-muted">
                {item.tags}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
