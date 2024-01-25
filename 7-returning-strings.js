// Code Wars - Returning Strings
// https://www.codewars.com/kata/55a70521798b14d4750000a4

function greet(name) {
    let text = "Hello, <name> how are you doing today?"
    return text.replace("<name>", name)
}

console.log(greet("dito"))