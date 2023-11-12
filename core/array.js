//Arrays!!
const user = ["Diwanshu",19,true];
// some methods for arrays are:
user.push("hero") // gets add in the array!!
user.pop() // last value gets removed
user.unshift(9) // gets adds at the front and the remaining gets shift!!
user.shift() // elements get shifted towards left!!
user.includes(8) // check whether the element is present in the array?
const newUser = user.join() //gets converted into string!!
user.slice(1,3) // elements in range gets printed ->(3 is exclusive)
user.splice(1,3) // here -> 3 is inclusive and ⭐️ the elements gets deleted from the original array!!

const user2 = ["Babu bhaiya", 25,false];
const users = user.concat(user2); // to merge(combine) the arrays we use -> .concat() !! OR we can write it as-:>
const us12 = [...user,...user2]; //spread syntax(glass example!!)
const arr = user.flat(Infinity) //to get elements in single array if they are present in array of array.....!!
//to convert any string, number into array we use Array.from()!!
console.log(Array.from("Diwanshu"))
// we can also form arrays by:
let score1 = 97
let score2 = 95
let score3 = 92
console.log(Array.of(score1,score2,score3))