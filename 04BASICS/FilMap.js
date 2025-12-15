//filter is used to create a new array with all elements that pass the test implemented by the provided function.
//map is used to create a new array populated with the results of calling a provided function on every element in the calling array.

//Example of filter
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4, 6]

//second example of filter using arrow function
let greaterThanThree = numbers.filter(number => number > 3);
console.log(greaterThanThree); // Output: [4, 5, 6]

//It returns a new array with elements that satisfy the condition specified in the callback function.
//Real world example of filter extract the book from the list which are published after 2010
let books = [
    { title: "Book One", year: 2005,genre:"fiction" },
    { title: "Book Two", year: 2015,genre:"science" },
    { title: "Book Three", year: 2020,genre },
    { title: "Book Four", year: 1999,genre }
];

let recentBooks = books.filter(book => book.year > 2010);
console.log(recentBooks);
let fictionBooks=books.filter(book=>book.genre==="fiction");
console.log(fictionBooks);
// Output: [ { title: 'Book Two', year: 2015 }, { title: 'Book Three', year: 2020 } ]

const myNumbers = [1, 2, 3, 4, 5];
//Example of map
let squaredNumbers = numbers.map(function(number) {
    return number * number;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25, 36]

//second example of map using arrow function
let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10, 12]

//It returns a new array with the results of applying the provided function to each element of the original array.
//Real world example of map convert the list of products to list of product names
let products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];

let productNames = products.map(product => product.name);
console.log(productNames); // Output: [ 'Laptop', 'Phone', 'Tablet' ]

//In summary, filter is used to select elements from an array based on a condition, while map is used to transform each element of an array into a new form. Both methods are powerful tools for working with arrays in JavaScript.

//Chaining filter and map
const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const processedNumbers = numbersList
    .filter(num => num % 2 === 0) // Filter even numbers
    .map(num => num * num);      // Square the filtered numbers

console.log(processedNumbers); // Output: [4, 16, 36, 64, 100]: "history" }


//filtering fiction books and then mapping to get their titles
let fictionBookTitles = books
    .filter(book => book.genre === "fiction")
    .map(book => book.title);

console.log(fictionBookTitles); // Output: [ 'Book One' ]
console.log(processedNumbers); // Output: [4, 16, 36, 64, 100]

//Find method is used to return the first element in an array that satisfies the provided testing function.
//If no elements satisfy the testing function, it returns undefined.

//Example of find
let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

let user = users.find(function(user) {
    return user.id === 2;
});
console.log(user); // Output: { id: 2, name: 'Bob' }

//second example of find using arrow function
let charlie = users.find(user => user.name === "Charlie");
console.log(charlie); // Output: { id: 3, name: 'Charlie' }

//It returns the first element that matches the condition specified in the callback function.
//Real world example of find a product by its name
let productList = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];

let product = productList.find(product => product.name === "Phone");
console.log(product); // Output: { name: 'Phone', price: 500 }

//In summary, the find method is useful for locating a specific element in an array based on a condition. It returns the first matching element or undefined if no match is found. This method is particularly handy when you need to retrieve a single item from a collection.
