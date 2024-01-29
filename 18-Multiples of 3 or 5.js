// Code Wars - Multiples of 3 or 5
// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number) {
    if (number <= 0) {
        return 0
    }
    let num = 0
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            num += i;
        }
    }
    return num
}

console.log(solution(10))