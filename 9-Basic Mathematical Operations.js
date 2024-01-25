// Code Wars - Basic Mathematical Operations
// https://www.codewars.com/kata/57356c55867b9b7a60000bd7


// Solution 1
// function basicOp(operation, value1, value2)
// {
//   var cases = {
//     '+': value1 + value2,
//     '-': value1 - value2,
//     '*': value1 * value2,
//     '/': value1 / value2
//   };
//   return cases[operation]
// }


// Solution 2
function basicOp(operation, value1, value2) {
    switch (operation) {
        case "+":
            return value1 + value2;
        case "-":
            return value1 - value2;
        case "*":
            return value1 * value2;
        case "/":
            return value1 / value2;
        default:
    }
}

console.log(basicOp("*", 2, 3))