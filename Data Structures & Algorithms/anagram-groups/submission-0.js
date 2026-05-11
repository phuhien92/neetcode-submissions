class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for (let i = 0; i < strs.length; i++) {
            const sortedVal = strs[i].split('').toSorted().join('');
            if (map.get(sortedVal)) {
                map.get(sortedVal).push(strs[i]);
            } else {
                map.set(sortedVal, [strs[i]]);
            }
        }
        return map.values().toArray();
    }
}
