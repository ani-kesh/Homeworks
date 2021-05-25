class Account {
  constructor(name, balance) {
    this._id = Account.idVal;
    this._name = name;
    this._balance = balance;
    Account.idVal++;
  }
  static idVal = 0;
  set name(name) {
    this._name = name;
  }
  set balance(balance) {
    this._balance = balance;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }
  get balance() {
    return this._balance;
  }

  credit(amount) {
    this._balance += amount;
    return this._balance;
  }

  debit(amount) {
    if (amount <= this._balance) {
      this._balance -= amount;
      return this._balance;
    }
    return "Amount exceeded balance.";
  }

  transferTo(anotherAccount, amount) {
    if (amount <= this._balance) {
      this._balance -= amount;
      anotherAccount._balance += amount;
      return this._balance;
    }
    return "Amount exceeded balance.";
  }

  static identifyAccounts(accountFirst, accountSecond) {
    if (accountFirst._name === accountSecond._name) return true;
    else return false;
  }

  toString() {
    return `Saving account's account balance is $${this._balance}`;
  }
}

let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);

console.log(savingAcc);
console.log(cardAcc);
console.log(savingAcc.balance); // 2000
console.log(savingAcc.credit(400)); // 2400
console.log(savingAcc.balance); // 2400
console.log(savingAcc.debit(9000)); //6600
console.log(savingAcc.transferTo(cardAcc, 1000)); // 1400
console.log(savingAcc.balance); // 1400
console.log(cardAcc.balance); // 2000
let anotherAcc = savingAcc;
console.log(Account.identifyAccounts(savingAcc, anotherAcc)); // true
console.log(Account.identifyAccounts(savingAcc, cardAcc)); // false
console.log(savingAcc.toString());
