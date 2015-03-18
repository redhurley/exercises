// Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

function reverseArray(array) {
  var reversed = []
  for(i=array.length-1; i>=0; i--) {
    reversed.push(array[i])
  }
  return reversed;
};
  
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

function reverseArrayInPlace(arrayValue) {
  // create a variable called length 
  // whose value is the the length of the array minus 1
  var length = arrayValue.length
  // loop through half the array to move the first half objects to the back
  for(i=0; i < Math.floor(length/2); i++) {
    // create variable that'll temporarily store the current object
    var temp = arrayValue[i]
    // move the stored object to the last object in the array
    arrayValue[i] = arrayValue[length-i];
    // Assign the temp value to the last object in the array
    arrayValue[length-i] = temp;
  }
  return arrayValue
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

var arrayValue = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]