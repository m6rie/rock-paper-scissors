const playerSubmit = document.querySelector('.playerSubmit');
const playerInput = document.querySelector("#playerInput");
const winnerPick = {'Rock': 'Paper', 'Paper': 'Scissors', 'Scissors': 'Rock'};
const computerSelection = computerPlay();
const playerSelection = playerInput.value;
const resetButton = document.querySelector('.resetButton');
// let gameRound = 1;
// let newGame;

let gamePlay = playerSubmit.addEventListener("click", playRound => {
  const playerSelection = playerInput.value[0].toUpperCase() + playerInput.value.slice(1).toLowerCase()
  const computerR = computerSelection.reset;
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
  // TRY ADDING A LOOP OF (let i = 0; i = 1; i++)
  for (let i = 0; i = 1; i++){
  const picks = ["Rock", "Paper", "Scissors"];
  return picks[Math.floor(Math.random() * picks.length)];
}}

resetButton.addEventListener("click", resetGame => {
  playerInput.value = '';
  console.log(playerInput.value);

  // computerSelection.value = '';
  // const computerSelection = computerPlay();
  // const cumputerR = computerPlay.reset;
  // console.log(cumputerR);
  // console.log(computerSelection);


});
// CREATE A resetButton button and a resetGame function
// the resetB will trigger an eventListener w/ function resetG

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
