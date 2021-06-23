window.onload = function () {
  let paragraph = document.querySelector(".paragraph");

  let paragraphWords = paragraph.innerText.split(" ");

  let arrayWords = paragraphWords.map((element) => {
    if (element.length >= 8)
      return `<span class='background-yellow'>${element}</span>`;
    else return element;
  });

  let newParagraph = arrayWords.join(" ");
  paragraph.innerHTML = newParagraph;
};
