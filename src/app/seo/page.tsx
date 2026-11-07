import type { Metadata } from "next";
import { DisciplinePage } from "@/components/discipline-page";

export const metadata: Metadata = {
  title: "SEO & Digital Growth",
  description: "Explore Indira Diana's experience in technical SEO, on-page SEO, and content strategy.",
};

export default function SeoPage() {
  return <DisciplinePage discipline="SEO" />;
}
