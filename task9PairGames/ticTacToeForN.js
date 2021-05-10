"use strict";

let length = 4;


let didWin = function (board, player, length) {
  for (let i = 0; i < length; i++) {
    let count = 0;
    let countCol = 0;
    let countCorner = 0;
    let countCorner1 = 0;
    for (let j = 0; j < length; j++) {
      if (board[i][j] === player) count++;
      if (board[j][i] === player) countCol++;
      if (i === j && board[i][j] === player) countCorner++;
      if (Math.abs(i - j) === Math.abs(j - i) && board[i][j] === player)
        countCorner1++;
    }

    if (
      count === length ||
      countCol === length ||
      countCorner === length ||
      countCorner1 === length
    )
      return true;
  }
  return false;
};

let isFull = function (board) {
  for (let row of board) {
    for (let j = 0; j < row.length; j++) {
      if (row[j] === "") return false;
    }
  }
  return true;
};

function createBoard(length) {
  let board = [];
  for (let i = 0; i < length; i++) {
    let row = [];
    for (let j = 0; j < length; j++) {
      row.push("");
    }
    board.push(row);
  }
  return board;
}

let board = createBoard(length);
let player = "x";

while (true) {
  let row = Math.floor(Math.random() * length);
  let column = Math.floor(Math.random() * length);
  if (board[row][column] !== "") {
    continue;
  }
  board[row][column] = player;
  const won = didWin(board, player, length);
  if (won) {
    console.log("Player " + player + " won the game!");
    break;
  }
  if (isFull(board)) {
    console.log("The board is full, nobody won");
    break;
  }
  if (player === "x") {
    player = "o";
  } else {
    player = "x";
  }
}

for (let i = 0; i < board.length; i++) {
  console.log(board[i]);
}
