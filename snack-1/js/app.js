// 1. For loop: ask 5 times a number to a user
let sum1 = 0;
for (let i = 0; i < 5; i++) {
    let n = parseInt(prompt("Give me a number"));
    while ( isNaN(n) ) {
        alert("That's not a number");
        n = parseInt(prompt("Give me a number"));
    }
    sum1 += n;
}
// 2. Print the sum
console.log("first sum " + sum1)


// 3. While loop
let sum2 = 0;
let counter = 0
while(counter < 5) {
    let n = parseInt(prompt("Give me a number"));
    while ( isNaN(n) ) {
        alert("That's not a number");
        n = parseInt(prompt("Give me a number"));
    }
    sum2 += n;
    counter ++;
}
// 4. print the sum
console.log("second sum " + sum2)