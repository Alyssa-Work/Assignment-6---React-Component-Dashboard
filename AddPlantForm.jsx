import { useState } from "react";

export default function AddPlantForm({ onAdd }) {
  const [name, setName] = useState("");
  const [light, setLight] = useState("Bright");
  const [everyDays, setEveryDays] = useState(7);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError("Enter a plant name with at least 2 characters.");
      return;
    }
    onAdd({ name: name.trim(), light, everyDays: Number(everyDays) });
    setName("");
    setLight("Bright");
    setEveryDays(7);
    setError("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add a plant</h2>

      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Monstera"
        />
      </label>

      <label>
        Light
        <select value={light} onChange={(e) => setLight(e.target.value)}>
          <option>Bright</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </label>

      <label>
        Water every (days)
        <input
          type="number"
          min="1"
          max="60"
          value={everyDays}
          onChange={(e) => setEveryDays(e.target.value)}
        />
      </label>

      {error && <p className="error" role="alert">{error}</p>}
      <button className="btn btn-primary" type="submit">Add plant</button>
    </form>
  );
}
