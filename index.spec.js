import { describe, expect, it } from '@jest/globals';

import { isPalindromeViaNum, isPalindromeViaNumArr, isPalindromeViaStrArr } from './index';
import inputExpectations from './inputExpectations.mjs';

describe('Verifying Palindromic Number inputs', () => {
    describe('via String Array', () => {
        it.each(inputExpectations)("Input: %o, Expectation: %o", (input, expectation) => {
            expect(isPalindromeViaStrArr(input)).toStrictEqual(expectation);
        });
    });
    describe('via Number Array', () => {
        it.each(inputExpectations)("Input: %o, Expectation: %o", (input, expectation) => {
            expect(isPalindromeViaNumArr(input)).toStrictEqual(expectation);
        });
    });
    describe('via temp Number', () => {
        it.each(inputExpectations)("Input: %o, Expectation: %o", (input, expectation) => {
            expect(isPalindromeViaNum(input)).toStrictEqual(expectation);
        });
    });
});
