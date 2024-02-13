

async function fetchPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    
    console.log(data);
    return data;
}



for (let i = 1; i <= 10; i++) {
    fetchPokemon(i)
}