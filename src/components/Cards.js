import React from "react";
import Card from "./Card";

function Cards(props) {
    const [pokemonData, setPokemonData] = React.useState([]);
    React.useEffect(() => {
        async function fetchPokemonData() {
            const responses = [];
            for (let id = 1; id <= 12; ++id) {
                responses.push(fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(res => res.json()));
            }
            const data = await Promise.all(responses);
            return data.map(pokemon => ({
                image: pokemon.sprites.front_default,
                id: pokemon.id,
                name: pokemon.name,
                clicked: false
            }));
        }
        fetchPokemonData().then(data => setPokemonData(data));
    }, []);

    function handleClick(cardID) {
        let pokemonDataCopy = JSON.parse(JSON.stringify(pokemonData));
        shuffleArray(pokemonDataCopy);
        for (const pokemon of pokemonDataCopy) {
            if (pokemon.id === cardID) {
                if (pokemon.clicked) {
                    resetGame();
                    return ;
                }
                pokemon.clicked = true;
                props.setCurrentScore(prevScore => {
                    props.setBestScore(prevBestScore => Math.max(prevBestScore, prevScore + 1));
                    return prevScore + 1;
                });
                
            }
        }
        setPokemonData(pokemonDataCopy);
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function resetGame() {
        props.setCurrentScore(0);
        let pokemonDataCopy = JSON.parse(JSON.stringify(pokemonData));
        shuffleArray(pokemonDataCopy);
        for (const pokemon of pokemonDataCopy) {
            pokemon.clicked = false;
        }
        setPokemonData(pokemonDataCopy);
    }

    return (
        <section className="cards">
            {pokemonData.map(pokemon => 
                <Card 
                    image={pokemon.image} 
                    key={pokemon.id} 
                    name={pokemon.name}
                    handleClick={() => handleClick(pokemon.id)}
                />)}
        </section>
    )
}

export default Cards;