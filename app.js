// function that randomly return rock paper or scissors
function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3); // random num between 0 and 2 included
    return options[choice];
}

const buttons = document.querySelectorAll("button");
const div = document.querySelector("div");

buttons.forEach(button => {
    button.addEventListener("click", (button) => {
        div.textContent = playRound(button.target.id);
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


// function game() {
//     let playerPoints = 0;
//     let computerPoints = 0;
//     let gameover = false;

//     while (!gameover) {
//         const playerSelection = getPlayerChoice();
//         const computerSelection = getComputerChoice();
//         let roundResult = round(playerSelection, computerSelection);

//         // add points in function of the winner of the round
//         // don't do anything in case of tie
//         if (roundResult.slice(0, 7) === "You Win") {
//             playerPoints++;
//         } else if (roundResult.slice(0, 8) === "You Lose") {
//             computerPoints++;
//         }

//         console.log(roundResult + `\n Score: ${playerPoints}:${computerPoints}`);

//         if (playerPoints === 5 || computerPoints === 5) {
//             gameover = true;
//         }
//     }

//     let result = (playerPoints === 5) ? "Game Over You Win!" : " Game Over Computer Wins!";
//     return result;
// }

//console.log(game());