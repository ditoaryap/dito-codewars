// Code Wras - Reversed Sequence
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/

const reverseSeq = n => {
    let test = []
    for (let i = n; i >= 1; i--) {
        test.push(i)
    }
    return test;
};

console.log(reverseSeq(5))