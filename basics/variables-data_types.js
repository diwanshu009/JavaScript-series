console.log("Hello ji!!");
// --> Variables and DataTypes in JavaScript!!
const name = "Diwanshu";
//const are immutable!!

var umar = 19.1; 
// var are not used currently
let age = 20;
let isLogged = false;
// So we use let as they are mutable as well!

/* There are different types of data types as well and some of them are:
    1.Primitive:    Boolean,Null,String,Number,Undefined,Symbol,BigInt  
    2.Reference(Non-Primitive:  Arrays,Objects,Functions   */

console.log(typeof umar); //->number
console.log(typeof null); //-> object
//This is used to check type of data

/* Type conversion can also be done of data types as well*/
let a = 19;
let b = String(a);
console.log(typeof(b));

// Operators ka gyan!!. +,-,*,/,%,**,<=,==,&&,||,&,|,>>,<<,++,--
console.log("2">1); // -->true!
console.log(null>=0); // -->true! (Avoid thise type of code!!)

// === checks the value and data type of the variables!!
console.log(2==="2"); //-->false;