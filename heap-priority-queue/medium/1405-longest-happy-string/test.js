// Test: 1405. Longest Happy String
// 93 test cases from LeetCodeDataset
// Run: node test.js

const { longestDiverseString } = require("./solution");

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

console.log("\n1405. Longest Happy String\n");

test(longestDiverseString(7, 1, 0), aabaa, 'Test 1');
test(longestDiverseString(100, 100, 100), abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 2');
test(longestDiverseString(33, 33, 34), cabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 3');
test(longestDiverseString(2, 2, 2), abcabc, 'Test 4');
test(longestDiverseString(5, 5, 5), abcabcabcabcabc, 'Test 5');
test(longestDiverseString(5, 3, 2), aabaabcabc, 'Test 6');
test(longestDiverseString(50, 50, 0), abababababababababababababababababababababababababababababababababababababababababababababababababab, 'Test 7');
test(longestDiverseString(50, 30, 20), aabaabaabaabaabaabaabaabaabaabaabaacaabaacaabaacaabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 8');
test(longestDiverseString(1, 1, 7), ccaccbcc, 'Test 9');
test(longestDiverseString(0, 0, 1), c, 'Test 10');
test(longestDiverseString(0, 0, 0), , 'Test 11');
test(longestDiverseString(100, 0, 0), aa, 'Test 12');
test(longestDiverseString(0, 0, 3), cc, 'Test 13');
test(longestDiverseString(40, 30, 30), aabaacaabaacaabaacaabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 14');
test(longestDiverseString(0, 10, 10), bcbcbcbcbcbcbcbcbcbc, 'Test 15');
test(longestDiverseString(10, 10, 1), ababababababababababc, 'Test 16');
test(longestDiverseString(20, 10, 15), aacaacaacaacaacabcabcabcabcabcabcabcabcabcabc, 'Test 17');
test(longestDiverseString(15, 20, 10), bbabbabbabbabababcabcabcabcabcabcabcabcabcabc, 'Test 18');
test(longestDiverseString(45, 10, 45), acacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacacabcabcabcabcabcabcabcabcabcabc, 'Test 19');
test(longestDiverseString(6, 6, 6), abcabcabcabcabcabc, 'Test 20');
test(longestDiverseString(3, 3, 3), abcabcabc, 'Test 21');
test(longestDiverseString(40, 20, 40), acacacacacacacacacacacacacacacacacacacacabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 22');
test(longestDiverseString(15, 15, 15), abcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 23');
test(longestDiverseString(33, 34, 33), babcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 24');
test(longestDiverseString(5, 5, 4), ababcabcabcabc, 'Test 25');
test(longestDiverseString(10, 10, 20), ccaccbccaccbccaccbcabcabcabcabcabcabcabc, 'Test 26');
test(longestDiverseString(60, 40, 5), aabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabababababababababababababababababcabcabcabcabc, 'Test 27');
test(longestDiverseString(4, 4, 3), ababcabcabc, 'Test 28');
test(longestDiverseString(15, 15, 5), abababababababababababcabcabcabcabc, 'Test 29');
test(longestDiverseString(5, 4, 4), aabcabcabcabc, 'Test 30');
test(longestDiverseString(5, 5, 0), ababababab, 'Test 31');
test(longestDiverseString(10, 10, 5), ababababababcabcabcabcabc, 'Test 32');
test(longestDiverseString(5, 0, 5), acacacacac, 'Test 33');
test(longestDiverseString(20, 20, 10), abababababababababababcabcabcabcabcabcabcabcabcabc, 'Test 34');
test(longestDiverseString(34, 33, 33), aabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 35');
test(longestDiverseString(0, 0, 100), cc, 'Test 36');
test(longestDiverseString(10, 20, 10), bbabbcbbabbcbbabbcbabcabcabcabcabcabcabc, 'Test 37');
test(longestDiverseString(30, 20, 10), aabaabaabaabaabaabaabaabaabaababcabcabcabcabcabcabcabcabcabc, 'Test 38');
test(longestDiverseString(30, 30, 20), abababababababababababcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 39');
test(longestDiverseString(20, 25, 20), bbabbcbbabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 40');
test(longestDiverseString(0, 50, 50), bcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbc, 'Test 41');
test(longestDiverseString(90, 5, 5), aabaacaabaacaabaacaabaacaabaacaa, 'Test 42');
test(longestDiverseString(20, 19, 18), aababcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 43');
test(longestDiverseString(6, 7, 8), cbcabcabcabcabcabcabc, 'Test 44');
test(longestDiverseString(1, 1, 5), ccaccbc, 'Test 45');
test(longestDiverseString(4, 4, 5), cabcabcabcabc, 'Test 46');
test(longestDiverseString(2, 1, 1), aabc, 'Test 47');
test(longestDiverseString(50, 50, 50), abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 48');
test(longestDiverseString(99, 1, 0), aabaa, 'Test 49');
test(longestDiverseString(34, 34, 32), abababcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 50');
test(longestDiverseString(10, 45, 45), bcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcabcabcabcabcabcabcabcabcabcabc, 'Test 51');
test(longestDiverseString(2, 3, 5), ccbcabcabc, 'Test 52');
test(longestDiverseString(15, 5, 10), aacaacaacaacaacabcabcabcabcabc, 'Test 53');
test(longestDiverseString(1, 1, 2), cabc, 'Test 54');
test(longestDiverseString(7, 8, 9), cbcabcabcabcabcabcabcabc, 'Test 55');
test(longestDiverseString(8, 8, 8), abcabcabcabcabcabcabcabc, 'Test 56');
test(longestDiverseString(33, 33, 33), abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 57');
test(longestDiverseString(25, 25, 24), ababcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 58');
test(longestDiverseString(100, 50, 50), aabaacaabaacaabaacaabaacaabaacaabaacaabaacaabaacaabaacaabaacaabaacaabaacaabaacaabaacaabaacaabaacaabacabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 59');
test(longestDiverseString(5, 2, 2), aabaacabc, 'Test 60');
test(longestDiverseString(25, 25, 25), abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 61');
test(longestDiverseString(99, 99, 99), abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 62');
test(longestDiverseString(15, 15, 10), ababababababcabcabcabcabcabcabcabcabcabc, 'Test 63');
test(longestDiverseString(3, 3, 9), ccaccbccacbcabc, 'Test 64');
test(longestDiverseString(15, 15, 1), abababababababababababababababc, 'Test 65');
test(longestDiverseString(10, 10, 10), abcabcabcabcabcabcabcabcabcabc, 'Test 66');
test(longestDiverseString(9, 8, 7), aababcabcabcabcabcabcabc, 'Test 67');
test(longestDiverseString(3, 3, 4), cabcabcabc, 'Test 68');
test(longestDiverseString(1, 2, 1), babc, 'Test 69');
test(longestDiverseString(3, 2, 1), aababc, 'Test 70');
test(longestDiverseString(10, 1, 1), aabaacaa, 'Test 71');
test(longestDiverseString(10, 5, 15), ccaccaccaccacacabcabcabcabcabc, 'Test 72');
test(longestDiverseString(1, 1, 1), abc, 'Test 73');
test(longestDiverseString(49, 50, 51), cbcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 74');
test(longestDiverseString(20, 10, 10), aabaacaabaacaabaacaabcabcabcabcabcabcabc, 'Test 75');
test(longestDiverseString(51, 50, 49), aababcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 76');
test(longestDiverseString(20, 30, 20), bbabbcbbabbcbbabbcbabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 77');
test(longestDiverseString(1, 100, 1), bbabbcbb, 'Test 78');
test(longestDiverseString(5, 5, 10), ccaccbccabcabcabcabc, 'Test 79');
test(longestDiverseString(50, 50, 1), ababababababababababababababababababababababababababababababababababababababababababababababababababc, 'Test 80');
test(longestDiverseString(0, 100, 0), bb, 'Test 81');
test(longestDiverseString(24, 25, 25), bcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 82');
test(longestDiverseString(4, 4, 5), Error: Solution.longestDiverseString[] missing 1 required positional argument: 'b', 'Test 83');
test(longestDiverseString(10, 10, 15), ccaccbccabcabcabcabcabcabcabcabcabc, 'Test 84');
test(longestDiverseString(1, 1, 100), ccaccbcc, 'Test 85');
test(longestDiverseString(1, 2, 3), cbcabc, 'Test 86');
test(longestDiverseString(20, 20, 19), ababcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 87');
test(longestDiverseString(45, 45, 10), ababababababababababababababababababababababababababababababababababababcabcabcabcabcabcabcabcabcabc, 'Test 88');
test(longestDiverseString(0, 5, 5), bcbcbcbcbc, 'Test 89');
test(longestDiverseString(60, 40, 0), aabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaabaababababababababababababababababababababab, 'Test 90');
test(longestDiverseString(3, 7, 5), bbcbbcabcabcabc, 'Test 91');
test(longestDiverseString(30, 30, 30), abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 92');
test(longestDiverseString(30, 25, 45), ccaccaccaccaccaccaccbccaccbccaccbcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc, 'Test 93');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

