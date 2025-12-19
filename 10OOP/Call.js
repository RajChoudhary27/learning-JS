function SetUsername(username)
{
    this.username=username
    console.log("Called")
}

function createUser(username,email,password)
{
    SetUsername.call(this,username)//call method se apan dusre function ko apne context me call kar sakte hai
    
    this.email=email
    this.password=password
}
const user1=new createUser('Chai','Chai@gmail.com','1234')
console.log(user1)
//call method ka use karke apan parent function ke properties ko child function me le aaye.