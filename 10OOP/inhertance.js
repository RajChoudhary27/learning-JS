class User{
    constructor(username){
        this.username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{ //Teacher class User class ko inherit kar raha hai
    con

    teach(){structor(username,subject)
    {
        super(username) //super keyword se apan parent class ke constructor ko call kar sakte hai
        this.subject=subject
    }
        console.log(`${this.username} is teaching ${this.subject}`)
    }
}

const teacher1=new Teacher('Mr. Smith','Math')
teacher1.logMe() //Output: Username is Mr. Smith
teacher1.teach() //Output: Mr. Smith is teaching Math

//In this example, we define a base class `User` with a constructor that initializes the `username` property and a method `logMe`. The `Teacher` class extends the `User` class, inheriting its properties and methods. The `Teacher` class has its own constructor that calls the parent constructor using `super` and initializes an additional property `subject`. The `teach` method is defined to log a message to the console. We then create an instance of the `Teacher` class and call both inherited