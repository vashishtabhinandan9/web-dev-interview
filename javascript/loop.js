arr=['abhi','ram', 'fam', 'dam','vash']



//*****************************for each*********************************

//    https://dmitripavlutin.com/foreach-iterate-array-javascript/

/*

The forEach() method calls a function for each element in an array.

The forEach() method is not executed for empty elements.

it operates on the same element of the array and returns nothing

The map() method returns a new array, whereas the forEach() method does not return a 
    new array. 
 
The map() method is used to loop the elements of an array, whereas the forEach() method is used to loop through the elements of an array.

array.forEach() method iterates over the array items, in ascending order, 
without mutating the array.

forEach() skips the empty slots of the array (named sparse array).

forEach() fits to iterate array items, without breaking, 
and having simultaneously some side-effect.

Keep in mind that you cannot normally break the iteration of forEach() (other than a tricky way to throw an error to stop the iteration, which is a cheap hack). 
The method normally iterates over all the items.
If your case requires an early break from the cycle, 
a better option is the classic for or for..of.

*/


arr.forEach((element,ind,arr)=>{
    arr[ind]=arr[ind]+'vashisht'
    if(arr[arr.length-1]==element+'vashisht') console.log('reached end' + "  "+element)
    
})


console.log(arr)





//***************************** for...in *********************************
/*
this is for iterating objects generally  remeber like this
            iterable objects    => of         
            object              => in

Just remember that for in is used for objects, while for of is used for arrays, strings, etc.
However, you don't even need to use for in. You can always use for of instead:


 for in iterates over keys of object not the value
              
                      
*/

const obj={
    name:'abhi',
    age:18
}

arr.age=18;

for( x in arr){
console.log('keys = '+ x + ',  value = '+ arr[x] ) 
//as you can see we iterate over the keys not the value
}




//***************************** for...of *********************************

/**

for of can be used for both objects and arrays
for of iterates the value not the key


 */

for (x of arr) console.log(x)



//***************************** map *********************************
/**

this returns a new array
 */

const newarr=arr.map((element,index,arr)=>{
    return element +"vashsit"
})

console.log(newarr)


/*
***************************** while *********************************


*/