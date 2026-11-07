import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { projects, type Discipline } from "@/lib/projects";

const content: Record<Discipline, { eyebrow: string; title: string; intro: string; focus: string[]; number: string }> = {
  Design: {
    eyebrow: "DESIGN & PRODUCT",
    title: "Make ideas clear. Make experiences matter.",
    intro: "I approach design as a way to make information, products, and interactions easier to understand and more meaningful to use.",
    focus: ["UI/UX Design", "Graphic Design", "Packaging Design"],
    number: "01",
  },
  SEO: {
    eyebrow: "SEO & DIGITAL GROWTH",
    title: "Build the foundation. Earn discovery.",
    intro: "My SEO work combines technical investigation, content understanding, and practical prioritisation to make websites easier to crawl, understand, and discover.",
    focus: ["Technical SEO", "On-page SEO", "Content Strategy"],
    number: "02",
  },
  Development: {
    eyebrow: "WEB & TECHNOLOGY",
    title: "From considered design to working interfaces.",
    intro: "Frontend development gives me a practical understanding of how interfaces are structured, built, and experienced across different devices.",
    focus: ["Frontend Development", "Responsive Websites", "Web Fundamentals"],
    number: "03",
  },
};

export function DisciplinePage({ discipline }: { discipline: Discipline }) {
  const page = content[discipline];
  const selectedProjects = projects.filter((project) => project.discipline === discipline);

  return (
    <main className="inner-page page-container">
      <div className="inner-page__topline"><Link href="/" className="back-link"><ArrowLeft size={15} /> Home</Link><span>{page.number} / 03</span></div>
      <section className="discipline-hero">
        <p className="eyebrow"><span className="eyebrow__dot" />{page.eyebrow}</p>
        <h1 className="inner-page__title">{page.title}</h1>
        <p className="inner-page__intro">{page.intro}</p>
        <div className="capability-tags">{page.focus.map((item) => <span key={item}>{item}</span>)}</div>
      </section>
      <section className="inner-page__section">
        <div className="inner-page__section-head"><div><p className="eyebrow">SELECTED PROJECTS</p><h2>Work in this area<span className="heading-period">.</span></h2></div><span>{String(selectedProjects.length).padStart(2, "0")} PROJECT{selectedProjects.length === 1 ? "" : "S"}</span></div>
        {selectedProjects.length > 0 ? <div className="projects-grid">{selectedProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div> : <div className="empty-work"><span>IN PROGRESS</span><h3>More work is taking shape.</h3><p>New projects and experiments will be added here as they are ready to share.</p><Link href="/contact/" className="text-link">Discuss a project <ArrowUpRight size={15} /></Link></div>}
      </section>
    </main>
  );
}
