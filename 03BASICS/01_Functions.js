//Function
//A function is a block of code designed to perform a particular task.
//It is executed when "something" invokes or calls it.
//it is used to organize code into reusable blocks.
//instead of writing the same code multiple times, you can define a function once and call it whenever needed.
//their are two main ways to define functions in JavaScript: Function Declarations and Function Expressions.
//Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}

//Function Call
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Bob"));   // Output: Hello, Bob!

function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(10, 20));

//Function Expression
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // Output: 8
console.log(add()); // Output: NaN because a and b are undefined.
//in string case its output is undefined .

//Example of sopping cart here we can use functions to add items.
//apan ko nahi pata hota hai ki kitne items add karne hain isliye hum rest parameter use karte hain.
function addToCart(...items) {
    console.log("Items added to cart:", items);
}
addToCart("Apple", "Banana", "Orange"); // Output: Items added to cart: [ 'Apple', 'Banana', 'Orange' ]
addToCart("Milk", "Bread"); // Output: Items added to cart: [ 'Milk', 'Bread' ]

//Function to calculate total price of items in cart
function calculateTotalPrice(...prices) {
    let total = 0;
    for (let price of prices) {
        total += price;
    }
    return total;
}
console.log("Total Price:", calculateTotalPrice(10, 20, 30)); // Output: Total Price: 60
console.log("Total Price:", calculateTotalPrice(5, 15)); // Output: Total Price: 20

//OBJECT ko function ke andar bhi pass kar sakte hain or array bhi kar sakte hai pass.
const user1 = { name: "Alice", age: 25 };
const user2 = { name: "Bob", age: 30 };
function displayUserInfo(user) {
    console.log(`User Name: ${user.name}, Age: ${user.age}`);
}
displayUserInfo(user1); // Output: User Name: Alice, Age: 25
displayUserInfo(user2); // Output: User Name: Bob, Age: 30

//Function to update user age
function updateUserAge(user, newAge) {
    user.age = newAge;
    return user;
}
const updatedUser = updateUserAge(user1, 26);
console.log("Updated User:", updatedUser); // Output: Updated User: { name: 'Alice', age: 26 }

//Function to merge two objects
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const objA = { a: 1, b: 2 };
const objB = { c: 3, d: 4 };
const merged = mergeObjects(objA, objB);
console.log("Merged Object:", merged); // Output: Merged Object: { a: 1, b: 2, c: 3, d: 4 }

//Function to find the maximum number in an array
function findMaxNumber(numbers) {
    return Math.max(...numbers);
}
const numArray = [10, 5, 20, 15];
console.log("Maximum Number:", findMaxNumber(numArray)); // Output: Maximum Number: 20

//Function to filter even numbers from an array
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
console.log("Even Numbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: Even Numbers: [ 2, 4, 6 ]
