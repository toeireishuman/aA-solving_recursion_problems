/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

// (array Number) -> Boolean
// Given an array of numbers, return true if the
// numbers are in ascending order.
isSorted = function (array) {
	if (array.length === 1) {
		return true;
	} else {
		const number1 = array[0];
		const number2 = array[1];

		if (number1 > number2) {
			return false;
		} else {
			return isSorted(array.slice(1));
		}
	}
};

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
	module.exports = isSorted;
} catch (e) {
	module.exports = null;
}
