//Control flow statements are used to control the flow of execution in a program based on certain conditions or loops.
//They allow us to make decisions, repeat actions, and branch our code based on different scenarios.

//1. Conditional Statements:
//These statements allow us to execute certain blocks of code based on specific conditions.

//if statement
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

//switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
}

//2. Looping Statements:
//These statements allow us to repeat a block of code multiple times based on certain conditions.

//for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);  
}

//while loop
let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}

//do...while loop
let num = 0;
do {
    console.log("Number is: " + num);
    num++;
} while (num < 5);

//3. Control Flow with Functions:
//Functions can also control the flow of execution by returning values or calling other functions.

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let result = checkEvenOdd(7);
console.log("The number is: " + result); // Output: The number is: Odd

//In summary, control flow statements are essential for directing the execution of code based on conditions and loops, enabling dynamic and flexible programming.
// They help in making decisions and repeating actions efficiently.
// Understanding and utilizing these statements effectively is crucial for writing robust JavaScript applications.
//4. Break and Continue Statements:
//These statements are used to alter the flow of loops.

//break statement - exits the loop entirely
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log("Break Loop Iteration: " + i);
}

//continue statement - skips the current iteration and continues with the next one
for (let j = 0; j < 10; j++) {
    if (j % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log("Continue Loop Iteration: " + j);
}

//5. Ternary Operator:
//A shorthand for if-else statements that returns a value based on a condition.
let score = 85;
let grade = (score >= 90) ? 'A' :
            (score >= 80) ? 'B' :
            (score >= 70) ? 'C' :
            (score >= 60) ? 'D' : 'F';
console.log("Your grade is: " + grade); // Output: Your grade is: B 
//This completes the overview of control flow statements in JavaScript.
//These constructs are fundamental for building logic in your programs and applications.
//Understanding how to use them effectively will greatly enhance your coding skills.
// End of ControlFlow.js