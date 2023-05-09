/**
 * You can use the spread operator with an array literal to concatenate arrays: 
 * [...array1, ...array2].

Let’s concatenate 2 arrays of names:
 */
const heroes = ['Batman', 'Catwoman'];
const villains = ['Joker', 'Bane'];

const names = [...heroes, ...villains];

names; // => ['Batman', 'Catwoman', 'Joker', 'Bane'



/**
 * An easy way to clone an array is to use the spread operator:
 *  const clone = [...array];
[...array] creates a shallow copy.
Let's clone an array of colors:
 */

const colors = ['white', 'black', 'gray'];

const clone = [...colors];

clone; // => ['white', 'black', 'gray']
colors === clone; // => false



/*
You can insert items in an array in an immutable manner by combining the spread operator with the array literal.
*/

//Appending an item at the end of an array:

const namesend = ['Joker', 'Bane'];

const names2end = [
  ...namesend,
  'Batman',
];

names2end; // => ['Joker', 'Bane', 'Batman'];


//Appending an item at the beginning of an array:

const namesbeg = ['Joker', 'Bane'];

const names2beg = [
  'Batman',
  ...namesbeg
];

names2beg; // => ['Batman', 'Joker', 'Bane'];


//Inserting an item at any index:

const namesmid = ['Joker', 'Bane'];
const indexToInsert = 1;

const names2mid = [
  ...namesmid.slice(0, indexToInsert),
  'Batman',
  ...namesmid.slice(indexToInsert)
];

names2mid; // => ['Joker', 'Batman', 'Bane']