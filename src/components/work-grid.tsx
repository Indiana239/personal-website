"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

const filters = ["All", "Design", "SEO", "Development"] as const;
type Filter = (typeof filters)[number];

export function WorkGrid() {
  const [active, setActive] = useState<Filter>("All");
  const visibleProjects = useMemo(
    () => projects.filter((project) => active === "All" || project.discipline === active),
    [active],
  );

  return (
    <>
      <div className="work-filter" role="group" aria-label="Filter projects by discipline">
        {filters.map((filter) => (
          <button key={filter} type="button" className={active === filter ? "is-active" : ""} onClick={() => setActive(filter)} aria-pressed={active === filter}>
            {filter}<span>{filter === "All" ? projects.length : projects.filter((project) => project.discipline === filter).length}</span>
          </button>
        ))}
      </div>
      <div className="projects-grid">{visibleProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
      <p className="work-grid__count">SHOWING {String(visibleProjects.length).padStart(2, "0")} OF {String(projects.length).padStart(2, "0")} PROJECTS</p>
    </>
  );
}
