// Test: 2272. Substring With Largest Variance
// 25 test cases from LeetCodeDataset
// Run: node test.js

const { largestVariance } = require("./solution");

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

console.log("\n2272. Substring With Largest Variance\n");

test(largestVariance("zzzzzzy"), 5, 'Test 1');
test(largestVariance("zyzzyzyzy"), 2, 'Test 2');
test(largestVariance("abcdefghijklmnopqrstuvwxyz"), 0, 'Test 3');
test(largestVariance("abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 1, 'Test 4');
test(largestVariance("abbaabbaabba"), 2, 'Test 5');
test(largestVariance("abababab"), 1, 'Test 6');
test(largestVariance("aaaaa"), 0, 'Test 7');
test(largestVariance("a"), 0, 'Test 8');
test(largestVariance("abcabcabc"), 1, 'Test 9');
test(largestVariance("zzyzxzyzyzxzyzxzyzxzyzxzyzxzyzxzyz"), 11, 'Test 10');
test(largestVariance("abcabcabcabc"), 1, 'Test 11');
test(largestVariance("abcde"), 0, 'Test 12');
test(largestVariance("leetcode"), 2, 'Test 13');
test(largestVariance("xyzxyzxyz"), 1, 'Test 14');
test(largestVariance("abccccccc"), 6, 'Test 15');
test(largestVariance("zzzzzzzzzz"), 0, 'Test 16');
test(largestVariance("zzzzzyyyyxxxxwwwwvvvvuuuuttttssssrrrrqqqqppppllllkkkkjjjjiiiihhhhggggffffffeee ddcccbbbbaaaa"), 5, 'Test 17');
test(largestVariance("aabbcc"), 1, 'Test 18');
test(largestVariance("mississippi"), 3, 'Test 19');
test(largestVariance("abcdefghij"), 0, 'Test 20');
test(largestVariance("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), 1, 'Test 21');
test(largestVariance("aabbccddeeffgghhiijj"), 1, 'Test 22');
test(largestVariance("aabbaaabb"), 3, 'Test 23');
test(largestVariance("abacaba"), 3, 'Test 24');
test(largestVariance("aababbb"), 3, 'Test 25');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

