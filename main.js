async function fetchPokemon(id) {
    //Gör fetchanrop
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    
    //Lagra svar i variabel
    const data = await response.json();                                         
    
    //Container för pokemons
    const pokemonContainerEl = document.getElementById('pokemonContainer');     
    
    //Skriv ut pokemon till container
    pokemonContainerEl.innerHTML += `                                          
        <div class="pokemon__card">
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <h2>${data.name}</h2>
        </div>`;
}

//Loop som anropar funktionen fetchPokemon med ett id för den aktuella loopen
for (let i = 1; i <= 12; i++) {
    fetchPokemon(i)
}