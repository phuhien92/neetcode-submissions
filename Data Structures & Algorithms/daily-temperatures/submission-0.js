class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        //brute force 
        return this.brute_force(temperatures);
    }

    //brute force way
    brute_force(temp) {
        const output = [];
        for (let i = 0; i < temp.length; i++) {
            const iVal = temp[i];
            let diff = 0;
            for (let k = i+1; k < temp.length; k++) {
                const kVal = temp[k];
                if (kVal > iVal) {
                    diff = k - i;
                    break;
                }
            }
            output.push(diff);
        }

        return output;
    }
}
