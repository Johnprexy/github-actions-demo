const calculator = require('../src/calculator');

describe('Calculator', () => {
  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });

    test('should handle zero', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    test('should subtract two numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('should handle negative results', () => {
      expect(calculator.subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply', () => {
    test('should multiply two numbers', () => {
      expect(calculator.multiply(4, 3)).toBe(12);
    });

    test('should handle zero multiplication', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('should divide two numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('should throw error for division by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division by zero is not allowed');
    });
  });
});