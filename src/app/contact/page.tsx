import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with Indira Diana about design, SEO, digital projects, and potential collaborations.",
};

export default function ContactPage() {
  return (
    <main className="inner-page page-container">
      <section className="contact-page">
        <div>
          <p className="eyebrow"><span className="eyebrow__dot" /> START A CONVERSATION</p>
          <h1>Have something<br />in <em>mind?</em></h1>
          <p className="contact-page-copy">Whether you have a project in mind, want to collaborate, or simply want to exchange ideas, I&apos;d be happy to hear from you.</p>
        </div>
        <div className="contact-link-card">
          <span>THE BEST PLACE TO FIND ME</span>
          <a href="https://www.linkedin.com/in/indiradiana/" target="_blank" rel="noreferrer"><span><Linkedin size={17} /> LinkedIn</span><ArrowUpRight size={18} /></a>
          <p className="text-xs leading-7 text-[var(--muted)]">Add your preferred professional email address and any additional profile links here before publishing this page.</p>
          <Link href="/#selected-work" className="text-link">See selected work <ArrowUpRight size={15} /></Link>
        </div>
      </section>
    </main>
  );
}
