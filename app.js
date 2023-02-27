// function that randomly return rock paper or scissors
function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3); // random num between 0 and 2 included
    return options[choice];
}

const buttons = document.querySelectorAll("button");
const div = document.querySelector("div");

let playerPoints = 0;
let computerPoints = 0;


buttons.forEach(button => {
    button.addEventListener("click", (button) => {

        let roundResult = playRound(button.target.id);

        if (roundResult.slice(0, 7) === "You Win") {
            playerPoints++;
            console.log(playerPoints);
        }
        else if (roundResult.slice(0, 8) === "You Lose") {
            computerPoints++;

        }

        div.textContent = roundResult + " " + playerPoints + ":" + computerPoints;

        if (playerPoints === 5 || computerPoints === 5) {
            let result = (playerPoints === 5) ? "Game Over You Win!" : " Game Over Computer Wins!";
            div.textContent = result;
            buttons.forEach(button => {  // hide the buttons when the game is over
                button.hidden = true;
            })
        }
    });
});


// plays a single round and determine the winner
function playRound(playerSelection) {
    let playerChoice = playerSelection;
    let computerChoice = getComputerChoice();
    let message = "";

    // evaluate all the possible outcomes 
    if (playerChoice === "Rock") {
        if (computerChoice === "Rock") {
            message = "Tie!";
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
            message = "Tie!";
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
            message = "Tie!";
        }
    }

    return message;
}

