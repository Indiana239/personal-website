"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/design/", label: "Design" },
  { href: "/seo/", label: "SEO" },
  { href: "/development/", label: "Development" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner page-container mx-auto flex items-center justify-between">
        <Link href="/" className="brand" aria-label="Indira Diana home" onClick={() => setMenuOpen(false)}>
          <span className="brand__mark">id<span>.</span></span>
          <span className="brand__name">INDIRA DIANA</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => {
            const routeRoot = link.href === "/" ? "/" : link.href.slice(0, -1);
            const active = pathname === routeRoot || pathname.startsWith(`${routeRoot}/`);
            return (
              <Link key={link.href} href={link.href} className={`nav-link${active ? " is-active" : ""}`}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <Link href="/contact/" className="header-cta">
            Let&apos;s talk <ArrowUpRight size={15} />
          </Link>
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div id="mobile-navigation" className={`mobile-nav${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav className="mobile-nav__inner page-container" aria-label="Mobile navigation">
          {links.map((link, index) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              <span className="mobile-nav__number">0{index + 1}</span>
              {link.label}
              <ArrowUpRight size={18} />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
