// Create an array of choices (Rock, Paper, or Scissors)
const choices = ["rock", "paper", "scissors"];

// Function to randomly select from the array as the computer's choice
 function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
 }


// Function to play a round of Rock Paper Scissors. Two parameters are given, and a winner is declared (ties are re-played)
function playRound(playerSelection, computerSelection) {

    // Convert input to all lower case 
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock") {

        if (computerSelection === "rock") {
            console.log("Tie! Play again.");
            return "tie";
        } else if (computerSelection === "paper") {
            console.log("You Lose! Paper beats rock");
            return "loss";
        } else if (computerSelection === "scissors") {
            console.log("You win! Rock beats scissors");
            return "win";
        } else {
            console.log("I don't know what happened.");
            return null;
        }

    } else if (playerSelection === "paper") {

        if (computerSelection === "rock") {
            console.log("You Win! Paper beats rock");
            return "win";
        } else if (computerSelection === "paper") {
            console.log("Tie! Play again.");
            return "tie";
        } else if (computerSelection === "scissors") {
            console.log("You Lose! Scissors beats paper");
            return "loss";
        } else {
            console.log("I don't know what happened.");
            return null;
        }

    } else if (playerSelection === "scissors") {

        if (computerSelection === "rock") {
            console.log("You Lose! Rock beats scissors");
            return "loss";
        } else if (computerSelection === "paper") {
            console.log("You Win! Scissors beats paper");
            return "win";
        } else if (computerSelection === "scissors") {
            console.log("Tie! Play again.");
            return "tie";
        } else {
            console.log("I don't know what happened.");
            return null;
        }

    } else {
        console.log("You need to choose rock, paper, or scissors.");
        return null;
    }
}

// Function to play a best-of-five series of rock paper scissors games
function game() {
    let W = 0;
    let L = 0;
    let result = 0;
    let i = 0;
    let numberOfGames = 0;

    while (i < 5) {
       result = playRound(prompt('Rock, Paper, Scissors, Shoot!'), getComputerChoice());

       if (result === 'win') {
        W++;
        i++;
       } else if (result === 'loss') {
        L++;
        i++;
       }
       numberOfGames++;
       if (W >= 3 || L >=3 ) {
        break;
       }
    }

    if (W > L) {
        console.log(`Overall win with ${W} win(s), ${L} loss(es) and ${numberOfGames} games played.`);
    } else {
        console.log(`Overall loss with ${W} win(s), ${L} loss(es) and ${numberOfGames} games played.`);
    }
}