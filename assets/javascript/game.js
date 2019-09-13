

  // Text to HTML/CSS
let title = $('#title');
title.html('<h6>Crystal Collection</h6>')
$('#title').css('text-align','center');

let instructions = $('#instructions');
instructions.html(
  '<p>You will be given a random number at the start of the game.</p> <p>There are 4 crystals below. By clicking on a crystal, you will add a specific amount of points to your total score. <br> You will win the game by matching your total score to the random number. <br> The value of each crystal is hidden from you until you click on it. <br> Each time the game starts, a new value of each crystal will be assigned.</p>'
  )
  $('#instructions').css('text-align','center');

  let randNum = $('#randNum');
  randNum.text('Random Number:')
  $('#randNum').css('text-align','center');

  let num1 = $('#num1');
  num1.text('20')
  $('#num1').css('text-align','center');

  let sumTotal = $('#sumTotal');
  sumTotal.text('Running total:') 
  $('#sumTotal').css('text-align','center'); 

  let num2 = $('#num2');
  num2.text('40')
  $('#num2').css('text-align','center');

  let images = $('.images'); 

  let img1 = $('#card1');
  img1.text('w')
  let img2 = $('#card2');
  img2.text('x')
  let img3 = $('#card3');
  img3.text('y')
  let img4 = $('#card4');
  img4.text('z')

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
  // alert('Window is loaded');
}

// CSS and Images may not have yet loaded, but the DOM has loaded.
$(document).ready(function() {
  alert('DOM has loaded');
 
// Arrays****

  // random computer variable array
  let numHold = [];

  for (let i = 19; i < 120; i++) {
    numHold.push(x);
  }

  // crystal numbers array
  let tiles = [];

  for (var y = 1; y < 13; y++) {

    tiles.push(y);
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
  
 
  function tileValue(num) {
    // Tile value change by array
    for(i = 0; i < r.length; i++) {

		$("#button-" + (i+1)).attr("value", num[i]);
		console.log(this);
		}
		t1 = num[0];
		t2 = num[1];
		t3 = num[2];
		t4 = num[3];
	} // End function

   // Game Reset
	function gameReset(r) {

		tileNumber = []; // clears  values

		randNum(numHold);

		randTile(tiles);

		tileValue(tileNumber);

		sumTotal = 0;
		$("#num2").html(sumTotal);

		alert(r);
	} // END of gameReset function

	// *** GAME SETTINGS AT START ***

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
		// this is what happens if the user wins
		if (sumTotal == randNumber) {

			wins++;
			console.log(sumTotal);
			$("#num1").html(sumTotal);
			$("#win").html("Wins: " + wins);


			setTimeout(function() {gameReset("WINNER!!")}, 200);
		}

		else if (sumTotal > randNumber){

			losses++;
			$("#loss").html(sumTotal);
			$("#loss").html("Losses: " + losses);

			setTimeout(function() {gameReset("YOU DIDN'T WIN!")}, 200);
		}
	});

}); // end of script