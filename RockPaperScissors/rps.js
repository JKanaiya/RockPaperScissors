// let n, b;
// let computerSelection = selections[r];
// // selections(Math.floor(Math.random() * 2));
// let userSelection;
// let selections = ["ROCK", "PAPER", "SCISSORS"];
// function getSelections() {
//   // get computer selection
//   //get userSelection
//   userSelection = prompt("Lets Battle!");
//   userSelection = userSelection.toUpperCase();
//   let r = Math.floor(Math.random() * 3);
//   //set userSelection to upper case
//   n = b = 0;
//   return computerSelection, userSelection;
// }

// function playRound() {
//   //iterate on each input by the user
//   if (userSelection == "ROCK") {
//     switch (computerSelection) {
//       case "ROCK":
//         result = "The Output is a Tie";
//         break;
//       case "PAPER":
//         result = "I Win!, Paper beats Rock";
//         break;
//       case "SCISSORS":
//         result = "You Win!, Rock beats Scissors";
//         n++;
//         break;
//     }
//   } else if (userSelection == "PAPER") {
//     switch (computerSelection) {
//       case "PAPER":
//         result = "The Output is a Tie";
//         break;
//       case "SCISSORS":
//         result = "I Win!, Scissors beats Paper";
//         break;
//       case "ROCK":
//         result = "You Win!, Paper beats Rock";
//         n++;
//         break;
//     }
//   } else if (userSelection == "SCISSORS") {
//     switch (computerSelection) {
//       case "SCISSORS":
//         result = "The Output is a Tie";
//         break;
//       case "ROCK":
//         result = "I Win!, Rock beats Scissors";
//         break;
//       case "PAPER":
//         result = "You Win!, Scissors beats Paper";
//         n++;
//         break;
//     }
//   }
//   document.getElementById("result").innerHTML = result;
// }
// function playGame() {
//   while (b < 5) {
//     getSelections();
//     playRound(computerSelection, userSelection);
//     b++;
//   }
//   if (n >= 3) alert("You Win! I give up, Good Game");
//   else alert("I Win! Good Game");
// }
let userSelection;
let selections = ["ROCK", "PAPER", "SCISSORS"];
let computerSelection = selections[Math.floor(Math.random() * 3)];
let userWins = 0; // Track user wins

function getSelections() {
  userSelection = prompt("Lets Battle!").toUpperCase();
  // Validate user input
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
  document.getElementById("result").innerHTML = result;
}

function playGame() {
  while (userWins < 3 && userWins < 5) {
    // Both user and computer can't win under 5 rounds
    getSelections();
    playRound();
  }
  if (userWins >= 3) {
    alert("You Win! I give up, Good Game");
  } else {
    alert("I Win! Good Game");
  }
}
// CORRECT for prompt
