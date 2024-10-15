/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:

fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(10); // 55
***********************************************************************/

function fibonacci(number, accum = [0, 1]) {
	const result = accum[accum.length - 2] + accum[accum.length - 1];

	if (number === 0) {
		return 0;
	} else if (number === 1) {
		return accum[accum.length - 1];
	} else {
		accum.push(result);
		return fibonacci(number - 1, accum);
	}
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
	module.exports = fibonacci;
} catch (e) {
	module.exports = null;
}
