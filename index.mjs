/**
 * Converts the input to a string, which can be converted to an array of characters,
 * the order can be reversed, and then the input string can be compared with the reversed array
 * 
 * @param {Number} num The input to verify is a valid palindromic number
 * @returns {Boolean} Whether the input is a palindromic number
 */
const isPalindromeViaStrArr = (num) => {
    const numStr = Number(num).toString();
    const numStrArr = numStr.split('');

    if (!Number.isInteger(num)) {
        return false;
    }

    numStrArr.reverse();

    return numStr === numStrArr.join('');
};


/**
 * Uses modulus to capture the right-most digit and push to a resultant array
 * with the numbers in reverse. Divides by 10 to remove the right-most digit.
 * The process is repeated until the number is empty (0) and the input number is copied over
 * to the resultant array in reverse. The resultant array is parsed into a number appropriately
 * and compared to the original input for validation
 * 
 * @param {Number} num The input to verify is a valid palindromic number
 * @returns {Boolean} Whether the input is a palindromic number
w */
const isPalindromeViaNumArr = (num) => {
    let tmp = num;
    const numArr = [];

    if (!Number.isInteger(num)) {
        return false;
    }

    do {
        numArr.push(tmp % 10);
        tmp = Math.floor(tmp / 10);
    } while (tmp > 0);

    const numReverse = Number.parseInt(numArr.join(''));

    return num === numReverse;
};


/**
 * Input is copied to a temporary number variable. The reverse number starts at 0 and is built
 * by ahifting the current value over to the left (* 10) and tacking on the right most digit
 * of the temporary number (%10). The temproary number shifts to the right
 * (dividing by 10 and flooring the result) and the process is repeated until the temporary number
 * is less than or equal to zero. Finally both the reversed number and the original number are 
 * commpared for validation
 * 
 * @param {Number} num The input to verify is a valid palindromic number
 * @returns {Boolean} Whether the input is a palindromic number
w */
const isPalindromeViaNum = (num) => {
    let numReverse = 0;
    let tmp = num;

    if (!Number.isInteger(num)) {
        return false;
    }

    do {
        numReverse = (numReverse * 10) + (tmp % 10);
        tmp = Math.floor(tmp / 10);
    } while (tmp > 0);

    return num === numReverse;
};

export { isPalindromeViaNum, isPalindromeViaNumArr, isPalindromeViaStrArr };
