/*
* DATATYPES:
*
* Datatypes are quite simply the variety of data to be operated on within JavaScript. This
includes letters and words, numbers, and symbols. JavaScript reads different kinds of data
depending on specific predefined parameters. For example, certain words are reserved as operators
(such as var, for, etc.), but any other groupings of letters and words preserve their primitive
status as text, and are known as strings. In contrast, typed numbers are considered as having
numerical value, and may be operated on as such. The list of recognized data types is given 
below.
*/

/*
* 1. Numbers in JavaScript are treated as possessing numerical value in that they can be operated upon
rather than simply being immutable. This means that a number, say 5, is read as the number 5 as opposed
to being the typed instance of '5'. However, a number can be assigned as a string as well, with quotes,
and the operation that takes place varies depending on the context:
*/
var myNumber = 5; //a number assigned to a variable.
console.log(myNumber + 3); //this prints out the sum of the assigned variable and a number: 8.
console.log(myNumber + '3'); //the number in quotes is tacked on at the end, forming: 53.
var x = 100 / "10"; //here the arithmatic operation takes place, and x will be 10.

/*
* 2. Strings are best described as bits of text which are in most cases immutable, although some operations
may be performed on them, as seen in the previous example. If want to store values in JavaScript which are 
composed strictly of text: as letters, words, phrases and sentences, then we will only want a limited degree
of manipulation to be performed on these values by the program. Thus with the string datatype, text can be
repositioned, divided into parts, added to other values, referenced in certain parts of the program, etc. 
We create string values by containing text in quotes. Single or double quotes can be used for strings, as
long as they remain internally consistent. Many operations can be performed with strings using assignments 
and methods, as shown below.
*/
var randsString = 'I am Randolph'; //a string of text assigned with a variable.
var stringTwo = randsString + ' and I am a human.';
console.log(stringTwo); //prints the text combination as one line.
console.log(stringTwo.length); //prints the indexical length of the variable.
console.log(stringTwo[3]); //prints 'm', the letter stored at the indexed location called for.

/*
* 3. Boolean values are ones that are defined by being either true or false. This is very useful for many
operations, and this makes the Boolean value of a statement the basis for all comparisons and conditions
performed on other data types. As with other data types, many methods and operations can be performed on 
Booleans in JavaScript. In the way JavaScript analyses data values, all values have some degree of 'truthiness'
or 'falsiness', and these descriptions are not necessarily intuitive. For example, anything with a value
is true (14, 'woman', -27), and anything without a value is false (0, '', etc.).
*/
Boolean(57 > 4); // returns true.
Boolean(25 > 27); // returns false.
(16 < 18); // returns true. the Boolean function is not needed.
Boolean(66); // returns true.

/*
* 4. Arrays are complex data types, meaning they store collections of more simple or primitive data types.
These collections can contain strings, numbers and boolean values. Each value is separated by commas, and the
values are indexical in nature. An array literal is created by creating a variable and assigning it to two
empty brackets. Arrays can also contain objects, functions, and other arrays. This data type is very useful
for storing quantities of data in groups which can then be manipulated and referenced within the program.
*/
var randsArray = ['books', 14, true]; //an array created with multiple data types.
randsArray[0]; //this returns 'books', the value at index 0.
randsArray[1] = 16; //the value at index 1 is changed from 14 to 16.
randsArray.push(false); //this method adds a fourth value, false, to the array.
randsArray.length; //this method returns the indexical length of the array, which is now four!
console.log(randsArray); //the full array is now printed to the console.

/*
* 5. Objects in JavaScript are complex data types as well, and are similar to arrays in that they group 
collections of data. Where they differ is they way they assign the values therein. Objects use key/value
pairs, in which keys are strings and are matched to a particular value. The syntax used is the colon, as in
'color: black', for example. Objects are contained with curly braces: {}, and keys and values can be called
by referring to a particular key, value, or key/value pair. Thus they are not indexed, and cannot be called
in such a way. 
*/
var randsObject = {color:"black", state:"distracted", lesson:"forgotten"}; //object and values declared.
randsObject.color; //returns 'black', using dot notation.
randsObject["state"]; //returns 'distracted', using bracket notation.

/*
* 6. Functions in JavaScript are useful for assigning a specific set of operations to be undertaken at a 
particular time, or to be reused. Functions can pass data through them and return that data with specified
operations performed, using the return keyword. Any data types, simple or complex, can be used within a 
function. Functions take parameters, which are values used to form an argument. The argument is contained 
within curly braces. Often, operations such as loops are created within a function, and run with a condition
statement. 
*/
function randsFunction(stateOne, stateTwo) {
    return (stateOne + ' ' + stateTwo);
} //this function concatenates two string statements.
randsFunction("Cool", "Dude"); //returns the combined statements, with a blank space in between.
randsFunction(77, 15); //this combines the two statements with a space, but does not add them together!

/*
* 7. Undefined, in JavaScript, is both a data type, as well as a variable declared without a value. If 
one were to declare a variable without assigning or defining it, the variable will return undefined. An 
empty string, however, is not undefined; it should be thought of more as a declared, or stored, blank
space. One can also empty a variable of its contents, by declaring the variable undefined.
*/
var rando;
console.log(rando); //prints 'undefined' to the console.
rando = ""; //rando is assigned to an empty string.
console.log(rando); //prints nothing, instead of 'undefined';

/*
* 8. Null, in JavaScript, has the same value as undefined, but is considered by the program to be a
different data type. A variable may be emptied of its contents by being assigned to 'null'. It should
be literally 'nothing', yet JavaScript recognizes it as an object. Thus 'null' and 'undefined' are the
same in value, but different in type. 
*/
typeof undefined; // returns 'undefined'
typeof null; // returns 'object'

/*
* 9. NaN is a keyword which is short for 'not a number'. It is a separate data type as well. NaN is a 
reserved word which indicates that a number is not considered a legal number by the program. If used
in a mathematical operation, the result itself will be NaN. 
*/
var randsNan = 'words' / 3; //produces NaN.
isNaN(randsNan); //returns true, using the isNaN() function.

/*
* 10. Infinity is considered a number in JavaScript, and can actually be used accordingly. One may 
create a loop that runs infinitely, by setting the loop to run as long as a value is NOT infinity
(while x != infinity). Also, division by zero generates infinity. JavaScript also delineates between
infinity and negative infinity. In the same way as a sequence of numbers 'tends' toward infinity, 
a sequence of negative numbers tends towards negative infinity. 
*/
var division = 14 / 0; //returns infinity.
var divisionTwo = -16 / 0; //returns -infinity.

/*
* 11. Data types in JavaScript are considered either simple/primitive or complex. Simple data types
include strings, numbers, boolean, and undefined values. They are values with no additional methods or 
properties. Complex data types are ones such as objects and functions. 
*/
typeof [4, 7, 3, 12]; //returns 'object', because an array is an object!
typeof "Randolph"; //returns 'string'.

/*
* 12. It is important to remember that in JavaScript, simple or primitive values are assigned or passed
through code, they are done so by copy. Yet complex data types are passed only by reference. This is due
to the fact that variables only store a limited amount of memory, enough to hold simple data types, such
as a number, but not enough to store many complex data types. 
*/
var x = 2; 
var y = x; //now, the copy of the value of x is stored in y.
var y = 3; //y is reassigned.
console.log(x); //prints 2, because only a copy of x was assigned to y, not the original x!

var l = [4, 13, true];
var m = l;
m[2] = false;
console.log(l[2]); //also prints false, because now l and m both 'point' to the same object!
