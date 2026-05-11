class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     * loop through the list
     *      each curItem 2sum = 0 - curItem
     *          calculate2sum(list.slice(curIndex), 2sum)
     * 
     * calculate2sum (list, sum)
     *      store list into hash map { [sum - curItem]: [curItem] }
     *      loop through each item
     *          other = sum - item
     *          map[other] => map[other].pop()
     *          output = [item, other]
     */
    threeSum(nums) {
        const result = {};
        function calculateTwoSum(list, sum) {
            let output = [];
            // brute force
            list.forEach(function (a, index) {
                const b = sum - a;
                console.log(`sum ${sum}`, a, b, list.slice(index+1).indexOf(b) > -1)
                if (list.slice(index+1).indexOf(b) > -1) {
                    output.push([a, b]);
                }
            })
            return output;
        }

        nums.forEach(function(item,index) {
            const twoSum = 0 - item;
            const twoOtherItems = calculateTwoSum(nums.slice(index + 1), twoSum);
            if (twoOtherItems && twoOtherItems?.length > 0) {
                twoOtherItems.forEach(otherItem => {
                    const key = [ item,...otherItem].toSorted((a,b) => a - b).join('_');
                    if (!result[key]) {
                        result[key] = [item, ...otherItem];
                    }
                })
            }
        })

        return Object.values(result);
    }
}
