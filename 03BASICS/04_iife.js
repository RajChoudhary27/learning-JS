//Immediately Invoked Function Expression (IIFE)
//IIFE ek aisa function hota hai jo define hote hi turant execute ho jata hai.
//Iska use hum variable scope ko limit karne ke liye karte hain taaki global scope me pollution na ho.
//global scope ke pollution se bachne ke liye hum IIFE ka use karte hain.
(function(){
    let message="Hello from IIFE!";
    console.log(message); // Output: Hello from IIFE!
})();

//IIFE ke andar jo variables hote hain wo bahar access nahi kar sakte hain.
(function(){
    let secret="This is a secret!";
    console.log(secret); // Output: This is a secret!
})();
//console.log(secret); // Error: secret is not defined

//IIFE with Parameters
(function(name){
    console.log("Hello, " + name + " from IIFE!"); // Output: Hello, Alice from IIFE!
})("Alice");

//IIFE returning a value
const result = (function(a, b){
    return a + b;
})(5, 10);
console.log("Result from IIFE:", result); // Output: Result from IIFE: 15

//IIFE to create a module
const Counter = (function(){
    let count = 0; // private variable

    return {
        increment: function(){
            count++;
        },
        getCount: function(){
            return count;
        }
    };
})();

Counter.increment();
Counter.increment();
console.log("Counter Value:", Counter.getCount()); // Output: Counter Value: 2
