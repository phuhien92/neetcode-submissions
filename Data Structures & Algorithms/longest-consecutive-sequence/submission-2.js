class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * 1. put nums into set => s = new Set(nums)
     * 2. Sort out the set list = Array.from(s).toSorted()
     * output = 0;
     * curLength = 0;
     * 3. Loop through the list [2,3,4,5,10,20]
     *      if (!prev) prev = list[0] continue;
     *      if (prev) 
     *          if list[i] === prev + 1
     *              prev = list[i];
     *              curLength++;
     *              if (output < curLength) output = curLength;
     *          else 
     *              prev = list[i];
     *              curLength = 0
     *  return output;
     *  big o 
     * space O(n) with n is the length of nums
     * complexity O(nlogn + n)
     *              
     */
    longestConsecutive(nums) {
        const s = new Set(nums);
        const list = Array.from(s)
        let output = 0;

        // [1,2,4]
        // prev = 1, len = 1, output = 1
        // prev = 2, len = 2, output = 2
        for (let i = 0; i < list.length; i++) {
            //check if there is any value in set = num - 1
            let num = list[i]
            if (!s.has(num - 1)) {
                let curLen = 1;
                while (s.has(num + curLen)) {
                    curLen +=1;
                }
                output = Math.max(output, curLen);
            } 

        }
        return output;
    }
}
