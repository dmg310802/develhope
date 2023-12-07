import React, {useState, useEffect} from "react";
import PokemonDetails from "./PokemonDetails";

const PokemonList = () => {
    const [pokemonList,setList] = useState([]);
    const [pokemonSelected,setPokemon] =useState(null);
    

    useEffect(() => {
        const fetchPokemonList = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');

            const data = await response.json();
            setList(data.results);

    

        

        }


        fetchPokemonList();


    },[]);


    const pokemonClick = (pokemon) => {
        setPokemon(pokemon);

    }

    return (
        <div>
            <ul>
            {pokemonList.map((pokemon) => (
                <li key={pokemon.name}>
                    <span onClick={()=> pokemonClick(pokemon)}>{pokemon.name}</span>
                </li>

            ))}



            </ul>
               {pokemonSelected && (
                 <div>
                 <PokemonDetails pokemon={pokemonSelected}/>
                 </div>
               )}

        </div>



    )





}

export default PokemonList