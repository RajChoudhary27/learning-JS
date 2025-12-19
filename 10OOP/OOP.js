// In Javascript , Object-Oriented Programming (OOP) is a programming paradigm that uses "objects" to represent data and methods to manipulate that data. OOP in JavaScript is primarily based on prototypes rather than classes, although ES6 introduced class syntax to make it easier to work with objects in an OOP style.

// Here is a simple example of OOP in JavaScript using classes:
// Define a class
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    speak() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

// Create instances of the class
const dog = new Animal('Dog', 'Woof');
const cat = new Animal('Cat', 'Meow');

// Call methods on the instances
dog.speak(); // Output: Dog says Woof
cat.speak(); // Output: Cat says Meow

// In this example, we define a class `Animal` with a constructor that initializes the `name` and `sound` properties. The `speak` method is defined to log a message to the console. We then create instances of the `Animal` class for a dog and a cat, and call their `speak` methods to demonstrate polymorphism.

//OOP in JavaScript allows for encapsulation, inheritance, and polymorphism, enabling developers to create modular and reusable code.
// Define a class
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    speak() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

// Create instances of the class
const dog1= new Animal('Dog', 'Woof');
const cat1 = new Animal('Cat', 'Meow');

// Call methods on the instances
dog.speak(); // Output: Dog says Woof
cat.speak(); // Output: Cat says Meow

// In this example, we define a class `Animal` with a constructor that initializes the `name` and `sound` properties. The `speak` method is defined to log a message to the console. We then create instances of the `Animal` class for a dog and a cat, and call their `speak` methods to demonstrate polymorphism.

// OOP in JavaScript allows for encapsulation, inheritance, and polymorphism, enabling developers to create modular and reusable code.

//constructor function
function Animal1(name, sound) {
    this.name = name;
    this.sound = sound;
}

Animal1.prototype.speak = function() {
    console.log(`${this.name} says ${this.sound}`);
};

// Create instances of the constructor function
const dog2 = new Animal1('Dog', 'Woof');
const cat2 = new Animal1('Cat', 'Meow');

// Call methods on the instances
dog2.speak(); // Output: Dog says Woof
cat2.speak(); // Output: Cat says Meow

// In this example, we define a constructor function `Animal1` that initializes the `name` and `sound` properties. The `speak` method is added to the prototype of the constructor function. We then create 7 instances of the `Animal1` constructor for a dog and a cat, and call their `speak` methods to demonstrate polymorphism.

// OOP in JavaScript allows for encapsulation, inheritance, and polymorphism, enabling developers to create modular and reusable code. 