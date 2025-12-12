const marvel_heroes = ['Iron Man', 'Captain America'];
const dc_heroes = ['Batman', 'Superman','flash'];

marvel_heroes.push(dc_heroes); //outer array me inner array push ho gaya
console.log("After Push Operation :- "+ marvel_heroes)//after push operation
//output me dikhayega ['Iron Man', 'Captain America', ['Batman', 'Superman','flash']]
//3rd element ek array hai jo dc_heroes ka reference hai
//original marvel_heroes array me changes ho gaye hain push karne ke baad
console.log(marvel_heroes[2][1]);

const all_heroes=marvel_heroes.concat(dc_heroes);
console.log("All Heroes after Concat :- "+ all_heroes)//all heroes after concat
//concate use new array without modifying existing arrays
//push or concate me farak ye hai ki
//push me ek array ke andar dusra array chala jata hai
//concat me dono arrays ke elements ek sath nayi array me aa jate hai

//spread operator
const all_heroes_spread=[...marvel_heroes, ...dc_heroes];
console.log("All Heroes using Spread Operator :- "+ all_heroes_spread)//all heroes using spread operator
//spread operator also creates new array without modifying existing arrays
//ye har element ko alag alag karke nayi array me daal deta hai

//flat method
const nested_array = [1, 2, [3, 4], [5, 6]];
const flat_array = nested_array.flat(infinity);
console.log("Flat Array using flat(kitne dept tak) method :- "+ flat_array)//flat array using flat() method
//flat method bhi nested arrays ko single level pe le aata hai

console.log(Array.isArray(marvel_heroes))//check if marvel_heroes is an array
console.log(Array.isArray('Hello'))//check if string is an array
//Array.isArray() method checks if the given variable is an array or not
//returns true if it is an array, otherwise false
console.log(Array.from('Hello'))//creates array from string
//output: ['H', 'e', 'l', 'l', 'o']
//Array.from() method creates a new array from an array-like or iterable object
//Array.from() can be used to convert strings into arrays of characters
//output: [1, 2, 3, 4, 5]
//Array.of() method creates a new array from a variable number of arguments
// ye sirf strings ke liye hi nahi, sets or maps ke liye bhi use hota hai

console.log(Array.of(1, 2, 3, 4, 5))//creates array from arguments
console.log(Array.from({name: 'John', age: 30}))//creates array from object
//output: [undefined, undefined]  or []
//Array.from() method creates a new array from an array-like or iterable object
//In this case, the object is not iterable, so it returns an array with undefined values
//Array.from() works best with iterable objects like strings, sets, and maps
//difference between Array.from() and Array.of()

//Array.from() creates an array from an array-like or iterable object
//Array.of() creates an array from a variable number of arguments

let score1=10;
let score2=20;
let score3=30;

const scores_array=Array.of(score1, score2, score3);
console.log("Scores Array using Array.of() :- "+ scores_array)//scores array using Array.of()
//Array.of() method creates a new array from a variable number of arguments