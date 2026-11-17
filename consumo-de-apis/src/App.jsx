import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Perfil from "./components/Perfil";
import Pokemon from "./components/Pokemon";
import FilmeFavorito from "./components/FilmeFavorito";
import MovieEe from "./components/MovieEe";
import Footer from "./components/Footer";
import RandomEncounter from "./components/RandomEncounter";
import ThemeButton from "./components/theme-button";

function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  function alternarTema() {
    setDark(!dark);
  }

  return (
    <div className={dark ? "app dark-theme" : "app"}>
      <ThemeButton dark={dark} onToggle={alternarTema} />

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
          <RandomEncounter />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;