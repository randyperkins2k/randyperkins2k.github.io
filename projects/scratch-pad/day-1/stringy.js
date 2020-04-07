// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    //use length property on the given string: .length.
    return string.length;
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    //use toLowerCase() method to convert all letters
    //in the string to lower case.
    return string.toLowerCase();
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    //use toUpperCase() method to convert all letters
    //in the string to upper case.
   return string.toUpperCase();
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    //use .replace() method to replace spaces with dash.
    //use regex term for spaces, \s, as element to be replaced.
    //convert all string characters to lower case.
    return string.replace(/\s/g, '-').toLowerCase();
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    //both elements for comparison - the first letter of string, and
    //char letter - need to be same case to be tested. Convert to lower case.
    //we can access first letter of string using index 0.
    //test by using the 'if' conditional. Otherwise, we can return false.
     if (string[0].toLowerCase() == char.toLowerCase()) {
      return true;
    } return false;
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    //same problem as beginsWith function, except using last letter as 
    //comparison.
    //access last character of string via index, using .length-1.
    return string[string.length - 1]
      .toLowerCase() === char[0].toLowerCase() ? true : false;
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    //combine two strings using .concat() method.
    return stringOne.concat(stringTwo);
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    //use .join() method to combine strings.
    //access all strings by using rest parameters and the arguments object.
    return [...arguments].join('');
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    //compare by using length property, and logical operator '>'.
    //use ternary operator for concision.
    return stringOne.length > stringTwo.length ? stringOne : stringTwo;
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    //use logical operators to compare string values.
    //we can just compare the characters directly, without needing to use
    //character code.
    if (stringOne > stringTwo) {
        return -1;
    } else if (stringTwo > stringOne) { 
        return 1;
    } else if (stringTwo == stringOne) {
        return 0;
    }
}

/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    //we use same method as sortAscending.
    if (stringOne < stringTwo) {
        return -1;
    } else if (stringTwo < stringOne) { 
        return 1;
    } else if (stringTwo == stringOne) {
        return 0;
    }
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending;
    module.exports.sortDescending = sortDescending;
}
