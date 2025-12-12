//Javascript mai objects key-value pairs ka collection hote hai.
//ye ek complex data type hai jo real-world entities ko represent karte hai.
//isme hum properties (key-value pairs) aur methods (functions) define kar sakte hai.

//Singleton
// object literal.
//Object literal ek simple aur direct tarika hai object banane ka, bina kisi class ya constructor ke.
// Ye curly braces {} ka use karke key–value pairs define karta hai.

//Creating an object
const sym1 = Symbol('key1');
let person = {
    name: 'John',
    age: 30,
    email:"John@gmail.com",
    [sym1]: 'This is a symbol property',  //symbol ko bracket notation me hi access kar sakte hai kyuki ye unique hota hai.
   greet: function() {
        console.log("Hello!");
    }
};
console.log(person.name); // Accessing property
console.log(person.age);  // Accessing property
console.log(person[sym1]); // Accessing symbol property
console.log(person['name']); // Accessing property using bracket notation
//dono acess karne ke tarike mai difference ye hai ki
//dot notation tab use karte hai jab property name valid identifier ho
//bracket notation tab use karte hai jab property name space ya special character contain karta ho ya variable ho
//Modifying object properties
person.age = 31;
person['email'] = "johnnew@gmail.com";
console.log("Modified Person Object :- ", person); // Modified object
// Object.freeze(person); // Freezing the object to prevent further modifications
 person.age = 32; // This will not work as the object is frozen
 console.log("After trying to modify frozen object :- ", person); // Object remains unchanged

//Adding new properties
person.address = "123 Main St";
console.log("Person Object after adding address :- ", person); // Object after adding new property

person.greeting = function() {
    console.log("Hello, my name is " + this.name);
    console.log(`My age is ${this.age}`);
};
console.log(person.greeting()); // Calling the new method
console.log(person.greeting);//sirf function reference aaya hai print nahi hua. output - [Function (anonymous)]

//Deleting properties
delete person.email;
console.log("Person Object after deleting email :- ", person); // Object after deleting property
