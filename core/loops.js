// These are used to perform the similar task convienently
for(let i = 1; i <= 10; i++) { // for loop
    console.log(i)
    // similar working of break and continue keyword as well!!
}

let i = 1
while(i<=10){ // while loop
    console.log(i)
    i++ 
}

let j = 1
do{          // do-while loop
    console.log(j)
    j++
} while(j<=10)

// High Order loops:

//  1. for of loop :
const jhumka = ["arre","jhumka","gira","re"]
for (const num of jhumka) {
    console.log(num)
}

// Map in js --> It stores data in key value pair format
const mp = new Map()
mp.set('IN','India')
mp.set('PAK','Pakistan')
mp.set('NZ','NewZealand')
for (const [key,value] of mp) {
    console.log(`${key} code stands for ${value}`)
}
// --> We can not iterate 'for of' loop on the objects!! To iterate on objects we use for in loop:

// 2. For In loop : 
const shortcut={
    js: "javascript",
    cpp : "C++",
    py: "Python"
}
for (const key in shortcut) {
    console.log(`${key} is shortcut for ${shortcut[key]}`) // value is accessed by arr[key] format!!
}

// 3. For each loop :
const lan = ["js","py","cpp","rb"]
lan.forEach( (item) => {
    console.log(item)
} )

const ans = []
const no = [1,2,3,4,5,6]
no.forEach( (item) => {
    if(item>3){
        ans.push(item)
    }
} )
console.log(ans)

// Using foreach loop we can iterate over array of objects and can access the value of the objects!!

// filter method --> It can be used to filter the data!!
const nums = [1,2,3,4,5]
const newNum = nums.filter( (num) =>  num>4 ) // If we had opened the scope ({}), then we have to write return keyword!!
console.log(newNum)

// Chaining using map and filter. For e.g: 
const number = [1,2,3,4,5,6,7,8,9,10]
const newNumber = number
                        .map( (num) => num*10 )
                        .map( (num) => num+1 )
                        .filter( (num) => num>44 )
console.log(newNumber) // --> 51,61,71,81,91,101

// Reduce method --> It is used to perform operation on accumulator and current value!!
const myNum = [1,2,3,4,5]
const sum = myNum.reduce( function (acc,currval) {
    return acc+currval   //0+1+2+3+4+5
},0 )  // acc initial value is the value after comma!! 
console.log(sum) // --> 15