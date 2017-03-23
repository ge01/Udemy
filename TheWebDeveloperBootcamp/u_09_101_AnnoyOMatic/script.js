var answer = prompt("Are we there yet?");
// Version 1
// while(answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("Are we there yet?");
// }

// alert("YAY, WE MADE IT!!!");

// Version 2
while(answer.indexOf("yes") === -1) {
	var answer = prompt("Are we there yet?");
}

alert("YAY, WE MADE IT!!!");