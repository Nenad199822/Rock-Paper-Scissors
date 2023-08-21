function getComputerChoice() {
    randomChoice = ['Rock','Paper','Scissors'];
    randomElement = Math.floor(Math.random() * randomChoice.length);
    return randomChoice[randomElement];
}
console.log(getComputerChoice())