class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let output = [];

        for (let i in nums) {
            const j = Number(i);
            const a = nums[j];
            const b = target - a;
            const k = nums.slice(j+1).indexOf(b);
            if (k != -1) {
                output = [j,k+j+1];
                break;
            }
        }
        return output;
    }
}
