console.log("Up and running!");

//console.log("User flipped " + cardOne);
// console.log("User flipped " + cardThree);

var cards = ["Queen", "Queen", "King", "King"];

var cardsInPlay = [];

var cardOne = cards[0];

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

