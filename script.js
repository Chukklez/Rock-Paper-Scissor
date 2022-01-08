// create a function that randomly return either "Rock", "Paper", or "Scissor" and output it into the console.log

// Create a function that randomizes a computer play
function computerPlay() {
  return Math.floor(Math.random() * 3);
}
// assign the randomized value to a variable
let computerResult = computerPlay();

// choose which number should be assigned to rock paper and scissor
switch (computerResult) {
  case 0:
    console.log('rock');
    break;
  case 1:
    console.log('paper');
    break;
  case 2:
    console.log('scissor');
    break;
}
// output it to the console log

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

// Create a prompt that asks for the userinput
// let userInput = prompt("Enter Rock, Paper or Scissor");
// Write a function that has two parameters, playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'scissor') {
    return 'Rock Beats Scissors! You Won!';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'Paper beats Rock! Computer won!';
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    return "It is a tie! Nobody won!";
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
      return "Rock beats Scissor! Computer Wins!"
  }
}
console.log(playRound());
// Make the userinput case-insensitive
// Make a variable that stores the userinput
