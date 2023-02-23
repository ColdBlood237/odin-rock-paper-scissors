// function that randomly return rock paper or scissors
function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3); // random num between 0 and 2 included
    return options[choice];
}

// function that ask the user to play
function getPlayerChoice() {
    let choice = prompt("Rock, Paper or Scissors");
    return choice;
}

// plays a single round and determine the winner
function round(playerSelection, computerSelection) {
    let playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let computerChoice = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();
    let message = "";

    // evaluate all the possible outcomes 
    if (playerChoice === "Rock") {
        if (computerChoice === "Rock") {
            message = "It's a Tie!";
        } else if (computerChoice === "Paper") {
            message = "You Lose! Paper beats Rock";
        } else if (computerChoice === "Scissors") {
            message = "You Win! Rock beats Scissors";
        }
    }
    else if (playerChoice === "Paper") {
        if (computerChoice === "Rock") {
            message = "You Win! Paper beats Rock";
        } else if (computerChoice === "Paper") {
            message = "It's a Tie!";
        } else if (computerChoice === "Scissors") {
            message = "You Lose! Scissors beat Paper";
        }
    }
    else if (playerChoice === "Scissors") {
        if (computerChoice === "Rock") {
            message = "You Lose! Rock beats Scissors";
        } else if (computerChoice === "Paper") {
            message = "You Win! Scissors beat Paper";
        } else if (computerChoice === "Scissors") {
            message = "It's a Tie!";
        }
    }

    return message;
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(round(playerSelection, computerSelection));