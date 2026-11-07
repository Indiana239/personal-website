import type { Metadata } from "next";
import { WorkGrid } from "@/components/work-grid";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "A collection of design concepts, SEO experience, and digital projects by Indira Diana.",
};

export default function WorkPage() {
  return (
    <main className="inner-page page-container">
      <div className="work-page-hero">
        <div>
          <p className="eyebrow"><span className="eyebrow__dot" /> A COLLECTION OF IDEAS IN ACTION</p>
          <h1>Selected<br /><em className="font-display font-normal text-[var(--coral)]">work.</em></h1>
        </div>
        <p>A mix of self-initiated concepts and professional experience across design, search, and technology. Use the filters to explore by discipline.</p>
      </div>
      <WorkGrid />
    </main>
  );
}
