/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

// // (array Number) -> Number
// // Given an array of numbers, return the sum of all numbers.
// function sumArray(array) {
// 	if (array.length === 0) {
// 		return 0;
// 	} else {
// 		return array[0] + sumArray(array.slice(1));
// 	}
// }

// (array Number) -> Number
// Given an array of numbers, return the sum of all numbers.
function sumArray(array, current_sum = 0) {
	if (array.length === 0) {
		return current_sum;
	} else {
		return sumArray(array.slice(1), current_sum + array[0]);
	}
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
	module.exports = sumArray;
} catch (e) {
	module.exports = null;
}
