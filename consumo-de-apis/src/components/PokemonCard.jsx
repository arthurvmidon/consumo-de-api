
function PokemonCard({ name, image, type, hp, attack }) {
  const typeColors = {
    fire: "#e85d4a",
    water: "#438bd8",
    grass: "#55a86b",
    electric: "#e5b832",
    psychic: "#c45b9c",
    ice: "#65bfc9",
    dragon: "#7761c9",
    dark: "#625b68",
    fairy: "#d985b5",
    fighting: "#bd654c",
    poison: "#9660b5",
    ground: "#b58a52",
    rock: "#9b8b61",
    bug: "#91a83f",
    ghost: "#7062a5",
    steel: "#8295a8",
    flying: "#8298d8",
    normal: "#929292"
  };

  const cor = typeColors[type] || "#7654e8";

  return (
    <div
      className="pokemon-info-card"
      style={{ borderColor: cor }}
    >
      <h3>{name}</h3>

      <img src={image} alt={name} />

      <p>
        <strong>Tipo:</strong> {type}
      </p>

      <p>
        <strong>Vida:</strong> {hp}
      </p>

      <p>
        <strong>Ataque:</strong> {attack}
      </p>
    </div>
  );
}

export default PokemonCard;