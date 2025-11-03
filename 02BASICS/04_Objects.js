//Singleton 
//Definition:
//Singleton ka matlab hota hai — sirf ek hi instance (object) create hona chahiye puri application me.
//JavaScript me Singleton object hum tab banate hain jab sirf ek object chahiye jo globally use ho sake.

const tinderuser=new Object(); //Object Creation using Object Constructor. Singleton Object

tinderuser.id="tinder001";
tinderuser.name="John Doe";
tinderuser.age=28;
tinderuser.isLoggedIn=true;

console.log("Tinder User Object :- ", tinderuser); //Printing Object

const tinderuser2={}; //Object Creation using Object Literal. 
//Yeh bhi ek Singleton Object hai kyunki humne sirf ek hi object create kiya hai.
//upper wala bhi singleton hai aur yeh wala bhi singleton hai.dono me fark sirf object creation ka tarika hai.

//Nested Singleton Object
const appConfig={
    appName:"ChatGPT",
    version:"1.0.0",
    developer:{
        name:"OpenAI",
        website:"https://openai.com"
    },
    features:{
        aiChat:true,
        codeGeneration:true,
        languageTranslation:true
    }
};

console.log("App Config Object :- ", appConfig); //Printing Nested Object

//Accessing Nested Object Properties
console.log("Developer Name :- ", appConfig.developer.name); //Accessing nested property
console.log("AI Chat Feature Enabled :- ", appConfig.features.aiChat); //Accessing nested property

//adding two objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3= Object.assign({}, obj1, obj2); // Merging two objects using Object.assign
console.log("Merged Object using Object.assign :- ", obj3); // Printing Merged Object
//output me alag alag dikhayega { a: 1, b: 2, c: 3, d: 4 }
//object.assign me pehla argument target hota hai jisme baaki objects ke properties copy karne hote hain.
const merge={obj1,obj2};//output me alag alag dikhayega { obj1: { a: 1, b: 2 }, obj2: { c: 3, d: 4 } }
const mergedObj = { ...obj1, ...obj2 }; // Merging two objects using spread operator
//modern way of merging objects. aab hum yahi use karte hain zyaada tar.
console.log("Merged Object :- ", mergedObj); // Printing Merged Object

//Database se data array of objects ke form me aata hai.
const usersFromDB=[
    {id:1, name:"Alice", age:25},
    {id:2, name:"Bob", age:30},
    {id:3, name:"Charlie", age:28}
];

console.log("Users from Database :- ", usersFromDB); //Printing Array of Objects
console.log(Object.keys(usersFromDB)); //Getting keys of first object in array
console.log(Object.values(usersFromDB)); //Getting values of first object in array
console.log(Object.entries(usersFromDB)); //Getting entries of first object in array
console.log(usersFromDB.hasOwnProperty('age')); //Checking if property exists in first object in array

//Accessing properties of objects in array
usersFromDB.forEach(user => {
    console.log(`User ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
});
//Yeh sabse common use case hai objects ka JavaScript me.
