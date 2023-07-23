array = [rock, paper, scissors]

function rock() {
  player = rock
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

tie() {}
playerLoses() {}
playerWins() {}


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