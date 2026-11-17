
import useFetch from "../hooks/useFetch";
import MediaCard from "./MediaCard";

function FilmeFavorito() {
  const { data: filme, loading, error } = useFetch(
    "https://www.omdbapi.com/?t=Spider-Man%3A+Brand+New+Day&apikey=59ab1eb9"
  );

  if (loading) return <div>Carregando...</div>;

  if (error || !filme || filme.Response === "False") {
    return <div>Ocorreu um erro inesperado.</div>;
  }

  return (
    <div id="social">
      <MediaCard
        title={filme.Title}
        mediaUrl={filme.Poster}
        tags={[filme.Genre || "Filme"]}
        metadata={[
          {
            label: "Nota IMDb",
            value: filme.imdbRating
          },
          {
            label: "Ano",
            value: filme.Year
          },
          {
            label: "Diretor",
            value: filme.Director
          }
        ]}
      />
    </div>
  );
}

export default FilmeFavorito;