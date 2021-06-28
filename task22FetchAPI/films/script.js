const createForm = function (
  title,
  description,
  director,
  producer,
  releaseDate
) {
  const filmForm = `<div id="film-form">
    <label for="title"> Title: </label>
    <input type="text" id="title" class="film-input" value="${title}"/><br/>           
    <label for="description"> Description: </label>
    <textarea id="description" name="description" rows="10">${description}</textarea><br/>
    <label for="director"> Director: </label> 
    <input type="text" id="director" class="film-input"  value="${director}"/><br/>
    <label for="producer"> Producer: </label> 
    <input type="text" id="producer" class="film-input"  value="${producer}"/><br/>
    <label for="release-date"> Release date: </label> 
    <input type="text" id="release-date" class="film-input"  value="${releaseDate}"/>
    </div>`;
  return filmForm;
};

const getFilms = function () {
  fetch("https://ghibliapi.herokuapp.com/films/")
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      if (result.length > 0) {
        const container = document.getElementById("container");
        let res = result.reduce((acc, el) => {
          acc += createForm(
            el.title,
            el.description,
            el.director,
            el.producer,
            el.release_date
          );
          return acc;
        }, "");
        container.insertAdjacentHTML("beforeend", res);
      }
    });
};
window.onload = function loadFilms() {
  const films = getFilms();
};
