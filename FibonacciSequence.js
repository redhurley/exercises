// By considering the terms in 
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// the Fibonacci sequence
//  whose values do not exceed four million,
//   find the sum 
//   of the even-valued terms.


// calculate the numers in the fibonacci sequence that are less than 4mil
fibonacci = [1, 1];
var sumOfLastTwo = 0;
for (var i = 2; i < 100; i++) {
   sumOfLastTwo = fibonacci[i - 1] + fibonacci[i - 2];
    if (sumOfLastTwo <= 4000000) {
        fibonacci.push(sumOfLastTwo);
    } 
}

// filter for only the even numbered ones
function evenOnly () {
   evenOnlyArray = [];
   for (var i = 0; i < fibonacci.length; i++) {
       if (fibonacci[i] % 2 === 0) {
           evenOnlyArray.push(fibonacci[i]);
       } 
   }
   return evenOnlyArray;
}
var evenOnly = evenOnly(fibonacci);

// calculate the sum of all those even numbers
var sumOf = 0;
function sumOfEvenFibonacci (array) {
	for (i = 0; i < array.length; i++) {
		sumOf += array[i];
	}
	return sumOf;
}
sumOfEvenFibonacci(evenOnly);