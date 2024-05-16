// math.js

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
};

const sumArray = (arr) => arr.reduce((acc, num) => acc + num, 0);
const sumObjectValues = (obj) => Object.values(obj).reduce((acc, num) => acc + num, 0);

module.exports = { sum, subtract, multiply, divide, sumArray, sumObjectValues };