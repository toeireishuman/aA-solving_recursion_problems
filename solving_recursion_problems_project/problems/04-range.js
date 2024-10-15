/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/

// // Number Number -> (array Number)
// // Given a start number and an end number, return in an array
// // all numbers in that range, in increasing order.
// function range(start, end) {
// 	if (start >= end) {
// 		return [];
// 	} else {
// 		return [start, ...range(start + 1, end)];
// 	}
// }

// Number Number -> (array Number)
// Given a start number and an end number, return in an array
// all numbers in that range, in increasing order.
function range(start, end, result = []) {
	if (start >= end) {
		return result;
	} else {
		result.push(start);
		return range(start + 1, end, result);
	}
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
	module.exports = range;
} catch (e) {
	module.exports = null;
}
