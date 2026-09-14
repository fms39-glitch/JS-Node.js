//If else statements

const age = 80

if (age == 18) {
    console.log("yes, you can vote")
}
else if (age >= 80) {
    console.log("Yes, you are an adult")
}
else {
    console.log("No, you can't vote")
}

//Ternary Operator

age >= 18 ? console.log('Yes') : console.log('No')
//Below is the same code but variable method
let result = age >= 18 ? 'Yes' : 'No'
console.log(result)


//Switch Statements

const option = 3
switch (option) {
    case 1: {
        console.log('Hello!')
        break
    }
    case 2: {
        console.log('Namaste!')
        break
    }
    case 3: {
        console.log('Bonjor!')
        break
    }
    default: console.log('Invalid Option')
}

// Example:
let a = 30;
let b = 40;
let opt = '+';

switch (opt) {
    case '+': console.log(a + b)
        break
    case '-': console.log(a - b)
        break
    case '*': console.log(a * b)
        break
}
