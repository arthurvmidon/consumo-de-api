import { useState, useRef } from "react";
import PokemonCard from "./PokemonCard";
import MediaCard from "./MediaCard";

function EvolutionNode({ node }) {
  return (
    <div className="evolution-node">
      <strong>{node.species.name}</strong>

      {node.evolves_to.length > 0 && (
        <div className="evolution-branches">
          {node.evolves_to.map((evolution) => (
            <div key={evolution.species.name}>
              <span className="evolution-arrow">↓</span>

              <EvolutionNode node={evolution} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function RandomEncounter() {
  const [pokemon, setPokemon] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const requisicaoAtiva = useRef(false);

  const encontrarPokemon = async () => {
    if (requisicaoAtiva.current) return;

    requisicaoAtiva.current = true;

    setLoading(true);
    setError(false);
    setPokemon(null);
    setEvolutionChain(null);

    try {
      const id = Math.floor(Math.random() * 1025) + 1;

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar Pokémon");
      }

      const data = await response.json();

      setPokemon(data);

      const speciesResponse = await fetch(data.species.url);

      if (!speciesResponse.ok) {
        throw new Error("Erro ao buscar espécie");
      }

      const speciesData = await speciesResponse.json();

      const chainResponse = await fetch(
        speciesData.evolution_chain.url
      );

      if (!chainResponse.ok) {
        throw new Error("Erro ao buscar evoluções");
      }

      const chainData = await chainResponse.json();

      setEvolutionChain(chainData.chain);

    } catch (erro) {
      console.log("Erro:", erro);
      setError(true);

    } finally {
      setLoading(false);
      requisicaoAtiva.current = false;
    }
  };

  return (
    <div className="random-encounter">

      <h2>Encontro Aleatório Pokémon</h2>

      <p>
        Clique no botão para encontrar um Pokémon selvagem!
      </p>

      <button
        onClick={encontrarPokemon}
        disabled={loading}
      >
        {loading ? "Procurando..." : "Encontrar Pokémon"}
      </button>

      {loading && (
        <p>Carregando Pokémon...</p>
      )}

      {error && (
        <p>
          Não foi possível encontrar os dados.
          Tente novamente!
        </p>
      )}

      
    
    {pokemon && (
    <MediaCard
        title={pokemon.name}
        mediaUrl={
        pokemon.sprites.other["official-artwork"].front_default ||
        pokemon.sprites.front_default
        }
        tags={pokemon.types.map(
        (tipo) => tipo.type.name
        )}
        metadata={[
        {
            label: "Vida",
            value: pokemon.stats.find(
            (stat) => stat.stat.name === "hp"
            ).base_stat
        },
        {
            label: "Ataque",
            value: pokemon.stats.find(
            (stat) => stat.stat.name === "attack"
            ).base_stat
        }
        ]}
    />
    )}


      {evolutionChain && (
        <div className="evolution-section">

          <h3>Árvore de Evolução</h3>

          {evolutionChain.evolves_to.length === 0 && (
            <p>Este Pokémon não possui evoluções.</p>
          )}

          <EvolutionNode node={evolutionChain} />

        </div>
      )}

    </div>
  );
}

export default RandomEncounter;