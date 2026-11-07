import type { Metadata } from "next";
import { DisciplinePage } from "@/components/discipline-page";

export const metadata: Metadata = {
  title: "Web & Technology",
  description:
    "Explore frontend development, responsive interface work, and technical experiments by Indira Diana.",
};

export default function DevelopmentPage() {
  return <DisciplinePage discipline="Development" />;
}
