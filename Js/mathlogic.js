// console.log(4 === 3 );// false
// console.log(5 > 2); // true
// console.log(12 > 12); //false
// console.log( 3 < 0); //false
// console.log(3 <= 11); //true
// console.log(11 <= 11); //true
// console.log(3 < 2); //false

let message = "";
let playerTotalHand = 2;
let dealerTotalHand = 11;
let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard]
let hasBlackJack = false;
let isAlive = true;
let sum = playerTotalHand + dealerTotalHand

let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "cards: " + cards[0] + " " + cards[1] 
    sumEl.textContent = "sum: " + sum 
    if (sum <= 20) {
        message = "do you want to draw another card?"
    
    } else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    }else {
        message = "You're out of the game!"
        isAlive = false
       
    }
    messageEl.textContent = message
}

function hitDecision() {
   let card =  7
   sum += card
   cards.push(card)
   renderGame()

}