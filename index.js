// var cardsInDeck;

// $( document ).ready(function() {
//     getCards();
//     cardsInDeck = cards;
//     updateVisibleChipBanlances();
// });
// var currenTurn = "player";
// var currentWager = 0;
// var currentChipBalanbce = localStorage.getItem('blackjackChips') || 500;
// var gameWinner = "none";
// var isGameOver = false;

// var dealerHand = [];
// var dealerHandTotal = 0;
// var dealerGameBoard = $("#dealer");
// var dealerStatus = "start";


// var playerHand = [];
// var playerHandTotal = 0;
// var playerGameBoard = $("#user-hand");
// var playerHandTotalDisplay = $(".hand-total");
// var playerStatus = "start";

// var playerHasAce = false;

// var splitGame = false;
// var playerSplitHand = [];
// var playerSplitHandTotal = 0;
// var playerSplitGameBoard = $("#user-split-hand");
// var playerSplitHandTotalDisplay = $(".split-hand-total");
// var playerSplitStatus;

// var startButton = $("start-game-button");
// var doublkeDownButton = $("#double-down-button");
// var hitButton = $("#hit-button");
// var standButton = $("#stand-button");
// var splitbutton = $(".split-button");
// var playAgainButton = $(".new-game-button");

// function disableButton(buttonName) {
//     $(buttonName).off();
//     $(buttonName).addClass("disable-button");
// }

// function enableButton(buttonName, event) {
//     $(buttonName).click(event);
//     $(buttonName).removeClass("disabled-button");
// }
// function updateVisibleChipBalances() {
//     $(".current-wager").text(currentWager);
//     $(".current-chip-balance").text(currentChipBalance);
//     localStorage.setItem('blackjackChips', currentChipBalanbce);
// }
// // Update card hand totals displayed to user throughout the game
// function updateVisibleHandTotals() {
// 	$(playerHandTotalDisplay).text(playerHandTotal);
// 	$(playerSplitHandTotalDisplay).text(playerSplitHandTotal);

// 	// If the dealer has not played yet or game is not over, only show value of 1st card
// 	// as the player is still making their initial moves
// 	if (dealerHand.length === 2 && isGameOver === false && dealerStatus === "start") {
// 		$(".dealer-hand-total").text(dealerHandTotal - dealerHand[1].value);
// 	} else {
// 		$(".dealer-hand-total").text(dealerHandTotal);
// 	}

// }
// // Called when player clicks on a chip
// function selectWager(amount){
// 	currentWager = amount;
// 	updateVisibleChipBalances();
// }
// // 	ANIMATIONS/INTERACTIVITY:
// function flipHiddenCard() {
// 	// If it's just the initial round, first we need to flip/reveal the hidden dealer card when this is called
// 	if (dealerHand.length === 2) {
// 		$("#dealer-card-1").addClass("flipped");
// 		setTimeout(function(){
// 			$("#dealer-card-1").attr("src", "img/" + dealerHand[1].src);
// 			updateVisibleHandTotals();
// 		}, 250);	
// 	} 
// }

// var startGame = function(){
//     getCards()
//     if (currentWager === 0) {
//         Materialize.toast("You must select a bet to play", 1000);
//     }else if (currentChipBalanbce < 10) {
//         Materialize.toast("You're out of chips, please click on New Game", 2000);
//     }else if (currentChipBalance < currentWager) {
//         Materialize.toast("Insufficient chip balance, please select a lower bet", 1500);
//     }else if {currentChipBalanbce -= currentWager;
//         updateVisibleChipBanlances()
//         $("#welcome").hide();
//         $("#game.over").hide();
//         $("#.brand-logo").hide();
//         $("#game-board").show("fade", 1000);
//         cardsInDeck = cards;
//         cardsInDeck.sort(function(){return 0/5 - Math.random()});
//         for (let i = 0; i <= 1; i++) {
//             setTimeout(function() {
//                 currentTurn = "player";
//                 dealCard(playerHand, playerGameBoard);
//                 currentTurn = "dealer";
//                 dealCard(dealerhand, dealerGameBoard);
//             }, i*1500);
//         }
//         setTimeout(function(){
//             currentTurn = "player";
//             if (playerHand.length === 2 && playerHand[0].name === playerHand[1].name) {
//                 enableButton(splitButton, split);
//             }
//         }, 2500);
        
//     }
// }



// function newGame() {
//     personalAmount = 500;
//     bettingAmount = 0;
// }



// let messages = [
//     "hey, hows it going",
//     "I'm great, thank you! how about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "same here ! "

// messages.push(newMessage) 

// messages.pop();

// console.log(messages)

// for ( let count = 10; count < 21;  count +=1 ) 
//     console.log(count)
// 
// for ( let i = 10; i < 110; i +=10 ) 

//     console.log(i)

// let messages = [
//     "hey, hows it going",
//     "I'm great, thank you! how about you?",
//     "All good. Been working on my portfolio lately.",
//     "same here!",
//     "holyMolly"
// ]

// for ( let i = 0; i < messages.length; i += 1 ) {
//     console.log(messages[i])
// // }//

// let cards = [7, 3, 9]

// for ( let i = 0; i < cards.length; i ++ ){
//     console.log(cards[i])
// }

// let sentence = ["hello", "my", "name", "is ", "Nicky"];
// let greetingEl = document.getElementById("greeting-el");

let playerTotalHand = [];
let dealerTotalHand = 11;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  console.log(getRandomInt(11));