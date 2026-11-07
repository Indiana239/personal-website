import type { ProjectVisual } from "@/lib/projects";

export function ProjectArtwork({ visual, compact = false }: { visual: ProjectVisual; compact?: boolean }) {
  return (
    <div className={`project-art project-art--${visual}${compact ? " is-compact" : ""}`} aria-hidden="true">
      {visual === "dineease" ? (
        <div className="phone-scene">
          <div className="phone-mockup">
            <div className="phone-notch" />
            <div className="phone-status"><span>9:41</span><span>•••</span></div>
            <div className="phone-greeting">Find your<br /><em>next table.</em></div>
            <div className="phone-search">⌕&nbsp; Search restaurants</div>
            <div className="phone-categories"><i>All</i><span>Cafe</span><span>Asian</span></div>
            <div className="phone-food-card"><div className="food-art"><span>NOODLE<br />HOUSE</span></div><div><b>Nori & Co.</b><small>Japanese · 0.8 km</small></div><strong>4.8</strong></div>
            <div className="phone-bottom"><i /><i /><i /><i /></div>
          </div>
          <span className="phone-orbit orbit-one" />
          <span className="phone-orbit orbit-two" />
          <span className="phone-sticker">UX<br />01</span>
        </div>
      ) : null}

      {visual === "packaging" ? (
        <div className="package-scene">
          <div className="package-shadow" />
          <div className="package-box package-box--back"><span>FORM<br />FOLLOWS<br />FEELING</span><i>STUDY 02</i></div>
          <div className="package-box package-box--front"><b>OBJECT<br /><em>of</em><br />ORIGIN</b><small>PACKAGING EXPLORATION</small></div>
          <div className="package-circle" />
          <span className="package-index">P—02</span>
        </div>
      ) : null}

      {visual === "seo" ? (
        <div className="seo-scene">
          <div className="seo-window">
            <div className="seo-window__top"><span /><span /><span /><b>SEARCH HEALTH / OVERVIEW</b></div>
            <div className="seo-window__body">
              <div className="seo-side"><i /><i /><i /><i /></div>
              <div className="seo-content"><small>ORGANIC PERFORMANCE</small><div className="seo-metrics"><b>01 <i>crawl</i></b><b>02 <i>index</i></b><b>03 <i>optimise</i></b></div><div className="seo-chart"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div><div className="seo-lines"><i /><i /><i /></div></div>
            </div>
          </div>
          <span className="seo-stamp">MAKE<br />IT FINDABLE ↗</span>
        </div>
      ) : null}

      {visual === "code" ? (
        <div className="code-scene">
          <div className="code-card"><div className="code-dots"><i /><i /><i /></div><p><span>01</span> const <b>experience</b> = &#123;</p><p><span>02</span> &nbsp; design: <em>&quot;human&quot;</em>,</p><p><span>03</span> &nbsp; logic: <em>&quot;clear&quot;</em>,</p><p><span>04</span> &nbsp; details: <em>&quot;considered&quot;</em></p><p><span>05</span> &#125;;</p><div className="code-cursor" /></div>
          <span className="code-badge">BUILD<br />WITH CARE</span>
        </div>
      ) : null}
    </div>
  );
}
