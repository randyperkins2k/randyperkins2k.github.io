/*
* LOOPS
*
* 0. Loops in JavaScript are constructs that allow one to perform multiple iterations of a block of code. The 
programmer must use caution in some cases, as if the criteria for which the loop is generated does not ever
change or cease, the loop will continue on endlessly, and will result in crashing the program. Thus the loop
should carry on only until the desired or specfied goal is reached. The main types of loops are 'for', 'for-in',
and 'while' loops. These provide an easy way for JavaScript to do something repeatedly.
*/

/*
* 1. For Loop - The 'for' statement iterates until a certain condition becomes false. This loop is used on arrays,
in which three statements are then provided: the initialization of an index (often 'i'), the condition for when
the loop needs to cease, and then the incrementation through the index of the array. In the third argument, the
incrementation can be in the positive or negative direction. Thus, 'i++' would iterate throught the index in the 
positive, usually from 0, to 1, then 2, then 3, etc. For a negative direction, in which the index is needed to start
at a specific point of an array, often at the end, then 'i--' may be used. It is useful to remember that the last
indexed value of an array can be accessed or referenced without knowing the actual length of the array, simply by 
using 'array.length - 1', because, since an array begins at index 0, the last value will always be the overall array
length minus 1. For example, if there are 4 values in the array, the first value would have index 0, the second at
index 1, and the final value index 3. Thus the final value would be at the index length minus 1, which would be 3.
*/
var randoArray = ['hello', 'to', 'all','my', 'compadres!']; // array consisting of strings is declared.
for (var i = 0; i < randoArray.length; i++) {  //'for' loop used, to iterate from index 0 to index 4, and then cease.
    console.log(randoArray[i]); //prints to the console each individual array value, from 'hello' to 'compadres'!
}
var numArray = [1, 2, 3, 4, 5]; //array consisting of numbers is declared.
for (var i = 0; i < numArray.length; i++) { 
    console.log(numArray[i]);   //prints to the console each number, from 1 to 5, in order.
}

// These same loops can be run in reverse, by changing the 'for' criteria!
var randoArrayTwo = ['hello', 'to', 'all','my', 'compadres!']; // array declared.
for (i = randoArrayTwo.length - 1; i >= 0; i--) {  //'for' loop used, to iterate from index 4 to index 0, and then cease.
  console.log(randoArrayTwo[i]); //prints to the console each individual array value, from 'compadres!' to 'hello'!
}
var numArrayReverse = [1, 2, 3, 4, 5]; //array consisting of numbers is declared.
for (i = numArrayReverse.length - 1; i >= 0; i--) { 
    console.log(numArrayReverse[i]);   //prints to the console each number, in reverse order, from 5 to 1.
}

/*
* 2. While Loop - This statement also evaluates until a condition becomes false. Here the keyword is 'while'. To use 
'while' loop, after declaring variables or sets of values, code is then operated upon using the 'while' statement 
until the desired outcome is reached, after which point the loop ceases. This is particularly useful for arithmetic
arguments. The syntax for 'while' loops is similar to that of 'for' loops, in which the keyword is used, and then 
the parameter is declared in parenthesis, and finally the data to be looped through is assigned, in curly braces.
*/
var n = 0; //two variables are declared.
var x = 0; x + 1;
while (n < 3) { //while loop declared, to be looped as long as 'n' is less than 3.
  n++; //'n' is increased by one for each iteration
  x += n; //'x' is then acted upon for each iteration, until 'n' reaches 3, and as a result 'x' becomes 6.
}

/*
* 3. For/In Loop - This type of loop is different from the two previous loops in that it applies specifically to 
objects. Since objects are not indexical in nature, but rather are composed of key/value pairs, a special loop is 
needed to iterate through their contents. Thus, a loop is needed which states that for a given key in the object, 
the resulting code will operate. The variable which represents the key in the object can be called any value, but 
it is implied that it will be referencing the keys acted upon. 
*/
var myName = {firstName: 'Randolph', lastName: 'Perkins'}; //an object declared.
   for (var key in myName) { //the 'for/in' loop is initiated for the keys in the 'myName' object.
       console.log(myName[key]);//prints to the console only the two key values: 'Randolph' and 'Perkins'!
       console.log([key]);//prints to the console only the two keys themselves: 'firstName' and 'lastName'!
   }
