import useFetchCharAPI from "../hooks/useFetchCharAPI"
  
export default function MyFet() {

  const { loading, error, ret } = useFetchCharAPI("https://pokeapi.co/api/v2/pokemon/raichu","charizard");
}
return(
    <div>
          <h2>Meu pet</h2>
          <p>{pokemon.name}</p>
          <img src={pokemon.sprites?.front_default} />
          <p>{pokemon.types?.[0]?.type.name}</p>
        </div>
)