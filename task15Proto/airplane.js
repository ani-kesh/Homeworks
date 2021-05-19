"use strict";

let Airplane = {
  takeOff: function () {
    this.currentState = true;
  },
  land: function () {
    this.currentState = false;
  },
};

let u2 = Object.create(Airplane);
u2.currentState = false;

let f16 = Object.create(Airplane);

u2.takeOff();
console.log(u2.currentState);

f16.takeOff();
console.log(f16.currentState);
