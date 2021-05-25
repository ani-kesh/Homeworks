class CustomConsole {
  constructor(name) {
    this.name = name;
    this.historyArr = [];
  }

  log(...args) {
    let stringValue = this.name + ": " + JSON.stringify(args);
    this.historyArr.push(stringValue);
    return stringValue;
  }

  history(range) {
    if (typeof range === undefined) {
      return "";
    } else {
      let historyRange = this.historyArr.filter((el, index) => index < range);
      return historyRange;
    }
  }

  clearHistory() {
    this.historyArr.length = 0;
  }
}

const myConsole = new CustomConsole("Regular");
const fancyConsole = new CustomConsole("Fancy");
console.log(myConsole.log([0, 1, 2, 3])); // "Regular: [0,1,2,3]"
console.log(fancyConsole.log({ a: 1, b: 2 })); // "Fancy: {a:1, b:2}"
console.log(myConsole.log("ok : ", 1, 2, 3)); // ➞ "ok : 1, 2, 3"
console.log(myConsole.history(1));
myConsole.clearHistory();
console.log(myConsole.history());
