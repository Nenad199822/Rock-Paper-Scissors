function getComputerChoice() {
    let randomChoice = ['Rock', 'Paper', 'Scissors'];
    let randomElement = Math.floor(Math.random() * randomChoice.length);
    return randomChoice[randomElement];
}
function playerChoice() {
    let userChoice = prompt("What do you choose: Rock , Paper , Scissors")
    let choiceToLower = userChoice.toLowerCase()
    return choiceToLower[0].toUpperCase() + choiceToLower.slice(1)
}

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
        return (`You lose ${computerSelection} beat ${playerSelection}`)
    }
}
const playerSelection = playerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
