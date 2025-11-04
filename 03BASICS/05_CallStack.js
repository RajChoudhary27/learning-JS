//Javascript Execution Context and Call Stack
//in it we will see how the call stack works in JavaScript by creating a few functions that call each other
//and observing how the call stack manages the execution contexts of these functions.
//their are two types of execution contexts in JavaScript:
//1.Global Execution Context
//2.Function Execution Context
//3.Eval Execution Context (not commonly used)
//Global Execution Context is created when the script starts executing
//Function Execution Contexts are created when functions are invoked
//eval Execution Contexts are created when eval function is executed

//Phases of Execution Context:
//1.Memory Creation Phase:
//  - Global Object (window in browsers) is created
//  - 'this' keyword is set to point to the global object
//  - Variables and functions are hoisted (memory allocation)
//2.Execution Phase:
//  - Code is executed line by line
//  - Variables are assigned values
//  - Functions are executed
//Here is a simple example to demonstrate the call stack:

function firstFunction() {
    console.log("Inside firstFunction");
    secondFunction();
    console.log("Exiting firstFunction");
}

function secondFunction() {
    console.log("Inside secondFunction");
    thirdFunction();
    console.log("Exiting secondFunction");
}

function thirdFunction() {
    console.log("Inside thirdFunction");
    // No further function calls here
    console.log("Exiting thirdFunction");
}

// Start the execution by calling the first function
firstFunction();    
// Output:
// Inside firstFunction
// Inside secondFunction
// Inside thirdFunction
// Exiting thirdFunction
// Exiting secondFunction
// Exiting firstFunction

// Explanation:
// 1. When firstFunction is called, a new execution context is created and pushed onto the call stack.
// 2. Inside firstFunction, secondFunction is called, creating another execution context on top of the stack.
// 3. Similarly, when thirdFunction is called, its execution context is added to the top of the stack.
// 4. Once thirdFunction completes, its context is popped off the stack, returning control to secondFunction.
// 5. After secondFunction completes, its context is also popped off, returning control to firstFunction.
// 6. Finally, when firstFunction completes, its context is removed from the stack, leaving it empty.   
// This demonstrates how the call stack manages function execution contexts in a LIFO (Last In, First Out) manner.  

// Note: You can visualize the call stack using browser developer tools or online JavaScript visualizers to see how execution contexts are added and removed during function calls