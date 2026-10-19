import ViewSwitcher from "./ViewSwitcher.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Header({ view, onViewChange, theme, onThemeToggle }) {
  return (
    <header className="header">
      <h1 className="brand">Did You Water?</h1>
      <ViewSwitcher view={view} onChange={onViewChange} />
      <ThemeToggle theme={theme} onToggle={onThemeToggle} />
    </header>
  );
}