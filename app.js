// javascript
// alert(message);

// const btnArray = ['.btnRock', '.btnPaper', '.btnScissors'];

// let playerScore = 0;
// let computerScore = 0;

const buttons = document.querySelectorAll('.button')
const gameButtons = document.querySelectorAll('.btnGame')
console.log(gameButtons)

const player = {
    score : 0,
    display: document.querySelector('#p1Display')
}

const computer = {
    score : 0,
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('.resetBtn');
// console.log(buttons)
 
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log(`it's a tie. Noone gets a point`)
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computer.score += 1;
        computer.display.innerText = computer.score
        console.log(`computerScore: ${computer.score}`)
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computer.score += 1;
        computer.display.innerText = computer.score
        console.log(`computerScore: ${computer.score}`)
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computer.score += 1;
        computer.display.innerText = computer.score
        console.log(`computerScore: ${computer.score}`)
    } else {
        player.score += 1;
        player.display.innerText = player.score
        console.log(`playerScore: ${player.score}`)
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
    let computerSelection = getComputerChoice(array);
    
    console.log(`playerSelection: ${playerSelection}, computerSelection: ${computerSelection}`)
    playRound(playerSelection, computerSelection);

    if (player.score == 5 || computer.score == 5) {
        if (player.score > computer.score) {
            console.log(`You Won! Final Score - player: ${player.score}, computer: ${computer.score}`)
            player.display.classList.add('winner')
            computer.display.classList.add('loser')
        } else {
            console.log(`Computer Wins :( Final Score - player: ${player.score}, computer: ${computer.score}`)
            computer.display.classList.add('winner')
            player.display.classList.add('loser')
        }
        gameButtons.forEach(btn => {btn.disabled = true});
        gameButtons.forEach(btn => {btn.classList.add('selection-disabled')});


    }

}

function reset() {
    for (let p of [player, computer]) {
        p.score = 0;
        p.display.innerText = p.score
        p.display.classList.remove('winner', 'loser');
        // p.button.disabled = false;
    }
    gameButtons.forEach(btn => {btn.disabled = false});
    gameButtons.forEach(btn => {btn.classList.remove('selection-disabled')});
    console.log(player.score, player.score);
}

function removeTransition(evt) {
    // console.log(evt)
    if (evt.propertyName !== 'transform') return;
    //this is else, so if propertyname is transform
    // console.log(evt.propertyName)
    this.classList.remove('playing')
};


buttons.forEach(btn => btn.addEventListener('mousedown', (evt) => {
    playerSelection = evt.target.innerText.toLowerCase()
    console.log(playerSelection)

    // not this as this here refers to window
    btn.classList.add('playing');

    if (playerSelection == "reset") {
        reset()
    } else {
        playGame(playerSelection)
    }
}));


// listening for transition end
buttons.forEach(btn => btn.addEventListener('transitionend', removeTransition));