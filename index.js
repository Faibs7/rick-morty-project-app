import { createCharacterCard } from "./components/card/card.js";
export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
console.clear();
// States
const maxPage = 1;
const page = 1;
const searchQuery = "";
async function fetchCharacters() {
  const url = "https://rickandmortyapi.com/api/character/?page=1";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  cardContainer.innerHTML = "";
  data.results.forEach((character) => {
    const { image, name, status, type, episode } = character;
    const occurrences = episode.length;
    const characterCard = createCharacterCard(
      image,
      name,
      status,
      type,
      occurrences
    );
    cardContainer.append(characterCard);
  });
}
fetchCharacters();
