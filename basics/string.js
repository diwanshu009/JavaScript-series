// Stack memory (Copy milti hai) is used in primitive data types!!
// Heap memory (Reference milta hai) is used in reference data types!!

//Strings in Javascript ->
const h = "diwanshu";
const hu= 2;
console.log(h+hu); //Concatenate (Not used now!!)

console.log(`Hello my name is ${h} and my repo count is ${hu}`);
//(Modern way to concatenate!!)

const name = new String("Harry Bhai"); // Another way to declare!! (We can acces the methods/functions of the string also!!)

//console.log(name.__proto__);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.indexOf('y'));

//There are many more methods like-> .substring(), .slice(), .trim(), .replace(), .includes(), .split() ,etc!!