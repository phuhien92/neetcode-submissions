class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let output = 0;
        let left = 0, right = 1;
        while (right < prices.length) {
            const diff = prices[right] - prices[left];
            if (diff > 0) {
                output = Math.max(output, diff)
            } else {
                left = right;
            }
            right++;
        }
        return output;
    }
}
