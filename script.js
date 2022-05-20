// Create a function that randomizes a computer play
function computerPlay() {
  return Math.floor(Math.random() * 3);
}

computerPlay = computerPlay(); //assigning the function computerPlay() to the variable computerPlay 


const playerAnswer = "rock" //The player input
const playerSelection = playerAnswer.toLowerCase(); //Take the playerinput and convert it to lowercase in a new variable called playerSelection
let computerSelection = computerPlay; //Assign the computerPlay variable into the computerSelection variable
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

// Create the playRound function that runs one single round of the game.
function playRound(playerSelection, computerSelection) {
  // If player chooses Rock
  if (playerSelection == 'rock' && computerSelection == "scissors") {
    result = `You play ${playerSelection} and computer played ${computerSelection}!
    ${playerSelection} beats ${computerSelection}! You win!`
  } else if (playerSelection == 'rock' && computerSelection == "paper") {
    result = `You play ${playerSelection} and computer played ${computerSelection}! 
    ${computerSelection} beats ${playerSelection}! You lose!`;
  } else if (playerSelection ==  computerSelection) {
    result = `You play ${playerSelection} and computer played ${computerSelection}!
    It is a tie! Nobody won!`;
    //If player chooses Scissors
  } else if (playerSelection == 'scissors' && computerSelection == "paper") {
    result = `You play ${playerSelection} and computer played ${computerSelection}!  
    ${playerSelection} beats ${computerSelection}! You win!`
  } else if (playerSelection == 'scissors' && computerSelection == "rock") {
    result = `You play ${playerSelection} and computer played rock! 
    rock beats ${playerSelection}! You lose!`
  } else if (playerSelection ==  computerSelection) {
    result = `You play ${playerSelection} and computer played scissors! 
    It is a tie! Nobody won!`;
    //If player chooses paper
  } else if (playerSelection == 'paper' && computerSelection == "rock") {
    result = `You play ${playerSelection} and computer played ${computerSelection}!
    ${playerSelection} beats ${computerSelection}! You win!`
  } else if (playerSelection == 'paper' && computerSelection == "scissors") {
    result = `You play ${playerSelection} and computer played ${computerSelection}! 
    ${computerSelection} beats ${playerSelection}! You lose!`
  } else if (playerSelection ==  computerSelection) {
    result = `You play ${playerSelection} and computer played ${computerSelection}! 
    It is a tie! Nobody won!`;
  } return result;
} 

//Create a new function called game() that calls the playRound function to play a 5 round game that keeps score and reports a winner or lose at the end.
function game() {
  return playRound(playerSelection, computerSelection)
}

//create a functions that keeps track of rounds called getRounds()
function getRounds(){
  for (let i = 0; i < 5; i++);
}

// output the round to the console
// console.log(playRound(playerSelection, computerSelection));
console.log(game());

//Maybe I can assign values from 0-2 to rock paper scissors to the user input aswell and that way I can do a simpler ruling for what beats what with an if else. That way I can determine who was the winner in a round.
