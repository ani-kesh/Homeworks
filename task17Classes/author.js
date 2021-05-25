class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }

  set name(name) {
    if (!isNaN(this._name)) {
      throw new ERROR("Name can't contain number");
    } else {
      this._name = name;
    }
  }
  get name() {
    return this._name;
  }
  get email() {
    return this._email;
  }
  get gender() {
    return this._gender;
  }
  toString() {
    let genderValue =
      this._gender.toLowerCase() === "female"
        ? "Ms "
        : this._gender.toLowerCase() === "male"
        ? "Mrs "
        : "Dear ";
    return genderValue + this._name;
  }
}

let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");

class Book {
  constructor(title, author1, price, quantity) {
    this._title = title;
    this._author = author1._name;
    this._price = price;
    this._quantity = quantity;
  }

  get title() {
    return this._title;
  }
  get author() {
    return this._author;
  }
  get price() {
    return this._price;
  }
  get quantity() {
    return this._quantity;
  }

  set title(title) {
    this._title = title;
  }
  set author(author) {
    this._author = author;
  }
  set price(price) {
    this._price = price;
  }
  set quantity(quantity) {
    this._quantity = quantity;
  }
  getProfit() {
    return this._price * this._quantity;
  }
  toString() {
    return this._name;
  }
}



console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling

author1.name = 12;
