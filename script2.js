const rock = 0;
const paper = 1;
const scissor = 2;
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}


const computerChoice = `Computer chooses ${getComputerChoice()}`;

console.log(computerChoice);