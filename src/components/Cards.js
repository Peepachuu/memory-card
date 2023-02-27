import React from "react";
import Card from "./Card";

function Cards() {
    const pokemonNames = [
        "charmander", "charmeleon", "charizard", 
        "bulbasaur", "ivysaur", "venusaur",
        "squirtle", "wartortle", "blastoise",
        "caterpie", "metapod", "butterfree"
    ];

    const [pokemonData, setPokemonData] = React.useState([]);
    function fetchPokemonData() {
        pokemonNames.map(name =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => res.json())
            .then(data => {
                setPokemonData(prevValue => prevValue.concat(
                    {
                        image: data.sprites.front_default, 
                        id:name
                    }
                ));
            })
        );
    }
    React.useEffect(() => fetchPokemonData(), []);

    return (
        <section className="cards">
            {pokemonData.map(data => <Card image={data.image} key={data.id} name={data.id}/>)}
        </section>
    )
}

export default Cards;