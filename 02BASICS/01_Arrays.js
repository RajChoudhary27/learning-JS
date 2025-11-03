//Arrays
//arrays are used to store multiple values in a single variable
//Array use shallow copy means ki agar hum ek array ko dusre array me assign karte hain to dono arrays same memory location ko point karte hain.
//Array can hold values of different data types so it is a heterogeneous data structure.
//deep copy can be created using slice() or spread operator and used to modify without affecting original array.

//Creating an array
let fruits = ['Apple', 'Banana', 'Orange'];
console.log("Fruits Array :- "+ fruits)//fruits array

//Accessing array elements
console.log("First Fruit :- "+ fruits[0])//first fruit
console.log("Second Fruit :- "+ fruits[1])//second fruit

//Modifying array elements
fruits[2] = 'Mango';
console.log("Modified Fruits Array :- "+ fruits)//modified fruits array
//element at index 2 changed from Orange to Mango. Now fruits array is ['Apple', 'Banana', 'Mango']

//Array length
console.log("Fruits Array Length :- "+ fruits.length)//fruits array length

//Adding elements to an array
fruits.push('Grapes');      // End me add karega
console.log("Fruits Array after Push :- "+ fruits)//fruits array after push

let arr1=[10, 20, 30, 40, 50];
arr1.unshift(5); //adding element at the beginning
console.log("Array after Unshift :- "+ arr1)//array after unshift

//Removing elements from an array
fruits.pop();   // End se remove karega
console.log("Fruits Array after Pop :- "+ fruits)//fruits array after pop

arr1.shift(); //removing element from the beginning
console.log("Array after Shift :- "+ arr1)//array after shift

//Iterating through an array
console.log("Iterating through Fruits Array :- ");
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// for (let variable of iterable) {
//     code block
// }
console.log("Iterating through Fruits Array using for...of :- ");
for(let fruit of fruits){
    console.log(fruit);
}
//https://chatgpt.com/c/6903a24f-4554-8322-ba8c-9601bf9c1038
//Array methods
const arr=new Array();
arr.push(10);
arr.push(20);
arr.push(30);
console.log("Array after Push Operations :- "+ arr)//array after push operations

let removedElement = arr.pop();
console.log("Removed Element using Pop :- "+ removedElement)//removed element
console.log("Array after Pop Operation :- "+ arr)//array after pop operation

console.log("Array Length :- "+ arr.length)//array length
console.log("Includes 20 in Array :- "+ arr.includes(20))//includes 20 in array.new array me 20 hai to true return karega
console.log("Indexof 30 in Array :- "+ arr.indexOf(30))//index of 30 in array means 30 ka index kya hai array me vo return karega.agar 30 nahi hoga to -1 return karega
const newarr =arr.join();  //converting array to string used in csv files or data transfer between systems.
console.log("Array converted to String using Join :- "+ newarr)//array converted to string.naya string me convert ho gaya hai ab vo comma separated values ban gaya hai.
//usko dusri memory me store kar leta hai as a string.

// ----------------------------------------------------------------------------------------------------
// | Method         | Description                          | Example Output                           |
// | -------------- | ------------------------------------ | -------------------------                |
// | `push()`       | Add element to end of array          | `['Apple', 'Banana', 'Mango', 'Grapes']` |
// | `pop()`        | Remove last element from array       | `['Apple', 'Banana', 'Mango']`           |
// | `length`       | Get number of elements in array      | `3`                                      |   
// | 'Includes()'   | Check if element exists in array     | `true` (for element `20`)                |
// | 'indexOf()'    | Get index of element in array        | `2` (for element `30`)                   |
// | 'join()'       | Convert array to string              | `'Apple,Banana,Mango'`                   |
// ----------------------------------------------------------------------------------------------------    
// ----------------------------------------------------------------------------
// Example Outputs may vary based on the operations performed on the arrays.
// -----------------------------------------------------------------------------                


let index = arr1.indexOf(30);
console.log("Index of 30 in Array :- "+ index)//index of 30 in array

//splice(start, deleteCount, item1, item2, ...)
arr1.splice(2, 1); //removing element at index 2
console.log("Array after Splice :- "+ arr1)//array after splice

let arr2 = [10, 20, 30, 40, 50];

// Remove elements
arr.splice(1, 2); 
console.log(arr2); // [10, 40, 50]

// Add elements
arr.splice(1, 0, 25, 35);
console.log(arr2); // [10, 25, 35, 40, 50]

// Replace elements
arr.splice(2, 1, 99);
console.log(arr2); // [10, 25, 99, 40, 50]
//original array me changes hote hain splice me

let slicedArray = arr2.slice(1, 3); //slicing array from index 1 to 3
console.log("Sliced Array (index 1 to 3) :- "+ slicedArray)//sliced array output-- [20, 30]
//original array remains unchanged
console.log("Original Array after Slicing :- "+ arr2)//original array after slicing
// --------------------------------------------------------------------------------------------
// | Method         | Description                            | Example Output                 |
// | -------------- | -------------------------------------- | ------------------------------ |
// | `unshift()`    | Add element to beginning of array      | `[5, 10, 20, 30, 40, 50]`      |
// | `shift()`      | Remove first element from array        | `[10, 20, 30, 40, 50]`         |
// | `indexOf()`    | Get index of element in array          | `2` (for element `30`)         |        
// | `splice()`     | Remove element(s) from array           | `[10, 20, 40, 50]`             |
// | `slice()`      | Create new array from portion of array | `[20, 30]` (from index 1 to 3) |
// --------------------------------------------------------------------------------------------       
//let arr1=[10, 20, 30, 40, 50];
// ----------------------------------------------------------------------------
// Example Outputs may vary based on the operations performed on the arrays.
// -----------------------------------------------------------------------------

// ⚙️ 5. Array Searching and Sorting

// 🔹 indexOf() & includes()
let colors = ["red", "green", "blue"];
console.log(colors.indexOf("green")); // 1
console.log(colors.includes("black")); // false

// 🔹 sort() & reverse()
let nums = [3, 1, 5, 2];
nums.sort();        // [1,2,3,5] sort in ascending order
nums.reverse();     // [5,3,2,1] reverse the array used to get descending order


// ⚠️ Note: sort() strings ke basis pe sort karta hai.
// For numbers:

nums.sort((a, b) => a - b); // Correct number sorting
console.log("Sorted Numbers Array :- "+ nums)//sorted numbers array


//Deep copy using slice()
let deepCopyArray1 = arr1.slice();
deepCopyArray1[0] = 99;
console.log("Original Array after Deep Copy using Slice :- "+ arr1)//original array
console.log("Deep Copied Array using Slice :- "+ deepCopyArray1)//deep copied array
//Deep  copy original array me changes nahi hote hain.jabtak hum deep copy bana ke usme changes karte hain to original array unaffected rehta hai.
//Deep copy using spread operator
let deepCopyArray2 = [...fruits];
deepCopyArray2[0] = 'Pineapple';
console.log("Original Fruits Array after Deep Copy using Spread Operator :- "+ fruits)//original fruits array
console.log("Deep Copied Fruits Array using Spread Operator :- "+ deepCopyArray2)//deep copied fruits array