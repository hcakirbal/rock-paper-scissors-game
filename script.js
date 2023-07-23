rockButton.addEventListener('click', rock())
paperkButton.addEventListener('click', paper())
scissorsButton.addEventListener('click', scissors())
array = [rock, paper, scissors]

function rock() {
  player = rock
  console.log("kaya")
  number = Math.floor(Math.random() * 4)
  computer = array[number]
  compareRock()
}

function paper() {
  player = paper
  number = Math.floor(Math.random() * 4)
  computer = array[number]
  comparePaper()
}

function scissors() {
  player = scissors
  number = Math.floor(Math.random() * 4)
  computer = array[number]
  compareScissors()
}

tie() {
  document.getElementById("text").innerHTML = "It's a tie! Let's play again."
}
playerLoses() { 
  document.getElementById("text").innerHTML = "You lose! Come on, you can do it."
}
playerWins() { 
  document.getElementById("text").innerHTML = "YOU WIN! I knew you could do it."
}

function compareRock() {
  if(computer==rock) {
    tie()
  } else if(computer==paper) {
    playerLoses()
  } else if(computer==scissors) {
    playerWins()
  }
}

function comparePaper() {
  if(computer==paper) {
    tie()
  } else if(computer==scissors) {
    playerLoses()
  } else if(computer==rock) {
    playerWins()
  }
}

function compareScissors() {
  if(computer==scissors) {
    tie()
  } else if(computer==rock) {
    playerLoses()
  } else if(computer==paper) {
    playerWins()
  }
}