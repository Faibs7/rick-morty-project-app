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
let maxPage = 1;
let page = 1;
const searchQuery = "";

async function fetchCharacters() {
  const url = "https://rickandmortyapi.com/api/character/?page=${page}";
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      console.log(page, "/", maxPage);
      maxPage = data.info.pages;

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
        pagination.textContent = `${page}/${maxPage}`;
      });
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log("Error!", error);
  }
}
fetchCharacters();

function nextPage() {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
}

nextButton.addEventListener("click", () => {
  nextPage();
  console.log(page);
});

function prevPage() {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
}

prevButton.addEventListener("click", () => {
  prevPage();
  console.log(page);
});
