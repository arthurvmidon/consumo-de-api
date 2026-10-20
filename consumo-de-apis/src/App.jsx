import "./App.css";
import Header from "./components/Header";
import Perfil from "./components/Perfil";
import Pokemon from "./components/Pokemon";
import FilmeFavorito from "./components/FilmeFavorito";
import MovieEe from "./components/MovieEe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <MovieEe />
      <main>
        <Perfil />
        <div className="ticks"></div>

        <section id="next-steps">
          <FilmeFavorito />
          <Pokemon />
        </section>

        <div className="ticks"></div>

        <section id="busca">

        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;