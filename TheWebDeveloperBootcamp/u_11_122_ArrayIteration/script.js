// with a for loop
var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

console.log(" ");

// using forEach
colors.forEach(function(anything){
	console.log(anything);
});

console.log(" ");

// using while loop
var j = 0;
while( j < colors.length) {
	console.log(colors[j]);
	j++;
}