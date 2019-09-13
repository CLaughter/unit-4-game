

  // Text to HTML/CSS
let title = $('#title');
title.html('<h6>Crystal Collection</h6>')
$('#title').css('text-align','center');

let instructions = $('#instructions');
instructions.html(
  '<p>You will be given a random number at the start of the game.</p> <p>There are 4 crystals below. By clicking on a crystal, you will add a specific amount of points to your total score. <br> You will win the game by matching your total score to the random number. <br> The value of each crystal is hidden from you until you click on it. <br> Each time the game starts, a new value of each crystal will be assigned.</p>'
  )
  $('#instructions').css('text-align','center');

  // let randNum = $('#randNum');
  // randNum.text('Random Number:')
  // $('#randNum').css('text-align','center');

  let num1 = $('#num1');
  num1.text('20')
  $('#num1').css('text-align','center');

  // let sumTotal = $('#sumTotal');
  // sumTotal.text('Running total:') 
  // $('#sumTotal').css('text-align','center'); 

  let num2 = $('#num2');
  num2.text('40')
  $('#num2').css('text-align','center');

  let win = $('#win');
  win.text('Wins: ')
  $('#win').css('text-align','center');

  let loss = $('#loss');
  loss.text('Losses: ')
  $('#loss').css('text-align','left');

  let footer = $('#footer');
  footer.text('Copyright ©')
  // **************************************************



// Detect if window has loaded
window.onload = function() {
  alert('Window is loaded');
}

// CSS and Images may not have yet loaded, but the DOM has loaded.
$(document).ready(function() {
  alert('DOM has loaded');
 
// Arrays****

  // random computer variable array
  let numHold = [];

  for (let i = 19; i <= 120; i++) {
    numHold.push(i);
  }

  // crystal numbers array
  let tiles = [];

  for (var i = 1; i < 13; i++) {

    tiles.push(i);
  }
  console.log(tiles); // test

// Global Variables****

  // random computer selection
  let randNumber; // number to match  
	let tileNumber = []; // random tile values

	let t1;
	let t2;
	let t3;
	let t4;

  // user's choice total
  let sumTotal = 0; 

	let wins = 0;
	let losses = 0;

	// Functions****

	// pick a random number
	function randNum(num) {

		let z = num[Math.floor(Math.random() * num.length)];
		randNumber = z;
		$("#num1").html(randNumber);

		console.log(randNumber);

  } // End function
  
  	// pick random tile numbers
	function randTile(num) {

		for (let i = 0; i < 4; i++){

			let a = num[Math.floor(Math.random() * num.length)];

			tileNumber.push(a);
		}
    // check which numbers have been picked
		console.log(tileNumber);

  } // End function
  
 
  function tileValue(arr) {
    // Tile value change by array
    for(i = 0; i < arr.length; i++) {

		$("#button-" + (i+1)).attr("value", arr[i]);
		console.log(this);
		}
		t1 = arr[0];
		t2 = arr[1];
		t3 = arr[2];
		t4 = arr[3];
	} // End function

   // Game Reset****
	function gameReset(r) {

		tileNumber = []; // clears values

		randNum(numHold);

		randTile(tiles);

		tileValue(tileNumber);

		sumTotal = 0;
		$("#num2").html(sumTotal);

		alert(r);
	} // END of gameReset function

	// Starting Game Settings****

	randNum(numHold); // random number to match
	randTile(tiles); // array of random crystal values
	tileValue(tileNumber);

		// crystal button functions

		$("#card-1").on("click", function() {

			sumTotal += t1;
			$("#num2").html(sumTotal);
		});

		$("#card-2").on("click", function() {

			sumTotal += t2;
			$("#num2").html(sumTotal);
		});

		$("#card-3").on("click", function() {

			sumTotal += t3;
			$("#num2").html(sumTotal);
		});

		$("#card-4").on("click", function() {

			sumTotal += t4;
			$("#num2").html(sumTotal);
		});

	$("button").on("click", function() {
		if (sumTotal == randNumber) {

			wins++;
			console.log(sumTotal);
			$("#num2").html(sumTotal);
			$("#win").html("Wins: " + wins);


			setTimeout(function() {gameReset("WINNER!!")}, 200);
		}

		else if (sumTotal > randNumber){

			losses++;
			$("#num2").html(sumTotal);
			$("#loss").html("Losses: " + losses);

			setTimeout(function() {gameReset("YOU DIDN'T WIN!")}, 200);
		}
	});

}); // end script