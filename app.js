let roundsPlayed = 0;
let playerWins = 0;
let computerWins = 0;
let ties = 0;
document.querySelector("#reset").disabled = true;
function playRound() {
  const choices = ["rock", "paper", "scissors"];

  // Prompt the user for their choice
  const playerSelection = prompt(
    "Enter your choice: rock, paper, or scissors"
  ).toLowerCase();

  // Check if the input is valid
  if (!choices.includes(playerSelection)) {
    alert("Invalid choice. Please type in rock, paper, or scissors.");
    return;
  }

  const computerSelection = choices[Math.floor(Math.random() * 3)];

  // Determine the winner
  let result;
  if (playerSelection === computerSelection) {
    ties++;
    result = `It's a tie! ${playerSelection} same as ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = `You win! ${playerSelection} beats ${computerSelection}`;
    playerWins++;
  } else {
    result = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerWins++;
  }

  // Display the result
  document.getElementById("result").innerText = result;

  // Update round information
  roundsPlayed++;
  document.querySelector("#click").innerText = `${
    roundsPlayed < 5 ? "Play Round" + " " + (roundsPlayed + 1) : "Finished!"
  }`;
  document.getElementById(
    "rounds"
  ).innerText = `${roundsPlayed === 5 ? "Reset to play" :"Rounds Played: " + roundsPlayed + " out of 5"}`
  document.getElementById(
    "playerWins"
  ).innerText = `Player Wins: ${playerWins}`;
  document.getElementById("ties").innerText = `Ties: ${ties}`;
  document.getElementById(
    "computerWins"
  ).innerText = `Computer Wins: ${computerWins}`;

  // Check if five rounds have been played
  if (roundsPlayed === 5) {
    declareWinner();
    document.getElementById("reset").disabled = false;
  }
}

function declareWinner() {
    
  let overallResult;
  if (playerWins > computerWins) {
    document.querySelectorAll("p").forEach(paragraph =>{
        paragraph.style.backgroundColor = "green"
    })
    overallResult = `You won! ${playerWins} rounds!`;
  } else if (playerWins < computerWins) {
    overallResult = `You lose! Computer won ${computerWins} rounds.`;
    document.querySelectorAll("p").forEach(paragraph =>{
        paragraph.style.backgroundColor = "grey"
    })
  }  else {
    overallResult = `It's a tie of ${playerWins}:${computerWins} wins!`;
  }

  // Display the overall result
  document.getElementById("result").innerText = overallResult;

  // Disable the button after the game is over
  document.querySelector("#click").disabled = true;

}
