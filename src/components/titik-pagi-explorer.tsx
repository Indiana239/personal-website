"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Coffee, Layers3, Package, Sparkles } from "lucide-react";
import styles from "./titik-pagi-case-study.module.css";

type PackageView = "front" | "back" | "panels";
type PaletteKey = "olive" | "terracotta" | "cream";

const packageViews: { id: PackageView; label: string; description: string }[] = [
  {
    id: "front",
    label: "Front panel",
    description: "The front panel introduces the brand, coffee origin, roast profile, and tasting notes at a glance.",
  },
  {
    id: "back",
    label: "Back panel",
    description: "The back panel uses an editorial information layout for the brand story, coffee details, brewing guidance, and producer information.",
  },
  {
    id: "panels",
    label: "Panel layout",
    description: "A simplified content map showing how the main information is distributed. This is a presentation placeholder, not a production dieline.",
  },
];

const palette = [
  {
    id: "olive" as const,
    name: "Olive Green",
    hex: "#626A46",
    role: "Primary brand colour",
    meaning: "Grounded and connected to the highland landscape that inspires the concept.",
  },
  {
    id: "terracotta" as const,
    name: "Terracotta",
    hex: "#B96849",
    role: "Accent colour",
    meaning: "Adds warmth and a quiet point of contrast, echoing the feeling of morning light.",
  },
  {
    id: "cream" as const,
    name: "Warm Cream",
    hex: "#E9E2D1",
    role: "Base colour",
    meaning: "Creates a soft, welcoming canvas for the wordmark and product information.",
  },
];

function MountainArtwork() {
  return (
    <svg className={styles.mountainArtwork} viewBox="0 0 420 150" role="img" aria-label="Layered mountain contour illustration placeholder">
      <path d="M0 112 C42 91 64 48 111 57 C145 63 158 99 198 90 C241 80 254 28 306 39 C352 49 376 82 420 68" />
      <path d="M0 124 C47 102 75 73 112 79 C154 86 164 116 205 108 C250 99 274 53 315 59 C358 65 382 94 420 87" />
      <path d="M0 137 C54 120 81 98 122 101 C160 104 178 130 216 124 C255 117 281 83 325 84 C362 85 389 111 420 105" />
      <path d="M0 147 C56 135 93 119 131 122 C172 125 184 143 225 140 C272 136 297 108 339 108 C373 109 395 127 420 123" />
    </svg>
  );
}

function PouchFront() {
  return (
    <div className={styles.pouchFront} aria-label="Illustrative front packaging mockup">
      <div className={styles.pouchTopSeal} />
      <span className={styles.pouchMicro}>SPECIALTY COFFEE · INDONESIA</span>
      <div className={styles.pouchWordmark}>Titik<br /><em>Pagi</em><i>.</i></div>
      <div className={styles.pouchOrigin}>GAYO HIGHLAND<br /><span>SPECIALTY ARABICA</span></div>
      <MountainArtwork />
      <div className={styles.pouchFlavor}>BROWN SUGAR <i>·</i> PLUM <i>·</i> BLACK COFFEE</div>
      <div className={styles.pouchBottomRow}><span>MEDIUM ROAST</span><b>250 g</b></div>
      <div className={styles.pouchGusset} />
    </div>
  );
}

function PouchBack() {
  return (
    <div className={`${styles.pouchBack} ${styles.pouchSurface}`} aria-label="Illustrative back packaging mockup">
      <div className={styles.pouchTopSeal} />
      <div className={styles.backHeader}>
        <span className={styles.backWordmark}>Titik Pagi<span>.</span></span>
        <span className={styles.backVertical}>TITIK AWAL RUTINITASMU</span>
      </div>
      <div className={styles.backStory}>
        <span className={styles.pouchMicro}>A THOUGHTFUL BEGINNING</span>
        <strong>A little pause<br />before the day.</strong>
        <p>A coffee concept inspired by the highlands of Gayo, created around the small rituals that make every morning meaningful.</p>
      </div>
      <div className={styles.backColumns}>
        <div><b>COFFEE NOTES</b><span>Brown Sugar</span><span>Plum</span><span>Black Coffee</span></div>
        <div><b>BREWING GUIDE</b><i /><i /><i /></div>
      </div>
      <div className={styles.backFooter}><span>MEDIUM ROAST</span><b>250 g</b></div>
      <div className={styles.pouchGusset} />
    </div>
  );
}

function PanelLayout() {
  return (
    <div className={styles.panelLayout} aria-label="Simplified packaging panel content map">
      <div className={styles.panelMapFront}>
        <span>FRONT PANEL</span>
        <strong>Titik<br /><em>Pagi.</em></strong>
        <i className={styles.panelMountain} />
        <small>GAYO HIGHLAND · 250 g</small>
      </div>
      <div className={styles.panelMapBack}>
        <span>BACK PANEL</span>
        <b>BRAND STORY</b><i /><i /><i />
        <b>COFFEE DETAILS</b><i /><i />
        <b>BREWING GUIDE</b><i /><i />
        <small>PRODUCER INFORMATION</small>
      </div>
      <span className={styles.panelLayoutNote}>CONTENT HIERARCHY STUDY · NOT TO SCALE</span>
    </div>
  );
}

export function TitikPagiExplorer() {
  const [activeView, setActiveView] = useState<PackageView>("front");
  const [activePalette, setActivePalette] = useState<PaletteKey>("olive");
  const reduceMotion = useReducedMotion();
  const selectedView = packageViews.find((view) => view.id === activeView) ?? packageViews[0];
  const selectedColour = palette.find((colour) => colour.id === activePalette) ?? palette[0];

  return (
    <div className={styles.explorer}>
      <div className={styles.explorerHeader}>
        <div>
          <span className={styles.microLabel}>EXPLORE THE PACKAGING</span>
          <h3>One pouch, two sides of the story.</h3>
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
            {view.id === "panels" ? <Layers3 size={15} /> : <Package size={15} />}
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
            {activeView === "front" ? <PouchFront /> : activeView === "back" ? <PouchBack /> : <PanelLayout />}
          </motion.div>
        </AnimatePresence>
        <span className={styles.stageIndex}>250 g / STAND-UP POUCH</span>
      </div>

      <div className={styles.explorerCaption}>
        <div><span className={styles.microLabel}>{selectedView.label.toUpperCase()}</span><p>{selectedView.description}</p></div>
        <span className={styles.captionIcon}><Coffee size={20} /></span>
      </div>

      <div className={styles.paletteExplorer}>
        <div className={styles.paletteHeading}>
          <div><span className={styles.microLabel}>BRAND COLOUR PALETTE</span><h4>Choose a colour to explore its role.</h4></div>
          <Sparkles size={17} aria-hidden="true" />
        </div>
        <div className={styles.paletteControls} role="group" aria-label="Explore Titik Pagi brand colours">
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
      <p className={styles.explorerDisclaimer}>Interactive visual study · Temporary CSS mockup, not the final artwork or a production-ready dieline.</p>
    </div>
  );
}
