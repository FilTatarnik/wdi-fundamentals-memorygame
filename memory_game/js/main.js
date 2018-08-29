var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var flipCard = function(cardId){


if (cardsInPlay[0] === cardsInPlay[1]){

	alert("You've found a match!");

   } else {
	alert("Sorry, try again.");

	
	};
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
};

flipCard(0);

flipCard(2);

