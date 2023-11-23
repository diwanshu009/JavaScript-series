// Functions --> It increases the code reusability!!
function add(a,b){    // parameter
    console.log(a+b); // we can also return here!!
}
add(5,8) //arguments
  
function login(username){
    if(!username){
        console.log("Please enter valid username") // professional way!!
        return ;
    }
    return `${username}, just logged in!!`
}
console.log(login("diwanshu"))

// here ... will be referred as rest operator in function. It is used to bundle the incoming argument (value will be stored in array!!)
function calculateCartPrice(... num1){ 
    return num1
}
console.log(calculateCartPrice(200,400,600)) //--> [200,400,600] !!
  
// handling functions with objects
const user={
    name:"harshu",
    price: 900
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and price is 
    ${anyobject.price}`)
}
console.log(handleObject(user))
  
//handling functions with arrays
const arr = [1,2,3,4,5]
function print(getarr){
    return getarr[1]
}
console.log(print(arr))

// Role of scope is important --> The curly braces are referred as the scope of the variable!!
// --> let is used instead of var as var can be accessed outside of the scope (globally scoped!!) which can cause lots of problem!!

// Hoisting basics: we can not access the function before its declaration which is in form of variable !! For e.g:
console.log(addTwo(5)) // Through an error!!
const addTwo = function(num){
  return num+2
}

console.log(addOne(4)) //--> This will get executed!!
function addOne(num){
  return num+1
}

// Arrow function
const add1 = (num1,num2) => {
    return num1+num2 // Explicit return!!
}
console.log(add(3,4)) // --> 7
  
// --> Implicit return !!
const sub = (num1,num2) => num1-num2
console.log(sub(5,3)) // --> 2
  
//Immediately Invoked Function Expressions(IIFE) --> These are used to get rid of the pollution caused by global scope!!

(function chai(){ // named IIFE
    console.log(`Db connected!`);
})(); // way to write two IIFE

( (name) => {
    console.log(`${name}`);
})('diwanshu');  // Also the function will be executed more quickly!!