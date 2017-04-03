var turn = 0;

// wait for the DOM to finish loading
$(document).ready(function() {

	console.log('JS is working! Please continue...');
	
  // all code to manipulate the DOM goes inside this function

  // Create a variable to track the current turn.
  // Use that variable to inform the user which player's turn it is.

	// Create a js version of each tile.
	// Give each tile a value to track if filled (X), filled (O), or empty.

	// 0 = empty, 1 = X, 2 = O.

	var tile1 = document.getElementById('tile1');
		tile1 = 0;
	var tile2 = document.getElementById('tile2');
		tile2 = 0;
	var tile3 = document.getElementById('tile3');
		tile3 = 0;
	var tile4 = document.getElementById('tile4');
		tile4 = 0;
	var tile5 = document.getElementById('tile5');
		tile5 = 0;
	var tile6 = document.getElementById('tile6');
		tile6 = 0;
	var tile7 = document.getElementById('tile7');
		tile7 = 0;
	var tile8 = document.getElementById('tile8');
		tile8 = 0;
	var tile9 = document.getElementById('tile9');
		tile9 = 0;

	console.log('tile vars added. no errors yet!');


  // Check to see where the user clicked and then 
  // change the css and innerHTML of the corresponding div.

 document.getElementById('tile1').onclick = changeTile1;

  function changeTile1() {

  	if (turn % 2 === 0 && tile1 === 0) {

  		// Change the class of tile 1 to display an X
  		document.getElementById('tile1').innerHTML = '<i class="medium material-icons valign center-block">grade</i>'

  		// set the new class

  		document.getElementById('tile1').className = 'player1 col m4 valign-wrapper box';

  		// change player turn
  		document.getElementById('turnCounter').innerHTML = "visibility";

  		// Update the value of this tile to 1.
  		tile1 += 1;

  		// Add 1 to the turn counter.
  		turn++;


  	} else if (turn % 2 !== 0 && tile1 === 0) {

  		// Change the class of tile 1 to display an O
  		document.getElementById('tile1').innerHTML = '<i class="medium material-icons valign center-block">visibility</i>'

  		// set the new class

  		document.getElementById('tile1').className = 'player2 col m4 valign-wrapper box';

  		// change player turn
  		document.getElementById('turnCounter').innerHTML = "grade";

  		// Update the value of this tile to 1.
  		tile1 += 2;

  		// Add 1 to the turn counter.
  		turn++;

  	} else {

  		alert('This spot is taken :(');
  	}
  	
  }

 document.getElementById('tile2').onclick = changeTile2;

  function changeTile2() {

  	if (turn % 2 === 0 && tile2 === 0) {

  		// Change the class of tile 1 to display an X
  		document.getElementById('tile2').innerHTML = '<i class="medium material-icons valign center-block">grade</i>'

  		// set the new class

  		document.getElementById('tile2').className = 'player1 col m4 valign-wrapper box';

  		// change player turn
  		document.getElementById('turnCounter').innerHTML = "visibility";

  		// Update the value of this tile to 1.
  		tile2 += 1;

  		// Add 1 to the turn counter.
  		turn++;


  	} else if (turn % 2 !== 0 && tile2 === 0) {

  		// Change the class of tile 1 to display an O
  		document.getElementById('tile2').innerHTML = '<i class="medium material-icons valign center-block">visibility</i>'

  		// set the new class

  		document.getElementById('tile2').className = 'player2 col m4 valign-wrapper box';

  		// change player turn
  		document.getElementById('turnCounter').innerHTML = "grade";

  		// Update the value of this tile to 1.
  		tile2 += 2;

  		// Add 1 to the turn counter.
  		turn++;

  	} else {

  		alert('This spot is taken :(');
  	}
  	
  }

  // 	var gameBoard = document.getElementById('board');
  // 	gameBoard.addEventListener('click', changeTile);

  // 	function changeTile1() {

  // 		if (turn % 2 === 0 && // tile === 0) {

		// 	// change the class of clicked tile to player1
		// 	tile1

		// 	// change the icon to X after click
		// 	querySelector('player1').innerHTML = grade;

		// 	// add 1 to the turn counter
		// 	turn += 1;

		// 	// change the value of clicked tile to 1



		// } else if (turn % 2 !== 0 && // tile === 0) {
		
		// 	// change the class of clicked tile to player2

		// 	// change the icon to O after click
		// 	querySelector('player1').innerHTML = visibility;

		// 	// add 1 to the turn counter
		// 	turn += 2;
			
		// 	// change the value of clicked tile to 2

		// } else {

		// }


  // 	}


  // 5. Check to see whether three Xs or Os line up using if statements with && or ||
  // 6. Add a condition to check for a draw if 9 turns have been played.
  // 7. When the if conditions are met, alert which user has won or if there's a draw.

  	if (tile1 === 1 && tile2 === 1 && tile3 === 1 || 
  		tile4 === 1 && tile5 === 1 && tile6 === 1 || 
  		tile7 === 1 && tile8 === 1 && tile9 === 1 || 
  		tile1 === 1 && tile4 === 1 && tile7 === 1 || 
  		tile2 === 1 && tile5 === 1 && tile8 === 1 || 
  		tile3 === 1 && tile6 === 1 && tile9 === 1 || 
  		tile1 === 1 && tile5 === 1 && tile9 === 1 || 
  		tile3 === 1 && tile5 === 1 && tile7 === 1 ) {

  		// Player X Wins Modal (pulled from memory game)

      	// Get the modal
      	
			var modal = document.getElementById('myModalSuccess');
			modal.style.display = "block";

			// Get the <span> element that closes the modal
			var span = document.getElementById('closeSuccess');

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			    resetCards();
			}
			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			        resetCards();
	  				}
			}

  	} else 

  	if (tile1 === 2 && tile2 === 2 && tile3 === 2 || 
  		tile4 === 2 && tile5 === 2 && tile6 === 2 || 
  		tile7 === 2 && tile8 === 2 && tile9 === 2 || 
  		tile1 === 2 && tile4 === 2 && tile7 === 2 || 
  		tile2 === 2 && tile5 === 2 && tile8 === 2 || 
  		tile3 === 2 && tile6 === 2 && tile9 === 2 || 
  		tile1 === 2 && tile5 === 2 && tile9 === 2 || 
  		tile3 === 2 && tile5 === 2 && tile7 === 2 ) {

  		// Player O Wins Modal

      	// Get the modal
      	
			var modal = document.getElementById('myModalSuccess');
			modal.style.display = "block";

			// Get the <span> element that closes the modal
			var span = document.getElementById('closeSuccess');

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			    resetCards();
			}
			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			        resetCards();
	  				}
			}
  	
  	} else if (turn === 9) {

  		// Draw Modal

      	// Get the modal
      	
			var modal = document.getElementById('myModalSuccess');
			modal.style.display = "block";

			// Get the <span> element that closes the modal
			var span = document.getElementById('closeSuccess');

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			    resetCards();
			}
			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			        resetCards();
	  				}
			}
  	}

  // 8. Use the reset button to refresh the board.

  document.getElementById('reset').addEventListener('click', resetBoard);

  function resetBoard() {

  	window.location.reload(true);

  }

});




















		// // Player X Wins Modal from memory card game (For later)

  //     	// Get the modal

		// 	var modal = document.getElementById('myModalSuccess');
		// 	modal.style.display = "block";

		// 	// Get the <span> element that closes the modal
		// 	var span = document.getElementById('closeSuccess');

		// 	// When the user clicks on <span> (x), close the modal
		// 	span.onclick = function() {
		// 	    modal.style.display = "none";
		// 	    resetCards();
		// 	}
		// 	// When the user clicks anywhere outside of the modal, close it
		// 	window.onclick = function(event) {
		// 	    if (event.target == modal) {
		// 	        modal.style.display = "none";
		// 	        resetCards();
	 //  				}
		// 	}