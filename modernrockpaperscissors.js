const rock = document.querySelector(".rock-button")
const paper = document.querySelector(".paper-button")
const scissors = document.querySelector(".scissors-button")
const winnerPick = { 'ROCK': 'PAPER', 'PAPER': 'SCISSORS', 'SCISSORS': 'ROCK'};
const buttons = document.querySelectorAll(".game-button")
const choices = ["ROCK", "PAPER", "SCISSORS"]
const scores = document.querySelector("#scores")
const result = document.querySelector(".result")
const computerResult = document.querySelector("#computerResult")
const restart = document.getElementById("restart")
let userScore = 0;
let computerScore = 0;

function computerFunction() {
  let computerPick = choices[Math.floor(Math.random() * choices.length)]
  return computerPick
}


for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", round)
    // if(computerFunction() == "ROCK"){
    //   computerResult.textContent = "✊"
    // } else if(computerFunction() == "PAPER"){
    //   computerResult.textContent = "🫱"
    // } else {
    //   computerResult.textContent = "✌️"
    // }
    // event.preventDefault()

  // restart.addEventListener("click", round)

  function round() {

    let computerPick = computerFunction()

    if (userScore < 5 && computerScore < 5) {
      if(buttons[i].innerHTML === computerPick) {
        result.innerHTML = `It's a tie. <br> You played ${buttons[i].innerHTML} the computer played ${computerPick}`
        scores.innerHTML = `You: ${userScore} --- Computer: ${computerScore}`
      } else if(buttons[i].innerHTML === winnerPick[computerPick]) {
        result.innerHTML = `You won! <br> You played ${buttons[i].innerHTML} the computer played ${computerPick}`
        userScore++
        scores.innerHTML = `You: ${userScore} --- Computer: ${computerScore}`
      } else {
        result.innerHTML = `You lost. <br> You played ${buttons[i].innerHTML} the computer played ${computerPick}`
        computerScore++
        scores.innerHTML = `You: ${userScore} --- Computer: ${computerScore}`
      }
    } else if(userScore === 5 && computerScore <= 4) {
      result.innerHTML = `Congratulations, you won! <!-- Would you like to play again? -->`
      // restart.innerHTML = `<button>Restart</button>`
    } else {
      result.innerHTML = `Seems like you could not beat the machine. <!--  Would you like to play again?-->`
      // restart.innerHTML = `<button>Restart</button>`
    }
  }
}
