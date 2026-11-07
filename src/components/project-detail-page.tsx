import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ProjectArtwork } from "@/components/project-artwork";
import { disciplinePaths, type Project } from "@/lib/projects";

export function ProjectDetailPage({ project }: { project: Project }) {
  const disciplinePath = disciplinePaths[project.discipline];
  const disciplineLabel =
    project.discipline === "Design"
      ? "Design & Product"
      : project.discipline === "SEO"
        ? "SEO & Digital Growth"
        : "Web & Technology";

  return (
    <main className="inner-page page-container">
      <nav className="inner-page__topline" aria-label="Breadcrumb">
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <Link href="/" className="back-link">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href={`${disciplinePath}/`} className="back-link">{disciplineLabel}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="truncate">{project.title}</span>
        </div>
        <span>{project.discipline.toUpperCase()} / CASE STUDY</span>
      </nav>

      <section className="case-hero">
        <p className="eyebrow"><span className="eyebrow__dot" />{project.category} · {project.year}</p>
        <h1>{project.title}<span className="heading-period">.</span></h1>
        <p className="case-hero__summary">{project.summary}</p>
      </section>

      <div className="case-artwork"><ProjectArtwork visual={project.visual} /></div>

      <div className="case-meta">
        <div><span>DISCIPLINE</span><b>{project.discipline}</b></div>
        <div><span>MY ROLE</span><b>{project.role}</b></div>
        <div><span>PROJECT STATUS</span><b>{project.status}</b></div>
        <div><span>TOOLS & METHODS</span><b>{project.tools.join(" · ")}</b></div>
      </div>

      <section className="case-content">
        <h2>The challenge<span className="heading-period">.</span></h2>
        <p>{project.challenge}</p>
      </section>

      <section className="case-content">
        <h2>The approach<span className="heading-period">.</span></h2>
        <div><ul>{project.approach.map((step) => <li key={step}>{step}</li>)}</ul></div>
      </section>

      <section className="case-content">
        <h2>What came out of it<span className="heading-period">.</span></h2>
        <p>{project.outcome}</p>
      </section>

      <div className="flex flex-wrap items-center gap-5">
        <Link href={`${disciplinePath}/`} className="button button--outline case-back">
          <ArrowLeft size={15} /> Back to {disciplineLabel}
        </Link>
        <Link href="/contact/" className="text-link">
          Discuss a similar project <ArrowUpRight size={15} />
        </Link>
      </div>
    </main>
  );
}
