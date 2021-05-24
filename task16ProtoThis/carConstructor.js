"use strict";

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
  this.fill = function (gallons) {
    this.tank += gallons;
  };
  this.drive = function (distance) {
    let maxDistance = this.milesPerGallon * this.tank;
    if (distance > maxDistance) {
      this.tank = 0;
      return "Iran out of fuel at " + (distance - maxDistance) + " miles!";
    }
    this.tank = this.tank - distance / milesPerGallon;
    return "Ok";
  };
}

let p1 = new Car("bmw", 1);
p1.fill(3);
console.log(p1.drive(2));
