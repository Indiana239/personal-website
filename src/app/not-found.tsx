import Link from "next/link";

export default function NotFound() {
  return (
    <main className="inner-page page-container text-center">
      <section className="discipline-hero mx-auto">
        <p className="eyebrow justify-center">404 / PAGE NOT FOUND</p>
        <h1 className="inner-page__title">This page took a different turn<span className="heading-period">.</span></h1>
        <p className="inner-page__intro mx-auto">The page may have moved or the link may be incorrect. Head back and continue exploring.</p>
        <Link href="/" className="button button--primary mt-6">Back to homepage</Link>
      </section>
    </main>
  );
}
