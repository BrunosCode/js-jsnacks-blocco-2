// 1. Create an array of integers
let numbers = [];
for (let i = 0; i < 100; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}
console.log(numbers);
// 2. Sum each number with index odd
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    if ( i % 2 ) {
        sum += numbers[i];
    }
}
console.log(sum);

// The sum should be random, but most of the times it ends up being between 2100 and 2700