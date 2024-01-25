// Create an array of choices (Rock, Paper, or Scissors)
const choices = ["rock", "paper", "scissors"];

// Function to randomly select from the array as the computer's choice
 function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
 }


let result = document.querySelector('.results');
let finalResult = document.querySelector('.final-results');
let selections = document.querySelector('.choices');
let score = document.querySelector('.score');

 // Create buttons to play
const btns = document.querySelectorAll('button');
const resetButton = document.querySelector('.reset-button');

let gamesPlayed = 0;
let wins = 0;
let losses = 0;
let ties = 0;

btns.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        // console.log(playerSelection);
        let resultArr = playRound(playerSelection);
        selections.textContent = `You chose ${resultArr[1]}. Computer chose ${resultArr[2]}`;
        if (resultArr[0] === 'win') {
            wins++;
            result.textContent = `Win! ${resultArr[1]} beats ${resultArr[2]}.`;
        } else if (resultArr[0] === 'loss') {
            losses++;
            result.textContent = `Loss! ${resultArr[1]} loses to ${resultArr[2]}.`;
        } else {
            ties++;
            result.textContent = `Tie! Go again.`
        }
        score.textContent = `You: ${wins} Computer: ${losses}`;
        gamesPlayed++;
        if (wins === 5) {
            finalResult.textContent = `Overall Win! You won ${wins} time(s), lost ${losses} time(s), tied ${ties} time(s), and played ${gamesPlayed} games.`;
        } else if (losses === 5) { 
            finalResult.textContent = `Overall Loss! You won ${wins} time(s), lost ${losses} time(s), tied ${ties} time(s), and played ${gamesPlayed} games.`;
        }  
    });
})

resetButton.addEventListener('click', () => {
    gamesPlayed = 0;
    wins = 0;
    losses = 0;
    ties = 0;
    result.textContent = 'Make your selection!';
    finalResult.textContent = '';
    selections.textContent = '';
    score.textContent = '';
})

// Function to play a round of Rock Paper Scissors. Two parameters are given, and a winner is declared (ties are re-played)
function playRound(playerSelection) {

    computerSelection = getComputerChoice();

    if ((playerSelection === "rock") && (computerSelection === "scissors") ||
        (playerSelection === "paper") && (computerSelection === "rock") ||
        (playerSelection === "scissors") && (computerSelection === "paper")) {
            return ['win' ,playerSelection, computerSelection];
    } else if ((playerSelection === "rock") && (computerSelection === "paper") ||
        (playerSelection === "paper") && (computerSelection === "scissors") ||
        (playerSelection === "scissors") && (computerSelection === "rock")) {
            return ['loss', playerSelection, computerSelection];
    } else {
        return ['tie', playerSelection, playerSelection];
    }
}