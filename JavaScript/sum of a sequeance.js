const sequenceSum = (begin, end, step) => {
    if(begin >= end){
        return console.log(0)
    } else {
        let result = 0
        for(let x = begin; x <= end; x += step){
            result += x
      }
      return console.log(result)
    }
}

sequenceSum(2,6,2)


// let result = 0
// for(let x = 2; x <= 6; x += 2){
//     result += x
//     console.log(result)
// }


// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)