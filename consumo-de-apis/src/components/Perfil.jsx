import { useState } from "react";
import useFetch from "../hooks/useFetch";

function Perfil() {
    const [count, setCount] = useState(0);
    const perfil = useFetch("https://6a79e554674f43f4db11ebc8.mockapi.io/api/person/8");
    const dbz = useFetch("https://dragonball-api.com/api/characters/10");

    if (perfil.loading || dbz.loading) return <div>Carregando...</div>;    
    if (perfil.error || dbz.error) return <div>Ocorreu um erro inesperado</div>;
    
    return (
        <section id="center">
            <img
            src={dbz.data.image}
            className="base"
            height="200"
            alt={dbz.data.name}
            style={{marginTop: "50px"}} 
            />
            <div>
                <h1>{perfil.data.nome}</h1>
                <p>
                    Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
                </p>
            </div>
            <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count + 1)}
            >
                Count is {count}
            </button>
        </section>
    )
}

export default Perfil;