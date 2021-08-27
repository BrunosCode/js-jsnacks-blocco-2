// 1. create 2 array with different length
let array1 = [1, 2, 3, 4];
console.log("array1 = " + array1)
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("array2 = " + array2)

// 2. add random element to the shorter array till it matches the longer one
const matchingArrays = (array1, array2) => {
    // 2.1 if arrow 1 is shorter
    if (array1.length < array2.length) {
        console.log(`array2 had ${array2.length - array1.length} element more`)
        while (array1.length < array2.length) {
            array1.push(Math.floor(Math.random() * 10));
        }
        console.log("new array1 = " + array1);
    // 2.2 if arrow 2 is shorter
    } else if (array1.length > array2.length) {
        console.log(`array1 had ${array1.length - array2.length} element more`)
        while (array1.length > array2.length) {
            array2.push(Math.floor(Math.random() * 10));
        }
        console.log("new array2 = " + array2);
    } else {
        console.log("this arrays have the same length")
    }
}
matchingArrays(array1, array2);