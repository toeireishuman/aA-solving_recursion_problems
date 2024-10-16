/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

function subsets(set) {
	if (set.length === 0) {
		return [[]];
	} else if (set.length === 1) {
		return [[], set];
	} else if (set.length === 2) {
		return [[], [set[0]], [set[1]], set];
	} else {
		const firstTwo = subsets(set.slice(0, 2));
		const third = subsets(set.slice(2)).slice(1);
		const powerset = [...firstTwo];

		third.forEach(newSet => {
			firstTwo.forEach(element => {
				if (newSet.length !== 0) {
					powerset.push([...element, ...newSet]);
				}
			});
		});

		return powerset;
	}
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
	module.exports = subsets;
} catch (e) {
	module.exports = null;
}
