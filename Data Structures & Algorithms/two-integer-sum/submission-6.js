class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {};
        let output = [];
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (map[num]) map[num].push(i);
            else map[num] = [i];
        }
        
        for (let i = 0; i < nums.length; i++) {
            const numA = nums[i];
            const numB = target - numA;
            if (!map[numB]) continue;
            const [a,b] = map[numB];
            if (a !== i) return [i,a];
            else if (!!b) return [i,b]
        }
        return output;
    }
}
