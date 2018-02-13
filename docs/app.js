let currentTurn = 'blue';

let squares = document.getElementsByClassName("square");
let turnIndicator = document.getElementById("turnIndicator");
	
for (var i = 0 ; i < squares.length; i++) {
   squares[i].addEventListener('click' , changeSquare , false ); 
}

function changeSquare(event) {
	event = event || window.event;
    var elem = event.target || event.srcElement;
	elem.classList.remove('empty');
	if (currentTurn === 'blue') {
		elem.className += ' square-is-occupied-blue';
		currentTurn = 'red';
		turnIndicator.className = 'blueTurn';
		turnIndicator.className = 'redTurn';
	}
	else {
		elem.className += ' square-is-occupied-red';
		currentTurn = 'blue';
		turnIndicator.className = 'redTurn';
		turnIndicator.className = 'blueTurn';
	}
	ownChecker()
}

function ownChecker() { /* Each time a square is changed, this is run to check if a player meets the win conditions */
	let squareOne 	= document.getElementById('one'	 );
	let squareTwo 	= document.getElementById('two'	 );
	let squareThree = document.getElementById('three');
	let squareFour 	= document.getElementById('four' );
	let squareFive 	= document.getElementById('five' );
	let squareSix 	= document.getElementById('six'  );
	let squareSeven = document.getElementById('seven');
	let squareEight = document.getElementById('eight');
	let squareNine 	= document.getElementById('nine' );
	
	// Below we have a series of variable assignments to see who owns which square.
	
	
	if (squareOne.className === 'square square-is-occupied-blue'){
		squareOne = 'blueOwned';
		console.log('squareOne is ' + squareOne);
	} else if (squareOne.className === 'square square-is-occupied-red'){
		squareOne = 'redOwned';
		console.log('squareOne is ' + squareOne);
	}
	
	if (squareTwo.className === 'square square-is-occupied-blue'){
		squareTwo = 'blueOwned';
		console.log('squareTwo is ' + squareTwo);
	} else if (squareTwo.className === 'square square-is-occupied-red'){
		squareTwo = 'redOwned';
		console.log('squareTwo is ' + squareTwo);
	}
	
	if (squareThree.className === 'square square-is-occupied-blue'){
		squareThree = 'blueOwned';
		console.log('squareThree is ' + squareThree);
	} else if (squareThree.className === 'square square-is-occupied-red'){
		squareThree = 'redOwned';
		console.log('squareThree is ' + squareThree);
	}
	
	if (squareFour.className === 'square square-is-occupied-blue'){
		squareFour = 'blueOwned';
		console.log('squareFour is ' + squareFour);
	} else if (squareFour.className === 'square square-is-occupied-red'){
		squareFour = 'redOwned';
		console.log('squareFour is ' + squareFour);
	}
	
	if (squareFive.className === 'square square-is-occupied-blue'){
		squareFive = 'blueOwned';
		console.log('squareFive is ' + squareFive);
	} else if (squareFive.className === 'square square-is-occupied-red'){
		squareFive = 'redOwned';
		console.log('squareFive is ' + squareFive);
	}
	
	if (squareSix.className === 'square square-is-occupied-blue'){
		squareSix = 'blueOwned';
		console.log('squareSix is ' + squareSix);
	} else if (squareSix.className === 'square square-is-occupied-red'){
		squareSix = 'redOwned';
		console.log('squareSix is ' + squareSix);
	}
	
	if (squareSeven.className === 'square square-is-occupied-blue'){
		squareSeven = 'blueOwned';
		console.log('squareSeven is ' + squareSeven);
	} else if (squareSeven.className === 'square square-is-occupied-red'){
		squareSeven = 'redOwned';
		console.log('squareSeven is ' + squareSeven);
	}
	
	if (squareEight.className === 'square square-is-occupied-blue'){
		squareEight = 'blueOwned';
		console.log('squareEight is ' + squareEight);
	} else if (squareEight.className === 'square square-is-occupied-red'){
		squareEight = 'redOwned';
		console.log('squareEight is ' + squareEight);
	}
	
	if (squareNine.className === 'square square-is-occupied-blue'){
		squareNine = 'blueOwned';
		console.log('squareNine is ' + squareNine);
	} else if (squareNine.className === 'square square-is-occupied-red'){
		squareNine = 'redOwned';
		console.log('squareNine is ' + squareNine);
	}
	
	winChecker();
	
	// The subsequent win conditions will check if variable combinations are true.
	
	function winChecker(){
		let blueVictory = false;
		let redVictory = false;
		// BLUE WIN CONDITIONS
		// horizontal win
		// first row
		if (squareOne === 'blueOwned' && squareTwo === 'blueOwned' && squareThree === 'blueOwned') {
			blueVictory = true;
		}
		// second row
		if (squareFour === 'blueOwned' && squareFive === 'blueOwned' && squareSix === 'blueOwned') {
			blueVictory = true;
		}
		// third row
		if (squareSeven === 'blueOwned' && squareEight === 'blueOwned' && squareNine === 'blueOwned') {
			blueVictory = true;
		}
		// vertical win
		// first column
		if (squareOne === 'blueOwned' && squareFour === 'blueOwned' && squareSeven === 'blueOwned') {
			blueVictory = true;
		}
		// second Column
		if (squareTwo === 'blueOwned' && squareFive === 'blueOwned' && squareEight === 'blueOwned') {
			blueVictory = true;
		}
		// third column
		if (squareThree === 'blueOwned' && squareSix === 'blueOwned' && squareNine === 'blueOwned') {
			blueVictory = true;
		}
		// diagonal win
		// top-left to bottom-right (and vice versa)
		if (squareOne === 'blueOwned' && squareFive === 'blueOwned' && squareNine === 'blueOwned') {
			blueVictory = true;
		}
		// bottom-left to top-right (and vice versa)
		if (squareThree === 'blueOwned' && squareFive === 'blueOwned' && squareSeven === 'blueOwned') {
			blueVictory = true;
		}
		
		//RED WIN CONDITIONS
		// horizontal win
		// first row
		if (squareOne === 'redOwned' && squareTwo === 'redOwned' && squareThree === 'redOwned') {
			redVictory = true;
		}
		// second row
		if (squareFour === 'redOwned' && squareFive === 'redOwned' && squareSix === 'redOwned') {
			redVictory = true;
		}
		// third row
		if (squareSeven === 'redOwned' && squareEight === 'redOwned' && squareNine === 'redOwned') {
			redVictory = true;
		}
		// vertical win
		// first column
		if (squareOne === 'redOwned' && squareFour === 'redOwned' && squareSeven === 'redOwned') {
			redVictory = true;
		}
		// second Column
		if (squareTwo === 'redOwned' && squareFive === 'redOwned' && squareEight === 'redOwned') {
			redVictory = true;
		}
		// third column
		if (squareThree === 'redOwned' && squareSix === 'redOwned' && squareNine === 'redOwned') {
			redVictory = true;
		}
		// diagonal win
		// top-left to bottom-right (and vice versa)
		if (squareOne === 'redOwned' && squareFive === 'redOwned' && squareNine === 'redOwned') {
			redVictory = true;
		}
		// bottom-left to top-right (and vice versa)
		if (squareThree === 'redOwned' && squareFive === 'redOwned' && squareSeven === 'redOwned') {
			redVictory = true;
		}
		
		function gloriousVictory() {
			if (blueVictory === true) {
				console.log('Blue Wins!');
				eitherWin();
				document.getElementById('turnIndicator').className = 'blueTurn';
				document.getElementById('blueVictory').setAttribute('style', 'display: block');
			} else if (redVictory === true) {
				console.log('Red Wins!');
				eitherWin();
				document.getElementById('turnIndicator').className = 'redTurn';
				document.getElementById('redVictory').setAttribute('style', 'display: block');
			}
			
			function eitherWin() { // This is the stuff that happens regardless of which player wins
				let empties = document.getElementsByClassName('empty');
				for(var i=0; i < empties.length; i++) {
					empties[i].classList.toggle('locked');
				}
			}
			
		}
		gloriousVictory();
	}
}

