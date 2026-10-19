export default function SummaryTracker({ total, watered, thirsty, theme }) {
  const stats = [
    { label: "Plants tracked", value: total },
    { label: "Watered today", value: watered },
    { label: "Need water", value: thirsty },
    { label: "Theme", value: theme === "light" ? "Light" : "Dark" },
  ];
  return (
    <section className="summary" aria-label="Summary">
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <span className="stat-value">{s.value}</span>
          <span className="stat-label">{s.label}</span>
        </div>
      ))}
    </section>
  );
}
