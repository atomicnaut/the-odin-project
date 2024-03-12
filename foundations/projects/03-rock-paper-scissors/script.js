// Variables
const choices = ["rock", "paper", "scissors"];

let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;

// Functions
// have computer randomly choose rock, paper, or scissors
function getComputerChoice() {
	const choice = Math.floor(Math.random() * 3);
	return choices[choice];
}

// if player chooses rock
function playerChoosesRock(computer) {
	switch (computer) {
		case "rock":
			return "You Tie! Rock equals Rock!";
			break;
		case "paper":
			computerScore++;
			return "You Lose! Paper smothers Rock!";
			break;
		case "scissors":
			playerScore++;
			return "You Win! Rock crushes Scissors!";
			break;
		default:
			break;
	}
}

// if player chooses paper
function playerChoosesPaper(computer) {
	switch (computer) {
		case "rock":
			playerScore++;
			return "You Win! Paper smothers Rock!";
			break;
		case "paper":
			return "You Tie! Paper equals Paper!";
			break;
		case "scissors":
			computerScore++;
			return "You Lose! Scissors cuts Paper!";
			break;
		default:
			break;
	}
}

// if player chooses scissors
function playerChoosesScissors(computer) {
	switch (computer) {
		case "rock":
			computerScore++;
			return "You Lose! Rock crushes Scissors!";
			break;
		case "paper":
			playerScore++;
			return "You Win! Scissors cuts Paper!";
			break;
		case "scissors":
			return "You Tie! Scissors equals Scissors!";
			break;
		default:
			break;
	}
}

// play one round of the game
// function playRound(player, computer) {
// 	computer = getComputerChoice();
// 	player = prompt(`Choose rock, paper, or scissors:`).toLowerCase().trim();
// 	console.log(`Player choice: ${player}`, `-- Computer choice: ${computer}`);

// 	// check if player input is one of the choices -- if not
// 	while (player !== "rock" && player !== "paper" && player !== "scissors") {
// 		player = prompt(
// 			`Not a valid option. Please input rock, paper, or scissors:`
// 		)
// 			.toLowerCase()
// 			.trim();
// 	}

// 	if (player === "rock" || player === "paper" || player === "scissors") {
// 		if (player === "rock") {
// 			return playerChoosesRock(computer);
// 		} else if (player === "paper") {
// 			return playerChoosesPaper(computer);
// 		} else if (player === "scissors") {
// 			return playerChoosesScissors(computer);
// 		}
// 	}
// }

// play complete game of 5 rounds
// function playGame() {
// 	for (let i = 0; i <= 4; i++) {
// 		playRound(playerSelection, computerSelection);
// 	}
// 	if (playerScore > computerScore) {
// 		return `Congratulations, you win! ${playerScore} to ${computerScore}`;
// 	} else if (playerScore < computerScore) {
// 		return `Sorry, you lose! ${playerScore} to ${computerScore}`;
// 	} else {
// 		return `You Tied! ${playerScore} to ${computerScore}`;
// 	}
// }
