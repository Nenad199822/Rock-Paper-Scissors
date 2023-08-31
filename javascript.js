function getComputerChoice() {
    let randomChoice = ['Rock', 'Paper', 'Scissors'];
    let randomElement = Math.floor(Math.random() * randomChoice.length);
    return randomChoice[randomElement];
}
// Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every
// time a button is clicked. (you can keep the console.logs for this step)
let playerSelection
let numberOfRounds = 0;
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
    console.log(roundResult)
    numberOfRounds++;
    if (playerWins === 5 || computerWins === 5) {
        console.log(`Final Score - Player: ${playerWins}, Computer: ${computerWins}`);
    }
}



