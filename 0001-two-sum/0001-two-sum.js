/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    let visitedNumbers = {};
    for (let i = 0; i < nums.length; i++) {
        let currentNumber = nums[i];
        let needNumber = target - currentNumber;
        if (needNumber in visitedNumbers) {
            return [visitedNumbers[needNumber], i];
        }
        visitedNumbers[currentNumber] = i;
    }
};
