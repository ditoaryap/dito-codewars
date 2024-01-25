// Code Wars - Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
    return (str.match(/[aeiou]/ig) || []).length;
}

console.log(getCount("kata sadc"))