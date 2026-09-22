/* FWBG Design System build — chart colours from the FWBG palette.
/* ============================================================
   Charts — habit bars, provenance donut, acquisition timeline,
   location bars, material bars. Pure presentational; clicking a
   segment calls onPick(field, value) for cross-filtering.
   ============================================================ */
const { useMemo } = React;

// --- shared: a labelled horizontal bar list ---
function BarList({ rows, total, max, active, onPick, field, accent }) {
  return (
    <div className="barlist">
      {rows.map(([value, count, color, sub, display]) => {
        const label = display ?? value;
        const pct = max ? (count / max) * 100 : 0;
        const isActive = active === value;
        const dim = active && !isActive;
        return (
          <button
            key={value}
            className={"barrow" + (isActive ? " is-active" : "") + (dim ? " is-dim" : "")}
            onClick={() => onPick(field, value)}
            title={sub || label}
          >
            <span className="barrow__label">{label}</span>
            <span className="barrow__track">
              <span className="barrow__fill" style={{ width: pct + "%", background: color || accent }} />
            </span>
            <span className="barrow__count">{count.toLocaleString()}</span>
            <span className="barrow__pct">{total ? Math.round((count / total) * 100) : 0}%</span>
          </button>
        );
      })}
    </div>
  );
}

// --- Habit bars ---
function HabitChart({ rows, onPick, active }) {
  const data = useMemo(() => {
    const m = countBy(rows, r => r._habit);
    return HABITS
      .map(h => [h.key, m.get(h.key) || 0, HABIT_COLOR[h.key], h.note])
      .filter(d => d[1] > 0)
      .sort((a, b) => b[1] - a[1]);
  }, [rows]);
  const max = Math.max(1, ...data.map(d => d[1]));
  return <BarList rows={data} total={rows.length} max={max} active={active} onPick={onPick} field="_habit" />;
}

// --- Provenance donut ---
function ProvenanceDonut({ rows, onPick, active }) {
  const data = useMemo(() => {
    const m = countBy(rows, r => r.ProvenanceCode);
    return Object.keys(PROVENANCE)
      .map(code => ({ code, count: m.get(code) || 0, ...PROVENANCE[code] }))
      .filter(d => d.count > 0)
      .sort((a, b) => b.count - a.count);
  }, [rows]);
  const total = data.reduce((s, d) => s + d.count, 0);
  const R = 52, C = 2 * Math.PI * R, GAP = 2;
  let offset = 0;
  const segs = data.map(d => {
    const frac = d.count / total;
    const len = Math.max(0, frac * C - GAP);
    const seg = { ...d, dash: len, gap: C - len, off: offset, frac };
    offset -= frac * C;
    return seg;
  });
  return (
    <div className="donutwrap">
      <svg viewBox="0 0 140 140" className="donut">
        <g transform="translate(70,70) rotate(-90)">
          {segs.map(s => (
            <circle
              key={s.code} r={R} fill="none" cx="0" cy="0"
              stroke={s.color}
              strokeWidth={active && active !== s.code ? 12 : 18}
              strokeDasharray={`${s.dash} ${s.gap}`}
              strokeDashoffset={s.off}
              style={{ cursor: "pointer", transition: "stroke-width .2s", opacity: active && active !== s.code ? 0.45 : 1 }}
              onClick={() => onPick("ProvenanceCode", s.code)}
            />
          ))}
        </g>
        <text x="70" y="64" className="donut__num" textAnchor="middle">{total.toLocaleString()}</text>
        <text x="70" y="82" className="donut__lbl" textAnchor="middle">plants</text>
      </svg>
      <div className="donut__legend">
        {segs.map(s => (
          <button
            key={s.code}
            className={"leg" + (active === s.code ? " is-active" : "") + (active && active !== s.code ? " is-dim" : "")}
            onClick={() => onPick("ProvenanceCode", s.code)}
          >
            <span className="leg__dot" style={{ background: s.color }} />
            <span className="leg__lbl">{s.label}</span>
            <span className="leg__num">{s.count}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// --- Acquisition timeline (by year) ---
function TimelineChart({ rows, onPick, active }) {
  const data = useMemo(() => {
    const m = countBy(rows, r => r.AccYear);
    const years = [...m.keys()].map(Number).filter(y => y > 1900);
    if (!years.length) return [];
    const min = Math.min(...years), max = Math.max(...years);
    const out = [];
    for (let y = min; y <= max; y++) out.push([String(y), m.get(String(y)) || 0]);
    return out;
  }, [rows]);
  const max = Math.max(1, ...data.map(d => d[1]));
  return (
    <div className="timeline">
      {data.map(([year, count]) => {
        const h = (count / max) * 100;
        const isActive = active === year;
        const dim = active && !isActive;
        return (
          <button
            key={year}
            className={"tl__col" + (isActive ? " is-active" : "") + (dim ? " is-dim" : "")}
            onClick={() => onPick("AccYear", year)}
            title={`${year}: ${count} accessions`}
          >
            <span className="tl__count">{count || ""}</span>
            <span className="tl__bar" style={{ height: Math.max(count ? 3 : 0, h) + "%" }} />
            <span className="tl__year">{year.slice(2)}</span>
          </button>
        );
      })}
    </div>
  );
}

// --- Location bars (top N greenhouse bays) ---
function LocationChart({ rows, onPick, active }) {
  const data = useMemo(() => {
    const m = countBy(rows, r => r.ItemLocationCode);
    return [...m.entries()]
      .map(([code, n]) => [code, n, "#3B5443", code, locationLabel(code)])
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
  }, [rows]);
  const max = Math.max(1, ...data.map(d => d[1]));
  return (
    <BarList
      rows={data}
      total={rows.length} max={max} active={active}
      onPick={onPick} field="ItemLocationCode"
    />
  );
}

// --- Country of origin bars (top 10, all provenance) ---
function CountryChart({ rows }) {
  const { data, total } = useMemo(() => {
    const m = new Map();
    for (const r of rows) {
      const c = countryFromLocality(r.LocalityFull);
      if (!c) continue;
      m.set(c, (m.get(c) || 0) + 1);
    }
    const all = [...m.entries()].map(([c, n]) => [c, n, "#004A4A"]).sort((a, b) => b[1] - a[1]);
    return { data: all.slice(0, 10), total: all.reduce((s, d) => s + d[1], 0) };
  }, [rows]);
  if (!data.length) return <p className="consv__empty">No georeferenced origins in the current selection.</p>;
  const max = Math.max(1, ...data.map(d => d[1]));
  return <BarList rows={data} total={total} max={max} active={null} onPick={() => {}} field="_country" />;
}

// --- Material type bars ---
function MaterialChart({ rows, onPick, active }) {
  const data = useMemo(() => {
    const m = countBy(rows, r => r.MaterialType);
    const palette = ["#293A2E","#8EA937","#F68A3D","#004A4A","#A2568D","#C79C0B"];
    return [...m.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([k, n], i) => [k, n, palette[i % palette.length]]);
  }, [rows]);
  const max = Math.max(1, ...data.map(d => d[1]));
  return <BarList rows={data} total={rows.length} max={max} active={active} onPick={onPick} field="MaterialType" />;
}

/* ============================================================
   CONSERVATION VIEW components (v2)
   ============================================================ */

// ISO-3 country codes seen in wild-collection localities → readable names
const COUNTRIES = {
  IND: "India", GAB: "Gabon", VNM: "Vietnam", VEN: "Venezuela", ECU: "Ecuador",
  TWN: "Taiwan", MEX: "Mexico", PRI: "Puerto Rico", LAO: "Laos", CHN: "China",
  USA: "United States", BRA: "Brazil", COL: "Colombia", PER: "Peru", PHL: "Philippines",
  MYS: "Malaysia", IDN: "Indonesia", THA: "Thailand", BOL: "Bolivia", CRI: "Costa Rica",
  PAN: "Panama", GTM: "Guatemala", HND: "Honduras", NIC: "Nicaragua",
  MDG: "Madagascar", CMR: "Cameroon", PNG: "Papua New Guinea", TZA: "Tanzania",
};
function countryFromLocality(loc) {
  if (!loc) return null;
  const m = loc.match(/^([A-Z]{2,4})\s*:/);
  if (!m) return null;
  return COUNTRIES[m[1]] || m[1];
}
function localityRest(loc) {
  if (!loc) return "";
  const i = loc.indexOf(":");
  return i >= 0 ? loc.slice(i + 1).trim() : loc.trim();
}

// Provenance ordered as a documentation gradient (most → least documented)
const PROV_ORDER = ["W", "G", "U", "Z"];

// --- Conservation tier bar: a single segmented stacked bar ---
function ProvenanceTiers({ rows, onPick, active }) {
  const data = useMemo(() => {
    const m = countBy(rows, r => r.ProvenanceCode);
    return PROV_ORDER
      .map(code => ({ code, count: m.get(code) || 0, ...PROVENANCE[code] }))
      .filter(d => d.count > 0);
  }, [rows]);
  const total = data.reduce((s, d) => s + d.count, 0) || 1;
  return (
    <div className="tiers">
      <div className="tiers__bar">
        {data.map(d => (
          <button
            key={d.code}
            className={"tiers__seg" + (active === d.code ? " is-active" : "") + (active && active !== d.code ? " is-dim" : "")}
            style={{ flexGrow: d.count, background: d.color }}
            onClick={() => onPick("ProvenanceCode", d.code)}
            title={`${d.label}: ${d.count.toLocaleString()} (${Math.round((d.count / total) * 100)}%)`}
          >
            <span className="tiers__seglbl">{Math.round((d.count / total) * 100)}%</span>
          </button>
        ))}
      </div>
      <div className="tiers__legend">
        {data.map(d => (
          <button
            key={d.code}
            className={"tierleg" + (active === d.code ? " is-active" : "") + (active && active !== d.code ? " is-dim" : "")}
            onClick={() => onPick("ProvenanceCode", d.code)}
          >
            <span className="tierleg__dot" style={{ background: d.color }} />
            <div className="tierleg__txt">
              <span className="tierleg__lbl">{d.label}</span>
              <span className="tierleg__note">{d.note}</span>
            </div>
            <span className="tierleg__num">{d.count.toLocaleString()}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// --- The wild-collected register: focused cards for every documented-origin plant ---
function WildRegister({ rows, onOpen }) {
  const wild = useMemo(
    () => rows.filter(r => r.ProvenanceCode === "W")
      .sort((a, b) => (b.AccYear || "").localeCompare(a.AccYear || "") || (a._epithet || "").localeCompare(b._epithet || "")),
    [rows]
  );
  if (!wild.length) {
    return <p className="consv__empty">No wild-collected accessions in the current selection.</p>;
  }
  return (
    <div className="wildgrid">
      {wild.map(r => {
        const country = countryFromLocality(r.LocalityFull);
        const rest = localityRest(r.LocalityFull);
        return (
          <button key={r._id} className="wildcard" onClick={() => onOpen(r)}>
            <div className="wildcard__top">
              <span className="wildcard__acc">{r.AccNoFull}</span>
              {country && <span className="wildcard__country">{country}</span>}
            </div>
            <h4 className="wildcard__name"><span className="wildcard__g">B.</span> <em>{r._epithet}</em></h4>
            <dl className="wildcard__meta">
              {r.Collector && <div><dt>Collector</dt><dd>{r.Collector}{r.CollNo ? <span className="muted"> · {r.CollNo}</span> : null}</dd></div>}
              {rest && <div><dt>Locality</dt><dd>{rest}</dd></div>}
              {(r.CollDate || r.CollMethod) &&
                <div><dt>Collected</dt><dd>{[r.CollDate, r.CollMethod].filter(Boolean).join(" · ")}</dd></div>}
            </dl>
          </button>
        );
      })}
    </div>
  );
}

// --- Origins by country (wild material only) ---
function OriginsChart({ rows, onPick, active }) {
  const data = useMemo(() => {
    const wild = rows.filter(r => r.ProvenanceCode === "W");
    const m = new Map();
    for (const r of wild) {
      const c = countryFromLocality(r.LocalityFull);
      if (!c) continue;
      m.set(c, (m.get(c) || 0) + 1);
    }
    return [...m.entries()]
      .map(([c, n]) => [c, n, "#F68A3D"])
      .sort((a, b) => b[1] - a[1]);
  }, [rows]);
  if (!data.length) return <p className="consv__empty">No georeferenced wild origins in selection.</p>;
  const max = Math.max(1, ...data.map(d => d[1]));
  const total = data.reduce((s, d) => s + d[1], 0);
  return <BarList rows={data} total={total} max={max} active={active} onPick={() => {}} field="_country" />;
}

// --- Collectors of wild material ---
function CollectorsChart({ rows }) {
  const data = useMemo(() => {
    const wild = rows.filter(r => r.ProvenanceCode === "W" && r.Collector);
    const m = countBy(wild, r => r.Collector);
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  }, [rows]);
  if (!data.length) return <p className="consv__empty">No named collectors in selection.</p>;
  const max = Math.max(1, ...data.map(d => d[1]));
  return (
    <ul className="collectors">
      {data.map(([name, n]) => (
        <li key={name} className="collector">
          <span className="collector__name">{name}</span>
          <span className="collector__track"><span className="collector__fill" style={{ width: (n / max) * 100 + "%" }} /></span>
          <span className="collector__n">{n}</span>
        </li>
      ))}
    </ul>
  );
}

// --- Top sources / donors (ContactNameFull), excluding "Unknown" ---
function SourcesChart({ rows, onPick, active }) {
  const data = useMemo(() => {
    const m = countBy(
      rows.filter(r => {
        const v = (r.ContactNameFull || "").trim();
        return v && v.toLowerCase() !== "unknown";
      }),
      r => r.ContactNameFull.trim()
    );
    return [...m.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([name, n]) => [name, n, "#004A4A"]);
  }, [rows]);
  if (!data.length) return <p className="consv__empty">No documented sources in the current selection.</p>;
  const max = Math.max(1, ...data.map(d => d[1]));
  return <BarList rows={data} total={rows.length} max={max} active={active} onPick={onPick} field="ContactNameFull" />;
}

Object.assign(window, {
  HabitChart, ProvenanceDonut, TimelineChart, LocationChart, MaterialChart,
  ProvenanceTiers, WildRegister, OriginsChart, CollectorsChart, countryFromLocality,
  SourcesChart, CountryChart,
});
