class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let output = -1;
        let left = 0, right = nums.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right)/2);
            if (nums[mid] === target) {
                output = mid;
                break;
            } 

            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return output;
    }
}
