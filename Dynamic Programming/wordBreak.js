class Solution {
  /**
   * @param {string} s
   * @param {string[]} wordDict
   * @return {boolean}
   */
  wordBreak(s, wordDict) {
    let maxLen = -1;
    let storage = new Set();
    let n = s.length;
    let dp = new Array(n + 1).fill(false);
    for (let str of wordDict) {
      maxLen = Math.max(maxLen, str.length);
      storage.add(str);
    }

    dp[0] = true;
    for (let i = 1; i <= n; i++) {
      let temp = "";
      for (let j = i - 1; j >= 0; j--) {
        if (j + 2 - i > maxLen) {
          break;
        }
        temp = s[j] + temp;
        if (storage.has(temp)) {
          if (!dp[i]) {
            dp[i] = true && dp[j];
          }
        }
      }
    }

    return dp[n];
  }
}

const solution = new Solution();
console.log(solution.wordBreak("dogs", ["dog", "s", "gs"]));
