
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
		cardImage:"images/queen-of-diamonds"
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
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
		} else {
		console.log("Sorry, try again.");
}
};


//flipcard function
var flipCard = function(cardId){


if (cardsInPlay[0] === cardsInPlay[2]){

	alert("You've found a match!");

   } else {
	alert("Sorry, try again.");

	
	}
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId]);



	console.log([cards[cardId].cardImage]);
	console.log([cards[cardId].suit]);



	// checkForMatch();
};

//calling the flipCard function
flipCard(0);

flipCard(2);

