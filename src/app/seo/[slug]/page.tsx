import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/project-detail-page";
import { projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

const discipline = "SEO" as const;

export function generateStaticParams() {
  return projects
    .filter((project) => project.discipline === discipline)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug && item.discipline === discipline);

  if (!project) return { title: "Project not found" };

  return {
    title: `${project.title} | SEO & Digital Growth`,
    description: project.summary,
  };
}

export default async function SeoProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug && item.discipline === discipline);

  if (!project) notFound();

  return <ProjectDetailPage project={project} />;
}
