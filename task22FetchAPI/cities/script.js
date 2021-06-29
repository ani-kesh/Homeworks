const createCard = function (imgURL, countriesName) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("countries-card");
  const flagImg = document.createElement("img");
  flagImg.setAttribute("src", imgURL);
  flagImg.setAttribute("width", "100");
  flagImg.setAttribute("height", "100");
  const countriesLabel = document.createElement("label");
  countriesLabel.classList.add("countries-label");
  countriesLabel.textContent = countriesName;
  const  newLine = document.createElement("BR");

  cardDiv.append(flagImg);
  cardDiv.append(newLine);
  cardDiv.append(countriesLabel);
  return cardDiv;
};

const getCountries = function () {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        if (result.length > 0) {
          const container = document.getElementById("container");
          result.forEach((el) => {
            const cardDiv = createCard(el.flag, el.name);
            container.append(cardDiv);
          });
        }
      });
  };
  
const searchCountries = function () {
  const searchInput = document.getElementById("search-countries");
  const countriesName = searchInput.value;

  if(countriesName.trim() !== ""){
    fetch(`https://restcountries.eu/rest/v2/name/${countriesName}`)
        .then((result) => {
        return result.json();
        })
        .then((result) => {
            const container = document.getElementById("container");
            container.innerText ="";
            result.forEach((el) => {
                const cardDiv = createCard(el.flag, el.name);
                container.append(cardDiv);
            });
        });      
  }
  else{
    getCountries();
  }

};

window.onload = function loadFilms() {
  const countries = getCountries();
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", () => {
    searchCountries();
  });
};
