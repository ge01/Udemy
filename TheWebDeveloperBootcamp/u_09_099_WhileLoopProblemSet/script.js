
// Print all numbers between -10 and 40
var num = -10
console.log("Print all numbers between -10 and 40");
while (num < 41) {
	console.log(num);
	num++;
}


// Print all even number between 10 and 40
var num = 10;
console.log("Print all even number between 10 and 40");
while (num < 41) {
	console.log(num);
	num+=2;
}


// Print all odd numbers between 300 and 333
var num = 301
console.log("Print all odd numbers between 300 and 333");

while (num < 334) {
	console.log(num);
	num+=2;
}


var num = 5;
console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
while (num < 51) {
	if ((num % 5 === 0) && (num % 3 === 0)) {
		console.log(num);
	}
	num++;
}
