// 0. Create list of names and of surnames
const names = ["Paolo", "Luigi", "Gabriele", "Edoardo"];
const surnames = ["Rossi", "Verdi", "Brambilla", "Magnani"];

const getRandomNames = () => {
    // 1. Create output array
    let outputList = [];
    // 1.1 create differents array with same values, to avoid repetition
    let namesCopy = [...names];
    let surnamesCopy = [...surnames];
    for (let i = 0; i < 3; i++) {
        // 2. Get random name and remove it from the list
        let randomNameIndex = Math.floor(Math.random() * namesCopy.length);
        let randomName = namesCopy[randomNameIndex];
        // 2.1 Remove it from the array
        namesCopy = [...namesCopy.slice(0, randomNameIndex), ...namesCopy.slice(randomNameIndex + 1)];
        // 3. Get random surname and remove it from the list
        let randomSurnameIndex = Math.floor(Math.random() * surnamesCopy.length);
        let randomSurname = surnamesCopy[randomSurnameIndex];
        // 3.1 Remove it from the array
        surnamesCopy = [...surnamesCopy.slice(0, randomSurnameIndex), ...surnamesCopy.slice(randomSurnameIndex + 1)];
        // 4. Add joined strings in output array
        outputList.push(`${randomName} ${randomSurname}`);
    }
    console.log(outputList);
}
getRandomNames();