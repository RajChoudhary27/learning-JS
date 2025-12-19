const user={
    _email:"abc@gmail.com",
    _password:"123456",

    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password=value
    }   
}

const tea=Object.create(user)

console.log(tea.password)