const { default: expect } = require('expect');

const calculator = require('../calculator');
// //test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });
test('adds a + b', () => {
    expect(sum(1, 2)).toBe(3);
})

test('substracts a - b', () => {
    expect(substract(4,1)).toBe(3);
})

test('multiplies a * b', () => {
    expect(multiply(3, 3)).toBe(9);
})

test('divides a / b', () => {
    expect(divide(6, 2)).toBe(3);
})

test('Raises to power a ^ b', () => {
    expect(power(5, 5)).toBe(25);
})

