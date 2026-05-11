class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const len = s.length;
        //odd length
        if (len%2 !== 0) return false;
        //even length
        const bracketMap = {
            "(":")",
            "{":"}",
            "[":"]"
        };
        const stack = [];
        //input: []
        for (let i = 0; i < len; i++) {
            const char = s[i]; // [
            console.log("char", char)
            const closeBracket = bracketMap[char];
            if (closeBracket) {
                stack.push(closeBracket);
            } else {
                const bracket = stack.pop();
                if (bracket !== char) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
