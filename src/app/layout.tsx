import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-dm-serif", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Indira Diana — Design, Digital Growth & Technology",
    template: "%s | Indira Diana",
  },
  description:
    "Personal portfolio of Indira Diana, bringing together design, SEO strategy, and frontend development through thoughtful digital experiences.",
  applicationName: "Indira Diana Portfolio",
  authors: [{ name: "Indira Diana" }],
  creator: "Indira Diana",
  keywords: ["Indira Diana", "UI/UX Designer", "Graphic Design", "SEO Specialist", "Frontend Development", "Portfolio"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Indira Diana Portfolio",
    title: "Indira Diana — Design, Digital Growth & Technology",
    description: "Design-minded. Strategy-led. Technically curious.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indira Diana — Design, Digital Growth & Technology",
    description: "Design-minded. Strategy-led. Technically curious.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#171916" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${dmSerif.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
