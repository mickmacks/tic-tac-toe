var turn = 0;
var winner = -1;

// wait for the DOM to finish loading
$(document).ready(function() {

	console.log('JS is working! Please continue...');
	
  // all code to manipulate the DOM goes inside this function

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


	// Check to see where the user clicked and then run a function to update that tile and relevant values.

	document.getElementById('tile1').onclick = changeTile;
	document.getElementById('tile2').onclick = changeTile;
	document.getElementById('tile3').onclick = changeTile;
	document.getElementById('tile4').onclick = changeTile;
	document.getElementById('tile5').onclick = changeTile;
	document.getElementById('tile6').onclick = changeTile;
	document.getElementById('tile7').onclick = changeTile;
	document.getElementById('tile8').onclick = changeTile;
	document.getElementById('tile9').onclick = changeTile;

	// Create the function to run when called.

	function changeTile() {

		// Check if the corresponding value of the clicked tile is 0

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

  		// Check for winner
  		checkForWinner();

  		console.log('checked for winner');


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

   		// Check for winner
  		checkForWinner();

  	} else {

  		alert('This spot is taken :(');
  	}
  	
  }

 // document.getElementById('tile2').onclick = changeTile2;

 //  function changeTile2() {

 //  	if (turn % 2 === 0 && tile2 === 0) {

 //  		// Change the class of tile 1 to display an X
 //  		document.getElementById('tile2').innerHTML = '<i class="medium material-icons valign center-block">grade</i>'

 //  		// set the new class

 //  		document.getElementById('tile2').className = 'player1 col m4 valign-wrapper box';

 //  		// change player turn
 //  		document.getElementById('turnCounter').innerHTML = "visibility";

 //  		// Update the value of this tile to 1.
 //  		tile2 += 1;

 //  		// Add 1 to the turn counter.
 //  		turn++;


 //  	} else if (turn % 2 !== 0 && tile2 === 0) {

 //  		// Change the class of tile 1 to display an O
 //  		document.getElementById('tile2').innerHTML = '<i class="medium material-icons valign center-block">visibility</i>'

 //  		// set the new class

 //  		document.getElementById('tile2').className = 'player2 col m4 valign-wrapper box';

 //  		// change player turn
 //  		document.getElementById('turnCounter').innerHTML = "grade";

 //  		// Update the value of this tile to 1.
 //  		tile2 += 2;

 //  		// Add 1 to the turn counter.
 //  		turn++;

 //  	} else {

 //  		alert('This spot is taken :(');
 //  	}
  	
 //  }


  // 5. Check to see whether three Xs or Os line up using if statements with && or ||
  // 6. Add a condition to check for a draw if 9 turns have been played.
  // 7. When the if conditions are met, alert which user has won or if there's a draw.

  	function checkForWinner() {

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

	      		var winner = 0;
	      	
				var modal = document.getElementById('player1Wins');
				modal.style.display = "block";

				// Get the <span> element that closes the modal
				var span = document.getElementById('player1Close');

				// When the user clicks on <span> (x), close the modal
				span.onclick = function() {
				    modal.style.display = "none";
				    window.location.reload(true);
				}
				// When the user clicks anywhere outside of the modal, close it
				window.onclick = function(event) {
				    if (event.target == modal) {
				        modal.style.display = "none";
				        window.location.reload(true);
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

	  		var winner = 1;

	      	// Get the modal
	      	
				var modal = document.getElementById('player2Wins');
				modal.style.display = "block";

				// Get the <span> element that closes the modal
				var span = document.getElementById('player2Close');

				// When the user clicks on <span> (x), close the modal
				span.onclick = function() {
				    modal.style.display = "none";
				    window.location.reload(true);
				}
				// When the user clicks anywhere outside of the modal, close it
				window.onclick = function(event) {
				    if (event.target == modal) {
				        modal.style.display = "none";
				        window.location.reload(true);
		  				}
				}
	  	
	  	} else if (turn === 9 && winner != 0 && winner != 1) {

	  		// Draw Modal

	      	// Get the modal
	      	
				var modal = document.getElementById('draw');
				modal.style.display = "block";

				// Get the <span> element that closes the modal
				var span = document.getElementById('drawClose');

				// When the user clicks on <span> (x), close the modal
				span.onclick = function() {
				    modal.style.display = "none";
				    window.location.reload(true);
				}
				// When the user clicks anywhere outside of the modal, close it
				window.onclick = function(event) {
				    if (event.target == modal) {
				        modal.style.display = "none";
				        window.location.reload(true);
		  				}
				}
	  	}
  	}

    // 8. Use the reset button to refresh the board.

  	document.getElementById('reset').addEventListener('click', resetBoard);

  	function resetBoard() {

  	window.location.reload(true);

  	}

});