let trackMouse = function () {
  let container = document.getElementById("container");
  let mouseXY = document.querySelector(".mouseXY");

  container.addEventListener("mousemove", (event) => {
    mouseXY.style.top = event.clientY +"px";
    mouseXY.style.left = event.clientX +"px";
    mouseXY.innerText = `X: ${event.clientX} \n Y: ${event.clientY}`;
  });
};

trackMouse();
