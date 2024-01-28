// Code Wars - Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers) {
    a = numbers.split(' ').map(Number)
    return Math.max(...a) + ' ' + Math.min(...a)
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));