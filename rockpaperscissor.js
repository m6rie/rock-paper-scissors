function playRound(playerSelection, computerSelection) {
  const winnerPick = {'Rock': 'Paper', 'Paper': 'Scissors', 'Scissors': 'Rock'};
  // let userChoice = playerChoice.innerHTML;

  if(playerSelection === computerSelection) {
    return "It's a tie!"
  } else if(playerSelection === winnerPick[computerSelection]) {
    return `You win! ${playerSelection} beats ${computerSelection}`
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`
  }

}

function computerPlay() {
  const picks = ["Rock", "Paper", "Scissors"];
  return picks[Math.floor(Math.random() * picks.length)];
}
// console.log(computerPlay());

function playerChoice() {
  const pick = "ROCK";
  return pick[0].toUpperCase() + pick.slice(1).toLowerCase();
}
// console.log(playerChoice());

const computerSelection = computerPlay();
const playerSelection = playerChoice();

// function game() {
//   for (let i = 0; i < 5; i++){
//     playRound(playerSelection, computerSelection) * i;
//   }
// }
// console.log(game())

// TRIALS
  // const playerSelection = document.querySelector('#playerSelection');
  // const playerChoice = document.querySelector('.playerChoice');

  // winningMessage = (playerSelection, computerSelection) => `Congrats ${playerSelection} beats ${computerSelection}`
  // losingMessage = (computerSelection, playerSelection) => `You lose ${computerSelection} beats ${playerSelection}`

  // console.log(playerSelection)
  // console.log(playerChoice)

  // console.log('#playerSelection'.innerHTML)
  // console.log('.playerChoice'.innerHTML)

  // playerChoice.addEventListener('click', playRound);


// const playerSelection = document.querySelector('.playerSelection');

// const playerSelection = playerChoice;

// console.log(playRound(playerSelection, computerSelection));
// console.log(computerSelection);
// console.log(playerSelection);
