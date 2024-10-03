export default [
    [54321, false],
    [0, true],
    [1, true],
    [2, true],
    [3, true],
    [4, true],
    [5, true],
    [6, true],
    [7, true],
    [8, true],
    [9, true],
    [11, true],
    [22, true],
    [33, true],
    [44, true],
    [55, true],
    [66, true],
    [77, true],
    [88, true],
    [99, true],
    [101, true],
    [111, true],
    [121, true],
    [232, true],
    // Negative numbers cannot be palindromic
    [-232, false],
    [12344321, true],
    [23, false],
    // Verify inputs which are not numbers
    [NaN, false],
    [null, false],
    [undefined, false],
    ['String', false],
    ['121', false],
    ['racecar', false],
    [false, false],
    [true, false],
    [{}, false],
    // Decimals are numbers, but are not integers and cannot be palindromic
    [1.21e1, false],
    // This decimal becomes an integer via the multiplier
    [1.21e2, true],
    [1.21e3, false],
    [1111111111111111, true],
    // While this is a palindromic integer, it is too big for JavaScript
    // to accurately represent it as an integer. It will round and all bets are off from there
    [11111111111111111, false],
];