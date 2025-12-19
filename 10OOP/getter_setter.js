class user{
    constructor(email,password)
    {
        this.email=email;
        this.password=password;
    }
    //apan ne password ko overwrite kar diya hai.uppar wala alag hai neeche wala alag
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value
    }
}

const hello=new user("abc@gmail.com",'123321')
console.log(hello.password)