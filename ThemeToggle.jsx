export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button className="btn btn-ghost" onClick={onToggle} aria-label="Switch theme">
      {theme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
}