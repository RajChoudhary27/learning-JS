const score=400
console.log(score) // output  400

const balance=new Number(100)
console.log(balance)         // output  [Number: 100]

console.log(balance.toString())  //string mai convert ho gya hai aab
//String mai convert karne ke baad ispe bahut saare properties apply kar sakte hai.
console.log(balance.toString().length)   // output 3
console.log(balance.toFixed(2))          //output 100.00


const otherNumber=23.8966
console.log(otherNumber.toPrecision(2))   //output 24

const hundred=10000000
console.log(hundred.toLocaleString('en-IN'))  //10,000,000,000


//Number Methods
console.log("Number isInteger :- "+ Number.isInteger(23.5)) //isInteger
console.log("Number isNaN :- "+ Number.isNaN(NaN)) //isNaN
console.log("Number parseFloat :- "+ Number.parseFloat("23.56abc")) //parseFloat
console.log("Number parseInt :- "+ Number.parseInt("23.56abc")) //parseInt
console.log("Number toFixed :- "+ (23.5678).toFixed(2)) //toFixed
console.log("Number toPrecision :- "+ (23.5678).toPrecision(3)) //toPrecision
console.log("Number toLocaleString :- "+ (1000000).toLocaleString('en-IN')) //toLocaleString

//let num=23.5678
// ----------------------------------------------------------------------------
// | Method                   | Description               | Example Output    |
// | -------------------------| --------------------------| ------------------|
// | `isInteger(23.5)`  n     | Check integer             | `false`           |
// | `isNaN(NaN)`             | Check NaN                 | `true`            |
// | `parseFloat("23.56abc")` | Convert string to float   | `23.56`           |
// | `parseInt("23.56abc")`   | Convert string to integer | `23`              |
// | `toFixed(2)`             | Fixed decimal places      | `"23.57"`         |
// | `toPrecision(3)`         | Significant digits        | `"23.6"`          |
// | `toLocaleString('en-IN')`| Localized format          | `"10,00,000"`     |
// -----------------------------------------------------------------------------

//Math Methods

console.log("Math round :- "+ Math.round(4.6)) //round
console.log("Math floor :- "+ Math.floor(4.6)) //floor
console.log("Math ceil :- "+ Math.ceil(4.2)) //ceil
console.log("Math abs :- "+ Math.abs(-4.5)) //abs
console.log("Math sqrt :- "+ Math.sqrt(16)) //sqrt
console.log("Math pow :- "+ Math.pow(2,3)) //pow
console.log("Math min :- "+ Math.min(4,2,8,1)) //min
console.log("Math max :- "+ Math.max(4,2,8,1)) //max
console.log("Math random :- "+ Math.random()) //random
console.log("Math round of random between 1 to 10 :- "+ Math.floor(Math.random()*10)+1) //random between 1 to 10
const min =10
const max =20
console.log("Math random between 10 to 20 :- "+ Math.floor(Math.random()*(max-min+1))+min) //random between 10 to 20
//let num=4.6
// ----------------------------------------------------------------
// | Method           | Description               | Example Output |
// | -----------------| --------------------------|----------------|
// | `round(4.6)`     | Round to nearest integer  | `5`            |
// | `floor(4.6)`     | Round down                | `4`            |
// | `ceil(4.2)`      | Round up                  | `5`            |
// | `abs(-4.5)`      | Absolute value            | `4.5`          |
// | `sqrt(16)`       | Square root               | `4`            |
// | `pow(2,3)`       | Exponentiation            | `8`            |
// | `min(4,2,8,1)`   | Minimum value             | `1`            |
// | `max(4,2,8,1)`   | Maximum value             | `8`            |
// | `random()`       | Random number (0-1)       |   0.573829374  |
// | `random between 1 to 10` | Random integer (1-10)              |
// -----------------------------------------------------------------  