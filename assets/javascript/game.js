

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
  $('#loss').css('text-align','center');

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

  for (var x = 19; x < 120; x++) {
    numHold.push(x);
  }

  // crystal numbers array
  let tiles = [];

  for (var y = 1; y < 13; y++) {

    tiles.push(y);
  }
  // console.log(tiles); // test

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

		var z = num[Math.floor(Math.random() * num.length)];
		randNumber = z;
		$("#randNum").html(randNumber);

		console.log('randNumber');

	} // End function


});