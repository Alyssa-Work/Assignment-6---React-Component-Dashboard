const VIEWS = [
  { id: "dashboard", label: "Dashboard" },
  { id: "about", label: "About" },
];

export default function ViewSwitcher({ view, onChange }) {
  return (
    <nav className="switcher" aria-label="Views">
      {VIEWS.map((v) => (
        <button
          key={v.id}
          className={view === v.id ? "tab active" : "tab"}
          onClick={() => onChange(v.id)}
        >
          {v.label}
        </button>
      ))}
    </nav>
  );
}
