const POKEMON_LIST = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
const POKEMON_LIST_CONTAINER = document.querySelector(
  "#pokemon-list-container"
);
const POKEMON_CARD_CONTAINER = document.querySelector(
  "#pokemon-card-container"
);

let pokemonList;

function getPokemonList() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
    .then((response) => response.json())
    .then((data) => {
      const {
        count: pokemonCount,
        next: nextURL,
        previous: previousURL,
        results: pokemonList,
      } = data;

      pokemonList.forEach((pokemon) => createPokemonList(pokemon.name));
    });
}
getPokemonList();

function createPokemonList(pokemon) {
  let createList = document.createElement("li");

  createList.innerText = pokemon;
  POKEMON_LIST_CONTAINER.appendChild(createList);
}
