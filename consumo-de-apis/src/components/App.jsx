import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const API_KEY = '7d753a18';
  const [perfil, setPerfil] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [DBZ, setDBZ] = useState({})
  const [pokemon, setPokemon] = useState({})
  const [filme, setFilme] = useState({})
  const [filme2, setFilme2] = useState({})
  const [text, setText] = useState(() => {
    return localStorage.getItem('easy-input') || '';
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://6a79e554674f43f4db11ebc8.mockapi.io/api/person/8")
        setPerfil(response.data)
        const responseDBZ = await axios.get(
          "https://dragonball-api.com/api/characters/10")
        setDBZ(responseDBZ.data)
        const responsePoke = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/raichu")
        setPokemon(responsePoke.data)
        const responseFilme = await axios.get(
          `https://www.omdbapi.com/?i=tt0803096&apikey=${API_KEY}`)
        setFilme(responseFilme.data)
        const responseFilme2 = await axios.get(
          `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`)
        setFilme2(responseFilme2.data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
        console.log("Error: ", error)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    localStorage.setItem('easy-input', text);
    console.log('Fácil: Salvando no localStorage ->', text);
  }, [text]);

  if (loading) {
    return (<div>Loading</div>)
  }
  if (error) {
    return (<div>Ocorreu um erro inesperado</div>)
  }
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={DBZ.image} className="base" width="170" height="179" alt="" />
        </div>
        <div>
          <h1>{perfil.nome}</h1>
        </div>
        <div className="card">
          <h2>UseEffect Nível Fácil: Sincronizar com LocalStorage</h2>
          <p>O que você digitar será salvo automaticamente. Se recarregar a página, não perderá a informação.</p>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Digite algo para salvar..."
          />
        </div>
      </section>
      <div className="ticks"></div>
      <section id="next-steps">
        <div id="docs">
          <h2>Filme que não gostei</h2>
          <p>{filme.Title}</p>
          <img src={filme.Poster} width="170" />
          <p>{filme.Ratings?.[1]?.Source}</p>
          <p>{filme.Ratings?.[1]?.Value}</p>
        </div>
        <div id="docs">
          <h2>Filme que gostei</h2>
          <p>{filme2.Title}</p>
          <img src={filme2.Poster} width="170" />
          <p>{filme2.Ratings?.[1]?.Source}</p>
          <p>{filme2.Ratings?.[1]?.Value}</p>
        </div>
        <div id="social">
          <h2>Meu pet</h2>
          <p>{pokemon.name}</p>
          <img src={pokemon.sprites?.front_default} />
          <p>{pokemon.types?.[0]?.type.name}</p>
        </div>
      </section>
      <div className="ticks"></div>
    </>
  )
}

export default App