let player = {
  name: "Player 1",
  chips: 200
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageElem = document.getElementById("message-el");
let sumElem = document.getElementById("sum-el");
let cardsElem = document.getElementById("cards-el");
let playerElem = document.getElementById("player-el");

playerElem.textContent = `${player.name}: $ ${player.chips}`

function getRandomCard() {
  let randomNumber = Math.floor( Math.random()*13 ) + 1;
  if (randomNumber > 10) {
      return 10;
  } else if (randomNumber === 1) {
      return 11;
  } else {
      return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsElem.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
      cardsElem.textContent += cards[i] + " ";
  }

  sumElem.textContent = "Sum: " + sum;
  if (sum <= 20) {
      message = "Do you want to draw a new card?";
  } else if (sum === 21) {
      message = "Congrats!!! You've got Blackjack!";
      hasBlackJack = true;
  } else {
      message = "Sorry, You're out of the game!";
      isAlive = false;
  }
  messageElem.textContent = message;
}


function newCard() {
  if (isAlive === true && hasBlackJack === false) {
      let card = getRandomCard()
      sum += card
      cards.push(card)
      renderGame()
  }
}
