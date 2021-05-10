"use strict";

let didWin = function (board, player) {
  for (let i = 0; i < 3; i++) {
    let count = 0;
    let countCol = 0;
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === player) count++;
      if (board[j][i] === player) countCol++;
      if (
        board[0][0] === player &&
        board[1][1] === player &&
        board[2][2] === player
      ) {
        return true;
      }
      if (
        board[0][2] === player &&
        board[1][1] === player &&
        board[2][0] === player
      ) {
        return true;
      }
    }

    if (count === 3 || countCol === 3) return true;
  }
  //console.log();
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
let board = createBoard(3);
let player = "x";

while (true) {
  let row = Math.floor(Math.random() * 3);
  let column = Math.floor(Math.random() * 3);
  if (board[row][column] !== "") {
    continue;
  }
  board[row][column] = player;
  const won = didWin(board, player);
  if (won) {
    console.log("Player " + player + " won the game!");
    break;
  }
  if (isFull(board)) {
    console.log("The board is full, nobody won");
    break;
  }
  player = player === "x" ? "o" : "x";
}

console.log(board[0]);
console.log(board[1]);
console.log(board[2]);
