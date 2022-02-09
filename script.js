// create a function that randomly return either "Rock", "Paper", or "Scissor" and output it into the console.log


// Create a function that randomizes a computer play
function computerPlay() {
  return Math.floor(Math.random() * 3);
}

computerPlay = computerPlay();

// output it to the console log
// console.log(computerPlay);

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).


// Create a prompt that asks for the userinput
// let userInput = prompt("Enter Rock, Paper or Scissor");


// Make the userinput case-insensitive
// the if statement can have lowercase
// use toLowerCase() Function
// the input has to be converted to lowercase
// So no matter what the player inputs it will be converted to lowercase and THEN compared to the if statement.



// Write a function that has two parameters, playerSelection and computerSelection
// Create separate if statements for each selection with 1 if, 1 if else and then an else.
function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'rock' && computerSelection == 2) {
    return 'You play: ' + playerSelection + "!" + ' Rock Beats Scissors! You Win!';
  } else if (playerSelection == 'rock' && computerSelection == 1) {
    return 'You play: ' + playerSelection + "!" + ' Paper beats Rock! You lose!';
  } else if (playerSelection == 'rock' && computerSelection == 0) {
    return 'You play: ' + playerSelection + "!" + ' It is a tie! Nobody won!';
  } else if (playerSelection == 'scissor' && computerSelection == 1) {
    return 'You play: ' + playerSelection + "!"  + ' Scissor beats Paper! You win!';
  } else if (playerSelection == 'scissor' && computerSelection == 0) {
    return 'You play: ' + playerSelection + "!"  + ' Rock beats Scissor! You lose!';
  } else if (playerSelection == 'scissor' && computerSelection == 2) {
    return 'You play: ' + playerSelection + "!"  + ' It is a tie! Nobody won!';
  } else if (playerSelection == 'paper' && computerSelection == 0) {
    return 'You play: ' + playerSelection + "!"  + ' Paper beats Rock! You win!';
  } else if (playerSelection == 'paper' && computerSelection == 2) {
    return 'You play: ' + playerSelection + "!"  + ' Scissor beats Paper! You lose!';
  } else if (playerSelection == 'paper' && computerSelection == 1) {
    return 'You play: ' + playerSelection + "!"  + ' It is a tie! Nobody won!';
  }
}

// add a second const that uses toLowerCase()
const playerAnswer = "Paper"
const playerSelection = playerAnswer.toLowerCase();
const computerSelection = computerPlay;

// choose which number should be assigned to the computers rock paper and scissor
switch (computerPlay) {
  case 0:
    console.log('Computer played Rock');
    break;
  case 1:
    console.log('Computer played Paper');
    break;
  case 2:
    console.log('Computer played Scissor');
    break;
}

// output the round to the console
console.log(playRound(playerSelection, computerSelection));
