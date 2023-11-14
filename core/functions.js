// Functions
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
console.log(calculateCartPrice(200,400,600))
  
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

