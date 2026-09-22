/* ============================================================
   Data table (sort / search handled by parent) + detail panel.
   ============================================================ */
const { useState: useStateT, useRef: useRefT, useEffect: useEffectT } = React;

const COLUMNS = [
  { key: "_epithet",        label: "Taxon",        grow: 2, italic: true },
  { key: "_species",        label: "Species",      species: true },
  { key: "_habit",          label: "Habit",        chip: "habit" },
  { key: "ProvenanceCode",  label: "Provenance",   chip: "prov" },
  { key: "AccNoFull",       label: "Accession",    mono: true },
  { key: "AccYear",         label: "Year",         mono: true, num: true },
  { key: "MaterialType",    label: "Material" },
  { key: "ItemLocationCode",label: "Location",     mono: true, location: true },
  { key: "ItemStatusCode",  label: "Status",       chip: "status" },
];

function Chip({ kind, value }) {
  if (!value) return <span className="cell-empty">—</span>;
  if (kind === "habit") {
    const c = HABIT_COLOR[value] || "#B3B5AA";
    return <span className="chip"><span className="chip__dot" style={{ background: c }} />{value}</span>;
  }
  if (kind === "prov") {
    const p = PROVENANCE[value]; if (!p) return <span>{value}</span>;
    return <span className="chip"><span className="chip__dot" style={{ background: p.color }} />{p.short}</span>;
  }
  if (kind === "status") {
    const s = STATUS[value]; if (!s) return <span>{value}</span>;
    return <span className="chip chip--status" style={{ "--sc": s.color }}>{s.short || s.label}</span>;
  }
  return <span>{value}</span>;
}

function DataTable({ rows, sort, onSort, onOpen, openId, onPick, speciesFilter }) {
  const [limit, setLimit] = useStateT(120);
  const sentinel = useRefT(null);
  useEffectT(() => { setLimit(120); }, [rows]);
  useEffectT(() => {
    const el = sentinel.current; if (!el) return;
    const io = new IntersectionObserver(es => {
      if (es[0].isIntersecting) setLimit(l => Math.min(rows.length, l + 200));
    }, { rootMargin: "600px" });
    io.observe(el);
    return () => io.disconnect();
  }, [rows.length]);

  const shown = rows.slice(0, limit);
  return (
    <div className="tablewrap">
      <table className="dtable">
        <thead>
          <tr>
            {COLUMNS.map(c => {
              const isSorted = sort.key === c.key;
              return (
                <th
                  key={c.key}
                  className={(c.num ? "is-num " : "") + (isSorted ? "is-sorted" : "")}
                  style={c.w ? { width: c.w } : (c.grow ? { width: "auto" } : undefined)}
                  onClick={() => onSort(c.key)}
                >
                  <span className="th__inner">
                    {c.label}
                    <span className="th__arrow">{isSorted ? (sort.dir === 1 ? "▲" : "▼") : ""}</span>
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {shown.map(r => (
            <tr
              key={r._id}
              className={openId === r._id ? "is-open" : ""}
              onClick={() => onOpen(r)}
            >
              {COLUMNS.map(c => {
                const v = r[c.key];
                return (
                  <td key={c.key} className={(c.num ? "is-num " : "") + (c.mono ? "is-mono " : "")}>
                    {c.chip ? <Chip kind={c.chip} value={v} />
                      : c.species ? (v
                          ? <button
                              className={"speciescell" + (speciesFilter === v ? " is-active" : "")}
                              title={"Filter to B. " + v}
                              onClick={e => { e.stopPropagation(); onPick("_species", v); }}
                            ><em>{v}</em></button>
                          : <span className="cell-empty">—</span>)
                      : c.italic ? <span className="taxon"><span className="taxon__g">B.</span> <em>{v}</em></span>
                      : c.location ? (v ? locationLabel(v) : <span className="cell-empty">—</span>)
                      : (v || <span className="cell-empty">—</span>)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {limit < rows.length && <div ref={sentinel} className="loadmore">Loading more… ({limit} / {rows.length})</div>}
    </div>
  );
}

// ---- Detail panel ----
function Row({ label, children }) {
  if (children == null || children === "" ) return null;
  return (
    <div className="drow">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

function DetailPanel({ rec, onClose, onPick }) {
  useEffectT(() => {
    const onKey = e => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!rec) return null;
  const p = PROVENANCE[rec.ProvenanceCode];
  const s = STATUS[rec.ItemStatusCode];
  const habitNote = (HABITS.find(h => h.key === rec._habit) || {}).note;

  return (
    <>
      <div className="scrim" onClick={onClose} />
      <aside className="detail" role="dialog" aria-label="Accession detail">
        <button className="detail__close" onClick={onClose} aria-label="Close">×</button>

        <header className="detail__head">
          <div className="detail__acc">{rec.AccNoFull}{rec.ItemNo ? " · item " + rec.ItemNo : ""}</div>
          <h2 className="detail__name"><span className="detail__genus">Begonia</span> <em>{rec._epithet}</em></h2>
          {rec.DetReceivedAs && rec.DetReceivedAs !== rec.TaxonName &&
            <div className="detail__recv">received as <em>{rec.DetReceivedAs}</em></div>}
          <div className="detail__tags">
            {rec._habit && rec._habit !== "Unspecified" &&
              <button className="tag" onClick={() => { onPick("_habit", rec._habit); onClose(); }}>
                <span className="chip__dot" style={{ background: HABIT_COLOR[rec._habit] }} />{rec._habit}
              </button>}
            {p && <button className="tag" onClick={() => { onPick("ProvenanceCode", rec.ProvenanceCode); onClose(); }}>
              <span className="chip__dot" style={{ background: p.color }} />{p.label}
            </button>}
          </div>
        </header>

        {habitNote &&
          <p className="detail__habitnote">{habitNote}</p>}

        <section className="detail__sec">
          <h3>Acquisition</h3>
          <dl>
            <Row label="Accession year">{rec.AccYear}</Row>
            <Row label="Source / donor">{rec.ContactNameFull}</Row>
            <Row label="Material received">{rec.MaterialType}</Row>
            <Row label="Provenance">{p ? p.label : rec.ProvenanceCode}{p && <span className="muted"> — {p.note}</span>}</Row>
            <Row label="Recorded">{[rec.RecPerson, rec.RecDate].filter(Boolean).join(" · ")}</Row>
          </dl>
        </section>

        {(rec.Collector || rec.CollDate || rec.LocalityFull || rec.CollMethod || rec.CollNo) &&
          <section className="detail__sec">
            <h3>Wild collection</h3>
            <dl>
              <Row label="Collector">{rec.Collector}</Row>
              <Row label="Collector no.">{rec.CollNo}</Row>
              <Row label="Date">{rec.CollDate}</Row>
              <Row label="Locality">{rec.LocalityFull}</Row>
              <Row label="Method">{rec.CollMethod}</Row>
            </dl>
          </section>}

        <section className="detail__sec">
          <h3>Status &amp; placement</h3>
          <dl>
            <Row label="Status">{s ? <span className="chip chip--status" style={{ "--sc": s.color }}>{s.label}</span> : rec.ItemStatusCode}{rec.ItemStatusDate ? <span className="muted"> · {rec.ItemStatusDate}</span> : null}</Row>
            <Row label="Location">{locationLabel(rec.ItemLocationCode)}<span className="muted"> ({rec.ItemLocationCode})</span></Row>
            <Row label="Specimens">{rec.ItemSpecCount}</Row>
            <Row label="Native status">{NATIVE_SHORT[rec.AtrT_Native_Status] || rec.AtrT_Native_Status}</Row>
          </dl>
        </section>

        {(rec.AccComment || rec.ItemComment || rec.ItemLocationComment) &&
          <section className="detail__sec">
            <h3>Notes</h3>
            {rec.AccComment && <p className="note">{rec.AccComment}</p>}
            {rec.ItemComment && <p className="note">{rec.ItemComment}</p>}
            {rec.ItemLocationComment && <p className="note muted">{rec.ItemLocationComment}</p>}
          </section>}
      </aside>
    </>
  );
}

Object.assign(window, { DataTable, DetailPanel, Chip, COLUMNS });
