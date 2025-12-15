//Arrow Functions

//Traditional Function
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5

//Arrow Function
const addArrow = (a, b) => {
    return a + b;
};
console.log(addArrow(2, 3)); // Output: 5

//Concise Arrow Function or Implicit Return
const addConcise = (a, b) => a + b;  // only one expression hai to curly braces or return statement ki jarurat nahi hai.
console.log(addConcise(2, 3)); // Output: 5 

//Single Parameter Arrow Function
const square = x => x * x;  // parentheses are optional for single parameter
console.log(square(4)); // Output: 16

//No Parameter Arrow Function
const greet = () => 'Hello, World!';
console.log(greet()); // Output: Hello, World!

//Arrow Function with Object Return
const createUser = (name, age) => ({ name: name, age: age });
console.log(createUser('Alice', 30)); // Output: { name: 'Alice', age: 30 }

//Arrow Function and 'this' Keyword
const person = {
    name: 'John',
    greetTraditional: function() {
        console.log('Hello, ' + this.name);
    },
    greetArrow: () => {
        console.log('Hello, ' + this.name); // 'this' does not refer to person object
    }
};

person.greetTraditional(); // Output: Hello, John
person.greetArrow(); // Output: Hello, undefined (or global object's name if defined)

//Using Arrow Functions in Array Methods
const numbers = [1, 2, 3, 4, 5];

//Using map with traditional function
const doubledTraditional = numbers.map(function(num) {
    return num * 2;
});
console.log(doubledTraditional); // Output: [2, 4, 6, 8, 10]

//Using map with arrow function
const doubledArrow = numbers.map(num => num * 2);
console.log(doubledArrow); // Output: [2, 4, 6, 8, 10]

//Using filter with arrow function
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4] 
//Using reduce with arrow function
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15 
//Arrow functions are more concise and do not have their own 'this', making them suitable for certain scenarios like array methods.
//However, they should be used with caution when dealing with object methods that rely on 'this'.
//arrow functions ka use tab karna chahiye jab hume apne function ke andar apne surrounding context ka this chahiye hota hai.
// arrow functions ko hum event handlers me bhi use kar sakte hain lekin waha bhi hume dhyan rakhna chahiye ki this ka reference kya hoga.
//End of Arrow Functions

const user = {
    name: 'Alice',
price: 25,
welcomeMessage: function() {
    console.log(`Welcome, ${this.name}! Your price is ${this.price}.`);
    console.log(this); // 'this' refers to the user object. output
}
};
console.log(this); // 'this' refers to the global object (or undefined in strict mode)
//brower me window object ko refer karta hai.this keyword.

function chai(){
    console.log(this); // 'this' refers to the global object (or undefined in strict mode)
}
chai();

