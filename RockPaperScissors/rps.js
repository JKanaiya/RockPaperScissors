let b, computerSelection;
const selections = ["ROCK", "PAPER", "SCISSORS"];
let userWins = 0; // Track user wins
let aiWins = 0; // Track AI wins
// case: all ties, limit game amount to 5 and output 'tied'
function getSelections() {
  computerSelection = selections[Math.floor(Math.random() * 3)];
}
function updateScore() {
  document.getElementById("playerScore").textContent = userWins;
  document.getElementById("aiScore").textContent = aiWins;

  if (aiWins == 5 || userWins == 5) {
    if (aiWins > userWins) {
      document.getElementById("resultDisplay").textContent = "AI WINS";
    } else {
      document.getElementById("resultDisplay").textContent = "YOU WIN";
    }
  }
}
playerSelection = document.getElementById("playerSelection");
let rock = document.getElementById("Rock");
rock.addEventListener("click", () => {
  getSelections();
  switch (computerSelection) {
    case "PAPER":
      aiWins++;
      break;
    case "SCISSORS":
      userWins++;
      break;
  }
  updateScore();

  document.getElementById("playerSelection").textContent = "ROCK";
  document.getElementById("aiSelection").textContent = computerSelection;
  // playerSelection.textContext = "ROCK";
});
let paper = document.getElementById("Paper");
paper.addEventListener("click", () => {
  getSelections();
  switch (computerSelection) {
    case "SCISSORS":
      aiWins++;
      break;
    case "ROCK":
      userWins++;
      break;
  }
  document.getElementById("playerSelection").textContent = "PAPER";
  document.getElementById("aiSelection").textContent = computerSelection;
  updateScore();
});
let scissors = document.getElementById("Scissors");
scissors.addEventListener("click", () => {
  getSelections();
  switch (computerSelection) {
    case "ROCK":
      aiWins++;
      break;
    case "PAPER":
      userWins++;
      break;
  }
  document.getElementById("playerSelection").textContent = "SCISSORS";
  document.getElementById("aiSelection").textContent = computerSelection;
  updateScore();
});
