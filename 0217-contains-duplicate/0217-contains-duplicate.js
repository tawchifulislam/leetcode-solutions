/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let visited = {};
    for (let i = 0; i < nums.length; i++){
        let currentNum = nums[i];
        if (visited[currentNum]){
            return true;
        }
        visited[currentNum] = true;
    }
    return false;
};