


//*********************arrow function *******************
/**
 

arrow function or expresion function can't be  can't be hoisted

  in functino expresion if defined using let or const then they are in temporal dead zone 
  if defined without it then they simply igve error as they are not hoisted
  if asked in interview just say they are not hoisted 
  if interview say if they are defined using let or const then say they are in temporal dead zone 
 * 

 */

z()//no eror as normal  function statement  can be hoisted
//x()//give error as arrow function can't be hoiste
//y()//give error as expression function can't be hoiste
 
 x=()=> console.log('x')// arrow function expresion

 y=function (){console.log("y")}//function expression
 
 var a= function xyz(){console.log('a')}//named functin expression
 
 function z(){//function statement or function declaration
    console.log("z")
}

y()
a()//

//xyz()//will give error

//*********************callback function *******************


/*
Basically callback is passing a function as argument but it is not much use in synchronous callback 

While in asynchronous it is much use as there are many function where we need to pass a user defined function as argument for example .then(),settimeout().etc 

 */

