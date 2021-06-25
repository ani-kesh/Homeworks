class Breed {
  constructor(id, breed) {
    this.id = id;
    this.breed = breed;
  }
}

class ControlBreed {
  constructor(name) {
    this.name = name;
  }
}

ControlBreed.prototype.createImgItem = function (imgURL) {
  const breedPictures = document.getElementById("breed-pictures");
  const div = document.createElement("div");
  div.classList.add("breed-pic-items");
  const img = document.createElement("img");
  img.setAttribute("src", imgURL);
  div.append(img);
  breedPictures.append(div);
};

ControlBreed.prototype.removeDogImages = function () {
  let content = document.getElementById("breed-pictures");
  content.innerText = "";
};

ControlBreed.prototype.getBreeds = function () {
  const breedNames = [
    "Akita",
    "Beagle",
    "Dalmatian",
    "German",
    "Shepherd",
    "Husky",
    "Labrador",
    "Pug",
    "Golden",
    "Retriever",
    "Cocker",
    "Spaniel",
  ];

  const breeds = breedNames.reduce((acc, el, index) => {
    const breed = new Breed();
    breed.id = index;
    breed.breed = el;
    acc.push(breed);
    return acc;
  }, []);
  return breeds;
};

ControlBreed.prototype.createSelect = function (items) {
  const select = document.createElement("select");
  select.setAttribute("id", "breed-select");
  select.addEventListener("change", (ev) => {
    this.getDogImages(ev.target.value);
  });
  items.forEach((el) => {
    const option = document.createElement("option");
    option.textContent = el.breed;
    option.value = el.breed.toLowerCase();
    option.setAttribute("data-breed", el.id);
    option.classList.add("breed-option");
    select.append(option);
  });
  return select;
};

ControlBreed.prototype.noResultMessage = function () {
  let content = document.getElementById("breed-pictures");
  let noResult = document.createElement("span");
  noResult.setAttribute("id", "no-result");
  noResult.innerText = "No result";
  content.append(noResult);
};

ControlBreed.prototype.getDogImages = function (breed) {
  this.removeDogImages();
  let response = fetch(`https://dog.ceo/api/breed/${breed}/images`);
  response
    .then((result) => {
      return result;
    })
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      return result.message;
    })
    .catch((error) => {
      console.log("No image");
    })
    .then((pictures) => {
      pictures.forEach((el) => {
        this.createImgItem(el);
      });
    })
    .catch(() => {
      this.noResultMessage();
    });
};

const breedCurrent = new ControlBreed();

window.onload = function load() {
  const breeds = breedCurrent.getBreeds();
  const selectBreed = breedCurrent.createSelect(breeds);
  const optionContainer = document.querySelector("#option-container");
  optionContainer.append(selectBreed);
};
