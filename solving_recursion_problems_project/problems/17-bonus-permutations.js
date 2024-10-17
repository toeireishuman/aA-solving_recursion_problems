/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

const permutations = function (array) {
	const allPermutations = [];

	if (array.length <= 1) {
		allPermutations.push(...array);
	} else if (array.length === 2) {
		allPermutations.push(...[array, [array[1], array[0]]]);
	} else {
		for (let i = 0; i < array.length; i++) {
			const oddOneOut = array[i];
			const rest = permutations([
				...array.slice(0, i),
				...array.slice(i + 1),
			]);

			rest.forEach(element => {
				allPermutations.push([oddOneOut, ...element]);
			});
		}
	}
	return allPermutations;
};

// // permutations([1, 2]); // [[1, 2], [2, 1]]
// console.log(permutations([1, 2, 3])); // [[1, 2, 3], [1, 3, 2],
// // [2, 1, 3], [2, 3, 1],
// // [3, 1, 2], [3, 2, 1]]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
	module.exports = permutations;
} catch (e) {
	module.exports = null;
}
