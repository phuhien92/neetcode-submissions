class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const store = new Map();
        let output = true;
        for (let char of s) {
            store.set(char, (store.get(char) || 0)+1)
        }
        for (let char of t) {
            if (!store.get(char)) return false;
            store.set(char, store.get(char)-1);
        }

        return true;
    }
}
