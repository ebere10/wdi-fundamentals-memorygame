
var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var board = document.getElementById('game-board');

var createCards = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards)
    board.appendChild(cardElement);
  }
}

function isMatch(cards) {

	if (cards[0] === cards[1]) {
    alert ("You found a match!");
	}
	else {
    alert("Sorry, try again.");
	}

}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));

	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='playing-card-king.png' alt= 'King of clubs' />";
	} 
	else {
		this.innerHTML = "<img src='playing-card-queen.png' alt= 'Queen of hearts' />"; 
	}

	if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
	}

}



createCards();