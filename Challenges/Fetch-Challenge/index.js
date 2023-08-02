//Character data api Fetching
async function fetchStarWarsCharacters() {
  const url = "https://swapi.dev/api/people/";
  try {
    let response = await fetch(url);
    let data = await response.json();
    displayStarWarsCharacter(data.results);
  } catch (error) {
    console.error(error);
  }
}

//homeworld data api Fetching
async function fetchStarWarsPlanets(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data.name;
  } catch (error) {
    console.error(error);
  }
}

//species data api Fetching
async function fetchStarWarsSpecies(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data.name;
  } catch (error) {
    console.error(error);
  }
}
fetchStarWarsCharacters();

// display data for characters
function displayStarWarsCharacter(characterData) {
  let characterContainer = document.querySelector(".container");

  characterData.forEach(async (character) => {
    //create character name
    let characterNameElement = document.createElement("h2");
    characterNameElement.textContent = character.name;
    //create homeworld listing
    let characterHomeworld = document.createElement("h3");
    characterHomeworld.textContent = await fetchStarWarsPlanets(
      character.homeworld
    );
    //create species
    let characterSpecies = document.createElement("h3");
    characterSpecies.textContent = await fetchStarWarsSpecies(
      character.species
    );
    //HTML calling
    characterContainer.appendChild(characterNameElement);
    characterContainer.appendChild(characterSpecies);
    characterContainer.appendChild(characterHomeworld);
  });
}
