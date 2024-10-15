/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// (array X or (array X)) -> (array X)
// Given an array with nested arrays, return an array
// with all the nested content on one level.
const flatten = array => {
	const newArray = [];

	for (let i = 0; i < array.length; i++) {
		const element = array[i];

		if (Array.isArray(element)) {
			newArray.push(...flatten(element));
		} else {
			newArray.push(element);
		}
	}

	return newArray;
};

console.log(flatten([1, [2, [3, [4, [5, [6, 7], 8]]]]]));

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
	module.exports = flatten;
} catch (e) {
	module.exports = null;
}
