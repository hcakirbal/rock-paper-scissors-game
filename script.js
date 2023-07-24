var player = null
var computer = null
const array = ['rock', 'paper', 'scissors']

rockButton.addEventListener('click', playerRock)
paperButton.addEventListener('click', playerPaper)
scissorsButton.addEventListener('click', playerScissors)

function restart() {
  location.reload()
}

function playerRock() {
  player = array [0]
  number = Math.floor(Math.random() * 3)
  computer = array[number]
  document.getElementById("computerText").innerHTML = "Computer chose " + array[number] + "."
  compareRock()
}

function playerPaper() {
  player = array [1]
  number = Math.floor(Math.random() * 3)
  computer = array[number]
  document.getElementById("computerText").innerHTML = "Computer chose " + array[number] + "."
  comparePaper()
}

function playerScissors() {
  player = array [2]
  number = Math.floor(Math.random() * 3)
  computer = array[number]
  document.getElementById("computerText").innerHTML = "Computer chose " + array[number] + "."
  compareScissors()
}

function tie() {
  document.getElementById("text").innerHTML = "It's a tie! Let's play again."
}
function playerLoses() { 
  document.getElementById("text").innerHTML = "You lose! Come on, you can do it."
}
function playerWins() { 
  document.getElementById("text").innerHTML = "YOU WIN! I knew you could do it."
}

function compareRock() {
  if(computer==array[0]) {
    tie()
  } else if(computer==array [1]) {
    playerLoses()
  } else if(computer==array [2]) {
    playerWins()
  }
}

function comparePaper() {
  if(computer==array [1]) {
    tie()
  } else if(computer==array [2]) {
    playerLoses()
  } else if(computer==array [0]) {
    playerWins()
  }
}

function compareScissors() {
  if(computer==array [2]) {
    tie()
  } else if(computer==array [0]) {
    playerLoses()
  } else if(computer==array [1]) {
    playerWins()
  }
}