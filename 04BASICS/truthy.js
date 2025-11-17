//Truthy values and Falsy values in JavaScript

// In JavaScript, values can be classified as "truthy" or "falsy" based on how they are evaluated in boolean contexts, such as in conditional statements.

// Falsy values:
// The following values are considered falsy in JavaScript:
// 1. false
// 2. 0 (zero),-0
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN (Not a Number)
// 7. BigInt(0)n

// Example of falsy values:
let falsyValues = [false, 0, "", null, undefined, NaN];

falsyValues.forEach(value => {
    if (!value) {
        console.log(`${value} is falsy`);
    }
});

// Truthy values:
// Any value that is not falsy is considered truthy. This includes:
// 1. true
// 2. Non-zero numbers (e.g., 1, -1, 3.14)
// 3. Non-empty strings (e.g., "hello", "0")
// 4. Objects (e.g., {}, [])
// 5. Functions

// Example of truthy values:
let truthyValues = [true, 1, -1, 3.14, "hello", "0", {}, []];

truthyValues.forEach(value => {
    if (value) {
        console.log(`${JSON.stringify(value)} is truthy`);
    }
});

// Understanding truthy and falsy values is important for writing effective conditional statements and controlling the flow of your JavaScript programs.

// Example usage in conditional statements:
let testValues = [0, 1, "", "JavaScript", null, {}, undefined, NaN, [], -5];

for(let val of testValues) {
    if (val) {
        console.log(`${JSON.stringify(val)} is evaluated as true`);
    } else {
        console.log(`${JSON.stringify(val)} is evaluated as false`);
    }
}

// This knowledge helps in making decisions in your code based on the evaluation of different values.
// For example:
let userInput = ""; // This could be input from a user

if (userInput) {
    console.log("User provided input: " + userInput);
} else {
    console.log("No input provided by the user.");
}

// In this example, since userInput is an empty string (falsy), the else block will execute.

// Overall, understanding truthy and falsy values is crucial for effective programming in JavaScript.
// They play a significant role in control flow and decision-making processes within your code.     
//-------------------------------------------------------------------------------------

//Null vs Undefined in JavaScript

// In JavaScript, both null and undefined represent the absence of a value, but they are used in different contexts and have different meanings.

// 1. Undefined:
// - A variable that has been declared but not assigned a value is undefined.
// - A function that does not return a value implicitly returns undefined.
// - Accessing a non-existent property of an object results in und  defined.
let a;
console.log(a); // Output: undefined

function noReturn() {}
console.log(noReturn()); // Output: undefined

let obj = {};
console.log(obj.nonExistentProperty); // Output: undefined

// 2. Null:
// - Null is an assignment value that represents the intentional absence of any object value.
// - It is often used to indicate that a variable should have no value or to reset a variable.
let b = null;
console.log(b); // Output: null

let person = {
    name: "Alice",
    age: 30
};
person.age = null; // Indicating that age is intentionally set to no value
console.log(person.age); // Output: null

// Key Differences:
// - Type: Undefined is a type itself (undefined), while null is an object type.
// - Usage: Undefined typically indicates that a variable has not been initialized, while null is used to signify an intentional absence of value.
// - Equality: In comparisons, null and undefined are loosely equal (==) but not strictly equal (===).
console.log(null == undefined); // Output: true
console.log(null === undefined); // Output: false

// Summary:
// - Use undefined to indicate that a variable has not been assigned a value.
// - Use null to indicate the intentional absence of any object value.
// Understanding the distinction between null and undefined is important for effective JavaScript programming and helps avoid potential bugs in your code.
let age;
if (age === undefined) {
    console.log("Age is undefined, please provide a value.");
}

age = null;
if (age === null) {
    console.log("Age is intentionally set to null.");
}

// This distinction is crucial for handling variables and data effectively in JavaScript applications.  
let isMember = true;
let access = isMember ? "Granted" : "Denied";
console.log("Access: " + access); // Output: Access: Granted        

// Another example with falsy value
let userScore = 0;
let message = userScore ? "You have points!" : "No points available.";
console.log(message); // Output: No points available.   
// Example with truthy value
let userName = "John";
let greeting = userName ? `Hello, ${userName}!` : "Hello, Guest!";
console.log(greeting); // Output: Hello, John!

// The conditional (ternary) operator is a concise way to perform conditional checks and assign values based on those checks.
// It is especially useful for simple conditions and can help make the code more readable.
// However, for more complex conditions, traditional if...else statements may be more appropriate for clarity.

// In summary, the conditional (ternary) operator is a powerful tool in JavaScript for making quick decisions and assignments based on conditions.
// It enhances code brevity and readability when used appropriately.

//-----------------------------------------------------------------

// Nullish Coalescing Operator (??) in JavaScript

// The nullish coalescing operator (??) is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined.
// It is useful for providing default values when dealing with potentially nullish values.

// Syntax:
// leftOperand ?? rightOperand

// Example 1: Using nullish coalescing operator
let user1Input = null;
let defaultValue = "Default Value";

let result = user1Input ?? defaultValue;
console.log(result); // Output: Default Value

// Example 2: When the left operand is undefined
let anotherInput;
let anotherResult = anotherInput ?? "Another Default";
console.log(anotherResult); // Output: Another Default

// Example 3: When the left operand is a valid value
let validInput = "User Provided Value";
let validResult = validInput ?? "Fallback Value";
console.log(validResult); // Output: User Provided Value

// Comparison with Logical OR (||) Operator:
// The logical OR operator (||) returns the right-hand operand if the left-hand operand is falsy (which includes null, undefined, 0, "", false, NaN).
// In contrast, the nullish coalescing operator (??) only considers null and undefined as nullish.

let falsyValue = 0;
let orResult = falsyValue || "Fallback for OR";
let nullishResult = falsyValue ?? "Fallback for Nullish";

console.log(orResult); // Output: Fallback for OR
console.log(nullishResult); // Output: 0

// Summary:
// The nullish coalescing operator (??) is a useful tool for handling default values in JavaScript.
// It specifically checks for null and undefined, making it more precise than the logical OR operator (||) in certain scenarios.
// This operator helps in writing cleaner and more predictable code when dealing with optional values.

// Example usage in functions:
function getUserName(name) {
    return name ?? "Guest";
}

console.log(getUserName(null)); // Output: Guest
console.log(getUserName("Alice")); // Output: Alice

// Understanding and utilizing the nullish coalescing operator effectively can enhance code readability and maintainability in JavaScript applications.
