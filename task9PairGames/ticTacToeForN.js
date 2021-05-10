"use strict";

let length = 3;
let board = createBoard(length);
let player = "x";

let didWin = function (board, player, length) {
  let countCorner = 0;
  let countCorner1 = 0;
  for (let i = 0; i < length; i++) {
    let count = 0;
    let countCol = 0;
    for (let j = 0; j < length; j++) {
      if (board[i][j] === player) count++;
      if (board[j][i] === player) countCol++;
    }

    if (count === length || countCol === length) return true;
    if (board[i][i] === player) countCorner++;

    if (board[i][board.length - 1 - i] === player) countCorner1++;
  }
  if (countCorner === length || countCorner1 === length) return true;
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

while (true) {
  let row = Math.floor(Math.random() * length);
  let column = Math.floor(Math.random() * length);
  if (board[row][column] !== "") {
    continue;
  }
  board[row][column] = player;
  const won = didWin(board, player, length);
  if (won) {
    console.log("Win " + player);
    break;
  }
  if (isFull(board)) {
    console.log("Nobody won");
    break;
  }
  player = player === "x" ? "o" : "x";
}

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

for (let i = 0; i < board.length; i++) {
  console.log(board[i]);
}
