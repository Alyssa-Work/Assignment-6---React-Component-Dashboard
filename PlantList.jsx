import PlantCard from "./PlantCard.jsx";

export default function PlantList({ plants, onToggleWatered, onRemove }) {
  if (plants.length === 0) {
    return <p className="empty">No plants here yet. Add one using the form.</p>;
  }
  return (
    <ul className="list">
      {/* Dynamic rendering with .map() */}
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onToggleWatered={onToggleWatered}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}
