// example

// assert.strictEqual(removeChar('eloquent'), 'loquen');
// assert.strictEqual(removeChar('country'), 'ountr');
// assert.strictEqual(removeChar('person'), 'erso');
// assert.strictEqual(removeChar('place'), 'lac');
// assert.strictEqual(removeChar('ab'), '')
// assert.strictEqual(removeChar('ooopsss'), 'oopss');


function removeChar(str) {
    const len = str.length - 1
    return str.slice(1).slice(0,len-1)
}

console.log(removeChar("eloquent"))