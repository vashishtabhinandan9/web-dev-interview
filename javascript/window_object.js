/*

at global scope level  => this = window object

console.log(this)

*/
/*
The Browser Object Model

The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.
There are no official standards for the Browser Object Model (BOM).

Since modern browsers have implemented (almost) the same methods and properties for JavaScript interactivity, 
it is often referred to, as methods and properties of the BOM.

*/
/*
The Window Object

The window object is supported by all browsers. It represents the browser's window.

All global JavaScript objects, functions, and variables automatically become members of the window object.

Global variables are properties of the window object.

Global functions are methods of the window object.

Even the document object (of the HTML DOM) is a property of the window object

window.document.getElementById("header"); = document.getElementById("header");
*/

/*
any variable at global level  is attached to window object adn can be reffered using window object 
*/

let a =0;
function b(){
    a="ovfo"
    console.log(a);
    console.log("jhforoj")

}

console.log(window.a); // this is equal to conosl.log(a)

window.b()// this is equal to b()


