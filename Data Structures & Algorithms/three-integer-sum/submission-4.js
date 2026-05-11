class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     * 
     * solution 2
     * sort the list
     * loop through each of item, i
     *    a + b + c = 0
     *    a = item
     *    2sum = 0 - a;
     *    loop through list from nums.slice[i+1]
     *      
     */
    threeSum(nums) {
        const sortedNums = nums.toSorted((a,b) => a - b);
        function getTwoSumItems(list, sum) {
            let output = [];
            //pointer a,b
            let a = 0,b = list.length - 1;
            while (a < b) {
                const numA = list[a];
                const numB = list[b];
                if (numA + numB === sum) {
                    output.push([numA, numB]);
                    a++;
                    b--;
                }
                if (numA + numB > sum) {
                    b--;
                }
                if (numA + numB < sum) {
                    a++;
                }
            } 
            return output;
        }
        //sorted = [-4,-1,-1,0,1,2]
        // [0,0,0,0]
        const result = {};
        sortedNums.forEach((a, i) => {
            //[-1,2] [0,1]
            const twoSumItems = getTwoSumItems(sortedNums.slice(i+1), 0 - a);
            if (twoSumItems?.length > 0) {
                twoSumItems.forEach((item) => {
                    const triplet = [a, ...item];
                    const key = triplet.join('_');
                    if (!result[key]) {
                        result[key] = triplet;
                    }
                })
            }
        })

        return Object.values(result);
    }
}
