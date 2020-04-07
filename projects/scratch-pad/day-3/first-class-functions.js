// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    //create a return statement that contains another function, which itself
    //will take a parameter named 'value'.
    return function greaterThan(value) {
    //using an if statement, compare the 'base' and 'value' parameters.
        if (base > value) {
            return false;
        } else return true;
    };
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    //create a return statement that contains another function, which itself
    //will take a parameter named 'value'.
    return function lessThan(value) {
    //using an if statement, compare the 'base' and 'value' parameters.
        if (base < value) {
            return false;
        } else return true;
    };
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    //add a function, startsWithFilter(), to the return statement.
    //this new function will compare the 'startsWith' character to a new
    //parameter named 'value'
    return function startsWithFilter(value) {
    //convert both characters to lower case for comparison.
    //use the zero index of 'value' for comparison.
        if (startsWith.toLowerCase() === value[0].toLowerCase()) {
            return true;
        } else return false;
    };
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    //add a function, startsWithFilter(), to the return statement.
    //this new function will compare the 'startsWith' character to a new
    //parameter named 'value'
    return function endsWithFilter(value) {
    //convert both characters to lower case for comparison.
    //use the [value.length - 1] index of 'value' for comparison.
        if (endsWith.toLowerCase() === value[value.length - 1].toLowerCase()) {
            return true;
        } else return false;
    };
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    //create an empty array to store the modified elements.
    var modified = [];
    //write a for loop which subjects each element to the modify function.
    for(let i = 0; i < strings.length; i++) {
    //push the modified elements into the new array.
        modified.push(modify(strings[i]));
    }
    //return the new array.
    return modified;
}

//console.log(modifyStrings(["Hello", "my", "friend"], function(str) {return str.toLowerCase()}));
       
/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    //create a for loop which iterates through the 'strings' value.
    //within the loop, subject each element to the 'test' function.
    //if even one element fails the 'test', return 'false'.
    for(let i = 0; i < strings.length; i++) {
       if (!test(strings[i])) {
           return false;
    } 
    }   
    //otherwise, all elements will have passed, thus we can return 'true'!
    return true;
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}