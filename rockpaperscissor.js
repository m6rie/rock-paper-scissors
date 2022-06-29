const playerSubmit = document.querySelector('.playerSubmit');
const playerInput = document.querySelector("#playerInput");
const winnerPick = {'Rock': 'Paper', 'Paper': 'Scissors', 'Scissors': 'Rock'};
const choice = playerInput.value;

// let gameRound = 1;
// let newGame;

function computerPlay() {
  const picks = ["Rock", "Paper", "Scissors"];
  return picks[Math.floor(Math.random() * picks.length)];
}
console.log(`computer played: ${computerPlay()}`);


function playerChoice() {
  const choices = ["rock", "paper", "scissors"]
  // choices.forEach(caseSensitive);

  // function caseSensitive(choice) {
  //   return choice[0].toUpperCase() + choice.slice(1).toLowerCase()
  // }

  // const pick = "ROCK";

  // const choice = playerInput.value;
  console.log(`user played: ${choice}`)
}
console.log(playerInput.value)

// console.log(playerChoice());
// console.log(playerSelection);

const computerSelection = computerPlay();
const playerSelection = playerChoice();

function playRound(playerSelection, computerSelection) {

  // let userChoice = playerChoice.innerHTML;



  if(playerSelection === computerSelection) {
    return "It's a tie!"
  } else if(playerSelection === winnerPick[computerSelection]) {
    return `You win! ${playerSelection} beats ${computerSelection}`
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`
  }
}
console.log(`computer played: ${computerSelection}`);

playerSubmit.addEventListener("click", (playRound) => {
  // playRound();
  // computerPlay();
  console.log(playRound);
  // console.log(playRound(playerSelection, computerSelection));
  console.log(`You played: ${playerInput.value}`);
  console.log(`computer played: ${computerSelection}`);
});
// function game() {
  // gameRound = playRound += 1
//   for (gameRound = 1; gameRound < 5; gameRound++){
//     playRound(playerSelection, computerSelection) += 1;
//   }
// }
// console.log(game())

// TRIALS
  // winningMessage = (playerSelection, computerSelection) => `Congrats ${playerSelection} beats ${computerSelection}`
  // losingMessage = (computerSelection, playerSelection) => `You lose ${computerSelection} beats ${playerSelection}`

  // console.log('#playerSelection'.innerHTML)
  // console.log('.playerChoice'.innerHTML)

// CONSOLE.LOG THE RESULTS
  // console.log(playRound(playerSelection, computerSelection));
  // console.log(computerSelection);
  // console.log(playerSelection);
