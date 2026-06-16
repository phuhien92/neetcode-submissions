class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const normalizeStr = s.toLowerCase().replace(/\s|[^a-z0-9]/g,'');
        let a = 0, b = normalizeStr.length - 1;

        console.log(normalizeStr)
        while (a <= b) {
            if (normalizeStr[a] !== normalizeStr[b]) {
                return false;
            }
            a++;
            b--
        }

        return true;
    }
}
