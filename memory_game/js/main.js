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
		if(cardsInPlay[0] === cardsInPlay[1]){
			alert("you found match!")
		}
		else{
			alert("Sorry, try again.")
		}
}


var flipCard = function () {
	var cardId = this.getAttribute('data-id')
    this.setAttribute('src', cards[cardId].cardImage)
    cardsInPlay.push(cards[cardId].rank);
    if(cardsInPlay.length === 2){
		checkForMatch();
	}

	// cardsInPlay.push(cards[cardId].suit);
	// cardsInPlay.push(cards[cardId].cardImage);
}



var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
	    cardElement.setAttribute('data-id', i);
	    cardElement.addEventListener('click',flipCard);
	    document.getElementById('game-board').appendChild(cardElement);
};
}
    //<img src="images/back.png">
// flipCard(0);
// flipCard(2);

createBoard();

// var cardOne = cards[0];

// cardsInPlay.push(cardOne);

// console.log("User flipped " + cardOne);

// var cardTwo = cards[3];

// cardsInPlay.push(cardTwo);

// console.log("User flipped " + cardTwo);

// console.log(cardsInPlay)



