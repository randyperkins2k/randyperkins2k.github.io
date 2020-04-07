// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/

function fizzBuzz() {
  //use for loop to print numbers 1-100.
  for (let n = 1; n <= 100; n++) {
  //create empty string variable, to be concatenated later.
    let output = "";
  //use modulo operator and if statements to recognize multiples of three 
  //and five.
  //if number is multiple of three and/or five, concatenate with output string
  //either 'Fizz', 'Buzz', or a combination of the two.
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
  //use 'or' logical operator (||) to print the determined values: output, or
  //simply the next number.
  //if, for a given iteration, output = '', this is considered a falsy value, 
  //thus, n is chosen as the value to be printed to the console!
      console.log(output || n);
  }
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz;
}