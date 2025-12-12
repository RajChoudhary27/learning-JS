//Promises are used to handle asynchronous operations in JavaScript. They represent a value that may be available now, in the future, or never.

//Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation using setTimeout
    setTimeout(() => {
        const success = true; // Change this to false to simulate an error
        if (success) {
            resolve("Operation was successful!");
        } else {
            reject("Operation failed.");
        }
    }, 2000);
});

//Consuming a Promise
myPromise
    .then((message) => {
        console.log("Success:", message);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Promise has been settled (either resolved or rejected).");
    });
    
//Promise are widely used for handling asynchronous tasks such as API requests, file operations, and timers, providing a cleaner and more manageable way to work with asynchronous code compared to traditional callback functions.

//Pass argument to resolve and reject function
const Promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ data: 'Sample Data' });
    }, 1000);
});
Promise2.then(function(user) {
    console.log(user); // Output: Sample Data
})

const promisethree= new Promise(function(resolve, reject) {
    
    setTimeout(function() {
      let error= false;
      if(!error){
        resolve({ data: 'Sample Data' });
      } else {
        reject('Error: Something went wrong');
      }
    }, 1000);});

promisethree.then(function(user) {
    console.log(user); 
    return user.username;
}).catch(function(error) {
    console.log(error); // Output: Error: Something went wrong
}).finally(function() {
    console.log('Promise is settled');
});



const promisefour= new Promise(function(resolve, reject) {
    
    setTimeout(function() {
      let error= false;
      if(!error){
        resolve({username:"Hello" });
      } else {
        reject('Error: Something went wrong');
      }
    }, 1000);});

    async function consumepromisefour() {
        try{
       const response=await promisefour
       console.log(response);
    } catch(error){
        console.log(error);
    }
    //async or await directly cannot handle error we have to use try catch block
    consumepromisefour();
    }

    //------------------------------------
    async function getAllUsers() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
           // console.log(response);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }   
    getAllUsers();  
    //------------------------------------
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching posts:', error)); 