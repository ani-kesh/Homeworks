// this task is not finished
//
//
//
//
//

class Library {}

class Reader {
  constructor(firstName, lastName, books) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._books = books;
    this.readerId = Reader.idVal;
    Reader.idVal++;
  }
  static idVal = 0;

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    if (typeof value !== "string") throw new Error("Enter string");
    this._firstName = value;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (typeof value !== "string") throw new Error("Enter string");
    this._lastName = value;
  }
  get books() {
    return this._books;
  }
  set books(value) {
    if (typeof value !== "string") throw new Error("Enter string");
    this._books = value;
  }
  toString() {
    return "Ok";
  }
  borrowBook() {}
}

class Book {
  constructor(title, author) {
    this._title = title;
    this._author = author;
  }

  get title() {
    return this._title;
  }
  get author() {
    return this._author;
  }
  set title(title) {
    if (typeof title !== "string") throw new Error("Enter string");
    this._title = title;
  }
  set author(author) {
    if (typeof author !== "string") throw new Error("Enter string");
    this._author = author;
  }

  toString() {
    return this._author;
  }

  isTheSameBook(book) {
    if (book.title === this._title && this._author === book.author) return true;
    return false;
  }
}

class LibraryBookBase extends Book {
  constructor(title, author) {
    super(title, author);
    this.bookId = LibraryBookBase.idVal;
    LibraryBookBase.idVal++;
  }
  static idVal = 0;

  toString() {
    return "ok";
  }
}

class LibraryBook extends Book {
  constructor(title, author) {
    super(title, author);
    this._quantity = 0;
    this.bookId = LibraryBook.idVal;
    LibraryBook.idVal++;
  }
  static idVal = 0;

  get quantity() {
    return this._quantity;
  }
  set quantity(quantity) {
    if (typeof quantity !== "number") throw new Error("Enter number");
    this._quantity = quantity;
  }

  increaseQuantityBy(amount) {
    this._quantity += amount;
    return this._quantity;
  }
  decreaseQuantityBy(amount) {
    this._quantity -= amount;
    return this._quantity;
  }
  toString() {
    return "ok";
  }
}

class ReaderBook extends Book {
  constructor(title, author, expirationDate, isReturned) {
    super(title, author);
    this._expirationDate = expirationDate;
    this._isReturned = isReturned;
    LibraryBook.idVal++;
  }
  static idVal = 0;

  get expirationDate() {
    return this._expirationDate;
  }
  set expirationDate(value) {
    if (typeof value !== "string") throw new Error("Enter string");
    this._expirationDate = value;
  }

  get isReturned() {
    return this._isReturned;
  }
  set isReturned(value) {
    if (typeof value !== "boolean") throw new Error("Enter string");
    this._isReturned = value;
  }

  toString() {
    return "ReaderBook: " + this._author;
  }
}

let book1 = new Book("title", "Author");
let book2 = new Book("titlee", "Authorr");
let libraryBook1 = new LibraryBook("titlee", "Authorr");
let readerBook1 = new ReaderBook("titlee", "Authorr", "15/06/2078", false);

console.log(book1);
console.log(book2);
console.log(book1.isTheSameBook(book2));
console.log(libraryBook1.increaseQuantityBy(54));
console.log(readerBook1);
console.log(readerBook1.toString());
