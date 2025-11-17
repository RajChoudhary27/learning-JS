//Iterators in JavaScript
//Iterators are objects that allow you to traverse through a collection (like an array or a string) one element at a time.
//They provide a standard way to access elements sequentially without exposing the underlying structure of the collection.

//for...of loop
let array = ['apple', 'banana', 'cherry'];
for (let fruit of array) {
    console.log(fruit); // Output: apple, banana, cherry
}

//String iteration
let str = "hello";
for (let char of str) {
    console.log(char); // Output: h, e, l, l, o
}

// for ...in loop
// The for...in loop is used to iterate over the enumerable properties of an object.
let person = {name: 'John', age: 30, city: 'New York'};
for (let key in person) {
    console.log(key + ": " + person[key]);
    // Output:
    // name: John
    // age: 30
    // city: New York
}

//forEach method
//The forEach method is an array method that executes a provided function once for each array element.
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number * 2); // Output: 2, 4, 6, 8, 10
});
const coding=["java","python","js"]
const values=coding.foreach((item)=>{
console.log(item);
})

//for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // Output: 1, 2, 3, 4, 5
}

//while loop
let count = 0;
while (count < numbers.length) {
    console.log(numbers[count]); // Output: 1, 2, 3, 4, 5
    count++;
}

//do...while loop
let index = 0;
do {
    console.log(numbers[index]); // Output: 1, 2, 3, 4, 5
    index++;
} while (index < numbers.length);

//Understanding iterators is crucial for effectively working with collections in JavaScript.
//They provide a clean and efficient way to access and manipulate data stored in arrays, strings, and objects.
//Iterators help in writing cleaner and more readable code when dealing with loops and data traversal.
// They are widely used in various JavaScript applications and libraries.