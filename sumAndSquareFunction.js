// Original code
/**
function sumNumbersAndSquareResult (nums) {

    let total = 0;

    for (let i = 1; i < nums; i++) {

        total += nums[i];

    }

    return total ^ 2;

}
*/


/*****
 Index concern in Loop: loop starts with 1, but skips the first element nums[0]
 Incorrect Parameter: An array parameter is expected,but is treated as a numeric value
 Incorrect square: '^' is the wrong operator to obtain the square of the result
 Undefined behavior: It is possible that there is no defined value for nums[1], which could
                     possibly be added to the total

 */


/****************** Proposed Solution ****************/

const numbers = [1,2,3,4,5,6]; // Array of numbers

// Choice 1 (unit test uses this function currently)
function sumNumbersAndSquareResult(nums) {
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }

    return total * total;
}

let result = sumNumbersAndSquareResult(numbers);
console.log(result);

// Choice 2, cleaner code.
// Better using ES6
const sumNumAndSquareResult = nums => nums.reduce((total, num) => total + num, 0) ** 2;

let result2 =  sumNumAndSquareResult(numbers);
console.log(result2);

module.exports = sumNumbersAndSquareResult;

