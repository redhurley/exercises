// Write a program that creates a string that represents an 8×8 grid, 
// using newline characters to separate lines. At each position of 
// the grid there is either a space or a “#” character. The characters 
// should form a chess board.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a variable 
// size = 8 and change the program so that it works for any size, outputting 
// a grid of the given width and height.

// declare a new variable line
var line = ""
// loop through 8 times creating a new row each time
for (var x = 0; x < 8; x++) {
  // for each row, loop through 8 times creating a new column each time
  for (var y = 0; y < 8; y++) {
  	// declare a variable total that adds the row and column #s together
    var total = x + y
    // if total is divisible by 2
    if (total % 2 == 0) {
      // then return a space
      line += " "
    } else {
      // otherwise return a hashtag
      line += "#"
    }
  }
  line += "\n"
}
console.log(line)