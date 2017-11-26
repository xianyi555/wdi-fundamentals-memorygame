console.log("Up and running!");

//console.log("User flipped " + cardOne);
// console.log("User flipped " + cardThree);

var cards = ["Queen", "Queen", "King", "King"];

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
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
}

flipCard(0);
flipCard(1);
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

