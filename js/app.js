// Set a variable to track the current turn
var turn = 0;

// wait for the DOM to finish loading
$(document).ready(function() {

	console.log('JS is working! Please continue...');
	
  // all code to manipulate the DOM goes inside this function

	// Create a js version of each tile.
	// Give each tile a key value by putting them in an array.

	var tiles = [];
	tiles.push(document.getElementById('tile1')); // = 0 = tiles[0]
	tiles.push(document.getElementById('tile2')); // = 1
	tiles.push(document.getElementById('tile3')); 
	tiles.push(document.getElementById('tile4'));
	tiles.push(document.getElementById('tile5'));
	tiles.push(document.getElementById('tile6'));
	tiles.push(document.getElementById('tile7'));
	tiles.push(document.getElementById('tile8'));
	tiles.push(document.getElementById('tile9'));

	// Create a key and value pair to check if each tile is empty (undefined), 
	// belongs to player 1 (=1) or belongs to player 2 (=2)

	var tilesCount = new Array(tiles.length);


	// Add event listeners for each tile and tie its callback function to
	// a change tile function. Pass in the tile's key as the parameter.

	tiles[0].addEventListener('click', function() {
		changeTile(0)
	});

	tiles[1].addEventListener('click', function() {
		changeTile(1)
	});

	tiles[2].addEventListener('click', function() {
		changeTile(2)
	});

	tiles[3].addEventListener('click', function() {
		changeTile(3)
	});

	tiles[4].addEventListener('click', function() {
		changeTile(4)
	});	

	tiles[5].addEventListener('click', function() {
		changeTile(5)
	});

	tiles[6].addEventListener('click', function() {
		changeTile(6)
	});

	tiles[7].addEventListener('click', function() {
		changeTile(7)
	});

	tiles[8].addEventListener('click', function() {
		changeTile(8)
	});

	// Create the function to run when called.

	function changeTile(tileIndex) {

		// Create a variable to store the current index number 
		var currTile = tiles[tileIndex];

		// Create a variable to update after clicks to show who now owns the tile.
		var currTileCount = tilesCount[tileIndex];

		// Add an alert before a tile is updated if the tile already has a value.

		if (currTileCount > 0) {
			alert('This spot is taken :(');
			return;
		}

		// Update CSS styles, HTML and JS values if it's player 1's turn.

		if (turn % 2 === 0) {

	  		// Change the class of the tile to show P1's mark
	  		currTile.innerHTML = '<i class="medium material-icons valign center-block">grade</i>'

	  		// Set the tile to P1 class
	  		currTile.className = 'player1 col m4 valign-wrapper box';

	  		// change player turn
	  		document.getElementById('turnCounter').innerHTML = "visibility";

	  		// Update the value of this tile to 1.
	  		tilesCount[tileIndex] = 1;

	  		// Add 1 to the turn counter.
	  		turn++;

	  		// Check for winner
	  		checkForWinner();


	  	} else if (turn % 2 !== 0) {

	  		// Change the class of the tile to show P2's mark
	  		currTile.innerHTML = '<i class="medium material-icons valign center-block">visibility</i>'

	  		// set the tile to P2 class
	  		currTile.className = 'player2 col m4 valign-wrapper box';

	  		// change player turn
	  		document.getElementById('turnCounter').innerHTML = "grade";

	  		// Update the value of this tile to 2.
	  		tilesCount[tileIndex] = 2;

	  		// Add 1 to the turn counter.
	  		turn++;

	  		// Check for winner
	  		checkForWinner();
	  		
	  	} else if ( tilesCount[0] > 0 && tilesCount[1] > 0 && tilesCount[2] > 0 && 
	  				tilesCount[3] > 0 && tilesCount[4] > 0 && tilesCount[5] > 0 && 
	  				tilesCount[6] > 0 && tilesCount[7] > 0 && tilesCount[8] > 0) {

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

  // Check to see whether three Xs or Os line up using if statements with && or ||
  // Add a condition to check for a draw if 9 turns have been played.
  // When the if conditions are met, alert which user has won or if there's a draw.

  	function checkForWinner() {

	  	if (tilesCount[0] === 1 && tilesCount[1] === 1 && tilesCount[2] === 1 || 
	  		tilesCount[3] === 1 && tilesCount[4] === 1 && tilesCount[5] === 1 || 
	  		tilesCount[6] === 1 && tilesCount[7] === 1 && tilesCount[8] === 1 || 
	  		tilesCount[0] === 1 && tilesCount[3] === 1 && tilesCount[6] === 1 || 
	  		tilesCount[1] === 1 && tilesCount[4] === 1 && tilesCount[7] === 1 || 
	  		tilesCount[2] === 1 && tilesCount[5] === 1 && tilesCount[8] === 1 || 
	  		tilesCount[0] === 1 && tilesCount[4] === 1 && tilesCount[8] === 1 || 
	  		tilesCount[2] === 1 && tilesCount[4] === 1 && tilesCount[6] === 1 ) {

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

	  	if (tilesCount[0] === 2 && tilesCount[1] === 2 && tilesCount[2] === 2 || 
	  		tilesCount[3] === 2 && tilesCount[4] === 2 && tilesCount[5] === 2 || 
	  		tilesCount[6] === 2 && tilesCount[7] === 2 && tilesCount[8] === 2 || 
	  		tilesCount[0] === 2 && tilesCount[3] === 2 && tilesCount[6] === 2 || 
	  		tilesCount[1] === 2 && tilesCount[4] === 2 && tilesCount[7] === 2 || 
	  		tilesCount[2] === 2 && tilesCount[5] === 2 && tilesCount[8] === 2 || 
	  		tilesCount[0] === 2 && tilesCount[4] === 2 && tilesCount[8] === 2 || 
	  		tilesCount[2] === 2 && tilesCount[4] === 2 && tilesCount[6] === 2 ) {

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
	  		}
  	}	


    // 8. Use the reset button to refresh the board.

  	document.getElementById('reset').addEventListener('click', resetBoard);

  	function resetBoard() {

  	window.location.reload(true);

  	}

});