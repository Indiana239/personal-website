"use client";

import Link from "next/link";
import type { PointerEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ProjectArtwork } from "@/components/project-artwork";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  function handlePointerMove(event: PointerEvent<HTMLAnchorElement>) {
    if (event.pointerType !== "mouse" || reduceMotion) return;

    const visual = event.currentTarget.querySelector<HTMLElement>(".project-card__visual");
    if (!visual) return;

    const bounds = visual.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
  }

  function resetPointer(event: PointerEvent<HTMLAnchorElement>) {
    event.currentTarget.style.setProperty("--pointer-x", "50%");
    event.currentTarget.style.setProperty("--pointer-y", "50%");
  }

  return (
    <motion.article
      className={`project-card group min-w-0 project-card--${project.visual}`}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.7, delay: Math.min(index * 0.1, 0.2), ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/work/${project.slug}/`}
        className="project-card__link"
        aria-label={`View ${project.title} case study`}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
      >
        <div className="project-card__visual">
          <ProjectArtwork visual={project.visual} />
          <span className="project-card__index">PROJECT {String(index + 1).padStart(2, "0")}</span>
          <span className="project-card__open" aria-hidden="true"><ArrowUpRight size={20} /></span>
        </div>
        <div className="project-card__meta">
          <div>
            <p className="project-card__category">{project.category} <span>·</span> {project.year}</p>
            <h3>{project.title}</h3>
            <p className="project-card__summary">{project.summary}</p>
          </div>
          <span className="project-card__arrow" aria-hidden="true"><ArrowUpRight size={20} /></span>
        </div>
      </Link>
    </motion.article>
  );
}
