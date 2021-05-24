function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age, favoriteToy);
  this.favoriteToy = favoriteToy;
  this.play = function () {
    return "Playing with " + this.favoriteToy;
  };
}

let babyAni = new Baby("Ani", "28", "phone");

console.log(babyAni.play());
