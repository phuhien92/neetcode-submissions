class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        //brute force o(n2) time / space: o(n) space
        //return this.brute_force(temperatures);

        //better solution o(n) time/space
        return this.stackSolution(temperatures)
    }

    stackSolution(temp) {
        const len = temp.length;
        const output = new Array(len).fill(0);
        const stack = [[temp[0], 0]];
        //[30,38,30,36,35,40,28] => [1,]
        //
        for (let i = 1; i < len; i++) {
            const curTemp = temp[i];
            while (stack.length > 0 && curTemp > stack[stack.length - 1][0]) {
                const [, stackI] = stack.pop();
                output[stackI] = i - stackI;
            }
            stack.push([curTemp, i]);
        }

        return output;
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
