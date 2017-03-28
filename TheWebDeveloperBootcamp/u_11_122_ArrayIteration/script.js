// with a for loop
var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
};

console.log(" ");

// using forEach
colors.forEach(function(anything) {
	console.log(anything);
});

console.log(" ");

// using while loop
var j = 0;
while( j < colors.length) {
	console.log(colors[j]);
	j++;
}

console.log(" ");

// using forEach
var numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.forEach(function(HDTV) {
	if(HDTV%3 === 0){
		console.log(HDTV);
	}
});

console.log(" ");

// with a for loop
for(var a = 0; a < numbers.length; a++) {
	if(numbers[a]%3 === 0) {
		console.log(numbers[a]);
	}
};

console.log(" ");

// using while loop
var b = 0;
while(b < numbers.length) {
	if(numbers[b]% 3 === 0) {
		console.log(numbers[b]);
	}	
	b++;
};
