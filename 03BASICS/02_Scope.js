//Scopes
let a=10; //Global Scope
const b=20; //Global Scope
var c=30; //Global Scope

console.log("Global Scope:", a, b, c); // Output: Global Scope: 10 20 30

if(true){
    let a=40; //Block Scope
    const b=50; //Block Scope
    var c=60; //Function Scope (not block scope)
    console.log("Inside Block Scope:", a, b, c); // Output: Inside Block Scope: 40 50 60
}
console.log("Outside Block Scope:", a, b, c); // Output: Outside Block Scope: 10 20 60
//var fuction scope ke bahar bhi access kar sakte hain.
//var ko avoid karna chahiye kyuki ye kabhi kabhi unexpected behavior de sakta hai.

//Nested Function Scope

// ander wala function bahar wale function ke variables ko access kar sakta hai lekin
// bahar wala function ander wale function ke variables ko access nahi kar sakta hai.
//isse lexical scoping kehte hain.
// same as closure. and closure me hum ander wale function ko bahar return kar sakte hain.
//Example:
function one(){
    const username="John"; //Function Scope of one()
    function two(){
        const website="yotube.com"; //Function Scope of two()
        console.log("username:", username); // Accessing username from outer function
}
two();
console.log("website:", website); // Error: website is not defined
}
one();

//+++++++++++++++++++++Interesting Part++++++++++++++++++++++//

console.log(addone(5)); //6 ye run ho jayega kyuki function declaration hai.
console.log(addtwo(5)); //Error: addtwo is not defined kyuki ye function expression hai.
function addone(value){
    return value+1;
}

const result=function addtwo(value){
    return addone(value)+1;
}
console.log(result(5)); //7 ye run ho jayega kyuki ab result me function assign ho chuka hai.
    