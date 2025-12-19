//ye Object ki hidden properties aur methods ko return karta hai.

Object.getOwnPropertyDescriptor(Math);
//Object.getOwnPropertyDescriptors(Math,Math.PI);

// Math object ke methods ko use karte hue pi ka value calculate karna
class MathPi {
    constructor() {
        this.piValue = Math.PI; // Math object se pi ki value lena
    }

    getPi() {
        return this.piValue; // pi ki value return karna
    }

    calculateCircumference(radius) {
        return 2 * this.piValue * radius; // Circumference calculate karna
    }

    calculateArea(radius) {
        return this.piValue * radius * radius; // Area calculate karna
    }
}

// MathPi class ka instance banana
const mathPiInstance = new MathPi();

// Pi ki value print karna
console.log("Value of Pi:", mathPiInstance.getPi());

// Circumference aur Area calculate karna
const radius = 5;
console.log(`Circumference of circle with radius ${radius}:`, mathPiInstance.calculateCircumference(radius));
console.log(`Area of circle with radius ${radius}:`, mathPiInstance.calculateArea(radius));

// Output:
// Value of Pi: 3.141592653589793
// Circumference of circle with radius 5: 31.41592653589793
// Area of circle with radius 5: 78.53981633974483

// Is example mein, humne MathPi class define ki hai jo Math object ke PI property ka use karti hai. Humne methods banaye hain jo circumference aur area calculate karte hain given radius ke liye. Fir humne MathPi class ka instance