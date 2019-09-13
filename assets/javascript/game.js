

// Text to HTML/CSS ****

  let num1 = $('#num1');
  num1.text('20')
  $('#num1').css('text-align','center');

  let num2 = $('#num2');
  num2.text('40')
  $('#num2').css('text-align','center');

// Detect if window has loaded ****
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
		$('.crystal').each(function() {
			let z = arr[Math.floor(Math.random() * arr.length)];
			$(this).attr("value", z);
		})
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

		$(".crystal").on("click", function() {
			let crystalValue = parseInt($(this).attr("value"));
			sumTotal += crystalValue;
			$("#num2").html(sumTotal);
		});
		

		// $("#card-1").on("click", function() {

		// 	sumTotal += t1;
		// 	$("#num2").html(sumTotal);
		// });

		// $("#card-2").on("click", function() {

		// 	sumTotal += t2;
		// 	$("#num2").html(sumTotal);
		// });

		// $("#card-3").on("click", function() {

		// 	sumTotal += t3;
		// 	$("#num2").html(sumTotal);
		// });

		// $("#card-4").on("click", function() {

		// 	sumTotal += t4;
		// 	$("#num2").html(sumTotal);
		// });

	$("button").on("click", function() {
		if (sumTotal == randNumber) {

			wins++;
			console.log(sumTotal);
			$("#num2").html(sumTotal);
			$("#win").html("<h4>Wins: </h4>" + wins);


			setTimeout(function() {gameReset("WINNER!!")}, 200);
		}

		else if (sumTotal > randNumber){

			losses++;
			$("#num2").html(sumTotal);
			$("#loss").html("<h4>Losses: </h4>" + losses);

			setTimeout(function() {gameReset("YOU DIDN'T WIN!")}, 200);
		}
	});

}); // end script