/* ============================================================
   App — FWBG Design System build — header stats, filter state, cross-filtering, tabs,
   search, Tweaks. Mounts everything.
   ============================================================ */
const { useState, useMemo, useEffect } = React;

const DATA = window.__BEGONIA || [];
const META = window.__BEGONIA_META || {};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "season": "summer",
  "fontScale": 1,
  "density": "regular"
}/*EDITMODE-END*/;

const DENSITY = { compact: 0.78, regular: 1, comfy: 1.18 };

function applyFilters(rows, filters, search, kind) {
  const fk = Object.keys(filters);
  let out = rows;
  if (kind === "species") out = out.filter(r => (r._species || "").trim() !== "");
  else if (kind === "cultivar") out = out.filter(r => (r._species || "").trim() === "");
  if (fk.length) out = out.filter(r => fk.every(k => (r[k] || "") === filters[k]));
  const q = search.trim().toLowerCase();
  if (q) out = out.filter(r =>
    (r._epithet || "").toLowerCase().includes(q) ||
    (r.AccNoFull || "").toLowerCase().includes(q) ||
    (r.LocalityFull || "").toLowerCase().includes(q) ||
    (r.Collector || "").toLowerCase().includes(q) ||
    (r.ContactNameFull || "").toLowerCase().includes(q)
  );
  return out;
}

function Stat({ num, label, sub }) {
  return (
    <div className="stat">
      <div className="stat__num">{num}</div>
      <div className="stat__lbl">{label}</div>
      {sub && <div className="stat__sub">{sub}</div>}
    </div>
  );
}

function Panel({ title, sub, action, children, wide }) {
  return (
    <section className={"panel" + (wide ? " panel--wide" : "")}>
      <div className="panel__head">
        <div>
          <h2 className="panel__title">{title}</h2>
          {sub && <p className="panel__sub">{sub}</p>}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

function ConservationView({ rows, onPick, filters, onOpen }) {
  const total = rows.length || 1;
  const wild = rows.filter(r => r.ProvenanceCode === "W");
  const documented = rows.filter(r => r.ProvenanceCode === "W" || r.ProvenanceCode === "G").length;
  const countries = new Set(wild.map(r => countryFromLocality(r.LocalityFull)).filter(Boolean));
  const collectors = new Set(wild.map(r => r.Collector).filter(Boolean));

  return (
    <div className="dashgrid">
      <section className="panel panel--wide consv__intro">
        <div className="consv__lede">
          <h2 className="panel__title">The documentation gradient</h2>
          <p className="panel__sub">
            A plant's conservation value rests on how well its origin is documented. Wild-collected
            material of known provenance is the most scientifically valuable — and the rarest.
          </p>
        </div>
        <div className="consv__stats">
          <Stat num={wild.length.toLocaleString()} label="Wild-collected" sub="documented wild origin" />
          <Stat num={documented.toLocaleString()} label="Traceable to source" sub={Math.round((documented / total) * 100) + "% of selection"} />
          <Stat num={countries.size.toLocaleString()} label="Countries of origin" sub="among wild material" />
          <Stat num={collectors.size.toLocaleString()} label="Field collectors" sub="named on wild records" />
        </div>
        <ProvenanceTiers rows={rows} onPick={onPick} active={filters.ProvenanceCode} />
      </section>

      <Panel title="The wild-collected register" wide
        sub="Every accession with documented wild origin — the collection's conservation core"
        action={<span className="panel__hint">click a card for full record</span>}>
        <WildRegister rows={rows} onOpen={onOpen} />
      </Panel>

      <Panel title="Origins" sub="Wild material by country of collection">
        <OriginsChart rows={rows} active={filters._country} />
      </Panel>

      <Panel title="Field collectors" sub="Who gathered the wild-collected material">
        <CollectorsChart rows={rows} />
      </Panel>
    </div>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState("");
  const [kind, setKind] = useState("all");
  const [tab, setTab] = useState("overview");
  const [sort, setSort] = useState({ key: "_epithet", dir: 1 });
  const [open, setOpen] = useState(null);

  const rootStyle = { "--fs": (DENSITY[t.density] || 1) * (t.fontScale || 1) };

  const filtered = useMemo(() => applyFilters(DATA, filters, search, kind), [filters, search, kind]);
  const sorted = useMemo(() => {
    const a = [...filtered];
    a.sort((x, y) => {
      let xv = x[sort.key] || "", yv = y[sort.key] || "";
      if (sort.key === "AccYear") { xv = +xv || 0; yv = +yv || 0; }
      if (xv < yv) return -1 * sort.dir;
      if (xv > yv) return 1 * sort.dir;
      return 0;
    });
    return a;
  }, [filtered, sort]);

  function pick(field, value) {
    setFilters(f => {
      const nf = { ...f };
      if (nf[field] === value) delete nf[field];
      else nf[field] = value;
      return nf;
    });
  }
  function onSort(key) {
    setSort(s => s.key === key ? { key, dir: -s.dir } : { key, dir: key === "AccYear" ? -1 : 1 });
  }

  const activeFilters = Object.entries(filters);
  const filterPct = Math.round((filtered.length / DATA.length) * 100);

  function chipLabel(k, v) {
    if (k === "ProvenanceCode") return (PROVENANCE[v] || {}).label || v;
    if (k === "ItemStatusCode") return (STATUS[v] || {}).label || v;
    if (k === "ItemLocationCode") return locationLabel(v);
    if (k === "_habit") return v + " habit";
    if (k === "_species") return "B. " + v;
    if (k === "ContactNameFull") return "From " + v;
    if (k === "AccYear") return "Acquired " + v;
    if (k === "MaterialType") return v;
    return v;
  }

  return (
    <div className="app" style={rootStyle} data-season={t.season}>
      <header className="masthead">
        <img className="masthead__leaf" src={LOGO_LEAF} alt="" aria-hidden="true" />
        <div className="masthead__brand">
          <img className="masthead__logo" src={LOGO_PRIMARY} alt="Fort Worth Botanic Garden" />
          <div className="masthead__rule"></div>
          <div className="masthead__eyebrow">Living Collections</div>
        </div>
        <h1 className="masthead__title">The <em>Begonia</em> Collection</h1>
        <p className="masthead__lede">
          An internationally significant and nationally accredited collection of the genus <em>Begonia</em> — explore every accession by
          growth habit, origin, and place in the collection.
        </p>
        <div className="statbar">
          <Stat num={META.items?.toLocaleString()} label="Living plants" sub={(META.alive ?? 0).toLocaleString() + " in collection"} />
          <Stat num={META.uniqTaxa?.toLocaleString()} label="Distinct taxa" sub="species, hybrids & cultivars" />
          <Stat num={META.uniqAcc?.toLocaleString()} label="Accessions" sub="documented acquisitions" />
          <Stat num={META.wild?.toLocaleString()} label="Wild-collected" sub="documented wild origin" />
        </div>
      </header>

      <nav className="tabs">
        <div className="tabs__group">
          <button className={"tab" + (tab === "overview" ? " is-active" : "")} onClick={() => setTab("overview")}>Overview</button>
          <button className={"tab" + (tab === "conservation" ? " is-active" : "")} onClick={() => setTab("conservation")}>
            Conservation<span className="tab__n">{META.wild}</span>
          </button>
          <button className={"tab" + (tab === "table" ? " is-active" : "")} onClick={() => setTab("table")}>
            Collection<span className="tab__n">{filtered.length}</span>
          </button>
        </div>
        <div className="toolbar">
          <div className="segmented" role="group" aria-label="Filter by taxon kind">
            {[["all", "All"], ["species", "Species"], ["cultivar", "Cultivar"]].map(([k, lbl]) => (
              <button
                key={k}
                className={"segmented__btn" + (kind === k ? " is-active" : "")}
                onClick={() => setKind(k)}
              >{lbl}</button>
            ))}
          </div>
          <div className="search">
            <svg viewBox="0 0 24 24" className="search__icon" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2"/><line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2"/></svg>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search taxa, accession no., collector, locality…"
            />
            {search && <button className="search__clear" onClick={() => setSearch("")}>×</button>}
          </div>
        </div>
      </nav>

      {(activeFilters.length > 0 || filtered.length !== DATA.length) &&
        <div className="filterbar">
          <span className="filterbar__count">
            Showing <strong>{filtered.length.toLocaleString()}</strong> of {DATA.length.toLocaleString()} plants
            <span className="filterbar__pct">{filterPct}%</span>
          </span>
          {activeFilters.map(([k, v]) => (
            <button key={k} className="fchip" onClick={() => pick(k, v)}>
              {chipLabel(k, v)} <span className="fchip__x">×</span>
            </button>
          ))}
          {(activeFilters.length > 0 || search) &&
            <button className="filterbar__clear" onClick={() => { setFilters({}); setSearch(""); }}>Clear all</button>}
        </div>}

      <main className="content">
        {tab === "overview" ? (
          <div className="dashgrid">
            <Panel title="Growth habit" sub="The morphological architecture of the collection" wide
              action={<span className="panel__hint">click to filter</span>}>
              <HabitChart rows={filtered} onPick={pick} active={filters._habit} />
            </Panel>

            <Panel title="Provenance" sub="Where the material came from">
              <ProvenanceDonut rows={filtered} onPick={pick} active={filters.ProvenanceCode} />
            </Panel>

            <Panel title="Acquisitions over time" sub="Accessions recorded by year" wide>
              <TimelineChart rows={filtered} onPick={pick} active={filters.AccYear} />
            </Panel>

            <Panel title="In the collection" sub="Top greenhouse bays by plant count">
              <LocationChart rows={filtered} onPick={pick} active={filters.ItemLocationCode} />
            </Panel>

            <Panel title="Country of origin" sub="Top 10 countries by georeferenced locality">
              <CountryChart rows={filtered} />
            </Panel>

            <Panel title="Material received" sub="Form in which each accession arrived" wide>
              <MaterialChart rows={filtered} onPick={pick} active={filters.MaterialType} />
            </Panel>

            <Panel title="Top sources" sub="Donors & nurseries the collection came from" wide
              action={<span className="panel__hint">click to filter</span>}>
              <SourcesChart rows={filtered} onPick={pick} active={filters.ContactNameFull} />
            </Panel>
          </div>
        ) : tab === "conservation" ? (
          <ConservationView rows={filtered} onPick={pick} filters={filters} onOpen={setOpen} />
        ) : (
          <DataTable rows={sorted} sort={sort} onSort={onSort} onOpen={setOpen} openId={open?._id}
            onPick={pick} speciesFilter={filters._species} />
        )}
      </main>

      <DetailPanel rec={open} onClose={() => setOpen(null)} onPick={pick} />

      <TweaksPanel>
        <TweakSection label="Palette" />
        <TweakSelect label="Seasonal palette" value={t.season}
          options={["spring", "summer", "fall", "winter"]}
          onChange={v => setTweak("season", v)} />
        <TweakSection label="Type & density" />
        <TweakSlider label="Text scale" value={t.fontScale} min={0.85} max={1.25} step={0.05}
          onChange={v => setTweak("fontScale", v)} />
        <TweakRadio label="Density" value={t.density}
          options={["compact", "regular", "comfy"]}
          onChange={v => setTweak("density", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
