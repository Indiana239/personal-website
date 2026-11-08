import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  MonitorSmartphone,
  Package,
  PenTool,
  Sparkles,
} from "lucide-react";
import { ProjectArtwork } from "@/components/project-artwork";
import { projects } from "@/lib/projects";
import styles from "./design-page.module.css";

export const metadata: Metadata = {
  title: "Design & Product | Indira Diana",
  description:
    "Explore Indira Diana's selected work in UI/UX design, graphic design, and packaging design, with a focus on thoughtful digital and visual experiences.",
};

const practiceAreas = [
  {
    number: "01",
    title: "UI/UX Design",
    description:
      "Structuring digital experiences through user flows, clear information hierarchy, and considered interface decisions.",
    detail: "PRODUCT THINKING · INTERFACE DESIGN",
    icon: MonitorSmartphone,
    tone: "lime",
  },
  {
    number: "02",
    title: "Graphic Design",
    description:
      "Using typography, composition, and visual systems to communicate ideas with clarity and character.",
    detail: "VISUAL COMMUNICATION · ART DIRECTION",
    icon: PenTool,
    tone: "coral",
  },
  {
    number: "03",
    title: "Packaging Design",
    description:
      "Exploring how brand expression, product information, and physical structure come together in packaging.",
    detail: "BRAND EXPRESSION · PACKAGING LAYOUT",
    icon: Package,
    tone: "blue",
  },
] as const;

const designSteps = [
  {
    number: "01",
    title: "Understand",
    description: "Clarify the context, needs, and problem before choosing a direction.",
  },
  {
    number: "02",
    title: "Explore",
    description: "Develop and compare possible approaches, structures, and visual territories.",
  },
  {
    number: "03",
    title: "Shape",
    description: "Translate the strongest direction into a coherent and usable design.",
  },
  {
    number: "04",
    title: "Refine",
    description: "Review the details, improve consistency, and prepare the work to be presented or implemented.",
  },
];

export default function DesignPage() {
  const designProjects = projects.filter((project) => project.discipline === "Design");
  const featuredProject =
    designProjects.find((project) => project.slug === "dineease") ?? designProjects[0];
  const supportingProjects = designProjects.filter(
    (project) => project.slug !== featuredProject?.slug,
  );

  return (
    <main className={`page-container ${styles.page}`}>
      <div className={styles.topline}>
        <Link href="/" className={styles.breadcrumbLink}>
          Home
        </Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Design & Product</span>
        <span className={styles.pageIndex}>DISCIPLINE 01 / 03</span>
      </div>

      <section className={styles.hero} aria-labelledby="design-title">
        <div className={styles.heroCopy}>
          <p className="eyebrow">
            <span className="eyebrow__dot" /> DESIGN & PRODUCT
          </p>
          <h1 id="design-title" className={styles.heroTitle}>
            Designing ideas into <em>meaningful experiences.</em>
          </h1>
          <p className={styles.heroDescription}>
            I explore the space between how things work and how they feel — from digital
            product experiences to visual communication and packaging.
          </p>
          <div className={styles.heroActions}>
            <Link href="#selected-work" className={styles.primaryLink}>
              Explore selected work <ArrowDown size={16} aria-hidden="true" />
            </Link>
            <span className={styles.heroNote}>A PRACTICE BUILT ON CURIOSITY & INTENTION</span>
          </div>
        </div>

        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.heroVisualTopline}>
            <span>DESIGN NOTES / 001</span>
            <span>IDEAS IN FORM</span>
          </div>
          <div className={styles.visualOrbit} />
          <div className={styles.visualOrbitInner} />
          <div className={`${styles.visualSheet} ${styles.visualSheetOne}`}>
            <span className={styles.sheetLabel}>FORM STUDY — 01</span>
            <span className={styles.sheetSerif}>shape<br />with<br /><i>purpose.</i></span>
            <span className={styles.sheetFoot}>VISUAL EXPLORATION</span>
          </div>
          <div className={`${styles.visualSheet} ${styles.visualSheetTwo}`}>
            <span className={styles.sheetLabel}>DIGITAL / OBJECT</span>
            <div className={styles.sheetGrid}>
              <i /><i /><i /><i /><i /><i />
            </div>
            <span className={styles.sheetFoot}>CONSIDERED DETAILS</span>
          </div>
          <div className={styles.visualStamp}>
            <Sparkles size={17} />
            <span>MAKE IT<br />MEANINGFUL</span>
          </div>
          <div className={styles.heroVisualBottomline}>
            <span>UI / VISUAL / OBJECT</span>
            <span>EST. THROUGH EXPLORATION ↗</span>
          </div>
        </div>

        <div className={styles.heroCapabilities} aria-label="Design disciplines">
          <span>UI/UX DESIGN</span>
          <i />
          <span>GRAPHIC DESIGN</span>
          <i />
          <span>PACKAGING DESIGN</span>
        </div>
      </section>

      <section className={styles.projectsSection} id="selected-work" aria-labelledby="projects-title">
        <div className={styles.sectionHeading}>
          <div>
            <p className="eyebrow">
              <span className="eyebrow__dot" /> SELECTED WORK
            </p>
            <h2 id="projects-title" className={styles.sectionTitle}>
              Ideas brought <em>to life.</em>
            </h2>
            <p className={styles.sectionIntro}>
              A selection of product and visual design explorations, each shaped by a
              different problem, medium, and set of decisions.
            </p>
          </div>
          <span className={styles.projectCount}>
            {String(designProjects.length).padStart(2, "0")} PROJECT
            {designProjects.length === 1 ? "" : "S"}
          </span>
        </div>

        {featuredProject ? (
          <Link
            href={`/design/${featuredProject.slug}/`}
            className={styles.featuredProject}
            aria-label={`Explore ${featuredProject.title} case study`}
          >
            <div className={`${styles.projectArtwork} ${styles.featuredArtwork}`}>
              <ProjectArtwork visual={featuredProject.visual} />
              <span className={styles.artworkIndex}>FEATURED PROJECT / 01</span>
              <span className={styles.artworkOpen}>
                <ArrowUpRight size={20} aria-hidden="true" />
              </span>
              <span className={styles.artworkCaption}>PRODUCT EXPERIENCE · MOBILE CONCEPT</span>
            </div>
            <div className={styles.featuredMeta}>
              <div className={styles.projectText}>
                <p className={styles.projectEyebrow}>UI/UX DESIGN <i>·</i> {featuredProject.year}</p>
                <h3>{featuredProject.title}<span>.</span></h3>
                <p className={styles.projectDescription}>
                  A mobile dining experience concept exploring virtual queueing,
                  pre-ordering, and more purposeful waiting.
                </p>
              </div>
              <span className={styles.projectAction}>
                Explore case study <ArrowUpRight size={17} aria-hidden="true" />
              </span>
            </div>
          </Link>
        ) : (
          <div className={styles.emptyProjects}>
            <span>IN PROGRESS</span>
            <h3>The first project is taking shape.</h3>
            <p>Selected design work will appear here as each case study is ready to share.</p>
          </div>
        )}

        {supportingProjects.length > 0 ? (
          <div className={styles.supportingGrid}>
            {supportingProjects.map((project, index) => (
              <Link
                href={`/design/${project.slug}/`}
                className={styles.supportingProject}
                key={project.slug}
                aria-label={`Explore ${project.title} case study`}
              >
                <div className={styles.supportingArtwork}>
                  <ProjectArtwork visual={project.visual} />
                  <span className={styles.artworkIndex}>
                    SELECTED WORK / {String(index + 2).padStart(2, "0")}
                  </span>
                  <span className={styles.artworkOpen}>
                    <ArrowUpRight size={19} aria-hidden="true" />
                  </span>
                </div>
                <div className={styles.supportingMeta}>
                  <div>
                    <p className={styles.projectEyebrow}>
                      {project.category} <i>·</i> {project.year}
                    </p>
                    <h3>{project.title}<span>.</span></h3>
                    <p className={styles.projectDescription}>{project.summary}</p>
                  </div>
                  <ArrowUpRight className={styles.supportingArrow} size={20} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        ) : null}
      </section>

      <section className={styles.practiceSection} aria-labelledby="practice-title">
        <div className={styles.sectionHeading}>
          <div>
            <p className="eyebrow">
              <span className="eyebrow__dot" /> AREAS OF PRACTICE
            </p>
            <h2 id="practice-title" className={styles.sectionTitle}>
              Different mediums, <em>shared intent.</em>
            </h2>
          </div>
          <p className={styles.practiceAside}>
            Each discipline offers a different way to make an idea clearer, more useful,
            or more memorable.
          </p>
        </div>

        <div className={styles.practiceGrid}>
          {practiceAreas.map((area) => {
            const Icon = area.icon;
            return (
              <article
                className={`${styles.practiceCard} ${styles[`practiceCard_${area.tone}`]}`}
                key={area.number}
              >
                <div className={styles.practiceCardTop}>
                  <span>{area.number} / 03</span>
                  <Icon size={23} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div className={styles.practiceCardBody}>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </div>
                <div className={styles.practiceCardBottom}>
                  <span>{area.detail}</span>
                  <span className={styles.practiceCardMark} aria-hidden="true">↗</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.processSection} aria-labelledby="process-title">
        <div className={styles.processIntro}>
          <p className="eyebrow">
            <span className="eyebrow__dot" /> DESIGN APPROACH
          </p>
          <h2 id="process-title" className={styles.sectionTitle}>
            Thoughtful by <em>process.</em>
          </h2>
          <p className={styles.sectionIntro}>
            The approach shifts with the project, but I value a process that starts with
            understanding and leaves room to question, test, and refine decisions.
          </p>
        </div>
        <div className={styles.processList}>
          {designSteps.map((step) => (
            <div className={styles.processStep} key={step.number}>
              <span className={styles.processNumber}>{step.number}</span>
              <div className={styles.processStepCopy}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <span className={styles.processArrow} aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaGraphic} aria-hidden="true">
          <span>LET&apos;S</span>
          <em>make</em>
          <span>IT MATTER<span className={styles.ctaPeriod}>.</span></span>
          <div className={styles.ctaOrbit} />
        </div>
        <div className={styles.ctaCopy}>
          <p className="eyebrow">
            <span className="eyebrow__dot" /> HAVE A PROJECT IN MIND?
          </p>
          <h2>Have an idea worth <em>shaping?</em></h2>
          <p>
            I&apos;m open to conversations around thoughtful digital products, visual
            communication, and design collaborations.
          </p>
          <Link href="/contact/" className={styles.ctaLink}>
            Let&apos;s talk <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
