"use client";

import type { PointerEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Asterisk, Layers3, MousePointer2, Sparkles } from "lucide-react";

const PARALLAX_PROPERTIES = [
  "--core-x", "--core-y",
  "--lime-x", "--lime-y",
  "--paper-x", "--paper-y",
  "--cursor-x", "--cursor-y",
] as const;

export function HeroArt() {
  const reduceMotion = useReducedMotion();

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || reduceMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    const target = event.currentTarget;

    target.style.setProperty("--core-x", `${x * 13}px`);
    target.style.setProperty("--core-y", `${y * 13}px`);
    target.style.setProperty("--lime-x", `${x * -19}px`);
    target.style.setProperty("--lime-y", `${y * -12}px`);
    target.style.setProperty("--paper-x", `${x * 16}px`);
    target.style.setProperty("--paper-y", `${y * 17}px`);
    target.style.setProperty("--cursor-x", `${x * -22}px`);
    target.style.setProperty("--cursor-y", `${y * -18}px`);
  }

  function resetPointer(event: PointerEvent<HTMLDivElement>) {
    PARALLAX_PROPERTIES.forEach((property) => {
      event.currentTarget.style.setProperty(property, "0px");
    });
  }

  return (
    <div className="hero-art" aria-hidden="true">
      <div className="hero-art__topline"><span>THOUGHTFUL BY DESIGN</span><span>EST. 2026</span></div>
      <div
        className="hero-art__canvas"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
      >
        <motion.div
          className="hero-art__orbit hero-art__orbit--outer"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="hero-art__orbit hero-art__orbit--inner"
          animate={reduceMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="hero-art__core"
          animate={reduceMotion ? undefined : { rotate: [0, 4, -3, 0], y: [0, -8, 5, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="hero-art__core-label">A CREATIVE<br />MINDSET</span>
          <span className="hero-art__core-symbol">id<span>.</span></span>
          <span className="hero-art__core-foot">DESIGN × LOGIC</span>
        </motion.div>
        <motion.div
          className="floating-note floating-note--lime"
          animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [-7, -3, -7] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Asterisk size={19} strokeWidth={1.8} />
          <span>CURIOUS<br />ALWAYS</span>
        </motion.div>
        <motion.div
          className="floating-note floating-note--paper"
          animate={reduceMotion ? undefined : { y: [0, 8, 0], rotate: [6, 10, 6] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          <Layers3 size={19} strokeWidth={1.8} />
          <span>THINK IN<br />SYSTEMS</span>
        </motion.div>
        <motion.div
          className="floating-cursor"
          animate={reduceMotion ? undefined : { x: [0, 9, 0], y: [0, -7, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        ><MousePointer2 size={25} fill="var(--accent)" strokeWidth={1.4} /></motion.div>
        <div className="hero-art__spark hero-art__spark--one"><Sparkles size={17} /></div>
        <div className="hero-art__spark hero-art__spark--two">✳</div>
        <span className="hero-art__coordinate">06° 12&apos; S<br />106° 49&apos; E</span>
      </div>
      <div className="hero-art__bottomline"><span>IDEAS INTO EXPERIENCES</span><span><ArrowUpRight size={13} /> SCROLL TO EXPLORE</span></div>
    </div>
  );
}
