console.log("Hello ji!!"); // Used to log on browser!!

// --> Variables and DataTypes in JavaScript!!
const name = "Diwanshu";
//const are immutable!!

var umar = 19.1; 
// var are not used currently
let age = 20;
let isLogged = false;
// let is mutable!!

// --> var is globally scoped while let and const are block scoped. That's why var is not used now commonly!!

/* There are different types of data types and some of them are:
    1.Primitive :    Boolean,Null,String,Number,Undefined,Symbol,BigInt  
    2.Reference(Non-Primitive) :  Arrays,Objects,Functions   */

console.log(typeof umar); //-> number
console.log(typeof null); //-> object
//This is used to check type of data

/* Type conversion can also be done of data types as well*/
let a = 19;
let b = String(a);
console.log(typeof(b)) // --> string

// Operators ka gyan!!. +,-,*,/,%,**,<=,==,&&,||,&,!,|,>>,<<,++,--
console.log("2">1); // -->true!
console.log(null>=0); // -->true! (Avoid thise type of code!!)

// === checks the value and data type of the variables!!
console.log(2==="2"); //-->false;