let images = document.getElementsByTagName("img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
localStorage.setItem("imgIndex", 0);

let nextPicture = function () {
  let imgIndex = Number(localStorage.getItem("imgIndex"));
  images[imgIndex].classList.remove("toggle");
  let nextImgIndex = imgIndex === images.length - 1 ? 0 : ++imgIndex;
  images[nextImgIndex].classList.add("toggle");
  localStorage.setItem("imgIndex", nextImgIndex);
};

let prevPicture = function () {
  let imgIndex = Number(localStorage.getItem("imgIndex"));
  images[imgIndex].classList.remove("toggle");
  let prevImgIndex = imgIndex === 0 ? images.length - 1 : --imgIndex;
  images[prevImgIndex].classList.add("toggle");
  localStorage.setItem("imgIndex", prevImgIndex);
};

prev.addEventListener("click", () => {
  prevPicture();
});

next.addEventListener("click", () => {
  nextPicture();
});

let animation = setInterval(nextPicture, 3000);
