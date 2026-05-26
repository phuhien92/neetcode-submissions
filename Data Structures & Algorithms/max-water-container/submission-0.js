class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const calculateAmountOfWater = (a,b) => {
            const numA = heights[a];
            const numB = heights[b];
            return Math.min(numA, numB)*Math.abs(a-b);
        };

        let start = 0, end = heights.length - 1;
        let output = calculateAmountOfWater(start,end);
        while (start !== end) {
            const amount = calculateAmountOfWater(start, end);
            output = Math.max(output, amount);
            if (heights[start] > heights[end]) {
                end--;
            } else {
                start++;
            }
        }
        return output;
    }
}
