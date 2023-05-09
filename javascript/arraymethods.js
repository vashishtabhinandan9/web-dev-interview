//        https://dmitripavlutin.com/operations-on-arrays-javascript/#21-arraymap-method






//*************************MAP***************************




//*************************FILTER***************************

/**
 * array.filter(predicate) method returns a new array with items that have passed predicate check.

On each iteration predicate(item[, index[, array]]) function is invoked with the arguments: iterated item, index and the array itself.

Let's filter an array to have only even numbers:


array.filter() creates a new array, without mutating the original one.
 */

const numbersfilter = [1, 5, 7, 10];

function isEven(number) {
  return number % 2 === 0;//write the condition you want
}

const evens = numbersfilter.filter(isEven);

evens; // => [10]


//*************************REDUCE***************************
/**
 * array.reduce(callback[, initialValue]) reduces the array to a value by invoking callback function as a reducer.

On each iteration callback(accumulator, item[, index[, array]]) is invoked with arguments:
 accumulator, current item, index and the array itself. It should return the accumulator.

The classic example is summing an array of numbers:
 */
const numbersreduce = [2, 0, 4];

function summarize(accumulator, number) {
  return accumulator + number;
}

const sum = numbersreduce.reduce(summarize, 0);

sum; // => 6

// comparion of filter.map v/s reduce
const users = [ 
    { firstName: "akshay", lastName: "saini", age: 26}, 
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", laştName: "musk", age: 50 },
    {firstName: "deepika", LastName: "padukone", age: 26 }
 ];
//byfilter.map
 const output = users.filter((x) => x.age < 30).map((x) => x.firstName); 
 console.log(output);//[ 'akshay', 'deepika' ]

 const outputmap = users.map((x)=>{
    if(x.age<30) return x.firstName;//
    
 })
 console.log('outputmap=', outputmap);// [ 'akshay', undefined, undefined, 'deepika' ]
//by reduce
 const outputreduce = users.reduce(function(acc, curr){
    if (curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
}, [ ])

console.log(outputreduce);//[ 'akshay', 'deepika' ]






//*************************FOR EACH***************************





//*************************ARRAY.FROM***************************
/*
Array.from(arrayLike[, callback]) method creates to a new array by using callback invocation result on each array item.

On each iteration callback(item[, index[, array]]) is invoked with arguments: current item, index and the array itself. It should return the new item.

Array.from(numbers, increment) creates a new array from numbers by incrementing each array item.

Tips:
Array.from() creates a new mapped array, without mutating the original one
Array.from() fits better to map from an array-like object.

*/

const numbers = [0, 2, 4];

const newNumbers = Array.from(numbers,
  function increment(number) {//callback(item[, index[, array]])
    return number + 1;
  }
);

newNumbers; // => [1, 3, 5]