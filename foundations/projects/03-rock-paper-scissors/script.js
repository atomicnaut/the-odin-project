const choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
	const choice = Math.floor(Math.random() * 3);
	return choices[choice];
}

function playRound(player, computer) {
	console.log(player, computer);

	if (player === "rock") {
		switch (computer) {
			case "rock":
				return "You Tie! Rock equals Rock!";
				break;
			case "paper":
				return "You Lose! Paper smothers Rock!";
				break;
			case "scissors":
				return "You Win! Rock crushes Scissors!";
				break;
			default:
				break;
		}
	} else if (player === "paper") {
		switch (computer) {
			case "rock":
				return "You Win! Paper smothers Rock!";
				break;
			case "paper":
				return "You Tie! Paper equals Paper!";
				break;
			case "scissors":
				return "You Lose! Scissors cuts Paper!";
				break;
			default:
				break;
		}
	} else if (player === "scissors") {
		switch (computer) {
			case "rock":
				return "You Lose! Rock crushes Scissors!";
				break;
			case "paper":
				return "You Win! Scissors cuts Paper!";
				break;
			case "scissors":
				return "You Tie! Scissors equals Scissors!";
				break;
			default:
				break;
		}
	}
}
const playerSelection = "scissors";
const computerSelection = getComputerChoice();
// playRound(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));
