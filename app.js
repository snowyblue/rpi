// javascript
// alert(message);

// const btnArray = ['.btnRock', '.btnPaper', '.btnScissors'];

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.btn')
// console.log(buttons)

buttons.forEach(btn => btn.addEventListener('click', (evt) => {
    playerSelection = evt.target.innerText.toLowerCase()
    playGame(playerSelection)
}));

    
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

function playGame(playerSelection){
    const array = ['rock', 'paper', 'scissors'];

    // for (let i = 0; i < 5; i++) {

    let computerSelection = getComputerChoice(array);
    // let playerSelection = selection.toLowerCase()

    console.log(`playerSelection: ${playerSelection}, computerSelection: ${computerSelection}`)
    
    console.log(playRound(playerSelection, computerSelection));
    
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            console.log(`You Won! Final Score - player: ${playerScore}, computer: ${computerScore}`)
        } else {
            console.log(`Computer Wins :( Final Score - player: ${playerScore}, computer: ${computerScore}`)
        }
    }

}

