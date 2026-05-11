class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const store = {};
        let output = true;
        for (let char of s) {
            if (store[char]) store[char]++;
            else store[char] = 1;
        }
        for (let char of t) {
            let pos = store[char];
            if (!pos) return false;
            store[char]--;
            if (store[char] === 0) delete store[char]; 
        }

        return output && Object.entries(store).length === 0;
    }
}
