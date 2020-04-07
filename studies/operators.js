/*
* OPERATORS
*
* 0. As the name suggests, operators are symbols and, in some cases, keywords, which are used
to perform myriad operations on data types. These include everything from basic arithmetic
operators to operators which are used to determine the data type of given values. The various
JavaScript operators are listed and defined below.
*/

/*
* 1. Assignment Operators - In JavaScript, these operators are used to assign values to variables.
Depending on the keyword used and the scope context, variables may or may not be reassigned once
they are declared. The equals sign ('=') is considered an assignment operator, but two consecutive
equals signs are used as comparison operators, and this designation has different properties.
*/
var y = 0;
let x = 1 + y;
x = 1; y = 4; //basic assignment operator.
x += y; //addition; this is the same as x = x + y.
x -= y; //subtraction; this is the same as x = x - y.
x *= y; //multiplication; this is the same as x = x * y.
x /= y; //division; this is the same as x = x / y.
x %= y; //remainder; this returns the remainder, if any, when a value is divided into it.
x ^= y; //exponent; this raises the value to a given power!

/*
* 2. Arithmetic Operators - These are used to perform arithmetic calculations on assigned
values. These values can be actual numbers, or variables, such as x or y. 
*/
var l = 4;
var m = 7;
4 + 3; l + m; //addition operator.
4 - 3; l - m; //subtraction operator.
4 * 3; l * m; //multiplication operator.
4 / 3; l / m; //division operator.
4 % 3; l % m; //modulus or remainder operator.
var z = 5; z + x; z++;//increment operator. returns x + 1, or 6.
var k = 4; k + x; k--;//decrement operator. returns x - 1, or 3.

/*
* 3. Comparison Operators - Operations which can compare values and then perform a specified
action are extremely useful in JavaScript. For example, we can create a function which loops
a given operation, as long as one value remains greater than the other. Once that ceases to be
the case, then the function will 'break out' of the loop. This same action can be performed for
a loop as long as a value is not equal to another value, using the 'not equal' (!=) operator!
*/
l == m; l == '16'; //signifies 'loose' equality.
l === m; l === '16'; //strict equality; if l is equal to 16, then this would return false.
l != m; //not equal to.
l !== m; //not equal value or type.
l > m; l >= m;//greater than, greater than or equal to.
l < m; l <= m;//less than, less than or equal to.

/*
* 4. Logical Operators - These are used to determine or assign logical relations between 
values. These can be used in loops, whereas as long as condition is met, then the loop 
iterates, in a similar way to comparison operators. Like comparison operators, logical 
operators can also return a boolean value in JavaScript, if desired. 
*/
(l > 5 && l < 15); //allows both declarations to be true, thus l is between 5 and 15.
(l === 5 || l === 15); //requires one or the other declaration to be true, but not both.
!(l === 5); //used to indicate that the variable is not a particular value.

/*
* 5. Unary Operators - Operators which only act with one particular value are considered unary.
Examples are given below.
*/
l = !m; //assigns a value of 'not m' to l.
typeof(l); typeof('hello'); //determines the data type of a given value. Very useful!
l = -m; //assigns a negative value to l.

/*
* 6. Ternary Operators - Conditional, or ternary operators, are used to declare that if
a given statement is in a certain condition, then one or another actions is performed. 
It is similar to declaring "if x, then y, but if not x, then z".
*/
var winner = 0; winner + x;
var score = 0;
winner = (score > 10) ? "you win!":"you lose!"; //produces a string depending on value of score.

