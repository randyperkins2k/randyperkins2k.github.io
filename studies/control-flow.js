/*
* CONTROL FLOW
*
* 0. Control Flow can be seen as the order in which the program executes statements. There are many
control structures which can be employed to direct data, including loops, conditionals, and functions.
Described below are such process which can greatly affect the order of operations within a given JavaScript
program.
*/

/*
* 1. If/Else If/Else Statements - These statements are one of the two main conditional statement approaches
used in JavaScript. They begin by declaring a criterion, in which 'if' that condition is met, a given block
of code is executed, possibly until that is not the case. If the condition does not or no longer applies, then 
JavaScript continues functioning downward in the code. We can also combine the 'if' statement with as many
'else if' statements, and finally, an 'else' statement, to introduce another set of criteria to be met.
*/
var conditionOne;
var conditionTwo;
var conditionThree;
var statementNew;
var statementBest;
var statementRando;
var statementTwo;
if (conditionOne) { // if statement introduced.
  statementNew;
} else if (conditionTwo) { // else if statement carried out.
  statementTwo;
} else if (conditionThree) { // third condition considered.
  statementRando;
} else { // if prior conditions are not met, statementBest is produced!
  statementBest;
} 

/*
* 2. Switch Statements - Switch statements, when paired with case and break statements, can offer a more
streamlined approach to handling large amounts of data. In a sense this method can accomplish the same tasks
using a different syntax. A reason for using switch/case statement over if/else if/else statement is that it 
can handle long, repetitive code, without resorting to nesting each case multiple times within if/else code
blocks, which can be both tedious and harder to read, as well as more prone to errors. It is important to 
include a default statement, which executes at the end, to deal with the possibility that the input does not
match any of the given case statements. This is analagous to having a final 'else' condition in the typical
if/else framework. Also, break conditions are usually necessary as well. By declaring 'break' after running 
the operation performed for a given case, the code ceases to analyze the given value to be read. Otherwise,
JavaScript will assume that the subsequent code should be run as well. Thus, in the following example, if
there were no break statement after the 'Tomatoes' case, then the function would console.log the statement
for 'Brussel Sprouts' also!
*/
function fruit(forSale) { //function declared which takes a <forSale> value as a parameter.

switch (forSale) { //switch statement declared for the <forSale> value.
  case 'Tomatoes': //case conditional for the value 'Tomatoes'.
    console.log('Tomatoes are $0.50 each.'); //prints a string to the console for this case.
    break; //ends the switch statement analysis if 'Tomatoes' is the value given.
  case 'Brussel Sprouts':
    console.log('Brussel Sprouts are $1.59 a pound.');
    break;
  case 'Avocados':
    console.log('Avocados are $1 each.');
    break;
  case 'Asparagus':
    console.log('Asparagus are $3.00 per bunch.');
    break;

  default: //default condition declared.
   console.log('Sorry, we are out of ' + forSale + '.');
}
}
fruit('Tomatoes'); //function invoked, using 'Tomatoes' as an argument, which produces the output above.
