// Test: 1278. Palindrome Partitioning Iii
// 89 test cases from LeetCodeDataset
// Run: node test.js

const { palindromePartition } = require("./solution");

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

console.log("\n1278. Palindrome Partitioning Iii\n");

test(palindromePartition("abc", 2), 1, 'Test 1');
test(palindromePartition("abababa", 4), 1, 'Test 2');
test(palindromePartition("aaaa", 2), 0, 'Test 3');
test(palindromePartition("leetcode", 8), 0, 'Test 4');
test(palindromePartition("abcd", 2), 1, 'Test 5');
test(palindromePartition("racecar", 5), 0, 'Test 6');
test(palindromePartition("nnn", 1), 0, 'Test 7');
test(palindromePartition("abac", 3), 1, 'Test 8');
test(palindromePartition("racecar", 1), 0, 'Test 9');
test(palindromePartition("aabbc", 3), 0, 'Test 10');
test(palindromePartition("abacdfgdcaba", 3), 1, 'Test 11');
test(palindromePartition("palindrome", 2), 4, 'Test 12');
test(palindromePartition("aaaabbbbcccc", 3), 0, 'Test 13');
test(palindromePartition("aabbccdd", 4), 0, 'Test 14');
test(palindromePartition("zzzzzzzzzz", 1), 0, 'Test 15');
test(palindromePartition("palindrome", 4), 3, 'Test 16');
test(palindromePartition("mississippi", 4), 0, 'Test 17');
test(palindromePartition("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 13), 14, 'Test 18');
test(palindromePartition("banana", 2), 0, 'Test 19');
test(palindromePartition("abcdefg", 7), 0, 'Test 20');
test(palindromePartition("aabbaabbaabbaabb", 4), 0, 'Test 21');
test(palindromePartition("ababababab", 5), 1, 'Test 22');
test(palindromePartition("abcdefg", 4), 2, 'Test 23');
test(palindromePartition("aabbccddeeff", 6), 0, 'Test 24');
test(palindromePartition("abcdcbaabcdcba", 4), 0, 'Test 25');
test(palindromePartition("xyxyxyxyxy", 5), 1, 'Test 26');
test(palindromePartition("mamamamamama", 5), 1, 'Test 27');
test(palindromePartition("zxyxzyxzyxzyx", 4), 2, 'Test 28');
test(palindromePartition("aababababa", 5), 0, 'Test 29');
test(palindromePartition("xyxyxyxyxyxyxyxyxy", 9), 1, 'Test 30');
test(palindromePartition("zazapapa", 3), 1, 'Test 31');
test(palindromePartition("xyxyxyxyx", 5), 0, 'Test 32');
test(palindromePartition("abababab", 5), 1, 'Test 33');
test(palindromePartition("abcde", 3), 1, 'Test 34');
test(palindromePartition("mnopqrstu", 5), 2, 'Test 35');
test(palindromePartition("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 50), 0, 'Test 36');
test(palindromePartition("abcdedcba", 3), 0, 'Test 37');
test(palindromePartition("abcbcaabc", 3), 1, 'Test 38');
test(palindromePartition("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", 26), 0, 'Test 39');
test(palindromePartition("abcdefgabcdefg", 2), 6, 'Test 40');
test(palindromePartition("aaaaaaaaaaa", 2), 0, 'Test 41');
test(palindromePartition("aabbaa", 3), 0, 'Test 42');
test(palindromePartition("racecar", 3), 0, 'Test 43');
test(palindromePartition("abcdefghijk", 3), 4, 'Test 44');
test(palindromePartition("aabbccddeeffgghh", 8), 0, 'Test 45');
test(palindromePartition("xyzzyxzyxzyxzyxzyxzyx", 5), 4, 'Test 46');
test(palindromePartition("levelmadammadam", 4), 0, 'Test 47');
test(palindromePartition("abcdefghij", 5), 3, 'Test 48');
test(palindromePartition("abcdabcdabcd", 3), 3, 'Test 49');
test(palindromePartition("noonnoonnoon", 6), 0, 'Test 50');
test(palindromePartition("aaaaaaaaaa", 5), 0, 'Test 51');
test(palindromePartition("banana", 3), 1, 'Test 52');
test(palindromePartition("noonnoonnoon", 4), 0, 'Test 53');
test(palindromePartition("racecar", 2), 3, 'Test 54');
test(palindromePartition("abacdefghijklmnopqrstuvwxyz", 26), 1, 'Test 55');
test(palindromePartition("xyzyxzyzxzyx", 6), 0, 'Test 56');
test(palindromePartition("abcbabc", 3), 0, 'Test 57');
test(palindromePartition("aabbaa", 2), 1, 'Test 58');
test(palindromePartition("aaaaabbbbb", 2), 0, 'Test 59');
test(palindromePartition("abccba", 1), 0, 'Test 60');
test(palindromePartition("abcbabcba", 4), 1, 'Test 61');
test(palindromePartition("abcdefghi", 3), 3, 'Test 62');
test(palindromePartition("abcdefgh", 8), 0, 'Test 63');
test(palindromePartition("abcdefghi", 9), 0, 'Test 64');
test(palindromePartition("xyzyzyzyzyzyz", 3), 0, 'Test 65');
test(palindromePartition("abcdefg", 3), 2, 'Test 66');
test(palindromePartition("aabaaa", 2), 0, 'Test 67');
test(palindromePartition("abcdefg", 1), 3, 'Test 68');
test(palindromePartition("ababab", 2), 0, 'Test 69');
test(palindromePartition("abcdabc", 3), 1, 'Test 70');
test(palindromePartition("xyzxyzxyz", 3), 2, 'Test 71');
test(palindromePartition("abccccba", 2), 2, 'Test 72');
test(palindromePartition("mississippi", 3), 1, 'Test 73');
test(palindromePartition("zzzzzzzzzz", 5), 0, 'Test 74');
test(palindromePartition("abababababababababab", 10), 0, 'Test 75');
test(palindromePartition("ababababa", 5), 0, 'Test 76');
test(palindromePartition("abacabadabacaba", 7), 0, 'Test 77');
test(palindromePartition("abccccba", 3), 0, 'Test 78');
test(palindromePartition("abcdefghi", 5), 2, 'Test 79');
test(palindromePartition("abacaxaba", 4), 1, 'Test 80');
test(palindromePartition("aababbaab", 4), 0, 'Test 81');
test(palindromePartition("aaaaabbbbbcccccddddd", 10), 0, 'Test 82');
test(palindromePartition("racecarannakayak", 4), 1, 'Test 83');
test(palindromePartition("abbaabba", 4), 0, 'Test 84');
test(palindromePartition("abacaxabac", 5), 1, 'Test 85');
test(palindromePartition("zzzzzzzzz", 5), 0, 'Test 86');
test(palindromePartition("aaaaabbbbb", 5), 0, 'Test 87');
test(palindromePartition("abcdabcdabcd", 4), 2, 'Test 88');
test(palindromePartition("zyxwvutsrqponmlkjihgfedcba", 26), 0, 'Test 89');

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
