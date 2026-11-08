"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Layers3, Package, Sparkles } from "lucide-react";
import styles from "./sela-skin-case-study.module.css";

type PackageView = "front" | "back" | "dieline";
type PaletteKey = "ivory" | "lilac" | "blue" | "navy";

const packageViews: { id: PackageView; label: string; description: string }[] = [
  {
    id: "front",
    label: "Front panel",
    description: "The front panel introduces the Sela Skin wordmark, Daily Hydration Cream name, product category, and net weight with a restrained graphic accent.",
  },
  {
    id: "back",
    label: "Back panel",
    description: "The back panel reserves space for a short brand note, product description, directions, and formula information. Ingredient copy is intentionally left as a placeholder.",
  },
  {
    id: "dieline",
    label: "Dieline study",
    description: "A simplified reverse tuck end carton layout showing the main panels and tuck flaps. It is a presentation study, not a measured or production-ready dieline.",
  },
];

const palette = [
  {
    id: "ivory" as const,
    name: "Warm Ivory",
    hex: "#F4F1EB",
    role: "Primary base",
    meaning: "A warm, quiet foundation that keeps the packaging approachable rather than clinical or stark.",
  },
  {
    id: "lilac" as const,
    name: "Soft Lilac",
    hex: "#DCD9EA",
    role: "Soft supporting tone",
    meaning: "Adds a gentle layer of softness and individuality without turning the identity overly decorative.",
  },
  {
    id: "blue" as const,
    name: "Mist Blue",
    hex: "#9EBAC7",
    role: "Cool accent",
    meaning: "Introduces a fresh, water-inspired note that supports the ripple graphic language.",
  },
  {
    id: "navy" as const,
    name: "Ink Navy",
    hex: "#303947",
    role: "Primary contrast",
    meaning: "Provides structure, contrast, and legibility across the brand and product information.",
  },
];

function RippleGraphic() {
  return (
    <svg className={styles.explorerRipple} viewBox="0 0 220 150" role="img" aria-label="Concentric water ripple graphic">
      <ellipse cx="110" cy="76" rx="96" ry="57" />
      <ellipse cx="110" cy="76" rx="74" ry="43" />
      <ellipse cx="110" cy="76" rx="51" ry="29" />
      <ellipse cx="110" cy="76" rx="27" ry="15" />
    </svg>
  );
}

function CartonFront() {
  return (
    <div className={styles.cartonFront} aria-label="Illustrative front carton mockup">
      <span className={styles.cartonTopFold} />
      <span className={styles.cartonMicro}>EVERYDAY SKINCARE</span>
      <strong className={styles.cartonWordmark}>sela<span> skin</span><i>.</i></strong>
      <div className={styles.cartonProductName}>DAILY<br />HYDRATION CREAM</div>
      <RippleGraphic />
      <div className={styles.cartonFrontFooter}><span>DAILY MOISTURIZER</span><b>50 g</b></div>
      <span className={styles.cartonSideMark}>MAKE SPACE FOR YOUR SKIN</span>
    </div>
  );
}

function CartonBack() {
  return (
    <div className={styles.cartonBack} aria-label="Illustrative back carton mockup">
      <span className={styles.cartonBackTop}>SELA SKIN <i>·</i> DAILY CARE</span>
      <div className={styles.cartonBackStory}>
        <span>A LITTLE SPACE FOR YOUR SKIN.</span>
        <strong>Make room for a simple daily ritual.</strong>
        <p>A considered everyday moisturizer concept, designed around a straightforward approach to personal skincare.</p>
      </div>
      <div className={styles.cartonBackInfo}>
        <b>HOW TO USE</b>
        <p>Apply as directed. Final usage instructions to be confirmed.</p>
        <b>INGREDIENT INFORMATION</b>
        <p>Ingredient list pending formula confirmation.</p>
      </div>
      <div className={styles.cartonBackFooter}><span>CONCEPT PACKAGING</span><b>NET WT. 50 g</b></div>
      <span className={styles.cartonBackSide}>DAILY HYDRATION CREAM</span>
    </div>
  );
}

function CartonDieline() {
  return (
    <div className={styles.dielineWrap} aria-label="Simplified reverse tuck end carton dieline study">
      <div className={styles.dielineTopLabel}><span>REVERSE TUCK END / CARTON STUDY</span><span>NOT TO SCALE</span></div>
      <div className={styles.dielineNet}>
        <div className={styles.dielineTopFront}><span>TOP TUCK</span></div>
        <div className={styles.dielineTopBack}><span>BACK TUCK</span></div>
        <div className={styles.dielineGlue}><span>GLUE</span></div>
        <div className={styles.dielineFront}>
          <span>FRONT PANEL</span>
          <strong>sela<span> skin</span><i>.</i></strong>
          <b>DAILY HYDRATION<br />CREAM</b>
          <RippleGraphic />
          <small>50 g</small>
        </div>
        <div className={styles.dielineSide}><span>SIDE PANEL</span><i /><i /><i /><small>DETAILS</small></div>
        <div className={styles.dielineBack}>
          <span>BACK PANEL</span>
          <b>PRODUCT STORY</b><i /><i /><i />
          <b>HOW TO USE</b><i /><i />
          <b>INGREDIENTS</b><i /><i />
          <small>50 g</small>
        </div>
        <div className={styles.dielineSideAlt}><span>SIDE PANEL</span><b>MAKE SPACE<br />FOR YOUR SKIN</b><i /><small>SELA SKIN</small></div>
        <div className={styles.dielineBottomFront}><span>REVERSE TUCK FLAP</span></div>
        <div className={styles.dielineBottomBack}><span>LOCKING FLAP</span></div>
      </div>
      <div className={styles.dielineLegend}><span><i className={styles.foldLine} /> FOLD / CREASE REFERENCE</span><span><i className={styles.cutLine} /> PANEL EDGE REFERENCE</span></div>
    </div>
  );
}

export function SelaSkinExplorer() {
  const [activeView, setActiveView] = useState<PackageView>("front");
  const [activePalette, setActivePalette] = useState<PaletteKey>("ivory");
  const reduceMotion = useReducedMotion();
  const selectedView = packageViews.find((view) => view.id === activeView) ?? packageViews[0];
  const selectedColour = palette.find((colour) => colour.id === activePalette) ?? palette[0];

  return (
    <div className={styles.explorer}>
      <div className={styles.explorerHeader}>
        <div>
          <span className={styles.microLabel}>EXPLORE THE PACKAGING</span>
          <h3>One carton, a considered information flow.</h3>
        </div>
        <span className={styles.explorerHint}>SELECT A VIEW <ArrowUpRight size={13} /></span>
      </div>

      <div className={styles.viewControls} role="group" aria-label="Choose packaging view">
        {packageViews.map((view) => (
          <button
            key={view.id}
            type="button"
            className={activeView === view.id ? styles.viewControlActive : ""}
            aria-pressed={activeView === view.id}
            onClick={() => setActiveView(view.id)}
          >
            {view.id === "dieline" ? <Layers3 size={15} /> : <Package size={15} />}
            {view.label}
          </button>
        ))}
      </div>

      <div className={styles.explorerStage} aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeView}
            className={styles.explorerVisual}
            initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.99 }}
            transition={{ duration: reduceMotion ? 0 : 0.24, ease: "easeOut" }}
          >
            {activeView === "front" ? <CartonFront /> : activeView === "back" ? <CartonBack /> : <CartonDieline />}
          </motion.div>
        </AnimatePresence>
        <span className={styles.stageIndex}>DAILY HYDRATION CREAM / 50 g</span>
      </div>

      <div className={styles.explorerCaption}>
        <div><span className={styles.microLabel}>{selectedView.label.toUpperCase()}</span><p>{selectedView.description}</p></div>
        <span className={styles.captionIcon}><Package size={20} /></span>
      </div>

      <div className={styles.paletteExplorer}>
        <div className={styles.paletteHeading}>
          <div><span className={styles.microLabel}>BRAND COLOUR PALETTE</span><h4>Explore the role of each colour.</h4></div>
          <Sparkles size={17} aria-hidden="true" />
        </div>
        <div className={styles.paletteControls} role="group" aria-label="Explore Sela Skin brand colours">
          {palette.map((colour) => (
            <button
              key={colour.id}
              type="button"
              className={`${styles.paletteButton} ${activePalette === colour.id ? styles.paletteButtonActive : ""}`}
              aria-pressed={activePalette === colour.id}
              onClick={() => setActivePalette(colour.id)}
            >
              <span className={styles.paletteSwatch} style={{ backgroundColor: colour.hex }} />
              <span>{colour.name}</span>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={selectedColour.id}
            className={styles.paletteDetail}
            initial={reduceMotion ? false : { opacity: 0, y: 7 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -5 }}
            transition={{ duration: reduceMotion ? 0 : 0.18 }}
            aria-live="polite"
          >
            <span className={styles.paletteHex} style={{ backgroundColor: selectedColour.hex }} />
            <div><strong>{selectedColour.name}</strong><span>{selectedColour.role} · {selectedColour.hex}</span></div>
            <p>{selectedColour.meaning}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <p className={styles.explorerDisclaimer}>Interactive visual study · CSS-built packaging illustration, not final artwork or a production-ready dieline. Product and formula copy remains conceptual.</p>
    </div>
  );
}
