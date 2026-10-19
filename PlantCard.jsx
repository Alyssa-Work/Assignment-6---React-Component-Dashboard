export default function PlantCard({ plant, onToggleWatered, onRemove }) {
  const { id, name, light, everyDays, watered } = plant;
  return (
    <li className={watered ? "card watered" : "card"}>
      <div className="card-main">
        <h3>{name}</h3>
        <p>
          {light} light, water every {everyDays} {everyDays === 1 ? "day" : "days"}
        </p>
      </div>
      <div className="card-actions">
        <button className="btn" onClick={() => onToggleWatered(id)}>
          {watered ? "Undo" : "Mark watered"}
        </button>
        <button className="btn btn-ghost" onClick={() => onRemove(id)}>
          Remove
        </button>
      </div>
    </li>
  );
}
