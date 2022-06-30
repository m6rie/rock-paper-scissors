const playerSubmit = document.querySelector('.playerSubmit');
const playerInput = document.querySelector("#playerInput");
const winnerPick = {'Rock': 'Paper', 'Paper': 'Scissors', 'Scissors': 'Rock'};
const computerSelection = computerPlay();
const playerSelection = playerInput.value;

// let gameRound = 1;
// let newGame;

playerSubmit.addEventListener("click", playRound => {
  const playerSelection = playerInput.value;
  winnerPick;

  if(playerSelection === computerSelection) {
    console.log("It's a tie!");
} else if(playerSelection === winnerPick[computerSelection]) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
} else {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
}
  console.log(`You played: ${playerSelection}`);
  console.log(`computer played: ${computerSelection}`);
});

function computerPlay() {
  const picks = ["Rock", "Paper", "Scissors"];
  return picks[Math.floor(Math.random() * picks.length)];
}


// console.log(`computer played: ${computerPlay()}`);


// function playerChoice(choice) {
  //   const choices = ["rock", "paper", "scissors"];
  // choices.forEach(caseSensitive);

  // function caseSensitive(choice) {
    // choice = playerInput.value;
    // const mandem = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    // console.log(choice)
  // }

  // const pick = "ROCK";
// }


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
