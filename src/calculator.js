// Simple calculator functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

module.exports = { add, subtract, multiply, divide };

// Demo usage
if (require.main === module) {
    console.log('Calculator Demo:');
    console.log('5 + 3 =', add(5, 3));
    console.log('5 - 3 =', subtract(5, 3));
    console.log('5 * 3 =', multiply(5, 3));
    console.log('6 / 3 =', divide(6, 3));
}