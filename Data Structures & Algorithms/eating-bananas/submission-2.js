class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        return this.bruteForce(piles,h)
    }

    bruteForce(piles,h) {
        const max = Math.max.apply(null, piles);
        let left = 1, right = max;
        let output = 1;

        function countHour(speed) {
            let count = 0;
            for (let i = 0; i < piles.length; i++) {
                count += Math.ceil(piles[i]/speed);
            }
            return count;
        }

        while (left <= right) {
            const mid = Math.round((left+right)/2);
            const totalTime = countHour(mid);
            if (totalTime > h) {
                left = mid + 1;
            } else {
                right = mid - 1;
                output = mid;
            }
        }
        return output;
    }
}
