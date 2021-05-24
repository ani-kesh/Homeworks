"use strict";
function Menu(item, type, price) {
  this.item = item;
  this.type = type;
  this.price = price;
}

function CoffeeShop(name) {
  this.name = name;
  this.menu = [];
  this.orders = [];
  this.addOrder = function (itemName) {
    if (this.menu.some((element) => element.item === itemName)) {
      this.orders.push(itemName);
      return "Order added!";
    } else {
      return "This item is currently unavailable!";
    }
  };

  this.listOrder = function () {
    if (this.orders.length > 0) return this.orders;
    return [];
  };

  this.fulfillOrder = function () {
    let message = "";

    if (this.orders.length > 0) {
      message = `The ${this.orders[0]} is ready!`;
      this.orders.shift();
    } else {
      message = "All orders have been fulfilled!";
    }
    return message;
  };

  this.dueAmount = function () {
    return this.orders.reduce((acc, element) => {
      let priceItem = this.menu.filter((el) => element === el.item);
      acc += priceItem[0].price;
      return acc;
    }, 0);
  };

  this.cheapestItem = function () {
    let min = this.menu[0].price;
    this.menu.forEach((element) => {
      if (min > element.price) {
        min = element.price;
      }
    });
    return this.menu.reduce((acc, element) => {
      if (min === element.price) acc.push(element.item);
      return acc;
    }, []);
  };
  this.drinksOnly = function () {
    return this.menu.reduce((acc, element) => {
      if (element.type === "drink") acc.push(element.item);
      return acc;
    }, []);
  };
  this.foodOnly = function () {
    return this.menu.reduce((acc, element) => {
      if (element.type === "food") acc.push(element.item);
      return acc;
    }, []);
  };
}

let tcs = new CoffeeShop("Order N1");

let cinnamon = new Menu("cinnamon roll", "food", 15);
let icedCoffee = new Menu("iced coffee", "drink", 12);
let icedCoffee1 = new Menu("iced coffee1", "drink", 20);
let icedCoffee2 = new Menu("iced coffee2", "drink", 14);

tcs.menu.push(cinnamon, icedCoffee, icedCoffee1, icedCoffee2);

console.log(tcs.addOrder("hot cocoa")); // "This item is currently unavailable!"
// Tesha's coffee shop does not sell hot cocoa
console.log(tcs.addOrder("iced tea")); // "This item is currently unavailable!"
// specifying the variant of "iced tea" will help the process
tcs.addOrder("cinnamon roll");
tcs.addOrder("iced coffee"); // "Order added!")
console.log(tcs.listOrder());
console.log(tcs.dueAmount());

// console.log(tcs.fulfillOrder());
// console.log(tcs.fulfillOrder());
// console.log(tcs.fulfillOrder());
// console.log(tcs.listOrder());
// console.log(tcs.dueAmount());

console.log(tcs.cheapestItem());
console.log(tcs.drinksOnly());
console.log(tcs.foodOnly());
