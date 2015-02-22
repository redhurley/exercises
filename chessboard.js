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

// Outputs 8x8 grid, but not easily scalable for any size
var a = " # # # #"
var b = "# # # # "
for (i=0; i<4; i++) {
  console.log(a)
  console.log(b)
}


// Answer that works and my current understanding of it

// Create a string named board
var board = ""

// loop through 8 times returning ??? (not sure how this translates to rows)
for (var b=0; b<8; b++) {
  // loop through 8 times returning either a " " or "#" (I get this part)
  for (var a=0; a<8; a++) {
  	// if ??? is divisible by 2 (but a+b confuses me)
    if ((a+b) % 2 == 0) {
      // then add " "
      board += " ";
      // else add "#"
    } else {
      board += "#";
    }
  }
  // start a new line
  board += "\n"
};

// print out board
console.log(board)