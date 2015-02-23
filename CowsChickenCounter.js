// We want to write a program that prints two numbers, the numbers of cows and chickens on a farm, with the words Cows and Chickens after them, and zeros padded before both numbers so that they are always three digits long.

// 007 Cows
// 011 Chickens

function printFarmInventory(cows, chickens) {
	var cowString = String(cows);
	var chickenString = String(chickens);

	while (cowString.length < 3)
		cowString = "0" + cowString;
	console.log(cowString + " Cows")
	
	while (chickenString.length < 3)
		chickenString = "0" + chickenString;
	console.log(chickenString + " Chickens")
};

printFarmInventory(7, 11)