const pokemonNome = document

const fetchPokemon = async (pokemon) {

    const APIresponse = await fetch('https://pokeapi.co/api/v2/pokemon/${pokemon}');

    const data = await APIresponse.json();
    return data;
}

const renderPokemon = (pokemon){

    const data = await fetchPokemon(pokemon);



}
