console.log("Up and running!");

//console.log("User flipped " + cardOne);
// console.log("User flipped " + cardThree);

var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "King",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "King",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
// console.log("You found a match!");
alert("You found a match!");
} else {
// console.log("Sorry, try again.");
alert("Sorry, try again.");
}
}

var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
	// cardsInPlay.push(cards[cardId].suit);
	// cardsInPlay.push(cards[cardId].cardImage);
}

flipCard(0);
flipCard(2);
checkForMatch ();



/*var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

var cardTwo = cards[3];

cardsInPlay.push(cardTwo);

console.log("User flipped " + cardTwo);

console.log(cardsInPlay)

if(cardsInPlay.length === 2){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("you found match!")
	}
	else{
		alert("Sorry, try again.")
	}
}
*/

