
import { useEffect, useState } from "react";
import MediaCard from "./MediaCard";

export default function MovieEe() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("Minecraft");

  const API_KEY = "59ab1eb9";

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`
        );

        const data = await response.json();

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }

      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
        setMovies([]);

      } finally {
        setLoading(false);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      if (query.trim() !== "") {
        getData();
      } else {
        setMovies([]);
        setLoading(false);
      }
    }, 800);

    return () => clearTimeout(delayDebounceFn);

  }, [query]);

  return (
    <div className="card">

      <h2>Nível Médio: Consumo de API OMDb com Debounce</h2>

      <p>Busque filmes assim que você parar de digitar.</p>

      <input
        type="text"
        placeholder="Buscar filme..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Carregando filmes...</p>}

      {!loading && movies.length > 0 && (
        <div className="movie-list">

          {movies.map((movie) => (
            <MediaCard
              key={movie.imdbID}
              title={movie.Title}
              mediaUrl={movie.Poster}
              tags={[movie.Type]}
              metadata={[
                {
                  label: "Ano",
                  value: movie.Year
                },
                {
                  label: "IMDb ID",
                  value: movie.imdbID
                }
              ]}
            />
          ))}

        </div>
      )}

      {!loading && movies.length === 0 && (
        <p>Nenhum filme encontrado.</p>
      )}

    </div>
  );
}