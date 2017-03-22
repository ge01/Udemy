// Create secretNumber
var secretNumber = 4;

// Ask user for guess
var guess = prompt("Guess a number");
// alert(guess);

// Check guess
if(Number(guess) === secretNumber) {
	alert("YOU GOT IT RIGHT!");
}

// Check if guess is higer
else if(Number(guess) > secretNumber) {
	alert("Too high. Guess again!");
}

// Otherwise, check if lower
else {
	alert("Too low. Guess again!");
}