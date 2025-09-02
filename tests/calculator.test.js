const { add, subtract, multiply, divide } = require('../src/calculator');

// Simple test runner
function test(description, fn) {
    try {
        fn();
        console.log('✓', description);
    } catch (error) {
        console.log('✗', description);
        console.log('  Error:', error.message);
        process.exit(1);
    }
}

function assertEquals(actual, expected, message) {
    if (actual !== expected) {
        throw new Error(`${message}: expected ${expected}, got ${actual}`);
    }
}

// Run tests
console.log('Running Calculator Tests...\n');

test('Addition: 2 + 3 = 5', () => {
    assertEquals(add(2, 3), 5, 'Addition test failed');
});

test('Subtraction: 5 - 2 = 3', () => {
    assertEquals(subtract(5, 2), 3, 'Subtraction test failed');
});

test('Multiplication: 4 * 3 = 12', () => {
    assertEquals(multiply(4, 3), 12, 'Multiplication test failed');
});

test('Division: 10 / 2 = 5', () => {
    assertEquals(divide(10, 2), 5, 'Division test failed');
});

test('Division by zero throws error', () => {
    try {
        divide(5, 0);
        throw new Error('Expected division by zero to throw error');
    } catch (error) {
        if (!error.message.includes('Division by zero')) {
            throw error;
        }
    }
});

console.log('\nAll tests passed! 🎉');