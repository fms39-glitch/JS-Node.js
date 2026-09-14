//for loop

for (let i = 1; i < 10; i++) {
    console.log(i)
}

//While
let ip = 0 //Can't be const because the value can't be changed
let house = 100

//while (ip != house) {
//   ip++
//  console.log('Step taken' + ip)
//}
console.log(ip) //100

// Do While

do {
    ip++;
    console.log('Step taken' + ip)
} while (ip != house)


// Guess the number

let num = 40;

let guess = 0

do {
    //guess = prompt("Guess a number") * 1 // to convert the entered string to int
    guess = parseInt(prompt("Guess a number"))
    if (guess == number) {
        alert('Winner')
        break;
    }
} while (guess != 0)