// Test: 2030. Smallest K Length Subsequence With Occurrences Of A Letter
// 45 test cases from LeetCodeDataset
// Run: node test.js

const { smallestSubsequence } = require("./solution");

let passed = 0, failed = 0;
function test(actual, expected, label) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) {
    passed++;
  } else {
    console.log(`  ✗ ${label}`);
    console.log(`    Expected: ${e}`);
    console.log(`    Actual:   ${a}`);
    failed++;
  }
}

console.log("\n2030. Smallest K Length Subsequence With Occurrences Of A Letter\n");

test(smallestSubsequence("bb", 2, "b", 2), bb, 'Test 1');
test(smallestSubsequence("leetcode", 4, "e", 2), ecde, 'Test 2');
test(smallestSubsequence("leet", 3, "e", 1), eet, 'Test 3');
test(smallestSubsequence("aabbc", 3, "a", 1), aab, 'Test 4');
test(smallestSubsequence("abacabad", 4, "a", 2), aaaa, 'Test 5');
test(smallestSubsequence("zzzzz", 3, "z", 3), zzz, 'Test 6');
test(smallestSubsequence("abcdedcba", 5, "d", 1), abcda, 'Test 7');
test(smallestSubsequence("zzzzzaaaaa", 5, "a", 3), aaaaa, 'Test 8');
test(smallestSubsequence("apple", 3, "p", 1), ape, 'Test 9');
test(smallestSubsequence("abacabadabacaba", 7, "a", 3), aaaaaaa, 'Test 10');
test(smallestSubsequence("azbzczdz", 4, "z", 2), abzz, 'Test 11');
test(smallestSubsequence("abcdedcba", 5, "c", 1), abcba, 'Test 12');
test(smallestSubsequence("xyzxyzxyz", 5, "z", 2), xxyzz, 'Test 13');
test(smallestSubsequence("abcdedcba", 5, "c", 2), abcca, 'Test 14');
test(smallestSubsequence("zzzz", 2, "z", 2), zz, 'Test 15');
test(smallestSubsequence("abcabcabc", 6, "a", 2), aababc, 'Test 16');
test(smallestSubsequence("abcdabcdabcd", 9, "b", 3), ababcabcd, 'Test 17');
test(smallestSubsequence("elephant", 4, "e", 1), eant, 'Test 18');
test(smallestSubsequence("zazbzazbzazb", 8, "z", 4), abzazbzz, 'Test 19');
test(smallestSubsequence("babcbabcbabc", 5, "b", 3), aabbb, 'Test 20');
test(smallestSubsequence("abcdedcbaabcdedcbaabcdedcba", 15, "c", 3), aaabcaabcdedcba, 'Test 21');
test(smallestSubsequence("aaaaaaaaaaaabbbbbbbbbbccccccccccdddddddddd", 20, "c", 4), aaaaaaaaaaaabbbbcccc, 'Test 22');
test(smallestSubsequence("aaaaaabbbbbbcccccc", 12, "b", 4), aaaaaabbbbbb, 'Test 23');
test(smallestSubsequence("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz", 26, "z", 1), aabcdefghijklmnopqrstuvwxz, 'Test 24');
test(smallestSubsequence("abcdefghijklmnopqrstuvwxyz", 13, "m", 1), abcdefghijklm, 'Test 25');
test(smallestSubsequence("mississippi", 5, "i", 2), iiipi, 'Test 26');
test(smallestSubsequence("zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba", 26, "a", 2), ayxwvutsrqponmlkjihgfedcba, 'Test 27');
test(smallestSubsequence("ababababababababababababababababababababababab", 10, "a", 3), aaaaaaaaaa, 'Test 28');
test(smallestSubsequence("xyzyxyzyxyzyxyzyzyzyxyzyzyzyzyzyxyzyxyzyzyzyzyzy", 15, "x", 3), xxxxxxxyyyyzyzy, 'Test 29');
test(smallestSubsequence("aabbccddeeff", 8, "c", 3), aabbccd, 'Test 30');
test(smallestSubsequence("zzzzzaaaaabbbb", 10, "a", 4), zaaaaabbbb, 'Test 31');
test(smallestSubsequence("mississippi", 4, "i", 2), iiii, 'Test 32');
test(smallestSubsequence("mississippi", 6, "i", 2), iiippi, 'Test 33');
test(smallestSubsequence("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 50, "z", 10), zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz, 'Test 34');
test(smallestSubsequence("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 20, "a", 2), aabbccddeeffgghhiijj, 'Test 35');
test(smallestSubsequence("banana", 4, "a", 2), aana, 'Test 36');
test(smallestSubsequence("abcdabcdabcd", 8, "b", 3), abababcd, 'Test 37');
test(smallestSubsequence("abcdefghijklmnopqrstuvwxyz", 10, "m", 2), abcdefghm, 'Test 38');
test(smallestSubsequence("abracadabra", 7, "a", 3), aaaabra, 'Test 39');
test(smallestSubsequence("zyxzyxzyx", 5, "x", 2), xxzyx, 'Test 40');
test(smallestSubsequence("abracadabraabracadabra", 12, "a", 4), aaaaaaaaabra, 'Test 41');
test(smallestSubsequence("racecar", 5, "e", 1), acear, 'Test 42');
test(smallestSubsequence("abcdabcabcabc", 9, "c", 3), aabcabcac, 'Test 43');
test(smallestSubsequence("qwertyuiopasdfghjklzxcvbnmqwerty", 12, "r", 2), erabnmqwerty, 'Test 44');
test(smallestSubsequence("xyzyzyzyzyx", 7, "y", 3), xyyyyyx, 'Test 45');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

// Auto-mark DONE when all tests pass
if (!failed) {
  const path = require("path");
  const fs = require("fs");
  const dir = __dirname;
  const folder = path.basename(dir);
  if (!folder.startsWith("DONE-")) {
    const parent = path.dirname(dir);
    const newDir = path.join(parent, "DONE-" + folder);
    fs.renameSync(dir, newDir);
    const readme = path.join(newDir, "README.md");
    if (fs.existsSync(readme)) {
      let c = fs.readFileSync(readme, "utf-8");
      if (!c.includes("<!-- SOLVED -->")) {
        c = c.replace(/^(# .+)$/m, "$1 ✅\n<!-- SOLVED -->");
        fs.writeFileSync(readme, c);
      }
    }
    console.log("✅ DONE → " + "DONE-" + folder);
  }
}
