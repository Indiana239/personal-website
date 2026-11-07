import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { disciplines } from "@/lib/projects";

type DisciplineItem = (typeof disciplines)[number];

export function DisciplineCard({ item }: { item: DisciplineItem }) {
  return (
    <Link href={item.href} className={`discipline-card discipline-card--${item.tone}`}>
      <div className="discipline-card__top"><span>{item.number} / DISCIPLINE</span><ArrowUpRight size={20} /></div>
      <div className="discipline-card__body">
        <p className="discipline-card__eyebrow">{item.eyebrow}</p>
        <h3>{item.title}</h3>
        <p className="discipline-card__description">{item.description}</p>
      </div>
      <div className="discipline-card__bottom">
        <div className="discipline-card__tags">{item.capabilities.map((capability) => <span key={capability}>{capability}</span>)}</div>
        <span className="discipline-card__go">Explore <ArrowUpRight size={15} /></span>
      </div>
    </Link>
  );
}
