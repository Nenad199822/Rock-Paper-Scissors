function getComputerChoice() {
    let randomChoice = ['Rock', 'Paper', 'Scissors'];
    let randomElement = Math.floor(Math.random() * randomChoice.length);
    return randomChoice[randomElement];
}
// Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every
// time a button is clicked. (you can keep the console.logs for this step)
let playerSelection
let playerWins = 0;
let computerWins = 0;
const buttons = document.getElementsByClassName('player-button');
Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {
        playerSelection = button.id;
        console.log(playerSelection);
        //console.log(playRound(playerSelection, getComputerChoice()));
    });
});
document.getElementById('play').addEventListener('click', (e) => {
    game()
})

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        return (`You win ${playerSelection} beat ${computerSelection}`);
    } else {
        return (`You lose ${computerSelection} beat ${playerSelection}`);
    }
}
function game() {
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    if (roundResult.includes('win')) {
        playerWins++
    } else if (roundResult.includes('lose')) {
        computerWins++
    }
    content.textContent = (roundResult)
    playerScore.textContent = playerWins
    computerScore.textContent = computerWins

    if (playerWins === 5) {
        finalWinner.textContent = (`You Win : Player: ${playerWins}, Computer: ${computerWins}`)
        roundWinner.remove();

    } else if (computerWins === 5) {
        finalWinner.textContent = (`You Lose : Computer: ${computerWins}, Player: ${playerWins}`)
        roundWinner.remove();
    };
    return
};
let roundWinner = document.getElementById('r-w')
let winner = document.querySelector('#winner-of-round');
const content = document.createElement('h3');
content.classList.add('winner');
winner.appendChild(content)
const score = document.querySelector('#player-score');
const playerScore = document.createElement('h2');
playerScore.classList.add('player-score')
score.appendChild(playerScore)
let score2 = document.querySelector('#computer-score');
const computerScore = document.createElement('h2');
computerScore.classList.add('computer-score');
score2.appendChild(computerScore);
const gameWinner = document.querySelector('#game-winner');
const finalWinner = document.createElement('h4');
finalWinner.classList.add('final-winner');
gameWinner.appendChild(finalWinner)






