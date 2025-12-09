a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]


function comp(a, b) {
    if (!a || !b) return false;
    return a.map(x => x * x).sort().join() === b.sort().join();
}

console.log(comp(a, b))