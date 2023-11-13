// Objects Literals -->
const mySym = Symbol("key"); // Symbol data type!!
const user1={
  name: "diwanshu", // key-value pair!!
  age:19,
  location: "haryana",
  [mySym] : "key", // way to write Symbol data type in obejct!!
  lastLoginDays : ["Mon" ,"Sun"]
}
// We can access the object data by these ways:
console.log(user1.age)
console.log(user1["age"]) // better way to access!!

console.log(user1[mySym]) // For symbol data type!!
// Object.freeze(user1) --> Now further changes will not be possible in object (immutable!!)

user1.greeting = function(){ // function declaration
  console.log("Hello user!!")
}
user1.greet = function(){
  console.log(`Hello user, ${this.name}`)
  /* this is used to access current object elements !! */
}
console.log(user1.greeting()) // -> Hello user!!
console.log(user1.greet()) // --> Hello user, diwanshu

// Through constructors
const tinderUser = {} // non singleton object!!
// const tinderuser = new Object() --> singelton object!!
tinderUser.name = "Diwanshu"
tinderUser.age = 19
console.log(Object.keys(tinderUser))
//-->Here, we are getting the keys of the object in the array, Similarly we can get the values through .values()!!
console.log(tinderUser.hasOwnProperty("age"))
//--> checks whether the object has the property or not!!

// we can also make nested objects. For e.g:
const reguser={
   fullname:{
     userfullname:{
       firstname: "Barb",
       lastname: "makwana"
     }
   }
}
//Accessing them-->
console.log(reguser.fullname.userfullname.firstname)

//To merge two or more objects we use,
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = Object.assign({}, obj1, obj2) //OR we ccan write it as:
const obj4 = {...obj1,...obj2} //spread syntax!!

//Array of objects !!->
const datauser=[
  {
    
  },
  {
    
  },
  {
  
  }
]

// Object de-structure!!
const course={
  price: 999,
  name: "js",
  courseInstructor: "XYZ"
}
const {courseInstructor:ins} = course //destructring!!
console.log(ins) //-->XYZ

// JSON API INTRO!! (Apna kam kisi aur par daalna!!)

// {
//   "name" : "abc",
//   "coursename" : "alpha",
//   "price" : "free"
// }