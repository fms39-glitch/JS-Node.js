//Data Types
// Numbers



//<<Data types:>> && <<Operators>>

// 1. Numbers
let num1 = 3; //The three will auto assign to a number.
let num2 = 3.2
console.log(num1 + num2);

// 2. String   
const firstName = "Faizan"
let lastName = "Shaikh"
console.log(lastName + ' ' + firstName)

// 3. Booleans (true/false value)

let isLoggedIn = true //true -- > 1; false --> 0
console.log(isLoggedIn);
console.log(isLoggedIn + 10) // --> Will give the output as 11

// 4. Null 
let lastLoginDate = null; //The variable lastLoginDate don't know what it's type is could be anything in the future
console.log(lastLoginDate)

// 5. Undefined
let a = undefined // Diff null is something that exist but it's not set to anything yet.
console.log(a)

// 6. Objects
const person = {
    firstName: 'Faizan',
    lastName: 'Shaikh',
    age: 22,
    isLoggedIn: false,
    lastLoginDate: null
}

console.log(person.firstName)


//Operators:
console.log('1' + '1') //output 11 but string
console.log('1' + 1) // output: 11 but string
console.log('1' * 11) // output : 11 but int.
//Remember when converting the string num to Int. Multiply by number 1

console.log('a' * 1) // Output: NAN--> Not a number

//Type of operator
console.log(typeof ('11' * 1)) //output: number
console.log(typeof person) //output: object
console.log(typeof person.lastName) //output string


