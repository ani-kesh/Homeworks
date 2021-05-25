class Shiritory {
  constructor(words = [], gameOver = false) {
    this.words = words;
    this.gameOver = gameOver;
  }

  play(word) {
    if (this.words.indexOf(word) >= 0) {
      this.gameOver = true;
      return `Game over.\n invalid! - ${word} has already been said`;
    } else if (this.words.length > 1) {
      let [currentElement] = word;
      let previousElement = this.words[this.words.length - 1];
      let lastCharPrevEl = previousElement[previousElement.length - 1];

      if (currentElement === lastCharPrevEl) {
        this.words.push(word);
        return this.words;
      } else {
        this.gameOver = true;
        return `Game over.\n invalid! - ${word} should start with "${lastCharPrevEl}"`;
      }
    } else {
      this.words.push(word);
      return this.words;
    }
  }

  restart() {
    this.words.length = 0;
    this.gameOver = false;
    return "game restarted";
  }
}

let myShiritori = new Shiritory();
console.log(myShiritori.play("apple")); // ["apple"]
console.log(myShiritori.play("ear")); // ["apple", "ear"]
console.log(myShiritori.play("rhino")); // ["apple", "ear", "rhino"]
console.log(myShiritori.play("corn")); // "game over"

console.log(myShiritori.words); // ["apple", "ear", "rhino"]
// Words should be accessible.
console.log(myShiritori.restart()); // "game restarted"
console.log(myShiritori.words); // []
// Words array should be set back to empty.
console.log(myShiritori.play("hostess")); // ["hostess"]
console.log(myShiritori.play("stash")); // ["hostess", "stash"]
console.log(myShiritori.play("hostess")); //
