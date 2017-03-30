//// printReverse() ////
function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i--)
		console.log(arr[i])
}

//// isUniform() ////
function isUniform(arr) {
	var first = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== first) {
			return false;
		}
	}
	return true;
}

//// sumArray() ////
function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}

//// max() ////
function max(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}		
	}
	return max;
}

printReverse([1,2,3,4]);
console.log(isUniform([1,1,1]));
console.log(sumArray([10,10,10]));
console.log(max([1,,20,2,3,-99]));