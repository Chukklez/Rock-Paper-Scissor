// Create a function that randomizes a computer play
function computerPlay() {
  return Math.floor(Math.random() * 3);
}

computerPlay = computerPlay(); //assigning the function computerPlay() to the variable computerPlay 

// choose which number should be assigned to the computers rock paper and scissor
switch (computerPlay) {
  case 0: //Rock
    break;
  case 1: // Paper
    break;
  case 2: // Scissors
    break;
}

const playerAnswer = "paper" //The player input
const playerSelection = playerAnswer.toLowerCase(); //Take the playerinput and convert it to lowercase in a new variable called playerSelection
const computerSelection = computerPlay; //assign the computerPlay variable into the computerSelection variable
let result = ""

// Create separate if statements for each selection with 1 if, 1 else if and then an else.
function playRound(playerSelection, computerSelection) {
  // If player chooses Rock
  if (playerSelection == 'rock' && computerSelection == 2) {
    result = `You play ${playerSelection} and computer played scissors!
    ${playerSelection} beats scissors! You win!`
  } else if (playerSelection == 'rock' && computerSelection == 1) {
    result = `You play ${playerSelection} and computer played paper! 
    paper beats rock! You lose!`;
  } else if (playerSelection == 'rock' && computerSelection == 0) {
    result = `You play ${playerSelection} and computer played rock!
    It is a tie! Nobody won!`;
    //If player chooses Scissors
  } else if (playerSelection == 'scissors' && computerSelection == 1) {
    result = `You play ${playerSelection} and computer played paper!  
    ${playerSelection} beats paper! You win!`
  } else if (playerSelection == 'scissors' && computerSelection == 0) {
    result = `You play ${playerSelection} and computer played rock! 
    rock beats scissors! You lose!`
  } else if (playerSelection == 'scissors' && computerSelection == 2) {
    result = `You play ${playerSelection} and computer played scissors! 
    It is a tie! Nobody won!`;
    //If player chooses paper
  } else if (playerSelection == 'paper' && computerSelection == 0) {
    result = `You play ${playerSelection} and computer played rock!
    ${playerSelection} beats rock! You win!`
  } else if (playerSelection == 'paper' && computerSelection == 2) {
    result = `You play ${playerSelection} and computer played scissors! 
    scissors beats paper! You lose!`
  } else if (playerSelection == 'paper' && computerSelection == 1) {
    result = `You play ${playerSelection} and computer played paper! 
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
