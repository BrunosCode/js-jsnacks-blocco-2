// 0. Create list of names and of surnames
const names = ["Paolo", "Luigi", "Gabriele"];
const surnames = ["Rossi", "Verdi", "Brambilla", "Magnani"];
// 1. Create output array
let outputList = [];
for (let i = 0; i < 3; i++) {
    // 2. Get random name
    let randomName = names[Math.floor(Math.random() * names.length)];
    // 3. Get random surname
    let randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
    // 4. Add joined strings in output array
    outputList.push(`${randomName} ${randomSurname}`);
}
console.log(outputList);