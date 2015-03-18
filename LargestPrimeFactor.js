// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

// Generate a list of integers from 2 to (600851475143/2)

// Remove numbers from the list that are multiples of the first number in the list

// Repeat that process for all numbers in the list, and for any number that has no multiples, save that number in a separate set of numbers called primeNumbers





// What's the largest prime factor of 100?

// get a list of divisors
var divisors = [];
var primeNumbers = [2,3,5,7,11,13];


for (var i = 13; i < Math.sqrt(600851475143); i++) {
    prime(i);
}
console.log(primeNumbers);

// figure out which divisors are prime
// for (var i = 0; i < divisors.length; i++) {
//     prime(divisors[i]);
// }
// console.log(newArray);
// Math.max.apply(Math,primeNumbers);

function prime (num) {
    for (var i = 0; i < primeNumbers.length; i++) {
    	console.log(num % primeNumbers[i])
    	console.log(primeNumbers[i])
    	console.log(num)
        if (num % primeNumbers[i] === 0) {
            return;
        }
    }
    console.log("Found one:", num);
    console.log(primeNumbers)
    primeNumbers.push(num);
}
