// tests/math.test.js

const { sum, subtract, multiply, divide, sumArray, sumObjectValues } = require('../math');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
});

test('multiplies 3 * 4 to equal 12', () => {
    expect(multiply(3, 4)).toBe(12);
});

test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
});

test('throws error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
});

test('sums array [1, 2, 3, 4, 5] to equal 15', () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
});

test('sums array [10, -10, 10, -10] to equal 0', () => {
    expect(sumArray([10, -10, 10, -10])).toBe(0);
});

test('sums object values {a: 1, b: 2, c: 3} to equal 6', () => {
    expect(sumObjectValues({ a: 1, b: 2, c: 3 })).toBe(6);
});

test('sums object values {x: 10, y: -10, z: 10} to equal 10', () => {
    expect(sumObjectValues({ x: 10, y: -10, z: 10 })).toBe(10);
});
