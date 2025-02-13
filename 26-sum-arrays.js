function sum (numbers) {
    if(numbers.length === 0) {
        return 0
    } else {
        return numbers.reduce((a,b) => {
            return a + b
        })
    }
  }

let test = sum([])

console.log(test)