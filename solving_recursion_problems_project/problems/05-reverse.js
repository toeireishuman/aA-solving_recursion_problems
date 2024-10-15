/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

// // String -> String
// // Given a string, return it reversed.
// function reverse(word) {
// 	if (word === "") {
// 		return "";
// 	} else {
// 		return (
// 			word[word.length - 1] + reverse(word.substring(0, word.length - 1))
// 		);
// 	}
// }

// String -> String
// Given a string, return it reversed.
function reverse(word, reversed = "") {
	if (word === "") {
		return reversed;
	} else {
		return reverse(
			word.substring(0, word.length - 1),
			reversed + word[word.length - 1]
		);
	}
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
	module.exports = reverse;
} catch (e) {
	module.exports = null;
}
