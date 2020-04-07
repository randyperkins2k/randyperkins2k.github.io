/*
* VARIABLES
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

//  A. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

//  B. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

//  C. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
* 3. The keyword var is known as a statement identifier, in that it identifies the JavaScript action
* to be performed. Two other statement identifiers, const and let, are also used to assign values, 
* but are different in a couple of crucial ways. 
*/

/*  A. const - This keyword is used to declare and assign data types in the same manner as var. Yet,
unlike the latter, with const the value cannot be reassigned a new value. Thus once created, the value
must remain the same regardless of its scope within the code, whereas values assigned with var are
considered scope-dependent. Scope in JavaScript will be elaborated on below.
*/
const myConstant = 1; //declares a constant 
//const myConstant = true; //returns 'TypeError: Assignment to constant variable.'

/*  B. let - This keyword works as well to assign data types, and can be reassigned if needed. But 
unlike var, let has what is called 'block scope', meaning the same variable name can be redeclared
outside of a block, and this will not change the value of an assigned variable within a block. A
comparison of these two statement identifiers within a loop block is shown below.
*/
var i = 5;
for (var i = 0; i < 10; i++) {
  // some code!
}
// Here i is 10
let j = 5;
for (let i = 0; i < 10; i++) {
  // some similar code!
}
// Here i is 5

/*
* 4. Hoisting is JavaScript's default behavior of moving declarations to the top, because of the
way in which the program inspects code. In this manner a variable can be used before it is 
declared! Hoisting only takes place within a code's current scope (function, etc.). Also, this 
only takes place with variables declared using the var keyword, and not with let or const.
*/
myString = 5; //here a variable is assigned to five, but not declared.
var myString; //here myString is declared after it has been assigned.

