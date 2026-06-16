// Test: 1493. Longest Subarray Of 1S After Deleting One Element
// 92 test cases from LeetCodeDataset
// Run: node test.js

const { longestSubarray } = require("./solution");

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

console.log("\n1493. Longest Subarray Of 1S After Deleting One Element\n");

test(longestSubarray([1,1,0,0,1,1,1,0,0,1,1,1,1]), 4, 'Test 1');
test(longestSubarray([0,1,0,1,0,1,0,1,0,1]), 2, 'Test 2');
test(longestSubarray([0,0,0]), 0, 'Test 3');
test(longestSubarray([1,1,1,1,1,1,1,1,1,1]), 9, 'Test 4');
test(longestSubarray([1,0,0,1,0,1,1,1,1,0]), 5, 'Test 5');
test(longestSubarray([1,0,0,1,0,1,1,1,0,1,1,1,0]), 6, 'Test 6');
test(longestSubarray([1,1,1]), 2, 'Test 7');
test(longestSubarray([1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0]), 6, 'Test 8');
test(longestSubarray([1,0,0,1,0,1,1,1,0,1]), 4, 'Test 9');
test(longestSubarray([1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1]), 6, 'Test 10');
test(longestSubarray([1,1,0,0,1,1,1,0,1,1,1,1,0]), 7, 'Test 11');
test(longestSubarray([1,1,0,1]), 3, 'Test 12');
test(longestSubarray([0,1,1,1,0,1,1,0,1]), 5, 'Test 13');
test(longestSubarray([1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1]), 4, 'Test 14');
test(longestSubarray([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]), 10, 'Test 15');
test(longestSubarray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]), 24, 'Test 16');
test(longestSubarray([0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1]), 9, 'Test 17');
test(longestSubarray([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 18');
test(longestSubarray([0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0]), 2, 'Test 19');
test(longestSubarray([0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 2, 'Test 20');
test(longestSubarray([1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1]), 10, 'Test 21');
test(longestSubarray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 19, 'Test 22');
test(longestSubarray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1]), 38, 'Test 23');
test(longestSubarray([1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 24, 'Test 24');
test(longestSubarray([1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1]), 7, 'Test 25');
test(longestSubarray([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 26');
test(longestSubarray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 25, 'Test 27');
test(longestSubarray([1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1]), 4, 'Test 28');
test(longestSubarray([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 2, 'Test 29');
test(longestSubarray([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 30');
test(longestSubarray([1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1]), 23, 'Test 31');
test(longestSubarray([1,0,1,0,1,0,1,0,1,0,1]), 2, 'Test 32');
test(longestSubarray([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 33');
test(longestSubarray([0,0,0,0,0,0,0,0,0,0]), 0, 'Test 34');
test(longestSubarray([0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 29, 'Test 35');
test(longestSubarray([1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0]), 10, 'Test 36');
test(longestSubarray([0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0]), 6, 'Test 37');
test(longestSubarray([1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1]), 9, 'Test 38');
test(longestSubarray([1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 33, 'Test 39');
test(longestSubarray([1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1]), 6, 'Test 40');
test(longestSubarray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]), 29, 'Test 41');
test(longestSubarray([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 2, 'Test 42');
test(longestSubarray([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), 1, 'Test 43');
test(longestSubarray([1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1]), 14, 'Test 44');
test(longestSubarray([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 45');
test(longestSubarray([1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0]), 3, 'Test 46');
test(longestSubarray([1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1]), 9, 'Test 47');
test(longestSubarray([1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1]), 4, 'Test 48');
test(longestSubarray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0]), 20, 'Test 49');
test(longestSubarray([1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1]), 4, 'Test 50');
test(longestSubarray([1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1]), 22, 'Test 51');
test(longestSubarray([1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1]), 19, 'Test 52');
test(longestSubarray([1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0]), 4, 'Test 53');
test(longestSubarray([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 2, 'Test 54');
test(longestSubarray([1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 3, 'Test 55');
test(longestSubarray([1,0,1,0,1,0,1,0,1,0]), 2, 'Test 56');
test(longestSubarray([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 57');
test(longestSubarray([1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1]), 6, 'Test 58');
test(longestSubarray([0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]), 24, 'Test 59');
test(longestSubarray([0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1]), 6, 'Test 60');
test(longestSubarray([1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1]), 22, 'Test 61');
test(longestSubarray([1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1]), 9, 'Test 62');
test(longestSubarray([1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]), 19, 'Test 63');
test(longestSubarray([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0]), 2, 'Test 64');
test(longestSubarray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 32, 'Test 65');
test(longestSubarray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 28, 'Test 66');
test(longestSubarray([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 2, 'Test 67');
test(longestSubarray([1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 31, 'Test 68');
test(longestSubarray([1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1]), 8, 'Test 69');
test(longestSubarray([1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0]), 6, 'Test 70');
test(longestSubarray([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 2, 'Test 71');
test(longestSubarray([1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1]), 30, 'Test 72');
test(longestSubarray([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 2, 'Test 73');
test(longestSubarray([0,0,0,0,0,1,1,1,1,1,0,0,0,0,0]), 5, 'Test 74');
test(longestSubarray([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 75');
test(longestSubarray([1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1]), 9, 'Test 76');
test(longestSubarray([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 2, 'Test 77');
test(longestSubarray([1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1]), 6, 'Test 78');
test(longestSubarray([1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1]), 16, 'Test 79');
test(longestSubarray([1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1]), 7, 'Test 80');
test(longestSubarray([1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1]), 8, 'Test 81');
test(longestSubarray([1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1]), 1, 'Test 82');
test(longestSubarray([1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0]), 10, 'Test 83');
test(longestSubarray([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 2, 'Test 84');
test(longestSubarray([1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1]), 10, 'Test 85');
test(longestSubarray([1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]), 10, 'Test 86');
test(longestSubarray([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]), 1, 'Test 87');
test(longestSubarray([1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1]), 6, 'Test 88');
test(longestSubarray([0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1]), 3, 'Test 89');
test(longestSubarray([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 2, 'Test 90');
test(longestSubarray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 43, 'Test 91');
test(longestSubarray([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), 2, 'Test 92');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

