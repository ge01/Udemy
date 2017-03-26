function isEven(num) {
	// return true if even
	if (num % 2 === 0) {
		return true;
	}
	// return false otherwise
	else {
		return false;
	}
}

function factorial(num) {
	// define a result variable
	j = 1;
	// calculate factorial and store value in result
	for (i = 1; i <= num; i++) {
		j *= i;
	}
	// return the result variable
	return j;
}

function kebabToSnake(str) {
    //replace all dashes with
    var myString = str.replace(/-/g, "_");
    //return str
    return myString;
}

 console.log(isEven(42));
 console.log(factorial(3));
 console.log(kebabToSnake("dogs-are-awesome"));