//hoisting


//****************REDECLARATION OF LET AND VAR AND CONST****************
console.log("****************REDECLARATION OF LET AND VAR AND CONST****************")
//////////////////// FOR LET /////////////////////

let a=5;
//let a=6;//❎will give error.this will give an error  as redeclaration in not allowed in js

a=6;//works fine reintialization is fine but redcalration is not




let c=6;
//var c=5;// ❎ this will give an error as well //  var c=5; can't be with same name as let


//////////////////FOR VAR///////////////////
//redaclaratin  works in variable
var b=5;
var b=6;







/*******************scope of let and var**************************

     => global scope             block scope             function scope
var         ✅                      ❎                          ✅
let         ✅                      ✅                          ✅
const       ✅                      ✅                          ✅


*/


// so by above diagram we conclude  let is block scoped and var is function scope as 

console.log("*******************scope of let and var**************************")
let d=2;
var e=5;
let g=1;
console.log("block scope")
{   
    let d=3;
     e=6;
     var f=7;
    console.log("inside block variable scope = "+e);
    console.log("inside block let scope = "+d);
}



(function testingscope(){
    let d=1;
   
    var e=7;
    console.log("inside function varibale scope ="+e);
    console.log("inside function let scope ="+d);
})()
console.log(f)
console.log("globe varibale  scope ="+ e)
console.log("globe let scope ="+ d)




//illegal shoadowing
/**
 * This is only true for arrow functions and  blocks scope if done by function the below examples works fine 
Illegal Shadowing: Now, while shadowing a variable, it should not cross the boundary of the scope, i.e. we can shadow var variable by let variable but cannot do the opposite.because var is global scope.
 a variable  declare inside block using var is accessible outside the block as well so if outside there is already a variable by same name declared using let it will give error 
But if instead of block we have used a function then it will run fine 
Or 
If we have used let both inside and outside the scop e then also it will work

 So, if we try to shadow let variable by var variable, it is known as Illegal Shadowing and it will give the error as “variable is already defined.” 
 */
/* example

 
    let il ='abhina'
   {var il= "abhinandan"}

    console.log(il)

*/