import Link from "next/link";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  MapPinOff,
  ShieldCheck,
  Smartphone,
  Utensils,
} from "lucide-react";
import type { Project } from "@/lib/projects";
import styles from "./dineease-case-study.module.css";
import { JourneyExplorer, QueueStateExplorer, VisualSystemExplorer } from "./dineease-interactions";

type VisualVariant = "hero" | "live" | "system";

type VisualPlaceholderProps = {
  label: string;
  title: string;
  note: string;
  variant: VisualVariant;
};

/**
 * Temporary visual placeholder.
 * Replace this component instance with a real <Image /> when the final asset is ready.
 * Suggested assets: public/images/projects/dineease/...
 */
function VisualPlaceholder({ label, title, note, variant }: VisualPlaceholderProps) {
  const variantClass: Record<VisualVariant, string> = {
    hero: styles.visualHero,
    live: styles.visualLive,
    system: styles.visualSystem,
  };

  return (
    <figure className={`${styles.visualPlaceholder} ${variantClass[variant]}`}>
      <div className={styles.visualPlaceholderTop}>
        <span>VISUAL PLACEHOLDER</span>
        <span>{label}</span>
      </div>

      {variant === "hero" ? (
        <div className={styles.heroMockupStage} aria-hidden="true">
          <div className={`${styles.mockPhone} ${styles.mockPhoneBack}`}>
            <div className={styles.mockPhoneStatus}><span>9:41</span><span>•••</span></div>
            <span className={styles.mockMiniLabel}>QUEUE STATUS</span>
            <strong className={styles.mockQueueNumber}>A-13</strong>
            <span className={styles.mockQueueCaption}>12 groups ahead of you</span>
            <div className={styles.mockEta}>◷ Est. time · 20 mins</div>
            <div className={styles.mockFoodRows}><i /><i /><i /></div>
          </div>
          <div className={`${styles.mockPhone} ${styles.mockPhoneFront}`}>
            <div className={styles.mockPhoneStatus}><span>9:41</span><span>•••</span></div>
            <span className={styles.mockMiniLabel}>DINEEASE · TICKET A-13</span>
            <span className={styles.mockLivePill}>● Table almost ready</span>
            <strong className={styles.mockPhoneHeading}>Your table<br />is almost ready.</strong>
            <div className={styles.mockPhoneButton}>I&apos;m nearby</div>
          </div>
          <div className={styles.mockFloatingNote}><Clock3 size={15} /> Waiting, reimagined.</div>
          <div className={styles.mockAccentCircle} />
        </div>
      ) : variant === "live" ? (
        <div className={styles.liveStage} aria-hidden="true">
          <div className={styles.livePhoneShell}>
            <div className={styles.liveIsland}>
              <span className={styles.liveAppMark}>D</span>
              <div><b>DineEase · A-13</b><small>Table almost ready</small></div>
              <span className={styles.liveDot} />
            </div>
            <div className={styles.liveWallpaper}><span>iOS LIVE ACTIVITY</span><strong>02:59</strong><small>Confirm your arrival</small></div>
          </div>
          <div className={styles.liveDecisionNote}><ShieldCheck size={17} /><span>Context without<br />always-on tracking</span></div>
        </div>
      ) : (
        <VisualSystemExplorer />
      )}

      <figcaption className={styles.visualCaption}>
        <strong>{title}</strong>
        <span>{note}</span>
      </figcaption>
    </figure>
  );
}

const painPoints = [
  {
    number: "01",
    title: "Unpredictable waits",
    description: "Without a clear view of queue progress, even a short wait can feel much longer.",
  },
  {
    number: "02",
    title: "Dead time",
    description: "The gap between joining a queue and being seated often becomes idle time with little to do.",
  },
];

const researchMethods = [
  {
    number: "01",
    title: "Desk research",
    description: "Explored restaurant dining and queueing patterns to understand where uncertainty and friction commonly appear.",
  },
  {
    number: "02",
    title: "First-hand experience",
    description: "Used personal experience with restaurant reservations, waiting, ordering, and payment as an additional lens.",
  },
  {
    number: "03",
    title: "Journey synthesis",
    description: "Grouped the observations into key moments and opportunities for a more connected dining experience.",
  },
];



export function DineEaseCaseStudy({ project }: { project: Project }) {
  return (
    <main className={`page-container ${styles.page}`}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.breadcrumbLinks}>
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/design/">Design &amp; Product</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">DineEase</span>
        </div>
        <span className={styles.breadcrumbIndex}>DESIGN / CASE STUDY</span>
      </nav>

      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}><span /> {project.category} <i>·</i> {project.year}</p>
          <p className={styles.heroOverline}>A MOBILE QUEUEING &amp; PRE-ORDER CONCEPT</p>
          <h1>Redefining<br />the waiting <em>game.</em></h1>
          <p className={styles.heroSummary}>
            A mobile dining concept that connects virtual queueing and pre-ordering through a more considered experience, with core flows designed to adapt across mobile platforms.
          </p>
          <p className={styles.bodyCopy}>
            <strong>Platform note:</strong> DineEase is conceived as a mobile product, not an iOS-only service. This case study shows the iOS-focused interface exploration prepared for an Apple Developer Academy application; Android-specific screens and interactions were outside this iteration.
          </p>
          <div className={styles.heroTags}>
            <span>Self-initiated concept</span>
            <span>Mobile product concept</span>
            <span>iOS interface exploration</span>
            <span>UI/UX Design</span>
          </div>
        </div>
        <VisualPlaceholder
          variant="hero"
          label="01 / PRODUCT OVERVIEW"
          title="Hero app mockups"
          note="The current showcase uses iPhone screens for the iOS exploration; the underlying product concept is not limited to iOS."
        />
        <div className={styles.heroFootnote}><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16} /></div>
      </header>

      <section className={styles.projectFacts} aria-label="Project details">
        <div><span>MY ROLE</span><strong>Product concept, exploratory UX research, UX &amp; UI design</strong></div>
        <div><span>PLATFORM APPROACH</span><strong>Mobile product concept</strong></div>
        <div><span>UI EXPLORATION</span><strong>iOS-focused screens for an Apple Developer Academy application</strong></div>
        <div><span>TOOLS &amp; REFERENCES</span><strong>Figma, FigJam, Apple Human Interface Guidelines (iOS reference)</strong></div>
      </section>

      <section className={styles.introSection} id="challenge">
        <div className={styles.sectionRail}><span>01</span><span>THE CHALLENGE</span></div>
        <div className={styles.introCopy}>
          <p className={styles.kicker}><span /> THE INEFFICIENT IN-BETWEEN</p>
          <h2>The experience starts before the first bite.</h2>
          <p className={styles.lead}>
            Dining out can lose its momentum before guests even sit down. DineEase began with a simple frustration: the dead time between waiting for a table and waiting for food.
          </p>
          <p className={styles.bodyCopy}>
            The concept explores how clearer queue expectations and the option to prepare an order while waiting could make that in-between time feel more purposeful.
          </p>
          <div className={styles.painGrid}>
            {painPoints.map((item) => (
              <article className={styles.painCard} key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.researchSection} id="research">
        <div className={styles.sectionHeader}>
          <div><p className={styles.kicker}><span /> 02 / EXPLORATION</p><h2>Start with the<br /><em>friction.</em></h2></div>
          <p className={styles.sectionIntro}>
            The exploratory research combined desk research with first-hand experience of restaurant reservations and dining processes. The goal was to understand where uncertainty interrupts the experience.
          </p>
        </div>
        <div className={styles.researchGrid}>
          {researchMethods.map((method) => (
            <article className={styles.researchCard} key={method.number}>
              <span>{method.number}</span>
              <h3>{method.title}</h3>
              <p>{method.description}</p>
            </article>
          ))}
        </div>
        <div className={styles.researchNote}>
          <ShieldCheck size={18} />
          <p><strong>Research scope:</strong> These are exploratory inputs and synthesized design insights. This case study does not claim formal participant interviews, surveys, or usability-test results.</p>
        </div>
      </section>

      <section className={styles.personaSection} id="users">
        <div className={styles.sectionHeader}>
          <div><p className={styles.kicker}><span /> 03 / USER ARCHETYPES</p><h2>Two mindsets.<br /><em>One frustration.</em></h2></div>
          <p className={styles.sectionIntro}>The concept considers two time-conscious dining archetypes with different motivations but a shared need for clearer expectations.</p>
        </div>
        <div className={styles.personaGrid}>
          <article className={styles.personaCard}>
            <div className={styles.personaTop}><span>ARCHETYPE 01</span><Clock3 size={21} /></div>
            <p className={styles.personaType}>THE BUSY PROFESSIONAL</p>
            <h3>Time is part of the plan.</h3>
            <p>Works around a tight schedule, such as a 60-minute lunch break, and needs enough certainty to dine without disrupting the day.</p>
            <div className={styles.personaNeed}><span>NEEDS</span><strong>Predictable waits and a smooth dining flow.</strong></div>
          </article>
          <article className={`${styles.personaCard} ${styles.personaCardAlt}`}>
            <div className={styles.personaTop}><span>ARCHETYPE 02</span><Utensils size={21} /></div>
            <p className={styles.personaType}>THE INTENTIONAL FOODIE</p>
            <h3>Quality is worth waiting for.</h3>
            <p>Enjoys discovering restaurants and trying new menus, but dislikes uncertainty around queue status and what to expect.</p>
            <div className={styles.personaNeed}><span>NEEDS</span><strong>Transparent queue updates and menu information upfront.</strong></div>
          </article>
        </div>
        <p className={styles.captionNote}>Archetypes are exploratory representations used to guide the concept, not validated research personas.</p>
      </section>

      <section className={styles.journeySection} id="solution">
        <div className={styles.sectionHeader}>
          <div><p className={styles.kicker}><span /> 04 / THE EXPERIENCE</p><h2>Make waiting<br /><em>purposeful.</em></h2></div>
          <p className={styles.sectionIntro}>Instead of trying to remove every queue, DineEase focuses on making the wait more predictable and giving customers something useful to do while they wait.</p>
        </div>
        <JourneyExplorer />
      </section>

      <section className={styles.queueSection} id="queueing">
        <div className={styles.sectionHeader}>
          <div><p className={styles.kicker}><span /> 05 / SYSTEM BEHAVIOUR</p><h2>One entry point.<br /><em>Two paths.</em></h2></div>
          <p className={styles.sectionIntro}>The “Get in Line” entry adapts to the restaurant’s current capacity, so the experience can respond instead of leading users into a dead end.</p>
        </div>
        <QueueStateExplorer />
      </section>

      <section className={styles.privacySection} id="privacy">
        <div className={styles.privacyIntro}>
          <p className={styles.kicker}><span /> 06 / A KEY DESIGN PIVOT</p>
          <h2>Privacy is part of the <em>experience.</em></h2>
          <p>Preventing no-shows initially led to exploring GPS geofencing. The more closely the idea was examined, the more it introduced friction and unnecessary location access for a queueing experience.</p>
        </div>
        <div className={styles.privacyCompare}>
          <article className={styles.privacyOptionOld}>
            <span className={styles.optionLabel}>INITIAL EXPLORATION</span>
            <div className={styles.optionIcon}><MapPinOff size={22} /></div>
            <h3>Always-on geofencing</h3>
            <p>Could help detect arrival, but would require continuous location access, introduce battery concerns, and create additional permission friction.</p>
            <span className={styles.optionStatus}>RECONSIDERED</span>
          </article>
          <div className={styles.privacyArrow}><ArrowRight size={20} /></div>
          <article className={styles.privacyOptionNew}>
            <span className={styles.optionLabel}>REFINED DIRECTION</span>
            <div className={styles.optionIcon}><ShieldCheck size={22} /></div>
            <h3>Context-aware check-in</h3>
            <p>Manual check-in provides the core interaction without relying on always-on location tracking. In the iOS-focused presentation, queue updates are surfaced through Live Activities and the Dynamic Island; an Android adaptation would need its own platform-appropriate update pattern.</p>
            <span className={styles.optionStatus}>SELECTED DIRECTION</span>
          </article>
        </div>
        <VisualPlaceholder
          variant="live"
          label="IOS-SPECIFIC INTERFACE EXAMPLE"
          title="iOS Live Activity queue update"
          note="This illustrates one iOS-specific expression of contextual queue updates; Android behaviour would be designed separately."
        />
      </section>

      <section className={styles.accountabilitySection} id="accountability">
        <div className={styles.sectionHeader}>
          <div><p className={styles.kicker}><span /> 07 / SERVICE LOGIC</p><h2>Empathy meets<br /><em>accountability.</em></h2></div>
          <p className={styles.sectionIntro}>The concept explores ways to discourage repeated no-shows without introducing a heavy payment gateway or making cancellation unnecessarily difficult.</p>
        </div>
        <div className={styles.accountabilityGrid}>
          <article className={styles.accountabilityCard}><span>01</span><h3>One-tap cancellation</h3><p>Make cancellation accessible from the active queue experience, reducing the effort required to notify the restaurant. The Live Activity is one iOS-specific presentation of that action.</p></article>
          <article className={styles.accountabilityCard}><span>02</span><h3>Progressive warnings</h3><p>Provide clear, color-coded warnings before a stronger restriction is applied, giving users an opportunity to correct their behaviour.</p></article>
          <article className={styles.accountabilityCard}><span>03</span><h3>Temporary restriction</h3><p>Repeated no-shows can lead to a proposed two-week restriction on remote queueing, with physical queueing still available at the venue.</p></article>
        </div>
        <p className={styles.captionNote}>These are proposed product rules within the concept. Their fairness and effectiveness would need validation with users and restaurant operators.</p>
      </section>

      <section className={styles.visualSystemSection} id="visual-system">
        <div className={styles.sectionHeader}>
          <div><p className={styles.kicker}><span /> 08 / VISUAL FOUNDATION</p><h2>Designed for<br /><em>mobile familiarity.</em></h2></div>
          <p className={styles.sectionIntro}>The core hierarchy and visual identity are intended to carry across mobile platforms. This presentation uses familiar iOS conventions for its initial interface exploration; an Android adaptation would follow its own navigation, typography, and system interaction patterns.</p>
        </div>
        <VisualPlaceholder
          variant="system"
          label="05 / UI FOUNDATION"
          title="Typography, palette & interface elements"
          note="Replace with the actual DineEase type scale, colour palette, components, and representative screens."
        />
        <div className={styles.foundationGrid}>
          <article><span>TYPOGRAPHY</span><strong>SF Pro Display<br />SF Pro Text</strong><p>Used in the iOS-focused exploration. An Android version would map the same hierarchy to a platform-appropriate type system.</p></article>
          <article><span>PALETTE</span><div className={styles.paletteRow}><i /><i /><i /></div><strong>Orange · True Black · Gray</strong><p>A high-contrast visual identity built around a focused orange accent, independent of platform-specific UI surfaces.</p></article>
          <article><span>STRUCTURE</span><strong>Platform-aware patterns</strong><p>Core flows remain consistent while navigation, system UI, and interaction patterns adapt to each operating system.</p></article>
        </div>
      </section>

      <section className={styles.scopeSection} id="scope">
        <div className={styles.scopeCard}>
          <div><p className={styles.kicker}><span /> 09 / SCOPE REFINEMENT</p><h2>The art of <em>subtraction.</em></h2></div>
          <div className={styles.scopeCopy}>
            <p>Early exploration considered a broader restaurant experience. The refined concept deliberately removed payment gateway and delivery features to keep the product focused on queueing and pre-ordering.</p>
            <div className={styles.scopeRows}>
              <div><span className={styles.scopeRemoved}>REMOVED FROM SCOPE</span><strong>In-app payment gateway</strong><p>Payment is completed at the cashier rather than inside DineEase.</p></div>
              <div><span className={styles.scopeRemoved}>REMOVED FROM SCOPE</span><strong>Delivery features</strong><p>The concept stays focused on the in-restaurant queue-to-table experience.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.reflectionSection} id="reflection">
        <div className={styles.sectionHeader}>
          <div><p className={styles.kicker}><span /> 10 / REFLECTION</p><h2>Make the wait<br /><em>feel different.</em></h2></div>
          <p className={styles.sectionIntro}>DineEase is a product concept, not a validated live service. Its intended value is to make waiting feel more predictable while helping restaurants coordinate queue and pre-order moments.</p>
        </div>
        <div className={styles.reflectionGrid}>
          <article className={styles.reflectionMain}>
            <span>DESIGN TAKEAWAY</span>
            <h3>More features do not always make a better product.</h3>
            <p>Refining the scope around queueing, pre-ordering, and timely updates helped protect the core experience instead of expanding into payment and delivery problems that were outside the concept’s focus.</p>
          </article>
          <article className={styles.nextCard}>
            <span>WHAT&apos;S NEXT?</span>
            <Smartphone size={23} />
            <h3>Explore platform-adaptive updates.</h3>
            <p>A future direction could adapt glanceable queue updates to each platform, from iOS Live Activities to Android notification experiences and compatible wearable surfaces. Each adaptation would need its own interface design and validation.</p>
          </article>
        </div>
        <div className={styles.disclaimer}><ShieldCheck size={16} /><p>No quantitative impact, usability-test results, or live operational outcomes are claimed in this concept case study.</p></div>
      </section>

      <footer className={styles.caseFooter}>
        <div><p className={styles.kicker}><span /> EXPLORE MORE</p><h2>There&apos;s more to<br /><em>discover.</em></h2></div>
        <div className={styles.caseFooterActions}>
          <Link href="/design/" className={styles.backButton}><ArrowLeft size={16} /> Back to Design</Link>
          <Link href="/contact/" className={styles.contactButton}>Start a conversation <ArrowUpRight size={16} /></Link>
        </div>
      </footer>
    </main>
  );
}
