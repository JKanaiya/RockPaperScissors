let userSelection, b, computerSelection;
let selections = ["ROCK", "PAPER", "SCISSORS"];
let userWins = 0; // Track user wins

function getSelections() {
  userSelection = prompt("Lets Battle!").toUpperCase();
  // Validate user input
  computerSelection = selections[Math.floor(Math.random() * 3)];
  while (!selections.includes(userSelection)) {
    userSelection = prompt(
      "Invalid input. Please enter ROCK, PAPER, or SCISSORS:"
    ).toUpperCase();
  }
}

function playRound() {
  let result;
  if (userSelection === "ROCK") {
    switch (computerSelection) {
      case "ROCK":
        result = "The Output is a Tie";
        break;
      case "PAPER":
        result = "I Win!, Paper beats Rock";
        break;
      case "SCISSORS":
        result = "You Win!, Rock beats Scissors";
        userWins++;
        break;
    }
  } else if (userSelection === "PAPER") {
    // Similar logic for PAPER and SCISSORS cases
    switch (computerSelection) {
      case "PAPER":
        result = "The Output is a Tie";
        break;
      case "SCISSORS":
        result = "I Win!, Scissors beats Paper";
        break;
      case "ROCK":
        result = "You Win!, Paper beats Rock";
        userWins++;
        break;
    }
  } else if (userSelection === "SCISSORS") {
    // Similar logic for PAPER and SCISSORS cases
    switch (computerSelection) {
      case "SCISSORS":
        result = "The Output is a Tie";
        break;
      case "ROCK":
        result = "I Win!, Rock beats Scissors";
        break;
      case "PAPER":
        result = "You Win!, Scissors beats Paper";
        userWins++;
        break;
    }
  }
  alert(result);
}

function playGame() {
  for (b = 0; b < 5; b++) {
    getSelections();
    playRound();
  }
  if (userWins >= 3) {
    alert("You Win! I give up, Good Game");
  } else {
    alert("I Win! Good Game");
  }
}
