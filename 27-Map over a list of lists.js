function gridMap(fn,a) {
    return a.map(b => b.map(fn));
}

const numberGrid = [ [1,2,3,4], [5,6,7,8,9], [0,2,4]];

let a = gridMap( x => x+1 , numberGrid)

console.log(a)