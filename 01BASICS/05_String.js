// String
let str1 = "Hello, World!";
let  str2= " By hii";

console.log("string One :- "+str1 +" and string two :- "+ str2)
console.log(`first string ${str1} and second string ${str2}`)

const name =new String("hello");//create string through object

console.log(name[0])

//String methods
console.log("String length :- "+ str1.length)//length
console.log("String toUpperCase :- "+ str1.toUpperCase())//toUpperCase
console.log("String toLowerCase :- "+ str1.toLowerCase())//toLowerCase
console.log("String concat :- "+ str1.concat(str2))//concat
console.log("String charAt :- "+ str1.charAt(7))//charAt
console.log("String indexOf :- "+ str1.indexOf("o"))//indexOf
console.log("String includes :- "+ str1.includes("World"))//includes
console.log("String slice :- "+ str1.slice(0,5))//slice
console.log("String replace :- "+ str1.replace("World","JavaScript"))//replace
console.log("String split :- "+ str1.split(","))//split
console.log("String trim :- "+ "   Hello   ".trim())//trim      
console.log("String startsWith :- "+ str1.startsWith("Hello"))//startsWith
console.log("String endsWith :- "+ str1.endsWith("!"))//endsWith
console.log("String repeat :- "+ str1.repeat(2))//repeat    
console.log("String substring :- "+ str1.substring(0,5))//substring
console.log("String charCodeAt :- "+ str1.charCodeAt(0))//charCodeAt
console.log("String lastIndexOf :- "+ str1.lastIndexOf("o"))//lastIndexOf
console.log("String match :- "+ str1.match(/o/g))//match
console.log("String search :- "+ str1.search("World"))//search
console.log("String padStart :- "+ str1.padStart(20,"*"))//padStart
console.log("String padEnd :- "+ str1.padEnd(20,"*"))//padEnd

//let str1 = "Hello, World!";
//let str2 = " JavaScript";
// -----------------------------------------------------------------------------
// | Method              | Description        | Example Output                 |
// | ------------------- | ------------------ | ------------------------------ |
// | `length`            | Count characters   | 13                             |
// | `toUpperCase()`     | Uppercase letters  | `"HELLO, WORLD!"`              |
// | `toLowerCase()`     | Lowercase letters  | `"hello, world!"`              |
// | `concat()`          | Joins strings      | `"Hello, World! JavaScript"`   |
// | `charAt(7)`         | Character at index | `"W"`                          |
// | `indexOf("o")`      | First index        | 4                              |
// | `includes("World")` | Check substring    | `true`                         |
// | `slice(0,5)`        | Extract part       | `"Hello"`                      |
// | `replace()`         | Replace text       | `"Hello, JavaScript!"`         |
// | `split(",")`        | String → Array     | `["Hello", " World!"]`         |
// | `trim()`            | Remove spaces      | `"Hello"`                      |
// | `startsWith("He")`  | Start check        | `true`                         |
// | `endsWith("!")`     | End check          | `true`                         |
// | `repeat(2)`         | Repeat string      | `"Hello, World!Hello, World!"` |
// | `substring(0,5)`    | Extract substring  | `"Hello"`                      |
// | `charCodeAt(0)`     | ASCII code         | `72`                           |
// | `lastIndexOf("o")`  | Last index         | 8                              |
// | `match(/o/g)`       | Find matches       | `["o","o"]`                    |
// | `search("World")`   | Search index       | 7                              |
// | `padStart(20,"*")`  | Add padding start  | `"******Hello, World!"`        |
// | `padEnd(20,"*")`    | Add padding end    | `"Hello, World!******"`        |
// -----------------------------------------------------------------------------