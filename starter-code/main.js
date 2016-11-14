
var cards = ['queen', 'queen', 'king', 'king'];

/*if (cardTwo === cardFour) {
    alert ("You found a match!");
}
else {
    alert("Sorry, try again.");
}
*/
var board = document.getElementById('game-board');
var createCards = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    board.appendChild(cardElement);
  }
}
createCards();