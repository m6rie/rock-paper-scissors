const playerSubmit = document.querySelector('.playerSubmit');
const playerInput = document.querySelector("#playerInput");
const winnerPick = {'Rock': 'Paper', 'Paper': 'Scissors', 'Scissors': 'Rock'};
const playerSelection = playerInput.value;
const resetButton = document.querySelector(".resetButton");
const result = document.querySelector('.result');
const playerResult = document.querySelector('.playerResult');
const computerResult = document.querySelector('#computerResult');
const option = ['Rock', 'Paper', 'Scissors']
let scores = document.getElementById('scores')
let userCount = 0;
let computerCount = 0;

let gameLength = 5;
let gameCount = 0;

// resetButton.addEventListener("click", function(e) {
//   console.log("reset")
//   resetGame()
// });

playerSubmit.addEventListener("click", function(event) {
  console.log("play")
  gamePlay()
})

function gamePlay() {
  const playerSelection = playerInput.value[0].toUpperCase() + playerInput.value.slice(1).toLowerCase();
  winnerPick;
  userCount === 0;
  computerCount === 0;
  let computerPlay = option[Math.floor(Math.random() * option.length)];

    if(userCount != 5 && computerCount != 5) {
    if(!option.includes(playerSelection)) {
      result.textContent = "Please enter a valid option"
    } else if(playerSelection === computerPlay) {
      scores.innerHTML = `You: ${userCount} ----- Computer: ${computerCount}`
      result.textContent = "It's a tie!";
    } else if(playerSelection === winnerPick[computerPlay]) {
      userCount++
      scores.innerHTML = `You: ${userCount} ----- Computer: ${computerCount}`
      console.log(userCount)
      result.textContent = `You win! ${playerSelection} beats ${computerPlay}`;
    } else {
      computerCount++
      scores.innerHTML = `You: ${userCount} ----- Computer: ${computerCount}`
      console.log(computerCount)
      result.textContent = `You lose! ${computerPlay} beats ${playerSelection}`;
    }
    computerResult.textContent = `The computer played: ${computerPlay}`;

    } else if(userCount >= 5 && computerCount < 5) {
      console.log("you won")
      result.textContent = "Congratulations, you won! :-)"
      computerResult.textContent = ""
    } else if(userCount < 5 && computerCount >= 5) {
      console.log("computer won")
      result.textContent = "Sorry, looks like you couldn't beat the machine :-("
      computerResult.textContent = ""
    }
}

function resetGame() {
  // userCount == 0;
  // computerCount == 0;
  // scores.innerHTML = `You: ${userCount} ----- Computer: ${computerCount}`
  playerInput.value = '';
  result.textContent = '';
  computerResult.textContent = '';
  // scores.innerHTML = ""
  gamePlay()
}
