import Link from "next/link";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowUpRight,
  Coffee,
  Leaf,
  PackageCheck,
  Palette,
  Type,
} from "lucide-react";
import type { Project } from "@/lib/projects";
import { TitikPagiExplorer } from "./titik-pagi-explorer";
import styles from "./titik-pagi-case-study.module.css";

const audience = [
  "Young professionals and creative individuals",
  "Everyday coffee drinkers who brew at home",
  "People interested in Indonesian specialty coffee",
  "Consumers drawn to thoughtful, understated products",
];

const frontDetails = [
  "Titik Pagi wordmark",
  "Gayo Highland origin and Specialty Arabica identification",
  "Layered mountain contour illustration",
  "Brown Sugar, Plum, and Black Coffee tasting notes",
  "Medium Roast and 250 g product information",
];

const backDetails = [
  "A short brand story connected to the morning ritual",
  "Coffee specifications and product information",
  "Brewing recommendations",
  "Producer information",
  "Vertical tagline: “Titik Awal Rutinitasmu”",
];

export function TitikPagiCaseStudy({ project }: { project: Project }) {
  return (
    <main className={`page-container ${styles.page}`}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.breadcrumbLinks}>
          <Link href="/">Home</Link><span aria-hidden="true">/</span>
          <Link href="/design/">Design &amp; Product</Link><span aria-hidden="true">/</span>
          <span aria-current="page">Titik Pagi</span>
        </div>
        <span className={styles.breadcrumbIndex}>DESIGN / PACKAGING CASE STUDY</span>
      </nav>

      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}><span /> {project.category} <i>·</i> {project.year}</p>
          <p className={styles.heroOverline}>SPECIALTY COFFEE BRAND &amp; PACKAGING DESIGN</p>
          <h1>A thoughtful beginning to an <em>everyday ritual.</em></h1>
          <p className={styles.heroSummary}>
            An imagined Indonesian specialty coffee brand inspired by the Gayo highlands, built around the small moments that make every morning meaningful.
          </p>
          <div className={styles.heroTags}>
            <span>Self-initiated concept</span><span>Brand identity</span><span>Packaging design</span>
          </div>
          <Link href="#brand-story" className={styles.heroLink}>Explore the concept <ArrowDownRight size={16} /></Link>
        </div>

        <div className={styles.heroVisual} aria-label="Temporary Titik Pagi stand-up pouch mockup">
          <div className={styles.heroVisualLabel}><span>PACKAGING STUDY / 001</span><span>250 g · ZIPLOCK POUCH</span></div>
          <div className={styles.heroBackdropCircle} />
          <div className={styles.heroPouchShadow} />
          <div className={styles.heroPouch}>
            <span className={styles.heroPouchSeal} />
            <span className={styles.heroPouchMicro}>SPECIALTY COFFEE · INDONESIA</span>
            <strong>Titik<br /><em>Pagi</em><i>.</i></strong>
            <span className={styles.heroPouchOrigin}>GAYO HIGHLAND<br /><small>SPECIALTY ARABICA</small></span>
            <span className={styles.heroMountains} />
            <span className={styles.heroFlavor}>BROWN SUGAR · PLUM · BLACK COFFEE</span>
            <span className={styles.heroPouchBottom}><b>MEDIUM ROAST</b><b>250 g</b></span>
            <span className={styles.heroPouchGusset} />
          </div>
          <span className={styles.heroSticker}>A LITTLE<br />STARTING<br />POINT <i>✳</i></span>
          <span className={styles.heroVisualFoot}>TEMPORARY CSS MOCKUP — REPLACE WITH FINAL ARTWORK</span>
        </div>
        <div className={styles.heroFootnote}><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16} /></div>
      </header>

      <section className={styles.projectFacts} aria-label="Project information">
        <div><span>PROJECT TYPE</span><strong>Self-initiated concept</strong></div>
        <div><span>INDUSTRY</span><strong>Food &amp; Beverage / Specialty Coffee</strong></div>
        <div><span>PACKAGING FORMAT</span><strong>250 g stand-up pouch with ziplock</strong></div>
        <div><span>DELIVERABLES</span><strong>Brand concept, visual direction, packaging, mockup</strong></div>
      </section>

      <section className={styles.storySection} id="brand-story">
        <div className={styles.sectionRail}><span>01</span><span>THE BEGINNING</span></div>
        <div className={styles.storyContent}>
          <p className={styles.kicker}><span /> WHERE EVERY DAY STARTS</p>
          <h2>Every morning begins <em>somewhere.</em></h2>
          <p className={styles.lead}>
            For some, it starts with a quiet moment before the day gets busy. For others, it begins with the familiar aroma of freshly brewed coffee.
          </p>
          <p className={styles.bodyCopy}>
            Titik Pagi was imagined around this simple idea: coffee is more than a daily beverage. It can be a small ritual that gives people a moment to pause, recharge, and prepare for the day ahead.
          </p>
          <div className={styles.quoteCard}>
            <span>THE MEANING BEHIND THE NAME</span>
            <strong>Titik Pagi</strong>
            <p>“The starting point of the morning.”</p>
            <i aria-hidden="true">✳</i>
          </div>
        </div>
      </section>

      <section className={styles.conceptSection}>
        <div className={styles.sectionHeader}>
          <div><p className={styles.kicker}><span /> 02 / BRAND CONCEPT</p><h2>A moment worth <em>keeping.</em></h2></div>
          <p className={styles.sectionIntro}>
            A contemporary Indonesian specialty coffee concept that brings the character of local coffee closer to everyday routines, without making the experience feel overly complicated.
          </p>
        </div>
        <div className={styles.conceptGrid}>
          <article className={styles.positioningCard}>
            <span className={styles.microLabel}>BRAND POSITIONING</span>
            <Coffee size={25} strokeWidth={1.4} />
            <h3>Specialty coffee, made approachable.</h3>
            <p>A thoughtful coffee brand that celebrates origin, flavour, and the little moments that make every morning meaningful.</p>
            <span className={styles.cardIndex}>01 / POSITION</span>
          </article>
          <article className={styles.audienceCard}>
            <span className={styles.microLabel}>WHO IT IS FOR</span>
            <h3>Everyday coffee people.</h3>
            <ul>{audience.map((item) => <li key={item}>{item}</li>)}</ul>
            <span className={styles.cardIndex}>02 / AUDIENCE</span>
          </article>
          <article className={styles.personalityCard}>
            <span className={styles.microLabel}>BRAND PERSONALITY</span>
            <h3>Warm. Grounded.<br /><em>Quietly distinctive.</em></h3>
            <div className={styles.personalityWords}><span>THOUGHTFUL</span><span>APPROACHABLE</span><span>GROUNDED</span></div>
            <span className={styles.cardIndex}>03 / CHARACTER</span>
          </article>
        </div>
      </section>

      <section className={styles.visualSection} id="visual-direction">
        <div className={styles.sectionHeader}>
          <div><p className={styles.kicker}><span /> 03 / VISUAL DIRECTION</p><h2>Inspired by <em>nature.</em></h2></div>
          <p className={styles.sectionIntro}>
            The visual identity takes cues from the layered landscape and calm atmosphere of the Gayo highlands. The direction interprets that setting through restrained colour, expressive typography, and a continuous mountain contour.
          </p>
        </div>

        <div className={styles.visualDirectionGrid}>
          <div className={styles.landscapeCard}>
            <div className={styles.landscapeTop}><span>VISUAL INSPIRATION</span><span>GAYO HIGHLANDS / ACEH</span></div>
            <div className={styles.landscapeArtwork}>
              <span className={styles.sunDisc} />
              <svg viewBox="0 0 680 270" role="img" aria-label="Abstract layered highland landscape illustration">
                <path d="M0 182 C68 129 105 72 175 105 C235 135 256 187 323 164 C394 140 419 52 495 74 C572 96 615 147 680 112 L680 270 L0 270Z" />
                <path d="M0 207 C76 161 116 121 186 145 C246 165 277 213 343 190 C409 167 446 112 514 128 C579 143 632 186 680 164 L680 270 L0 270Z" />
                <path d="M0 230 C81 198 139 171 201 185 C270 201 294 236 361 222 C432 208 466 166 531 181 C587 194 638 222 680 207 L680 270 L0 270Z" />
                <path d="M0 246 C94 224 145 204 219 215 C289 226 318 251 378 243 C447 234 489 205 548 214 C606 222 651 240 680 233" />
              </svg>
              <span className={styles.landscapeCaption}>LAYERED LINES / A QUIET LANDSCAPE</span>
            </div>
            <p>Rather than literal coffee bean illustrations, the mountain contours create a more understated connection to the imagined origin.</p>
          </div>

          <div className={styles.visualPrinciples}>
            <article><span>01</span><Leaf size={19} /><div><h3>Grounded colour</h3><p>Earthy tones create a warm and natural foundation.</p></div></article>
            <article><span>02</span><Type size={19} /><div><h3>Expressive typography</h3><p>A characterful serif meets a clear, functional sans serif.</p></div></article>
            <article><span>03</span><PackageCheck size={19} /><div><h3>Purposeful graphics</h3><p>Mountain contours create recognition without unnecessary decoration.</p></div></article>
          </div>
        </div>

        <div className={styles.typePaletteGrid}>
          <article className={styles.typeSpecimen}>
            <span className={styles.microLabel}>TYPOGRAPHY SYSTEM</span>
            <div className={styles.typeSpecimenDisplay}>Titik<br /><em>Pagi.</em></div>
            <div className={styles.typeSpecimenFoot}><span>FRAUNCES</span><b>DISPLAY / BRAND NAME</b></div>
            <div className={styles.typeDivider} />
            <div className={styles.dmSample}><strong>Everyday coffee, thoughtfully made.</strong><span>DM Sans · Product information & supporting text</span></div>
          </article>
          <article className={styles.paletteSpecimen}>
            <span className={styles.microLabel}>COLOUR PALETTE</span>
            <div className={styles.paletteSwatches}>
              <div><span style={{ backgroundColor: "#626A46" }} /><b>Olive Green</b><small>#626A46</small></div>
              <div><span style={{ backgroundColor: "#B96849" }} /><b>Terracotta</b><small>#B96849</small></div>
              <div><span style={{ backgroundColor: "#E9E2D1" }} /><b>Warm Cream</b><small>#E9E2D1</small></div>
            </div>
            <p>Three understated tones balance natural character, warmth, and clarity across the packaging.</p>
          </article>
        </div>
      </section>

      <section className={styles.packagingSection} id="packaging-design">
        <div className={styles.sectionHeader}>
          <div><p className={styles.kicker}><span /> 04 / PACKAGING CONCEPT</p><h2>Bringing the brand <em>to life.</em></h2></div>
          <p className={styles.sectionIntro}>
            The first packaging application is a 250 g stand-up pouch with a ziplock closure. Its layout balances brand recognition, coffee information, and everyday usability.
          </p>
        </div>
        <TitikPagiExplorer />
      </section>

      <section className={styles.panelSection}>
        <div className={styles.sectionHeader}>
          <div><p className={styles.kicker}><span /> 05 / INFORMATION HIERARCHY</p><h2>Two panels, <em>two roles.</em></h2></div>
          <p className={styles.sectionIntro}>The front establishes recognition. The back gives the product more context through a structured, editorial information layout.</p>
        </div>
        <div className={styles.panelDetailsGrid}>
          <article className={styles.panelDetailCard}>
            <div className={styles.panelDetailHeader}><span>01 / FRONT PANEL</span><strong>First impression</strong></div>
            <p>The front panel keeps the most recognisable brand and product information visible at a glance.</p>
            <ul>{frontDetails.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className={styles.panelMiniFront}><span>Titik<br /><em>Pagi.</em></span><i /><small>GAYO HIGHLAND · 250 g</small></div>
          </article>
          <article className={styles.panelDetailCard}>
            <div className={styles.panelDetailHeader}><span>02 / BACK PANEL</span><strong>More context</strong></div>
            <p>The back panel uses a two-column editorial structure to organise supporting brand and product information.</p>
            <ul>{backDetails.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className={styles.panelMiniBack}><b>TITIK AWAL RUTINITASMU</b><span>THE STORY</span><i /><i /><i /><small>BREWING · ORIGIN · DETAILS</small></div>
          </article>
        </div>
      </section>

      <section className={styles.experienceSection}>
        <div className={styles.sectionRail}><span>06</span><span>PRODUCT EXPERIENCE</span></div>
        <div className={styles.experienceContent}>
          <p className={styles.kicker}><span /> BEYOND THE VISUAL</p>
          <h2>Designed for the <em>everyday ritual.</em></h2>
          <p className={styles.lead}>Packaging should do more than hold a product. It should help people recognise, understand, and interact with it.</p>
          <div className={styles.experiencePoints}>
            <article><span>01</span><div><strong>Practical format</strong><p>The stand-up pouch and ziplock closure are intended to support storage and repeated opening.</p></div></article>
            <article><span>02</span><div><strong>Quick product recognition</strong><p>Origin, roast level, flavour notes, and net weight are organised for easy scanning.</p></div></article>
            <article><span>03</span><div><strong>Consistent brand touchpoints</strong><p>Typography, colour, and mountain contours connect the front and back into one visual system.</p></div></article>
          </div>
        </div>
      </section>

      <section className={styles.reflectionSection}>
        <div className={styles.reflectionVisual}>
          <span className={styles.reflectionOverline}>TITIK PAGI / BRAND NOTE</span>
          <strong>A thoughtful<br />beginning to an<br /><em>everyday ritual.</em></strong>
          <span className={styles.reflectionMark}>✳</span>
          <span className={styles.reflectionBottom}>TITIK AWAL RUTINITASMU</span>
        </div>
        <div className={styles.reflectionCopy}>
          <p className={styles.kicker}><span /> 07 / FINAL DIRECTION</p>
          <h2>A new beginning, <em>every morning.</em></h2>
          <p>
            Titik Pagi explores how an everyday product can carry a more meaningful visual identity. By combining an Indonesian coffee-inspired concept, earthy colours, expressive typography, and a distinctive landscape illustration, the project aims to create a brand that feels warm, contemporary, and memorable.
          </p>
          <p className={styles.reflectionTagline}>Titik Pagi — A thoughtful beginning to an everyday ritual.</p>
          <Link href="/design/" className={styles.backLink}><ArrowLeft size={15} /> Back to Design</Link>
        </div>
      </section>

      <footer className={styles.caseFooter}>
        <div className={styles.disclaimer}><span>CONCEPT PROJECT NOTE</span><p>Titik Pagi is a fictional brand developed as a self-initiated branding and packaging design concept. Product descriptions, origin specifications, tasting notes, and brewing details are illustrative and are not intended to represent a verified commercial coffee product or production-tested packaging.</p></div>
        <Link href="/contact/" className={styles.contactLink}>Have a project in mind? <ArrowUpRight size={17} /></Link>
      </footer>
    </main>
  );
}
