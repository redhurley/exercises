// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// Get all the multiples of 3 or 5, less than 1000
var multiples = [];
var i=0;
while (i < 1000) {
	if (i % 3 === 0 || i % 5 === 0) {
		multiples.push(i);
	}
	i++;
}
console.log(multiples);

// Get the sum of all the numbers

var sum = 0;
for (i = 0; i < multiples.length; i++) {
    sum += multiples[i];
}
console.log(sum);