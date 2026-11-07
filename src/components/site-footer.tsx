import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container site-footer__main">
        <div>
          <Link href="/" className="footer-brand">indira<span>.</span></Link>
          <p className="footer-note">Design-minded. Strategy-led. Technically curious.</p>
        </div>
        <div className="footer-links">
          <Link href="/design/">Design</Link>
          <Link href="/seo/">SEO</Link>
          <Link href="/development/">Development</Link>
          <Link href="/about/">About</Link>
          <Link href="/contact/">Contact <ArrowUpRight size={13} /></Link>
          <a href="https://www.linkedin.com/in/indiradiana/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
        </div>
      </div>
      <div className="page-container site-footer__bottom">
        <span>© {new Date().getFullYear()} Indira Diana</span>
        <span>Designed with intention. Built with curiosity.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
