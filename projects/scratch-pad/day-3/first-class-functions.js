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
    return function greaterThan(value) {
        if (base > value) {
            return false;
        } else return true;
    };
}
console.log(createGreaterThanFilter(14)(15));

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    return function lessThan(value) {
        if (base < value) {
            return false;
        } else return true;
    };
}
console.log(createLessThanFilter(15)(14));

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    return function startsWithFilter(value) {
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
    return function endsWithFilter(value) {
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
    var modified = [];
    for(let i = 0; i < strings.length; i++) {
        modified.push(modify(strings[i]));
    }
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
    for(let i = 0; i < strings.length; i++) {
       if (!test(strings[i])) {
           return false;
    } //just use the 'test' function, it doesn't matter what it does.
    }   
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