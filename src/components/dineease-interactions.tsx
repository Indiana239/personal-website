"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BellRing,
  Check,
  CheckCircle2,
  Clock3,
  Utensils,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import styles from "./dineease-case-study.module.css";

const journeySteps = [
  {
    number: "01",
    title: "Secure the spot",
    label: "PREDICTABLE QUEUEING",
    description:
      "Join a virtual queue, choose seating preferences, and receive a ticket with an estimated wait time before arriving at the table.",
    previewLabel: "QUEUE TICKET",
    previewTitle: "Your place is saved.",
    previewBody: "Queue progress and estimated waiting time stay visible while you wait.",
    metric: "A-13",
    metricLabel: "QUEUE NUMBER",
    supporting: "12 groups ahead · Est. 20 min",
    icon: Clock3,
  },
  {
    number: "02",
    title: "Browse & decide",
    label: "PURPOSEFUL WAITING",
    description:
      "Explore the menu and prepare a pre-order during the waiting period, instead of leaving the decision until a table is ready.",
    previewLabel: "MENU & PRE-ORDER",
    previewTitle: "Take your time to decide.",
    previewBody: "Menu exploration and pre-order preparation become part of the waiting experience.",
    metric: "PRE-ORDER",
    metricLabel: "NEXT STEP",
    supporting: "Review menu · Prepare your order",
    icon: Utensils,
  },
  {
    number: "03",
    title: "Seamless handoff",
    label: "TIMELY PRE-ORDER",
    description:
      "When the table is ready, the pre-order is connected to the queue ticket and can be passed to the kitchen at the right moment.",
    previewLabel: "TABLE UPDATE",
    previewTitle: "Your table is almost ready.",
    previewBody: "The queue ticket and prepared order stay connected through the handoff.",
    metric: "A-13",
    metricLabel: "TICKET LINKED",
    supporting: "Table ready · Kitchen notified",
    icon: CheckCircle2,
  },
];

export function JourneyExplorer() {
  const [activeStep, setActiveStep] = useState(0);
  const reduceMotion = useReducedMotion();
  const selected = journeySteps[activeStep];
  const ActiveIcon = selected.icon;

  return (
    <div className={styles.journeyExplorer}>
      <div className={styles.journeyExplorerTop}>
        <div>
          <span className={styles.interactionEyebrow}>EXPLORE THE FLOW</span>
          <h3>One experience, three connected moments.</h3>
        </div>
        <span className={styles.interactionHint}>SELECT A STEP <ArrowRight size={13} /></span>
      </div>

      <div className={styles.journeyStepControls} role="group" aria-label="Explore the DineEase journey">
        {journeySteps.map((step, index) => {
          const StepIcon = step.icon;
          const isActive = activeStep === index;

          return (
            <motion.button
              key={step.number}
              type="button"
              className={`${styles.journeyStepButton} ${isActive ? styles.journeyStepButtonActive : ""}`}
              aria-pressed={isActive}
              onClick={() => setActiveStep(index)}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.985 }}
              transition={{ duration: 0.18 }}
            >
              <span className={styles.journeyStepButtonTop}>
                <span>{step.number}</span>
                <StepIcon size={17} />
              </span>
              <strong>{step.title}</strong>
              <span className={styles.journeyStepButtonLabel}>{step.label}</span>
              <span className={styles.journeyStepProgress}>
                <i style={{ transform: `scaleX(${isActive ? 1 : 0})` }} />
              </span>
            </motion.button>
          );
        })}
      </div>

      <div className={styles.journeyPreviewPanel}>
        <div className={styles.journeyPreviewCopy} aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selected.number}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.24, ease: "easeOut" }}
            >
              <span className={styles.journeyPreviewKicker}>STEP {selected.number} / {selected.label}</span>
              <h4>{selected.title}</h4>
              <p>{selected.description}</p>
              <div className={styles.journeyPreviewOutcome}>
                <span>DESIGNED MOMENT</span>
                <strong>{selected.supporting}</strong>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.journeyPhonePreview} aria-label={`Illustrative ${selected.title} interface preview`}>
          <div className={styles.journeyPhoneTop}><span>DINEEASE</span><span>9:41</span></div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              className={styles.journeyPhoneContent}
              key={selected.number}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98, y: -6 }}
              transition={{ duration: reduceMotion ? 0 : 0.26, ease: "easeOut" }}
            >
              <span className={styles.journeyPhoneStatus}><ActiveIcon size={13} /> {selected.previewLabel}</span>
              <strong>{selected.metric}</strong>
              <small>{selected.metricLabel}</small>
              <div className={styles.journeyPhoneDivider} />
              <b>{selected.previewTitle}</b>
              <p>{selected.previewBody}</p>
              <span className={styles.journeyPhoneFoot}>{selected.supporting}</span>
            </motion.div>
          </AnimatePresence>
          <span className={styles.journeyPhoneHome} />
        </div>
      </div>
      <p className={styles.conceptInteractionNote}>Interactive concept preview · Illustrative interface, not a live restaurant service.</p>
    </div>
  );
}

const queueStates = {
  available: {
    label: "CAPACITY AVAILABLE",
    status: "QUEUE OPEN",
    title: "Get in line",
    description:
      "Customers can set their party size and seating preference, then receive a queue ticket with an estimated wait time.",
    action: "Confirm & get number",
    note: "A queue ticket is created with an estimated wait.",
    icon: CheckCircle2,
  },
  full: {
    label: "LINE CURRENTLY FULL",
    status: "QUEUE AT CAPACITY",
    title: "Stay in the loop",
    description:
      "When the line is full, users can explore similar places or choose to be notified when the queue opens again.",
    action: "Notify me",
    note: "A notification option provides a useful alternative to a dead end.",
    icon: BellRing,
  },
};

export function QueueStateExplorer() {
  const [activeState, setActiveState] = useState<keyof typeof queueStates>("available");
  const reduceMotion = useReducedMotion();
  const current = queueStates[activeState];
  const CurrentIcon = current.icon;

  return (
    <div className={styles.queueExplorer}>
      <div className={styles.queueExplorerHeader}>
        <div>
          <span className={styles.interactionEyebrow}>TRY THE SYSTEM LOGIC</span>
          <h3>One entry point. Different queue conditions.</h3>
          <p>Switch between the two states to see how the experience adapts to restaurant capacity.</p>
        </div>
        <div className={styles.queueStateControls} role="group" aria-label="Select queue capacity state">
          <button
            type="button"
            className={activeState === "available" ? styles.queueStateControlActive : ""}
            aria-pressed={activeState === "available"}
            onClick={() => setActiveState("available")}
          >
            <CheckCircle2 size={14} /> Available
          </button>
          <button
            type="button"
            className={activeState === "full" ? styles.queueStateControlActive : ""}
            aria-pressed={activeState === "full"}
            onClick={() => setActiveState("full")}
          >
            <BellRing size={14} /> Queue full
          </button>
        </div>
      </div>

      <div className={styles.queueExplorerPanel} aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeState}
            className={styles.queueExplorerState}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.24, ease: "easeOut" }}
          >
            <div className={styles.queueStateVisual}>
              <div className={styles.queueStateVisualTop}><span>DINEEASE</span><span>QUEUE</span></div>
              <div className={`${styles.queueStateIcon} ${activeState === "full" ? styles.queueStateIconMuted : ""}`}>
                <CurrentIcon size={24} />
              </div>
              <span className={`${styles.queueStateBadge} ${activeState === "full" ? styles.queueStateBadgeFull : ""}`}>
                <i /> {current.status}
              </span>
              <strong>{activeState === "available" ? "A-13" : "— —"}</strong>
              <span className={styles.queueStateVisualCaption}>{activeState === "available" ? "12 groups ahead · Est. 20 min" : "No remote queue slots right now"}</span>
              <div className={styles.queueStateVisualLine}><i style={{ width: activeState === "available" ? "68%" : "100%" }} /></div>
            </div>

            <div className={styles.queueStateDescription}>
              <span className={styles.queueStateLabel}>{current.label}</span>
              <h4>{current.title}</h4>
              <p>{current.description}</p>
              <div className={styles.queueStateAction}>{activeState === "available" ? <Check size={15} /> : <BellRing size={15} />}{current.action}<ArrowRight size={14} /></div>
              <small>{current.note}</small>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <p className={styles.conceptInteractionNote}>Concept interaction · Switching states demonstrates the proposed interface logic only; no queue or notification is connected.</p>
    </div>
  );
}

const palette = [
  {
    name: "Orange",
    hex: "#FF8A3D",
    role: "Primary accent",
    description: "Used for key actions and moments that need a clear visual emphasis.",
    colorClass: "orange" as const,
  },
  {
    name: "True Black",
    hex: "#000000",
    role: "Shared visual foundation",
    description: "Provides a high-contrast foundation for the dark interface; platform-specific system surfaces can adapt around the same visual identity.",
    colorClass: "black" as const,
  },
  {
    name: "Gray",
    hex: "#393A3D",
    role: "Supporting neutral",
    description: "Supports hierarchy between the primary surface, text, and interface elements.",
    colorClass: "gray" as const,
  },
];

export function VisualSystemExplorer() {
  const [activeColor, setActiveColor] = useState(0);
  const selected = palette[activeColor];
  const reduceMotion = useReducedMotion();

  return (
    <div className={styles.systemStage}>
      <div className={styles.typeSample}>
        <span>SF PRO DISPLAY · IOS EXPLORATION</span>
        <strong>Aa</strong>
        <small>SF Pro Text · iOS type reference</small>
      </div>

      <div className={styles.paletteExplorer}>
        <span className={styles.paletteExplorerLabel}>SELECT A COLOUR</span>
        <div className={styles.swatches} role="group" aria-label="DineEase colour palette">
          {palette.map((item, index) => (
            <motion.button
              key={item.name}
              type="button"
              className={`${styles.swatchButton} ${styles[`swatchButton${item.colorClass.charAt(0).toUpperCase()}${item.colorClass.slice(1)}`]} ${activeColor === index ? styles.swatchButtonActive : ""}`}
              aria-label={`Select ${item.name}, ${item.hex}`}
              aria-pressed={activeColor === index}
              onClick={() => setActiveColor(index)}
              whileHover={reduceMotion ? undefined : { y: -5, scale: 1.035 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={{ duration: 0.18 }}
            >
              <span>{item.hex}</span>
              <small>{item.name}</small>
            </motion.button>
          ))}
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            className={styles.paletteSelection}
            key={selected.name}
            initial={reduceMotion ? false : { opacity: 0, y: 7 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -5 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            aria-live="polite"
          >
            <span>{selected.role}</span>
            <strong>{selected.name} <i>{selected.hex}</i></strong>
            <p>{selected.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.systemAction}>
        <span>PRIMARY ACTION</span>
        <Link href="#queueing" className={styles.systemButton}>Take a Queue <ArrowUpRight size={16} /></Link>
        <small>Explore how the queue responds to different capacity states.</small>
      </div>
    </div>
  );
}
