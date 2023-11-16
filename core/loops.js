// These are used to perform the similar task convienently

for(let i = 1; i <= 10; i++) { // for loop
    console.log(i)
    // similar working of break and continue keyword as well!!
}

let i =1
while(i<=10){ // while loop
    console.log(i)
    i++ 
}

let j =1
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

// Using foreach loop we can iterate over array of objects and can access the value of the objects!!