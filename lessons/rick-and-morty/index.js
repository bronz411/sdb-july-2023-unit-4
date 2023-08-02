/* 
FETCH API

The Fetch is an asynchronous function
* we don't know how long it will take to get a response back.
* we have to write code to wait for the promise to resolve.
* when we use the async - await functionality we should use a try catch
*/

/* 
1 iddentify the url and store it in a variable
2 conduct the fetch and await a response (store in a variable called response)
3 use the .json() after we get a response back = you must await this one as well because it's a promise.
*/
async function fetchRickAndMortyCharacters() {
  const url = "https://rickandmortyapi.com/api/character";
  try {
    let response = await fetch(url);
    let data = await response.json();
    displayMortyCharacters(data.results);
  } catch (error) {
    console.error(error);
  }
}

fetchRickAndMortyCharacters();

function displayMortyCharacters(characterData) {
  console.log(characterData);
  let characterContainer = document.querySelector(".container");

  characterData.forEach((character) => {
    //creating character name
    let characterNameElement = document.createElement("h3");
    characterNameElement.textContent = character.name;
    //creating gender
    let characterGenderElement = document.createElement("p");
    characterGenderElement.textContent = character.gender;
    //creating location name
    let characterLocationElement = document.createElement("p");
    characterLocationElement.textContent = character.location.name;
    //creating image
    let characterImageElement = document.createElement("img");
    characterImageElement.src = character.image;
    characterImageElement.classList.add("rounded");
    //building the HTML
    characterContainer.appendChild(characterNameElement);
    characterContainer.appendChild(characterGenderElement);
    characterContainer.appendChild(characterLocationElement);
    characterContainer.appendChild(characterImageElement);

    //logging for referrence
    console.log(character.name);
    console.log(character.gender);
    console.log(character.location.name);
    console.log(character.image);
  });
}
