// Rock Paper Scissors Game - Console Based

let humanScore = 0;
let computerScore = 0;

// Get computer's random choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Get human player's choice
function getHumanChoice() {
  let input = prompt("Choose rock, paper, or scissors:");
  if (!input) return getHumanChoice();
  
  input = input.trim().toLowerCase();

  if (["rock", "paper", "scissors"].includes(input)) {
    return input;
  } else {
    alert("Invalid choice! Please try again.");
    return getHumanChoice();
  }
}

// Play one round
function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();
  const computer = computerChoice;

  if (human === computer) {
    console.log(`It's a tie! You both chose ${human}.`);
    return "tie";
  }

  if (
    (human === "rock" && computer === "scissors") ||
    (human === "scissors" && computer === "paper") ||
    (human === "paper" && computer === "rock")
  ) {
    humanScore++;
    console.log(`You win! ${human} beats ${computer}.`);
    return "human";
  } else {
    computerScore++;
    console.log(`You lose! ${computer} beats ${human}.`);
    return "computer";
  }
}

// Play 3-round game
function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let round = 1; round <= 3; round++) {
    console.log(`\n--- Round ${round} ---`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
  }

  console.log(`\n=== Final Score ===`);
  if (humanScore > computerScore) {
    console.log("🎉 You win the game!");
  } else if (computerScore > humanScore) {
    console.log("😞 You lose the game.");
  } else {
    console.log("🤝 It's a tie game.");
  }
}

// Start game
playGame();
