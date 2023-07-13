//max min avergq

//min
export function minNumber (numbers:number[]) { 
    return Math.min(...numbers);
}


//max

export function maxNumber(numbers:number[]) {
    return Math.max(...numbers);    
}


//sum

export function sumNumber(numbers:number[]) { 
    return numbers.reduce((a, b) => a + b, 0);
}

//Average 

function averageNum(numbers:number[]) {
    return sumNumber(numbers) / numbers.length;
}

//test 

let numbers = [3,5,17,9]

console.log(minNumber(numbers))
console.log(maxNumber(numbers))
console.log(sumNumber(numbers))
console.log(averageNum(numbers))

