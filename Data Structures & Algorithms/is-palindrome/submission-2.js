class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphaNumericChar = (char) => {
            const code = char.toLowerCase().charCodeAt();
            
            const isLetter = code >= 'a'.charCodeAt() && code <= 'z'.charCodeAt();
            const isNumber = code >= '0'.charCodeAt() && code <= '9'.charCodeAt();
            
            return isLetter || isNumber;
        }

        const str = s.toLowerCase().split('');
        let a = 0, b = str.length - 1;
        while (a < b) {
            const charA = str[a];
            const charB = str[b];
            if (!isAlphaNumericChar(charA)) {
                a++; 
                continue;
            }
            if (!isAlphaNumericChar(charB)) {
                b--; 
                continue;
            }
            if (str[a] !== str[b]) {
                return false;
            }
            a++;
            b--;
        }

        return true;
    }
}
