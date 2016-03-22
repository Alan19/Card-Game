//CONSTANTS
RANK = 0, SUIT = 1;
ACE = 1, JACK = 11, QUEEN = 12, KING = 13;
CARD_RANKS = ["JOKER", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
CARD_SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
CLUB = 0, DIAMOND = 1, HEART = 2, SPADE = 3;

/*
	generateStandardDeck
	
	Creates a deck of standard playing cards as an array.
	
	returns
		The deck of cards
*/
function generateStandardDeck()
{
	//The deck starts as an empty array.
	var deck = [];
	
	/*
		A double for loop will create all 52 cards, running the 13 ranks each 4 times for the suits.
	*/
	for (var r = ACE; r <= KING; r++)
		for (var s = CLUB; s <= SPADE; s++)
		{
			/*
				By declaring the card as an empty object, we can begin to create member variables (rank, suit, and cardImg) dynamically, assigning them values on the fly.
				
				Each call to new Object() creates a new object in card so that the loop creates 52 individual cards.
			*/
			var card = new Object();
			card.rank = r;
			card.suit = s;
			card.cardImg = r + "-" + s + ".png";
			deck.push(card);
		}
		
	//return the completed array.
	return deck;
}

/*
	shuffleDeck
	
	Takes a deck of cards and randomizes the order of the cards.
	
	Parameters:
		deck - The deck of cards
		
	Returns:
		The shuffled deck
*/
	
	//return shuffledDeck;
//}

function backwardsSwapShuffle(deck){
	for (var i = deck.length-1; i>0; i--){
		var idx = getRandomInteger(0, i);
		var temp = deck[i];
		deck[i] = deck[idx];
		deck[idx] = temp;
	}
}

function fowardSwapShuffle(deck){
	for (var i = 0; i < deck.length-1; i++){
		idx = getRandomInteger(i,deck.length-1);
		var temp = deck[i];
		deck[i] = deck[idx];
		deck[idx] = temp;
	}
}

function doubleSwapShuffle(deck){
	fowardSwapShuffle(deck);
	backwardsSwapShuffle(deck);
}

/*
	dealCard
	
		Removes and returns the first card from a deck.
	
	Parameters:
		a card deck
		
	Returns:
		The removed card
*/
function dealCard(deck)
{
	return deck.shift();
}

/*
	removeCard
	
	Removes and returns a specified card from a deck.
	
	Parameters:
		deck - the card deck
		idx - the position of the card being removed.
*/
function removeCard(deck, idx)
{
	/*
		idx is an optional parameter.  If it is omitted in the call, simply set it to 0 and remove the first card.
	*/
	if (idx == null)
		idx = 0;
		
	/*
		Remove the card with a call to splice.  Remember that splice returns an array so the one card is at index 0.
	*/
	var cardsRemoved = deck.splice(idx, 1);
	return cardsRemoved[0];
}

/*
	addCard
	
	Adds a card into a deck at a specified position.
	
	Parameters:
		deck - the card deck
		card - the card being added
		position - where to add the card
*/
function addCard(deck, card, position)
{
	/*
		position is an optional parameter.  If position is omitted in the call, simply add the card to the end of the deck.
	*/
	if (position == null)
		deck.push(card);
	else
		deck.splice(position, 0, card);
}

/*
	peekCard
	
	returns a card without removing it
	
	Parameters:
		deck - a card deck
		idx - the position of the card being returned
		
	Returns:
		a card object
*/
function peekCard(deck, idx)
{
	/*
		idx is an optional parameter.  If it is omitted in the call, simply set it to 0 and return the first card.
	*/
	if (idx == null)
		idx = 0;
	
	//Return the specified card.
	return deck[idx];
}

function dealCard(deck){
	return deck.shift();
}

/*
	displayDeck
	
	USED FOR TESTING ONLY!!!!!!!!!
	
	This function will display all of the card images from a specified deck into a specified HTML element.
	
	Parameters:
		deck - the card deck
		path - the relative path of the image files
		htmlElement - the output element on the page
*/
function displayDeck(deck, path, htmlElement)
{
	//Clear out the innerHTML
	htmlElement.innerHTML = "";
	
	/*
		Loop through the deck and, through string building, create new <img /> tags inside of htmlElement by concatenating the text onto the innerHTML.
		
		THIS IS NOT AN EFFICIENT WAY TO ADD TAGS TO YOUR PAGE.  DO NOT USE THIS METHOD TO DYNAMICALLY BUILD A PAGE.
		
		THIS FUNCTION IS FOR TESTING PURPOSES ONLY
	*/
	for (var i = 0; i < deck.length; i++)
		htmlElement.innerHTML += "<img src = '" + path + deck[i].cardImg + "' />";
}

function generateDeckWithPointValues(pointValue){
	var deck = [];
	if (pointValue.length != 13){
		return deck;
	}
	
	for (var r = ACE; r <= KING; r++){
		for (var s = CLUB; s <= SPADE; s++){
			/*
				By declaring the card as an empty object, we can begin to create member variables (rank, suit, and cardImg) dynamically, assigning them values on the fly.
				
				Each call to new Object() creates a new object in card so that the loop creates 52 individual cards.
			*/
			var card = new Object();
			card.rank = r;
			card.suit = s;
			card.pointValues = pointValue[r-1];
			card.cardImg = r + "-" + s + ".png";
			deck.push(card);
		}
	}
	return deck;
}		

function selectUnselect(tD){
	for(var i = 0; i < BOARD_SIZE; i++){
		if(jCardRow.cells[i] == tD){
			selected[i] = !selected[i];
			if(selected[i]){
				tD.style.border = "thick solid green";
			}
			else{
				tD.style.border = "none";
			}
		}
	}
}

function getIndexesOfCardsOnBoard(){
	var selectedIndexes = [];
	
	for(var i = 0; i < BOARD_SIZE; i++){
		if(cardsOnBoard[i] != null){
			selectedIndexes.push[i];
		}
	}
	
	return selectedIndexes;
}

function getSelectedIndexes(){
	var selectedIndexes = [];
	
	for(var i = 0; i < BOARD_SIZE; i++){
		if(selected[i] && cardsOnBoard[i] != null){
			selectedIndexes.push(i);
		}
	}
}

function containsJQK(selectedIndexes){
	var foundJack = false;
	var foundQueen = false;
	var foundKing = false;
	
	for(var i = 0; i < selectedIndexes.length; i++){
		if(cardsOnBoard[selectedIndexes[i]].rank == JACK){
			foundJack = true;
		}
		else if(cardsOnBoard[selectedIndexes[i]].rank == QUEEN){
			foundQueen = true;
		}
		else if(cardsOnBoard[selectedIndexes[i]].rank == KING){
			foundKing = true;
		}
	}
	/*if(foundJack && foundQueen && foundKing){
		return true;
	}
	else{
		return false;
	}*/
	return foundJack && foundQueen && foundKing;
}

function containsPairSum11(selectedIndexes){
	containsSum11 = false;
	
	for(var i = 0; i < selectedIndexes.length-1; i++){
		for(var j = i + 1; j < selectedIndexes.length; j++){
			if(cardsOnBoard[selectedIndexes[i]].pointValues + cardsOnBoard[selectedIndexes[j]].pointValues == 11){
				return true;
			}
		}
	}
	return false;
}