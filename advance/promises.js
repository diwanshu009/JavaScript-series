// async-await >> promises >> callbacks !!

/* In JavaScript, promises are a way to handle asynchronous operations. Asynchronous operations are tasks that take some
   time to complete, such as fetching data from a server or reading a file. Promises provide a clean and more readable way 
   to work with asynchronous code compared to traditional callback-based approaches. A promise can be in of 3 states:
   1. pending : asynchronous operation is still ongoing!
   2. fulfilled (resolved) : The operation completed successfully, and the promise has a resulting value.
   3. rejected : The operation failed, and the promise has a reason for the failure. !! */

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function (){
        console.log('Hey there')
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Completed")
})

const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("hatt");
        resolve({username: "Diwanshu",gmail:"abcd@gmail.com"}) // passing the data 
    },1000)
})
promiseTwo.then(function(user){
    console.log(user) // printing the data retreived!!
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Diwanshu",phone:"90505xxxxx"})
        }else{
            reject('ERROR : Something went wrong!!') // if promise is in reject state, return this!!
        }
    },1000)
})
promiseThree.then(function(user){
    return user.username      // will be passed to the next chain as parameter!!
}).then(function(username){   // This is also called as chaining!!
    console.log(username);
}).catch(function(error){     // -->  if rejected we use catch(function(){})
    console.log(error)
}).finally(()=>{      // -> It will tell whether the work has been done or not (Always gets executed)!!
    console.log("Finally,the promise is either resolved or rejected!!")
})

// Async-await syntax !! --> It can not directly handle the errors!! (try catch lena padega!!)
// await always work inside an async function!!

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({lan:"javscript",code:"1234"})
        }else{
            reject("ERROR : something went wrong")
        }
    },1000)
})

async function consumePromiseFour(){ // Better syntax than then-catch syntax!!
    try{        // if resolved!!
        const response = await promiseFour // wait till the response comes , then exectues the next lines of code!! 
        console.log(response)
    }catch(error){     // if rejected!!
        console.log(error)
    }
}
consumePromiseFour()

// Now we can fetch in javascript ⭐️ -->

// fecth by async-await -->
async function getUsers(){    // returns a promise always!!
    try {
        const response =  await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()  // type conversion to object!!
        console.log(data);
    } catch (error) {
        console.log("E:" ,error)
    }
}
getUsers()

// fetch by then-catch -->
fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response,reject){
    return response.json()
})
.then(function(response,reject){
    console.log(response)
})
.catch(function(error){
    console.log(error)
})
