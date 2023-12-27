// this keyword is used in terms of current context!!

// new keyword is used to create multiple instances from one object literal (structure) !!

// constructors -->
function User(username,password,isSign){
    this.username= username
    this.password = password
    this.isSign = isSign
    this.greeting= function(){
        console.log(`Welcome user, ${username}!`)
    }
}

const user1 = new User("Diwanshu",123,true)
console.log(user1)