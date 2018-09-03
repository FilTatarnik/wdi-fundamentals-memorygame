
//card objects
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage:"images/queen-of-hearts.png"
	},
		{
		rank: "queen",
		suit: "diamonds",
		cardImage:"images/queen-of-diamonds.png"
	},
		{
		rank: "king",
		suit: "hearts",
		cardImage:"images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

//variable that checks if the card is in play i guess. or the logic

var cardsInPlay = [];
var checkForMatch = function(){
		if (cardsInPlay.length === 2) {
			if(cardsInPlay[0] === cardsInPlay[1]) {
				alert("You found a match!");
			} else { alert("Sorry, try again.");
		}
	}
}	

//flipcard function first try
// var flipCard = function(){
// 	var cardId = this.getAttribute('data-id');
// 		console.log('User flipped ' + cards[cardId].rank);
// 		cardsInPlay.push(cards[cardId].rank);
// 		console.log(cards[cardId].suit);
// 		console.log(cards[cardId]cardImage);
// 			this.setAttribute('src', cards[cardId].cardImage);
				
// 	checkForMatch()
// }

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	 cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	 this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
}


//function that creates a new game board
var createBoard = function(){
	for (var i = 0;i < cards.length;i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		document.getElementById('game-board').appendChild(cardElement);
		cardElement.addEventListener('click', flipCard);
		
	}
}




//calling createBoard function
createBoard();
