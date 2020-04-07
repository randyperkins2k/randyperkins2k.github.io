/*
* FUNCTIONS
*
* 0. Functions are incredibly useful tools contained within JavaScript! They allow for the passage of blocks
of data through which the program may execute a specific set of tasks. When the function is completed, the 
code can carry on. Functions can be created and used and reused at any part of the program, and may go through
as many or as few iterations as directed. Functions use both parenthetical () and curly brace {} syntax. A function 
is first named, and the parameters to be read in parenthesis form what is called an argument when called within 
the block of operations contained inthe curly braces.
*/

/*
* 1. Declaration and Invocation/Calling - These are the two main steps to generating a function. First a function
is usually declared by assigning a name and introducing parameters. Next, the function must be called, or invoked,
by typing the function and entering specific values for the parameters, as the argument. However, due to a property
in JavaScript known as 'hoisting', all var and function declarations are 'hoisted' to the top of the stack of code,
in that they are actually read by the program before they are explicitly defined. Thus, when a function and its 
contents are defined/called before the actual function is declared, there is not a reference error, but rather the
function is read as undefined.
*/
function randsFunction(stateOne, stateTwo) { //function declared.
    return stateOne + ' ' + stateTwo;
}
randsFunction('hello', 'my friends!'); //function called, with values entered as arguments.
console.log(randsFunction('hello', 'my friends!')); //prints the executed function in the console.

/*
* 2. Parameters vs. Arguments - In functions, the parameters are the named placeholders, or variables, which
are intended to be used in the body of the function. Any number of parameters may be declared when a function
is created, but they are not strictly necessary, as a function may be used in which no parameters are needed
for the desired operation. Arguments are the actual values to be used within the code for which the parameters 
are placeholders. Parameters and arguments can be any data type, such as strings, numbers, and objects. Parameters
are defined in parenthesis when the function is declared, and the arguments for those parameters are assigned 
when the function is actually called.
*/
function paraArguments(parameterOne, parameterTwo) {//function declared, with two parameters.
    return parameterOne + parameterTwo + 'argument!'; //body of function.
}
console.log(paraArguments('This is ', 'my ')); //prints the arguments used to the console: 'This is my argument!';

/*
* 3. Syntax For Named Functions - The general syntax for named functions consists of using the keyword 'function',
followed by the declared name, then the parameters used in parenthesis, and finally the function body housed within
curly brackets. The bare structure for this syntax is given below, although, as we will see next, functions may be
declared in two alternative ways as well.
*/
function functionStructure(parameterOne, parameterTwo, parameterThree) { //function declaration syntax.
    //body of prescribed code here.
}
functionStructure('ArgumentOne', ["array", "of", "strings"], {type: 'tutorial', example: 'object'});
//here the function is called, with three arguments: a string, an array, and an object, respectively.

/*
* 4. Assigning Functions To Variables - Functions may also be declared and defined using different syntax, in this
case by assigning the function to a variable. Here an 'equals' sign is needed.
*/
var plus = function(parameterNew, parameterNewer) {
    //function body
};
var add = plus(4, 3); add + 1; //here the function 'plus' is called within the variable 'add'.

/*
* 5. Specifying Inputs & Outputs - Functions can take inputs, known as 'parameters', which are to be
defined when the function is called. For clarity, it is wise to name these parameters by what value they are intended
to represent. However, as mentioned previously, parameters are not required. In this sense, often a function is 
created simply to run the body of code when called, and not take in any values to do so. Functions only produce
a single output. This output is 'undefined' by default, but can produce values when the 'return' keyword is used
within the body of code.
*/

/*
* 6. Function Scope - In JavaScript, the scope is the overall area in which code is read, declared, and defined, 
within a context. All data types created are by default within the global scope. However, values created within
functions possess what is defined as 'function scope'. This means that these values are only accessed and read
when a function is called. There is also what is known as 'block scope', which refers to values that are only
able to be expressed and accessed within loops. Also, variables created using 'let' possess block scope. 
*/
function scopeExample (num1, num2) {
    var added = num1 + num2;
    return added;
}
scopeExample(3, 7); //runs the function, with the arguments 3 and 7.
//console.log(added); this returns a reference error, because 'added' was defined within a function, and thus
//may not be accessed outside of the function scope.

/*
* 7. Closure - Even though a function that creates and employs variables within its respective function scope, 
and the function has ceased running, those variables may still be referenced at a later point in the code. This 
property is called closure. Functions form such closures around the data they contain, and if the memory of that
data is housed somewhere else in the program, that closure still remains alive in that the data can still be used. 
An example of closure is shown below.
*/
function closureExample(parameterOne) { 
  let localScope = parameterOne; //variable assigned within function scope.
  return () => localScope; //anonymous function declared in return statement.
}

let x = closureExample(1); //variable declared which runs function.
console.log(x()); //prints 1 to the console, even though the content of the original content is in the function scope!
