                                // Numbers!!
const score = 400
const balance = new Number(400)
console.log(balance) // --> [Number: 400] !!
console.log(typeof balance); // --> object
// Methods available for number data type!!
console.log(balance.toString());
console.log(balance.toFixed(2));
// More methods are also there: .toPrecision(), .toLocaleString(), etc!!

                                //Maths!!
console.log(Math.abs(-4)) // --> 4!!
console.log(Math.ceil(4.7)) //-> 5!!
console.log(Math.random()) // --> 0 to 1 (range in decimal numbers)
//-> formula to get no in the given range
const min = 10;
const max =20;
console.log(Math.floor(Math.random() * (max- min+1)) + min)
//More methods are also there:Math.min(1,2,3,4), .round(), .floor,.etc!!

                         //Dates
let mydate = new Date() //-->data type : object!!
console.log(mydate.toString()); // Today's Date!!
console.log(mydate.getMonth()+1); // give the current month!!
let newDate = new Date(2023,0,23) // 0->January!!
console.log(newDate.toDateString()); // Mon Jan 23 2023

                        //Time
console.log(Date.now()); //(millisecond!!)
console.log(Math.floor(Date.now()/1000)) //(seconds!!)