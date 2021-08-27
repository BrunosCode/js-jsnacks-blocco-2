// 1. ask a number
let n = parseInt(prompt("Give me a number"));
// 1.1 verify if is a number
while ( isNaN(n) ) {
    alert("That's not a number");
    n = parseInt(prompt("Give me a number"));
}
// 2. if is even print it
if ( n % 2 == 0) {
    alert(n);
// 3. if is odd add 1 and print
} else {
    alert(n + 1);
}
