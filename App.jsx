import { useState } from "react";
import Header from "./components/layout/Header.jsx";
import Dashboard from "./views/Dashboard.jsx";
import About from "./views/About.jsx";

export default function App() {
  
  const [view, setView] = useState("dashboard");
  
  const [theme, setTheme] = useState("light");

  return (
    <div className={`app ${theme}`}>
      <Header
        view={view}
        onViewChange={setView}
        theme={theme}
        onThemeToggle={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      />
      {view === "dashboard" ? <Dashboard theme={theme} /> : <About />}
    </div>
  );
}
