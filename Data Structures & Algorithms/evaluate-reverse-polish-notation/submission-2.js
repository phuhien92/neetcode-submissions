class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        const operators = ['+','-','*','/'];
        const calculate = (operator) => {
            const num2 = stack.pop();
            const num1 = stack.pop();
            if (isNaN(num1) || isNaN(num2)) return undefined;
            return Math.trunc(eval(`${num1} ${operator} ${num2}`));
        }
        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            if (!operators.includes(token)) {
                stack.push(token);
            } else {
                const result = calculate(token);
                if (result !== undefined) stack.push(result);
            }
            console.log(stack)
        }

        return stack[0];
    }
}
