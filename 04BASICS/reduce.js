//Reduce is a method that executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let numbers = [1, 2, 3, 4, 5];

//Example of reduce to sum all numbers in an array
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15

//Second example of reduce using arrow function to find the maximum value in an array
let max = numbers.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue);
}, -Infinity);
console.log(max); // Output: 5

//It takes two arguments: a callback function and an initial value for the accumulator.
//The callback function itself takes four arguments: accumulator, currentValue, currentIndex, and array.
//Real world example of reduce to count the occurrences of each genre in a list of books
let books = [
    { title: "Book One", genre: "fiction" },
    { title: "Book Two", genre: "science" },
    { title: "Book Three", genre: "fiction" },
    { title: "Book Four", genre: "history" },
    { title: "Book Five", genre: "science" }
];

let genreCount = books.reduce((accumulator, book) => {
    if (accumulator[book.genre]) {
        accumulator[book.genre]++;
    } else {
        accumulator[book.genre] = 1;
    }
    return accumulator;
}, {});

console.log(genreCount); 
// Output: { fiction: 2, science: 2, history: 1 }

//In summary, reduce is a powerful method for aggregating array data into a single value, whether it's a sum, maximum, or a more complex structure like an object counting occurrences. It provides flexibility and efficiency in processing arrays in JavaScript.