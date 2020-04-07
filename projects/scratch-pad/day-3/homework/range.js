// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    //create variable for an empty array to store the resulting numbers.
    var x = [];
    //two loops are needed: one for if the first argument is larger than the
    //second, and a second loop for if the second argument is the larger of 
    //the two arguments.
    //set up conditional 'if' statement for if the first argument is greater.
    if (start > end) {
    //use a for loop which decrements from start value to end value.
        for (var i = start; i >= end; i--) {
        x.push(i);
    }
    //use an else statement with the assumption that (start < end), and create
    //another for loop which increments from start to end value.
    } else {
        for (var i = start; i <= end; i++) {
        x.push(i);
    }
    //return the array of values.
    } return x;
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}