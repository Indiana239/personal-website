import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { disciplinePaths, type Project } from "@/lib/projects";
import { ProjectArtwork } from "@/components/project-artwork";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article className={`project-card group min-w-0 project-card--${project.visual}`}>
      <Link href={`${disciplinePaths[project.discipline]}/${project.slug}/`} className="project-card__link" aria-label={`View ${project.title} case study`}>
        <div className="project-card__visual">
          <ProjectArtwork visual={project.visual} />
          <span className="project-card__index">PROJECT {String(index + 1).padStart(2, "0")}</span>
          <span className="project-card__open"><ArrowUpRight size={19} /></span>
        </div>
        <div className="project-card__meta">
          <div>
            <p className="project-card__category">{project.category} <span>·</span> {project.year}</p>
            <h3>{project.title}</h3>
            <p className="project-card__summary">{project.summary}</p>
          </div>
          <span className="project-card__arrow"><ArrowUpRight size={18} /></span>
        </div>
      </Link>
    </article>
  );
}
