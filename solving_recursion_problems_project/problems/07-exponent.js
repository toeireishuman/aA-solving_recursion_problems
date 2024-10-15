/***********************************************************************
Write a recursive function called `exponent` that takes two integers,
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.

Exponents are used to represent a number being multiplied by itself a
given number of times:

4^3 = 4 x 4 x 4 = 64

Negative exponents represent the same action, but in the denominator instead
of the numerator:

4^-3 = (1/4) * (1/4) * (1/4) = 1/64.

Examples:

exponent(3, 2); // 9
exponent(2, -2); // 1/4 (or 0.25)
exponent(5, 5); // 3125
***********************************************************************/

// // Number Number -> Number
// // Given a base and an exponent, return the
// // base raised to the exponent.
// function exponent(b, n) {
// 	if (n === 0) {
// 		return 1;
// 	} else if (n < 0) {
// 		return (1 / b) * exponent(b, n + 1);
// 	} else {
// 		return b * exponent(b, n - 1);
// 	}
// }

// Number Number -> Number
// Given a base and an exponent, return the
// base raised to the exponent.
function exponent(b, n, result = 1) {
	if (n === 0) {
		return result;
	} else if (n < 0) {
		return exponent(b, n + 1, result * (1 / b));
	} else {
		return exponent(b, n - 1, result * b);
	}
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
	module.exports = exponent;
} catch (e) {
	module.exports = null;
}
