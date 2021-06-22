let hour = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let setIntervalId = Infinity;
let setTimeoutId = Infinity;
let localStorage = window.localStorage;

window.onload = function load() {
  hour.value = 0;
  sec.value = 0;
  min.value = 0;
  localStorage.setItem("second", 0);
  localStorage.setItem("minute", 0);
  localStorage.setItem("hour", 0);
};

let saveTimerValue = function () {    
  localStorage.setItem("second", sec.value);
  localStorage.setItem("minute", min.value);
  localStorage.setItem("hour", hour.value);
};

let startTimer = function () {    
  clearInterval(setIntervalId);
  clearTimeout(setTimeoutId);
  let secondValue =
    sec.value !== "" && !isNaN(sec.value) ? Number(sec.value) : 0;
  let minuteValue =
    min.value !== "" && !isNaN(min.value) ? Number(min.value) : 0;
  let hoursValue =
    hour.value !== "" && !isNaN(hour.value) ? Number(hour.value) : 0;

  let seconds = hoursValue * 3600 + minuteValue * 60 + secondValue;

  if (seconds > 0) {
    secondValue = secondValue === 0 ? 60 : secondValue;

    setIntervalId = setInterval(function () {
      secondValue = secondValue === 0 || secondValue === 60 ? 60 : secondValue;

      if (secondValue === 60) {
        if (minuteValue === 60) {
          if (hoursValue > 0) hour.value = --hoursValue;
        } else if (minuteValue === 0) {
          minuteValue = 60;
          if (hoursValue > 0) hour.value = --hoursValue;
        }
        min.value = --minuteValue;
      }
      sec.value = --secondValue;
    }, 1000);

    setTimeoutId = setTimeout(function () {
      clearInterval(setIntervalId);
      sec.value = 0;
      min.value = 0;
      hour.value = 0;
    }, seconds * 1000);
  }
};

reset.addEventListener("click", () => {
  clearInterval(setIntervalId);
  clearTimeout(setTimeoutId);
  
  let second = Number(localStorage.getItem("second"));
  let minute = Number(localStorage.getItem("minute"));
  let hour = Number(localStorage.getItem("hour"));

  hour.value = hour;
  sec.value = second;
  min.value = minute;
});

start.addEventListener("click", () => {
  startTimer();
});

stop.addEventListener("click", () => {
  clearInterval(setIntervalId);
  clearTimeout(setTimeoutId);
});

hour.addEventListener("change", (evt) => {
  if (!/\b(^[0-9]|^[1-9][0-9])\b/.test(evt.target.value)) hour.value = 1;
  saveTimerValue();
});

min.addEventListener("change", (evt) => {
  if (!/\b(^[0-9]|^[1-5][0-9])\b/.test(evt.target.value)) min.value = 59;
  saveTimerValue();
});

sec.addEventListener("change", (evt) => {
  if (!/\b(^[0-9]|^[1-5][0-9])\b/.test(evt.target.value)) sec.value = 59;
  saveTimerValue();
});
