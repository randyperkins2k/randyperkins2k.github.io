/*
* STRING MANIPULATION
*
* 0. String values can be modified in a few useful ways. For example, one may want to combine two
or more string values. This can be done by concatenating the strings using the + or addition 
operator. There are also methods that can be performed which are unique to string data types. Examples
of string operators and methods are given below.
*/

/*
* 1. String Operators - Two operators may be used to concatenate strings, the + operator and the
+= operator.
*/
'Hello ' + 'Everyone!'; // returns the two strings together.
var textOne = 'Hello ';
var textTwo = 'Folks!';
textOne += textTwo; // also returns the two strings.

/*
* 2. String Methods - There are also myriad methods that can be used on strings in particular. This is 
because JavaScript, when executing methods and properties, treats the strings as objects. Covered below
are common methods useful in program writing, in which string properties can be modified or determined
when needed.
*/
var randoString = "Randolph";
randoString.length; // returns length of string, in this case 8.

var lowerRand = randoString.toLowerCase(); // converts the string to all lower case letters.
var higherRand = randoString.toUpperCase(); // converts the string to all upper case.

var randsStr = "I am the coolest!";
var re = randsStr.replace("coolest!", "worst!"); // replaces portion of string with declared value.

var choices = "good, bad, mediocre";
var reChoice = choices.slice(7, 9); // slices out a portion of string at specified position.
console.log(reChoice); // returns 'bad'.

var randoFirst = "My true";
var randoSecond = "friends!";
var randoBest = randoFirst.concat(" ", randoSecond); // concatenates string values.

var txt = "this,sentence,split,into,array";   // string
txt.split(","); // splits the text string into an array of string values, at the comma.

