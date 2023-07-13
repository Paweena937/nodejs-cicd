"use strict";
//max min avergq
Object.defineProperty(exports, "__esModule", { value: true });
//min
function minNumber(numbers) {
    return Math.min(...numbers);
}
//max
function maxNumber(numbers) {
    return Math.max(...numbers);
}
//sum
function sumNumber(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
//Average 
function averageNum(numbers) {
    return sumNumber(numbers) / numbers.length;
}
//test 
let numbers = [3, 5, 17, 9];
console.log(minNumber(numbers));
console.log(maxNumber(numbers));
console.log(sumNumber(numbers));
console.log(averageNum(numbers));
//# sourceMappingURL=index.js.map