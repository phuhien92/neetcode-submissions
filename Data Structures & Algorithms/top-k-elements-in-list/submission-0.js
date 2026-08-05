class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        for (let num of nums) {
            map[num] = !map[num] ? [num, 1] : [num, map[num][1] + 1];
        }
        const values = Object.values(map).sort((a,b) => b[1] - a[1]).slice(0, k);
        return values.map(val => val[0]);
    }
}
