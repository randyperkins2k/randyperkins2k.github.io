// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    //check if value is an array using Array.isArray() method.
    //typeOf() method on an array would return 'object'.
    //try with ternary operator!
    return Array.isArray(value) ? true : false;
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    //account for any data types which will return 'object': null, Date, and
    //array. Filter these values out, by using conditional if statement which 
    //only returns true if the value is an object.
    //account for Date:
    if (value instanceof Date === false
    //account for null and array:
      && value !== null && Array.isArray(value) === false 
    //finally, account for object:
      && typeof value === 'object') {
        return true;
    } else {
      return false;
    }
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    //account for any data types which are not collections: null, and date. 
    //Filter these values out, by using conditional if statement which 
    //only returns true if the value is a collection.
    //account for Date:
    if (value instanceof Date === false
    //account for null:
       && value !== null
    //return true for object or array:
       && typeof value === 'object') {
        return true;
    } else return false;
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    //account for data types which return 'object' but are not objects.
    //first, null:
    if (value === null) return 'null';
    //next, array:
    else if (Array.isArray(value)) return 'array';
    //next, date:
    else if (value instanceof Date === true) return 'date';
    //finally, all other data types that return correctly when using 'typeof':
    else return typeof value;
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
