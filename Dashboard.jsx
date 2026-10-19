import { useState } from "react";
import SummaryTracker from "../components/dashboard/SummaryTracker.jsx";
import PlantList from "../components/dashboard/PlantList.jsx";
import AddPlantForm from "../components/dashboard/AddPlantForm.jsx";

const STARTER_PLANTS = [
  { id: 1, name: "Pothos", light: "Medium", everyDays: 7, watered: true },
  { id: 2, name: "Snake plant", light: "Low", everyDays: 14, watered: false },
  { id: 3, name: "Basil", light: "Bright", everyDays: 2, watered: false },
];

export default function Dashboard({ theme }) {
  // useState #1: the array of plants
  const [plants, setPlants] = useState(STARTER_PLANTS);
  // useState #2: which filter is active
  const [filter, setFilter] = useState("all");

  function addPlant(data) {
    setPlants((prev) => [...prev, { id: Date.now(), watered: false, ...data }]);
  }
  function toggleWatered(id) {
    setPlants((prev) => prev.map((p) => (p.id === id ? { ...p, watered: !p.watered } : p)));
  }
  function removePlant(id) {
    setPlants((prev) => prev.filter((p) => p.id !== id));
  }

  const watered = plants.filter((p) => p.watered).length;
  const visible = plants.filter((p) =>
    filter === "all" ? true : filter === "watered" ? p.watered : !p.watered
  );

  return (
    <main className="layout">
      <SummaryTracker
        total={plants.length}
        watered={watered}
        thirsty={plants.length - watered}
        theme={theme}
      />
      <div className="columns">
        <section>
          <div className="filters">
            {["all", "thirsty", "watered"].map((f) => (
              <button
                key={f}
                className={filter === f ? "tab active" : "tab"}
                onClick={() => setFilter(f)}
              >
                {f === "all" ? "All" : f === "thirsty" ? "Need water" : "Watered"}
              </button>
            ))}
          </div>
          <PlantList plants={visible} onToggleWatered={toggleWatered} onRemove={removePlant} />
        </section>
        <AddPlantForm onAdd={addPlant} />
      </div>
    </main>
  );
}
