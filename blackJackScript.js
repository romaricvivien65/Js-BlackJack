
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let startGameBtn = document.getElementById('startGame-btn')
let newCardBtn = document.getElementById('newCard-btn')

let player = {
  name : "Per",
  chips : 145,
  sayHello: function() {
    console.log("Hey!!!")
  }

}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

if (isAlive === true && hasBlackJack === false){    
  startGameBtn.disabled= true
}

if (isAlive === false || hasBlackJack === true){    
  startGameBtn.disabled= false
  newCardBtn.disabled= true
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random()*13) +1

  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}


function startGame(){
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
  startGameBtn.disabled= true
  newCardBtn.disabled= false
}


function renderGame() {
  cardsEl.textContent = "Cards: "
  for (let i=0; i < cards.length; i ++){
    cardsEl.textContent += cards[i] + " "
  }
  
  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message ="Do you want me to draw a new card? 🙂"
  } else if (sum === 21) {
    message = "Whooo! You've got BlackJack! 🥳"
    hasBlackJack = true
  } else {
    message = " You're out of the game! 😭"
    isAlive = false
  } 
  //CASH OUT
  messageEl.textContent = message
}

function newCard() {
  if (isAlive === true && hasBlackJack === false){    
      let card = getRandomCard()
      sum += card
      cards.push(card)
      renderGame()
    }

  if (isAlive === false || hasBlackJack === true){    
    startGameBtn.disabled= false
    newCardBtn.disabled= true
  }
}


