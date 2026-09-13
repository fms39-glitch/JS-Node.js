var age = 22;
var num1 = 10
var num2 = 20;
//connsole.log(num1 + num2); --> 30
console.log(age); //--> 22
age = "Piyush";
console.log(age); // --> piyush

//Datatype variable = value -- These languages like Java, c, Python are strongly typed lannguage
// Whereas, JS is a loosely typed language

//Naming cnventions in JS
// Valid: firstName(Camel Casing), FirstName(Classes), first_namme
// Invalid: shouldn't start with th number, not contain any special letters(except '_')


//Var is always a global Scope;
//eg if(true){
//  var age = 23;
// }
// console.log(age);  // age s also accesible here; since it is always global


// let & const are always local;

//Let
let a = 25;
a = 333
console.log(a);

if (true) {
    let age = 23;
    console.log(age);
    console.log(a);
}

//Const --> scope = always local
// Imp: Have tto assignn vaue to const you can't write just const a; you have to write const a = "hello"
const b = 22;
//b = 30 //You can't re-assign the value to const variable;
console.log(b)

