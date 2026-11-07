import type { Metadata } from "next";
import { DisciplinePage } from "@/components/discipline-page";

export const metadata: Metadata = {
  title: "Design & Product",
  description: "Explore Indira Diana's UI/UX, graphic design, and packaging design work and process.",
};

export default function DesignPage() {
  return <DisciplinePage discipline="Design" />;
}
