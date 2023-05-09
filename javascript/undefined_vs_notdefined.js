/*static vs dynamic typed language

dynamically-typed languages perform type checking at runtime, 
while statically typed languages perform type checking at compile time.

*/
/*

In JavaScript there are 5 different data types that can contain values:
=>string
=>number
=>boolean
=>object
function
There are 6 types of objects:
=>Object
=>Date
=>Array
=>String
=>Number
=>Boolean
And 2 data types that cannot contain values:
=>null
=>undefined

*/

/*
null  vs undefined 

undefined and null are equal in value but different in type:
*/

let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;    // Now value is null, but type is still an object

//undefined and null are equal in value but different in type:

typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true



/*
undeinfed vs not defined 
"undefined" indicates that a variable has been declared but not given a value
(it meas variable is present in the memory ),
 while "not defined" indicates that a variable does not exist.
 (not present in the memory ormemory isnot created for it)


*/