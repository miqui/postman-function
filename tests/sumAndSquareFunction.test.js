const sumNumbersAndSquareResult = require('./../sumAndSquareFunction');

describe('sumNumbersAndSquareResult', () => {

    test('should return the sum of all numbers and square the result', () => {
        expect(sumNumbersAndSquareResult([1,2,3,4])).toBe(100);
    });

    test('should handle empty arrays', () => {
        expect(sumNumbersAndSquareResult([])).toBe(0);
    });

    test('should handle single-element arrays', () => {
        expect(sumNumbersAndSquareResult([5])).toBe(25);
    });

    test('should ignore non-number values', () => {
        expect(sumNumbersAndSquareResult([1, '2', null, 4])).toBe(25);
    });

});