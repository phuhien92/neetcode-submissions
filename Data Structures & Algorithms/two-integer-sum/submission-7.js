class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};

        for (let i = 0; i < nums.length; i++) {
            const a = nums[i];
            const b = target - a;
            if (b in map) return [map[b], i];
            map[a] = i;
        }
        return []
    }
}
