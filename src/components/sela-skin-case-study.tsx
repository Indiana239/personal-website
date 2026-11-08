import Link from "next/link";
import { Instrument_Serif, Manrope } from "next/font/google";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowUpRight,
  Droplets,
  Layers3,
  PackageCheck,
  Palette,
  Type,
} from "lucide-react";
import type { Project } from "@/lib/projects";
import { SelaSkinExplorer } from "./sela-skin-explorer";
import styles from "./sela-skin-case-study.module.css";

// These fonts are scoped to this case study and its brand mockups only.
// They do not replace the portfolio site's global typography.
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--sela-instrument",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--sela-manrope",
});

const audience = [
  "Young adults and working professionals aged 22–35",
  "People who prefer uncomplicated daily skincare",
  "Consumers drawn to calm, minimal product design",
  "Those looking for a more considered everyday routine",
];

const frontDetails = [
  "Sela Skin wordmark and product name",
  "Daily Hydration Cream product descriptor",
  "A restrained ripple graphic as the visual signature",
  "A clear 50 g net weight indicator",
  "A calm front-panel hierarchy with generous space",
];

const backDetails = [
  "A short brand note: “A Little Space for Your Skin.”",
  "A concise product description",
  "Ingredient information area, pending formula confirmation",
  "Directions for use and product details",
  "Net weight and supporting brand information",
];

export function SelaSkinCaseStudy({ project }: { project: Project }) {
  return (
    <main
      className={`page-container ${styles.page} ${instrumentSerif.variable} ${manrope.variable}`}
    >
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.breadcrumbLinks}>
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/design/">Design &amp; Product</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Sela Skin</span>
        </div>
        <span className={styles.breadcrumbIndex}>DESIGN / PACKAGING CASE STUDY</span>
      </nav>

      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}><span /> {project.category} <i>·</i> {project.year}</p>
          <p className={styles.heroOverline}>CONTEMPORARY SKINCARE BRAND &amp; PACKAGING DESIGN</p>
          <h1>Make space for your <em>skin.</em></h1>
          <p className={styles.heroSummary}>
            A fictional skincare brand built around a simple idea: everyday care can feel more thoughtful when there is room to slow down, reset, and focus on what matters.
          </p>
          <div className={styles.heroTags}>
            <span>Self-initiated concept</span>
            <span>Brand identity</span>
            <span>Packaging design</span>
          </div>
          <Link href="#brand-story" className={styles.heroLink}>
            Explore the concept <ArrowDownRight size={16} />
          </Link>
        </div>

        <div className={styles.heroVisual} aria-label="Conceptual Sela Skin Daily Hydration Cream carton mockup">
          <div className={styles.heroVisualLabel}>
            <span>PACKAGING STUDY / 002</span>
            <span>DAILY HYDRATION CREAM · 50 g</span>
          </div>
          <div className={styles.heroOrb} />
          <div className={styles.heroOrbInner} />
          <div className={styles.heroShadow} />
          <div className={styles.heroCarton}>
            <span className={styles.heroCartonTop} />
            <span className={styles.heroCartonMicro}>EVERYDAY SKINCARE, WITH SPACE TO BREATHE</span>
            <strong className={styles.heroWordmark}>sela<span> skin</span><i>.</i></strong>
            <span className={styles.heroProductName}>DAILY<br />HYDRATION CREAM</span>
            <span className={styles.heroCartonRipple} aria-hidden="true">
              <svg viewBox="0 0 220 150" role="presentation">
                <ellipse cx="110" cy="76" rx="96" ry="57" />
                <ellipse cx="110" cy="76" rx="74" ry="43" />
                <ellipse cx="110" cy="76" rx="51" ry="29" />
                <ellipse cx="110" cy="76" rx="27" ry="15" />
              </svg>
            </span>
            <span className={styles.heroCartonFooter}><span>DAILY MOISTURIZER</span><b>50 g</b></span>
            <span className={styles.heroCartonSide}>MAKE SPACE FOR YOUR SKIN</span>
          </div>
          <span className={styles.heroVisualFoot}>CONCEPTUAL CSS MOCKUP / NOT FINAL PACKAGING ARTWORK</span>
        </div>
        <div className={styles.heroFootnote}><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16} /></div>
      </header>

      <section className={styles.projectFacts} aria-label="Project information">
        <div><span>PROJECT TYPE</span><strong>Self-initiated concept</strong></div>
        <div><span>INDUSTRY</span><strong>Beauty &amp; Skincare</strong></div>
        <div><span>PACKAGING FORMAT</span><strong>50 g reverse tuck end carton</strong></div>
        <div><span>DELIVERABLES</span><strong>Brand concept, visual direction, packaging, mockup</strong></div>
      </section>

      <section className={styles.storySection} id="brand-story">
        <div className={styles.sectionRail}><span>01</span><span>THE BEGINNING</span></div>
        <div className={styles.storyContent}>
          <p className={styles.kicker}><span /> A SPACE IN BETWEEN</p>
          <h2>Sometimes, care begins with a <em>pause.</em></h2>
          <p className={styles.lead}>
            Everyday routines can become crowded with steps, claims, and constant choices. Sela Skin starts from a quieter point of view: skincare does not need to feel complicated to feel considered.
          </p>
          <p className={styles.bodyCopy}>
            The name “Sela” refers to a pause or a space between moments. It becomes the foundation for a brand that makes room for simple, personal skincare rituals, without adding noise to an already busy day.
          </p>
          <div className={styles.quoteCard}>
            <span>THE MEANING BEHIND THE NAME</span>
            <strong>Sela</strong>
            <p>A pause. A little space between moments.</p>
            <i aria-hidden="true">◯</i>
          </div>
        </div>
      </section>

      <section className={styles.conceptSection}>
        <div className={styles.sectionHeader}>
          <div><p className={styles.kicker}><span /> 02 / BRAND CONCEPT</p><h2>Simple care, with <em>intention.</em></h2></div>
          <p className={styles.sectionIntro}>
            Sela Skin is positioned as a contemporary skincare brand that makes everyday skincare feel simple, approachable, and intentional through a calm identity and straightforward product communication.
          </p>
        </div>
        <div className={styles.conceptGrid}>
          <article className={styles.positioningCard}>
            <span className={styles.microLabel}>BRAND POSITIONING</span>
            <Droplets size={25} strokeWidth={1.4} />
            <h3>Everyday skincare, made considered.</h3>
            <p>A modern skincare concept that focuses on simple routines, clear information, and a more personal approach to daily care.</p>
            <span className={styles.cardIndex}>01 / POSITION</span>
          </article>
          <article className={styles.audienceCard}>
            <span className={styles.microLabel}>WHO IT IS FOR</span>
            <h3>People making room for care.</h3>
            <ul>{audience.map((item) => <li key={item}>{item}</li>)}</ul>
            <span className={styles.cardIndex}>02 / AUDIENCE</span>
          </article>
          <article className={styles.personalityCard}>
            <span className={styles.microLabel}>BRAND PERSONALITY</span>
            <h3>Calm. Modern.<br /><em>Quietly confident.</em></h3>
            <div className={styles.personalityWords}>
              <span>THOUGHTFUL</span><span>GENTLE</span><span>APPROACHABLE</span>
            </div>
            <span className={styles.cardIndex}>03 / CHARACTER</span>
          </article>
        </div>
      </section>

      <section className={styles.visualSection} id="visual-direction">
        <div className={styles.sectionHeader}>
          <div><p className={styles.kicker}><span /> 03 / VISUAL DIRECTION</p><h2>Quiet forms, <em>clear purpose.</em></h2></div>
          <p className={styles.sectionIntro}>
            The visual language balances modern clinical clarity with soft minimalism. Instead of relying on familiar botanical decoration, the identity uses open space, gentle contrast, and abstract water-inspired forms.
          </p>
        </div>

        <div className={styles.visualDirectionGrid}>
          <div className={styles.rippleCard}>
            <div className={styles.rippleTop}><span>GRAPHIC INSPIRATION</span><span>WATER / SPACE / BALANCE</span></div>
            <div className={styles.rippleArtwork}>
              <span className={styles.rippleDisc} />
              <svg viewBox="0 0 680 300" role="img" aria-label="Abstract concentric water ripple graphic">
                <ellipse cx="340" cy="150" rx="270" ry="112" />
                <ellipse cx="340" cy="150" rx="220" ry="88" />
                <ellipse cx="340" cy="150" rx="168" ry="64" />
                <ellipse cx="340" cy="150" rx="116" ry="42" />
                <ellipse cx="340" cy="150" rx="62" ry="21" />
              </svg>
              <span className={styles.rippleCaption}>A SMALL PAUSE / A RETURN TO CENTER</span>
            </div>
            <p>Soft concentric forms suggest a ripple moving through water: a subtle visual metaphor for creating space, finding balance, and returning to a simple routine.</p>
          </div>

          <div className={styles.visualPrinciples}>
            <article><span>01</span><Palette size={19} /><div><h3>Muted contrast</h3><p>Ivory, lilac, and blue create a gentle palette anchored by a deep navy.</p></div></article>
            <article><span>02</span><Type size={19} /><div><h3>Expressive restraint</h3><p>A refined serif brings warmth, while a functional sans serif keeps product information clear.</p></div></article>
            <article><span>03</span><Layers3 size={19} /><div><h3>Abstract graphics</h3><p>Water ripples and concentric forms provide recognition without visual clutter.</p></div></article>
          </div>
        </div>

        <div className={styles.typePaletteGrid}>
          <article className={styles.typeSpecimen}>
            <span className={styles.microLabel}>BRAND TYPOGRAPHY</span>
            <div className={styles.typeSpecimenDisplay}>Sela<br /><em>Skin.</em></div>
            <div className={styles.typeSpecimenFoot}><span>INSTRUMENT SERIF</span><b>DISPLAY / WORDMARK</b></div>
            <div className={styles.typeDivider} />
            <div className={styles.manropeSample}>
              <strong>Make space for your skin.</strong>
              <span>Manrope · Product information &amp; supporting text</span>
            </div>
            <p className={styles.typeNote}>This type pairing belongs to the Sela Skin brand system and packaging artwork, not the portfolio website typography.</p>
          </article>
          <article className={styles.paletteSpecimen}>
            <span className={styles.microLabel}>COLOUR PALETTE</span>
            <div className={styles.paletteSwatches}>
              <div><span style={{ backgroundColor: "#F4F1EB" }} /><b>Warm Ivory</b><small>#F4F1EB</small></div>
              <div><span style={{ backgroundColor: "#DCD9EA" }} /><b>Soft Lilac</b><small>#DCD9EA</small></div>
              <div><span style={{ backgroundColor: "#9EBAC7" }} /><b>Mist Blue</b><small>#9EBAC7</small></div>
              <div><span style={{ backgroundColor: "#303947" }} /><b>Ink Navy</b><small>#303947</small></div>
            </div>
            <p>Warm neutrals and cool muted tones create a calm foundation, with Ink Navy adding structure and legibility.</p>
          </article>
        </div>
      </section>

      <section className={styles.packagingSection} id="packaging-design">
        <div className={styles.sectionHeader}>
          <div><p className={styles.kicker}><span /> 04 / PACKAGING CONCEPT</p><h2>A little space on the <em>shelf.</em></h2></div>
          <p className={styles.sectionIntro}>
            The first application is a conceptual 50 g Daily Hydration Cream packed in a reverse tuck end folding carton. The layout uses a clear front hierarchy and a more informative back panel.
          </p>
        </div>
        <SelaSkinExplorer />
      </section>

      <section className={styles.panelSection}>
        <div className={styles.sectionHeader}>
          <div><p className={styles.kicker}><span /> 05 / INFORMATION HIERARCHY</p><h2>Clarity on every <em>side.</em></h2></div>
          <p className={styles.sectionIntro}>The front panel introduces the product at a glance. The back and side panels hold supporting information in a considered, readable order.</p>
        </div>
        <div className={styles.panelDetailsGrid}>
          <article className={styles.panelDetailCard}>
            <div className={styles.panelDetailHeader}><span>01 / FRONT PANEL</span><strong>First impression</strong></div>
            <p>The front keeps the brand and product name prominent, while category and net weight remain easy to locate.</p>
            <ul>{frontDetails.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className={styles.panelMiniFront}>
              <span className={styles.miniWordmark}>sela<span> skin</span><i>.</i></span>
              <strong>DAILY<br />HYDRATION CREAM</strong>
              <i className={styles.miniRipple} />
              <small>50 g</small>
            </div>
          </article>
          <article className={styles.panelDetailCard}>
            <div className={styles.panelDetailHeader}><span>02 / BACK &amp; SIDE PANELS</span><strong>More context</strong></div>
            <p>The supporting panels create room for product context, directions, and formula information without crowding the front.</p>
            <ul>{backDetails.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className={styles.panelMiniBack}>
              <b>A LITTLE SPACE FOR YOUR SKIN.</b>
              <span>PRODUCT DETAILS</span><i /><i /><i />
              <small>HOW TO USE · INGREDIENTS · 50 g</small>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.experienceSection}>
        <div className={styles.sectionRail}><span>06</span><span>PRODUCT EXPERIENCE</span></div>
        <div className={styles.experienceContent}>
          <p className={styles.kicker}><span /> BEYOND THE VISUAL</p>
          <h2>Designed to feel <em>straightforward.</em></h2>
          <p className={styles.lead}>Packaging should help people recognise a product, understand its purpose, and find the information they need without unnecessary effort.</p>
          <div className={styles.experiencePoints}>
            <article><span>01</span><div><strong>Clear product recognition</strong><p>The brand, product name, category, and net weight are organised for quick scanning.</p></div></article>
            <article><span>02</span><div><strong>Considered information flow</strong><p>Product description, directions, and formula details are assigned to supporting panels.</p></div></article>
            <article><span>03</span><div><strong>A consistent visual language</strong><p>Typography, muted colour, and ripple graphics connect the carton panels into one identity.</p></div></article>
          </div>
        </div>
      </section>

      <section className={styles.reflectionSection}>
        <div className={styles.reflectionVisual}>
          <span className={styles.reflectionOverline}>SELA SKIN / BRAND NOTE</span>
          <strong>Make space<br />for your<br /><em>skin.</em></strong>
          <span className={styles.reflectionRipple} aria-hidden="true" />
          <span className={styles.reflectionBottom}>A LITTLE SPACE FOR YOUR SKIN</span>
        </div>
        <div className={styles.reflectionCopy}>
          <p className={styles.kicker}><span /> 07 / FINAL DIRECTION</p>
          <h2>Less noise. More room for <em>care.</em></h2>
          <p>
            Sela Skin explores a quieter direction for everyday skincare packaging. A simple brand idea, a restrained clinical-inspired palette, and abstract ripple graphics come together to create an identity that feels contemporary, approachable, and calm.
          </p>
          <p className={styles.reflectionTagline}>Sela Skin — Make Space for Your Skin.</p>
          <Link href="/design/" className={styles.backLink}><ArrowLeft size={15} /> Back to Design</Link>
        </div>
      </section>

      <footer className={styles.caseFooter}>
        <div className={styles.disclaimer}>
          <span>CONCEPT PROJECT NOTE</span>
          <p>
            Sela Skin is a fictional brand developed as a self-initiated branding and packaging design concept. Daily Hydration Cream, product descriptions, ingredient areas, directions, and packaging specifications are illustrative. No commercial formulation, ingredient list, product claims, regulatory copy, or production-ready dieline has been verified.
          </p>
        </div>
        <Link href="/contact/" className={styles.contactLink}>Have a project in mind? <ArrowUpRight size={17} /></Link>
      </footer>
    </main>
  );
}
