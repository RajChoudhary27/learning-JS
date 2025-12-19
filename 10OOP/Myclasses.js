//ES5
class User{
    constructor(name,age){
        this.name=name
        this.age=age
    }

    getInfo(){
        return `Name is ${this.name} and age is ${this.age}`
    }
    changeUsername(){
      return `${this.name.toUpperCase()}`
    }
}
const user1=new User('Tony',45)
console.log(user1.getInfo())
console.log(user1.changeUsername())