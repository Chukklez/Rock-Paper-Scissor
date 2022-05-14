// Create a function that randomizes a computer play
function computerPlay() {
  return Math.floor(Math.random() * 3);
}


computerPlay = computerPlay(); //assigning the function computerPlay() to the variable computerPlay 

// choose which number should be assigned to the computers rock paper and scissors

const playerAnswer = "paper" //The player input
const playerSelection = playerAnswer.toLowerCase(); //Take the playerinput and convert it to lowercase in a new variable called playerSelection
let computerSelection = computerPlay; //assign the computerPlay variable into the computerSelection variable
let result = ""
switch (computerPlay) {
  case 0: //Rock
  computerSelection = "rock";
    break;
  case 1: // Paper
  computerSelection = "paper";
    break;
  case 2: // Scissors
  computerSelection = "scissors";
    break;
}

// Create separate if statements for each selection with 1 if, 1 else if and then an else.
function playRound(playerSelection, computerSelection) {
  // If player chooses Rock
  if (playerSelection == 'rock' && computerSelection == "scissors") {
    result = `You play ${playerSelection} and computer played ${computerSelection}!
    ${playerSelection} beats ${computerSelection}! You win!`
  } else if (playerSelection == 'rock' && computerSelection == "paper") {
    result = `You play ${playerSelection} and computer played ${computerSelection}! 
    ${computerSelection} beats ${playerSelection}! You lose!`;
  } else if (playerSelection == 'rock' && computerSelection == "rock") {
    result = `You play ${playerSelection} and computer played ${computerSelection}!
    It is a tie! Nobody won!`;
    //If player chooses Scissors
  } else if (playerSelection == 'scissors' && computerSelection == "paper") {
    result = `You play ${playerSelection} and computer played ${computerSelection}!  
    ${playerSelection} beats ${computerSelection}! You win!`
  } else if (playerSelection == 'scissors' && computerSelection == "rock") {
    result = `You play ${playerSelection} and computer played rock! 
    rock beats ${playerSelection}! You lose!`
  } else if (playerSelection == 'scissors' && computerSelection == "scissors") {
    result = `You play ${playerSelection} and computer played scissors! 
    It is a tie! Nobody won!`;
    //If player chooses paper
  } else if (playerSelection == 'paper' && computerSelection == "rock") {
    result = `You play ${playerSelection} and computer played ${computerSelection}!
    ${playerSelection} beats ${computerSelection}! You win!`
  } else if (playerSelection == 'paper' && computerSelection == "scissors") {
    result = `You play ${playerSelection} and computer played ${computerSelection}! 
    ${computerSelection} beats ${playerSelection}! You lose!`
  } else if (playerSelection == 'paper' && computerSelection == "paper") {
    result = `You play ${playerSelection} and computer played ${computerSelection}! 
    It is a tie! Nobody won!`;
  } return result;
} 



//Create a new function called game() that calls the playRound function to play a 5 round game that keeps score and reports a winner or lose at the end.
function game() {
  return playRound(playerSelection, computerSelection)
}


// output the round to the console
// console.log(playRound(playerSelection, computerSelection));
console.log(game());
