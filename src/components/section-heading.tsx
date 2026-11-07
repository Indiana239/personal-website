import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  aside?: string;
};

export function SectionHeading({ eyebrow, title, description, aside }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-heading__main">
        <p className="eyebrow"><span className="eyebrow__dot" />{eyebrow}</p>
        <h2 className="section-heading__title">{title}</h2>
        {description ? <p className="section-heading__description">{description}</p> : null}
      </div>
      {aside ? <p className="section-heading__aside">{aside}</p> : null}
    </div>
  );
}
