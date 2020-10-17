var originalBoard;
const humanPlayer = 'X';
const bot = 'O';
const combo4Win = [
 [0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6]
]
const cells = document.querySelectorAll('.cell');
startGame();
function startGame() {
 document.querySelector(".endgame").style.display="none";
 originalBoard = Array.from(Array(9).keys());
 for(var i = 0; i < cells.length; i++){
  cells[i].innerText = '';
  cells[i].style.removeProperty('background-color');
  cells[i].addEventListener('click', turnClick, false);
 }
}
function turnClick(square) {
 if(typeof originalBoard[square.target.id] == 'number') {
  turn(square.target.id, humanPlayer);
  if(!checkTie()) turn(bestSpot(), bot);
 }
}
function turn(squareId, player) {
 originalBoard[squareId]=player;
 document.getElementById(squareId).innerText = player;
 let gameWon = checkWin(originalBoard, player);
 if(gameWon) gameOver(gameWon);
}
function checkWin(board, player){
 let plays = board.reduce((a,e,i) => (e === player) ? a.concat(i) : a, [] );
 let gameWon=null;
 for(let [index, win] of combo4Win.entries()) {
  if(win.every(elem => plays.indexOf(elem) > -1)) {
   gameWon = {index: index, player: player};
   break;
  }
 }
 
 return gameWon;
}
function gameOver(gameWon) {
 for(let index of combo4Win[gameWon.index]) {
  document.getElementById(index).style.backgroundColor= gameWon.player == humanPlayer ? '#ADFF2F' : "#CD5C5C";
 }
 for(var i = 0; i < cells.length; i++) {
  cells[i].removeEventListener('click',turnClick,false);
 }
 declareWinner(gameWon.player == humanPlayer ? "You Won!" : "You Lost!");
}
function declareWinner(who) {
 document.querySelector(".endgame").style.display="block";
  document.querySelector(".endgame .text").innerText = who;
}
function shuffleArray(array) {
 for (var i = array.length - 1; i > 0; i--) {
  var j = Math.floor(Math.random() * (i + 1));
   var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
 }
}
function emptySquares() {
 return originalBoard.filter(s => typeof s == 'number');
}
function bestSpot() {
 let rand = emptySquares();
 shuffleArray(rand);
 return rand[0];
}
function checkTie() {
 if(emptySquares().length == 0) {
  for(var i = 0; i < cells.length;i++) {
   cells[i].style.backgroundColor = 'gray';
   cells[i]/removeEventListener('click', turnClick, false);
  }
  declareWinner("Tie Game!");
  return true;
 }
 return false;
}