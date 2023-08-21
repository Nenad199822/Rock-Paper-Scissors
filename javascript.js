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
console.log(playerChoice())
function singleRound(playerSelection, computerSelection) {

}