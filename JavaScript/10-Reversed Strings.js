// Code Wars - Reversed Strings
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

function solution(str) {
    return str.split('').reverse().join('')
}

let a = solution("dito")
console.log(solution("dito"));

console.log(typeof(a))