let playerScore = 0;
let computerScore = 0;
let round = 1;

function appendP(text) {
  let div = document.getElementById("div1"),
    p = document.createElement("p");
  p.innerHTML = text;
  div.append(p);
}

function computerChoice() {
  const choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      console.log("Computer picked rock");
      return "rock";
      break;
    case 1:
      console.log("Computer picked paper");
      return "paper";
      break;
    case 2:
      console.log("Computer picked scissors");
      return "scissors";
      break;
    default:
      console.log("Something is wrong");
      break;
  }
}

function playerChoice() {
  const player = prompt("Choose rock, paper or scissors");
  return player;
}

function compareChoices(player, computer) {
  if (player === "rock" || player === "paper" || player === "scissors") {
    if (player === computer) {
      return `Draw! You both chose ${player}!`;
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      playerScore++;
      return `You won! You chose ${player} and computer chose ${computer}.`;
    } else {
      computerScore++;
      return `You lost! You chose ${player} and computer chose ${computer}.`;
    }
  } else {
    computerScore++;
    return `Your choice is invalid, ${player} is not an option. Computer gets point.`;
  }
}

function playRound(player) {
  //   let player = playerChoice();
  if (player === null || player === undefined || player === "") {
    appendP("You didn't choose anything, you lose this round.");
  } else {
    player = player.toLowerCase();
    let computer = computerChoice();
    let outcome = compareChoices(player, computer);
    appendP(outcome);
  }
  gameEndCheck(playerScore, computerScore);
  round++;
}

const rock = document.querySelector(".rock");
rock.addEventListener("click", function () {
  playRound("rock");
});

const paper = document.querySelector(".paper");
paper.addEventListener("click", function () {
  playRound("paper");
});

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", function () {
  playRound("scissors");
});

function gameEndCheck(player, computer) {
  if (round === 5) {
    if (player === computer) {
      appendP(`It's a draw!`);
    } else if (playerScore < computerScore) {
      appendP(
        `Computer wins! Your score is ${playerScore} and computer score is ${computerScore}.`
      );
    } else {
      appendP(
        `Player wins! Your score is ${playerScore} and computer score is ${computerScore}.`
      );
    }
    document.querySelector(".rock").disabled = true;
    document.querySelector(".paper").disabled = true;
    document.querySelector(".scissors").disabled = true;
  }
}

// game();
