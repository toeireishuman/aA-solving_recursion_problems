/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/

// (array X) X -> Boolean
// Given an array of elements and a specific element, return true
// if the specific element is contained in the given array.
function iceCreamShop(array, element) {
	if (array.length === 0) {
		return false;
	} else {
		if (array[0] === element) {
			return true;
		} else {
			return iceCreamShop(array.slice(1), element);
		}
	}
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
	module.exports = iceCreamShop;
} catch (e) {
	module.exports = null;
}
