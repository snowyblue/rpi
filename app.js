// javascript
// alert(message);
let playerScore = 0;
let computerScore = 0;
    
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log(`it's a tie. Noone gets a point`)
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log(`computerScore: ${++computerScore}`)
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log(`computerScore: ${++computerScore}`)
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log(`computerScore: ${++computerScore}`)
    } else {
        console.log(`playerScore: ${++playerScore}`)
    }
}

function getComputerChoice(array) {
        // get random index value

    let randomIndex = Math.floor(Math.random() * array.length);
    // get random item
    let computerSelection = array[randomIndex];

    return computerSelection;
}

const array = ['rock', 'paper', 'scissors'];
for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice(array);
    let playerSelection = prompt("rock, paper or scissors?").toLowerCase()
    while (!array.includes(playerSelection)) {
        playerSelection = prompt("invalid input. rock, paper or scissors?").toLowerCase()
    }
    console.log(`playerSelection: ${playerSelection}, computerSelection: ${computerSelection}`)
    console.log(playRound(playerSelection, computerSelection));
}

if (playerScore > computerScore) {
    console.log(`You Won! Final Score - player: ${playerScore}, computer: ${computerScore}`)
} else {
    console.log(`Computer Wins :( Final Score - player: ${playerScore}, computer: ${computerScore}`)
}
