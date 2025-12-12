"use strict"; // treat all JS code as modern

// Datatypes

// Number   typeof number is number
let num = 42;
console.log("Number:", num);

// String    typeof string is string
let str = "Hello, World!";
console.log("String:", str);
let name = 'Raj';
let msg = `Hello ${name}`;
console.log("Template Literal String:", msg);
 
// Boolean  typeof boolean is boolean
let bool = true;
console.log("Boolean:", bool);     

// Undefined   typeof undefined is undefined
let undef;
console.log("Undefined:", undef);

// Null  typeof null is object (this is a known quirk in JavaScript)
let nll = null;
console.log("Null:", nll);

// Object  typeof object is object
let obj = { name: "Alice", age: 30 };
console.log("Object:", obj);

// Array   typeof array is object
let arr = [1, 2, 3, 4, 5];
console.log("Array:", arr);

// Symbol  typeof symbol is symbol
let sym = Symbol("unique");
console.log("Symbol:", sym);

// BigInt    typeof bigint is bigint
let bigIntNum = BigInt(9007199254741991);
let Big=1234356765634213456787965n;
console.log("BigInt:", bigIntNum); 

// Function    typeof function is function   
// we can define function in two ways

// Function Declaration
function add(a, b) {
    return a + b;
}
console.log("Function Declaration (Add):", add(5, 3));

// Function Expression
const multiply = function (a, b) {
    return a * b;
};
console.log("Function Expression (Multiply):", multiply(5, 3));

// Arrow Function
const subtract = (a, b) => a - b;
console.log("Arrow Function (Subtract):", subtract(5, 3));

         
function greet() {


    return "Hello!";                    
}
console.log("Function:", greet());  

// Demonstrating dynamic typing    typeof dynamicVar changes as its value changes
var dynamicVar = 10; // Initially a number
console.log("Dynamic Variable (Number):", dynamicVar);

dynamicVar = "Now I'm a string"; // Now a string
console.log("Dynamic Variable (String):", dynamicVar);

dynamicVar = { key: "value" }; // Now an object
console.log("Dynamic Variable (Object):", dynamicVar);   



// End of Datatypes.js
