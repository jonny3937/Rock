let computerScore = 0;
let playerScore = 0;

const choices = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️",
};
const computerChoiceEl = document.getElementById("computer-choice");
const playerChoiceEl = document.getElementById("player-choice");
const gameStatusEl = document.getElementById("game-status");
const scoreEl = document.querySelector(".score");
const choiceBtns = document.querySelectorAll(".choice-btn");
//
choiceBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const playerChoice = btn.dataset.choice;
    playGame(playerChoice);
  });
});

function getComputerChoice() {
  const choiceArray = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choiceArray[randomNumber];
}


function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  }

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function updateDisplay(playerChoice, computerChoice) {
  playerChoiceEl.querySelector(".hand-emoji").textContent =
    choices[playerChoice];
  computerChoiceEl.querySelector(".hand-emoji").textContent =
    choices[computerChoice];
}


function updateStatus(result) {
  const statusBanner = document.querySelector(".status-banner");

  statusBanner.classList.remove("win", "lose", "draw");

  if (result === "player") {
    gameStatusEl.textContent = "YOU WON!";
    statusBanner.classList.add("win");
  } else if (result === "computer") {
    gameStatusEl.textContent = " you lose!";
    statusBanner.classList.add("lose");
  } else {
    gameStatusEl.textContent = "DRAW!";
    statusBanner.classList.add("draw");
  }
}

function updateScore() {
  scoreEl.textContent =
    "computer " + computerScore + " " + playerScore + " player";
}

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = getWinner(playerChoice, computerChoice);

  updateDisplay(playerChoice, computerChoice);

  if (result === "player") {
    playerScore++;
  } else if (result === "computer") {
    computerScore++;
  }

  updateStatus(result);
  updateScore();
}

updateScore();
