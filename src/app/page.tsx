import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import { HeroArt } from "@/components/home/hero-art";
import { ProjectCard } from "@/components/project-card";
import { DisciplineCard } from "@/components/discipline-card";
import { SectionHeading } from "@/components/section-heading";
import { disciplines, projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <main id="top">
      <section className="hero-section page-container relative mx-auto grid items-center gap-0">
        <div className="hero-copy relative z-10">
          <p className="eyebrow hero-eyebrow"><span className="eyebrow__dot" /> DESIGN · DIGITAL GROWTH · TECHNOLOGY</p>
          <h1 className="hero-title max-w-3xl font-semibold tracking-[-0.09em] leading-[0.89]">
            I connect<br />
            <span className="hero-title__serif">ideas, design</span><br />
            <span className="hero-title__last">&amp; technology<span className="hero-title__period">.</span></span>
          </h1>
          <p className="hero-description max-w-xl text-sm leading-relaxed">
            I&apos;m Indira, a digital professional working across design, search strategy, and frontend development — turning complex ideas into clear, considered experiences.
          </p>
          <div className="hero-actions mt-7 flex flex-wrap items-center gap-6">
            <Link href="#selected-work" className="button button--primary">Explore selected work <ArrowUpRight size={17} /></Link>
            <Link href="/about/" className="text-link">A little about me <ArrowRight size={15} /></Link>
          </div>
          <div className="hero-footnote">
            <span><i className="status-dot" /> BASED IN INDONESIA</span>
            <span>THINKING ACROSS DISCIPLINES</span>
          </div>
        </div>
        <HeroArt />
        <a className="hero-scroll" href="#selected-work" aria-label="Scroll to selected work"><ArrowDown size={17} /><span>SCROLL TO DISCOVER</span></a>
      </section>

      <div className="marquee-band" aria-label="Design, strategy, technology, and curiosity">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="marquee-group" key={index} aria-hidden={index === 1}>
              <span>DESIGN WITH INTENTION</span><i>✳</i><span>THINK IN SYSTEMS</span><i>✳</i><span>BUILD WITH CURIOSITY</span><i>✳</i><span>MAKE IT MEANINGFUL</span><i>✳</i>
            </div>
          ))}
        </div>
      </div>

      <section id="selected-work" className="section-block page-container mx-auto w-full">
        <SectionHeading
          eyebrow="A FEW THINGS I’VE WORKED ON"
          title={<>Selected work<span className="heading-period">.</span></>}
          description="A mix of self-initiated concepts and professional experience. Each project is an opportunity to turn a question into something considered."
          aside="01 — 03 / SELECTED"
        />
        <div className="projects-grid grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
        </div>
        <div className="section-action-row">
          <p>More context, process, and thinking behind each project.</p>
          <Link href="/work/" className="button button--outline">Explore all work <MoveUpRight size={16} /></Link>
        </div>
      </section>

      <section className="disciplines-section">
        <div className="page-container section-block">
          <SectionHeading
            eyebrow="THREE CONNECTED DISCIPLINES"
            title="Different lenses. One way of thinking."
            description="My work sits at the intersection of creative problem-solving, digital visibility, and technology. Explore each area to see the approach, skills, and projects behind it."
            aside="02 — 03 / WHAT I DO"
          />
          <div className="disciplines-grid grid grid-cols-1 gap-3 lg:grid-cols-3">
            {disciplines.map((item) => <DisciplineCard key={item.number} item={item} />)}
          </div>
        </div>
      </section>

      <section className="about-strip page-container mx-auto grid items-start">
        <div className="about-strip__index"><span>03 / A LITTLE CONTEXT</span><span>✳</span></div>
        <div className="about-strip__content">
          <p className="eyebrow">A MULTIDISCIPLINARY POINT OF VIEW</p>
          <h2>Good work happens when <em>the details</em> and the bigger picture meet.</h2>
          <p className="about-strip__description">My background in SEO taught me to look beneath the surface. Design taught me to make ideas clear and useful. Frontend development helps me understand how those ideas become real experiences.</p>
          <Link href="/about/" className="text-link">Get to know me <ArrowUpRight size={16} /></Link>
        </div>
        <div className="about-strip__stamp" aria-hidden="true"><span>CURIOUS</span><strong>BY<br />NATURE</strong><i>✳</i></div>
      </section>

      <section className="contact-cta page-container mx-auto">
        <div className="contact-cta__inner">
          <div className="contact-cta__graphic" aria-hidden="true"><span>LET&apos;S</span><i>✳</i><span>MAKE</span><b>IT</b></div>
          <div className="contact-cta__copy">
            <p className="eyebrow">HAVE A PROJECT OR AN IDEA?</p>
            <h2>Let&apos;s make<br /><em>something matter.</em></h2>
            <p>I&apos;m always interested in thoughtful projects, good collaborations, and conversations that lead somewhere interesting.</p>
            <Link href="/contact/" className="button button--light">Get in touch <ArrowUpRight size={17} /></Link>
          </div>
          <span className="contact-cta__orbit contact-cta__orbit--one" />
          <span className="contact-cta__orbit contact-cta__orbit--two" />
        </div>
      </section>
    </main>
  );
}
