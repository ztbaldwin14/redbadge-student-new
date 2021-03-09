interface ChuckResponse {}

function fetchChuck() {
  let fetchURL = "https://api.chucknorris.io/jokes/random";
}

function fetchRickAndMorty() {
  let fetchURL = "https://rickandmortyapi.com/api/character";
}

function displayFetchInfo(objToDisplay: string) {
  const displayData = document.querySelector(".display-fetch");

  displayData.innerText = objToDisplay;
}
