import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ProjectArtwork } from "@/components/project-artwork";
import { projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="inner-page page-container">
      <div className="inner-page__topline"><Link href="/work/" className="back-link"><ArrowLeft size={15} /> All work</Link><span>{project.discipline.toUpperCase()} / CASE STUDY</span></div>
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
      <Link href="/work/" className="button button--outline case-back"><ArrowLeft size={15} /> Back to all work</Link>
      <Link href="/contact/" className="text-link" style={{ marginLeft: 18 }}>Discuss a similar project <ArrowUpRight size={15} /></Link>
    </main>
  );
}
