//Protype
function  multiply(num)
{
return num*5
}
console.log(multiply(5))
console.log(multiply(5).power)
//Function bhi ek object he hota hai apan saari property access kar sakte hai
//this keyword current ko point karta hai.
//bahar access karoge this ko to empty parenthesis he show karega.

function createuser(username,score)
{
    this .username=username
    this.score=score
}
createuser.prototype.increment=function()
{
    this.score++
}
createuser.prototype.printMe=function(){
    console.log(this.score)
}
const chai=createuser('Chai',25)
chai.printMe()
//ye nahi chalega
//const chai=new createuser('chai',25)// ye run ho jayea  kyuki new nayi memory banata hai

//kuch bhi chiz object se hokar he jati hai.
let myHeroes=['thor','spiderman']

let heroPower={
    thor:'hammer',
    spiderman:'web',

    getSpiderPower:function(){
        console.log(`spider power is ${this.spiderman}`)
    }
}
Object.prototype.getHeroPower=function(){
    console.log(`hero power is ${heroPower[this]}`)
}
myHeroes.getHeroPower()
//ye sab object ke prototype se hi aata hai 
heroPower.getSpiderPower()
myHeroes.getHeroPower()

//Inheritance using prototype
function Person(firstname,lastname,age)
{
    this.firstname=firstname
    this.lastname=lastname
    this.age=age
}
Person.prototype.getFullName=function(){
    return `${this.firstname} ${this.lastname}`
}
Person.prototype.isAdult=function(){
    return this.age>=18
}

const person1=new Person('Bruce','Wayne',30)
console.log(person1.getFullName())
console.log(person1.isAdult())

function Student(firstname,lastname,age,grade)
{
    Person.call(this,firstname,lastname,age)//call method se apan parent ke constructor ko call kar sakte hai
    this.grade=grade
}
//inherit the prototype methods
Student.prototype=Object.create(Person.prototype)//ye apan ne parent ke sare method ko child me le liya

Student.prototype.constructor=Student//ye apan ne constructor wapas set kar diya

Student.prototype.study=function(){
    console.log(`${this.getFullName()} is studying`)
}

const student1=new Student('Clark','Kent',20,'A')
console.log(student1.getFullName())
console.log(student1.isAdult())
student1.study()    

// in video
const user={
    name:'default',

}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS Assignment',
    fullTime:true,
    _proto_:TeachingSupport

}
Teacher._proto_=user; //old method of inheritance
//Modern Syntax
Object.setPrototypeOf(TeacherSupport,Teacher)