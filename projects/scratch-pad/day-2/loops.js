// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  //use either 'for' loop, or .forEach() array method to print items to console.
  return array.forEach((item) => {console.log(item)});
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  //same as printArrayValues() function, except looping backwards.
  //use .reverse() array method to print values in reverse order.
  return array.reverse().forEach((item) => {console.log(item)});
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  //Object.keys() retrieves all keys for an object, stored in an array.
  return Object.keys(object);
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  //using for/in loop: print out all keys for given object (not in an array).
  for (var key in object) {
    console.log(key);
  }
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  //retrieve only the values, not the keys, in key/value pair of object.
  return Object.values(object);
}

/*
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  //using for/in loop: print out all values for given object (not in an array).
  for (var key in object) {
    console.log(object[key]);
  }
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  //use .length() property to find number of key/value pairs.
  return Object.keys(object).length;
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  //store values in array.
  var result = [];
  //use for/in loop to loop over object and add object values to result array.
  for (var key in object) {
    result.push(object[key]);
  //using separate for loop, loop through result array and print values in 
  //reverse.
  } for (var i = result.length - 1; i > -1; i--) {
    console.log(result[i]);
  }
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
