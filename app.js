// function that randomly return rock paper or scissors
function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3); // random num between 0 and 2 included
    return options[choice];
}

// plays a single round and determine the winner
// function round(playerSelection, computerSelection) {
    
// }