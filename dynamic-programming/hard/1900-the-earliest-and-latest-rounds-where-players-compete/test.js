// Test: 1900. The Earliest And Latest Rounds Where Players Compete
// 87 test cases from LeetCodeDataset
// Run: node test.js

const { earliestAndLatest } = require("./solution");

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

console.log("\n1900. The Earliest And Latest Rounds Where Players Compete\n");

test(earliestAndLatest(10, 4, 9), [2, 4], 'Test 1');
test(earliestAndLatest(28, 5, 24), [1, 1], 'Test 2');
test(earliestAndLatest(16, 5, 12), [1, 1], 'Test 3');
test(earliestAndLatest(5, 1, 5), [1, 1], 'Test 4');
test(earliestAndLatest(28, 10, 20), [2, 5], 'Test 5');
test(earliestAndLatest(8, 2, 7), [1, 1], 'Test 6');
test(earliestAndLatest(28, 3, 26), [1, 1], 'Test 7');
test(earliestAndLatest(10, 3, 8), [1, 1], 'Test 8');
test(earliestAndLatest(7, 2, 6), [1, 1], 'Test 9');
test(earliestAndLatest(8, 3, 6), [1, 1], 'Test 10');
test(earliestAndLatest(11, 2, 4), [3, 4], 'Test 11');
test(earliestAndLatest(16, 3, 14), [1, 1], 'Test 12');
test(earliestAndLatest(22, 4, 19), [1, 1], 'Test 13');
test(earliestAndLatest(19, 1, 19), [1, 1], 'Test 14');
test(earliestAndLatest(15, 7, 13), [2, 4], 'Test 15');
test(earliestAndLatest(18, 6, 13), [1, 1], 'Test 16');
test(earliestAndLatest(18, 5, 16), [2, 5], 'Test 17');
test(earliestAndLatest(27, 12, 18), [2, 5], 'Test 18');
test(earliestAndLatest(20, 7, 16), [2, 5], 'Test 19');
test(earliestAndLatest(25, 10, 20), [2, 5], 'Test 20');
test(earliestAndLatest(20, 5, 15), [2, 5], 'Test 21');
test(earliestAndLatest(18, 2, 17), [1, 1], 'Test 22');
test(earliestAndLatest(15, 2, 14), [1, 1], 'Test 23');
test(earliestAndLatest(19, 7, 16), [2, 5], 'Test 24');
test(earliestAndLatest(24, 6, 19), [1, 1], 'Test 25');
test(earliestAndLatest(27, 8, 20), [1, 1], 'Test 26');
test(earliestAndLatest(19, 8, 17), [2, 5], 'Test 27');
test(earliestAndLatest(13, 3, 10), [2, 4], 'Test 28');
test(earliestAndLatest(23, 10, 19), [2, 5], 'Test 29');
test(earliestAndLatest(28, 10, 22), [2, 5], 'Test 30');
test(earliestAndLatest(25, 7, 19), [1, 1], 'Test 31');
test(earliestAndLatest(22, 7, 18), [2, 5], 'Test 32');
test(earliestAndLatest(20, 5, 16), [1, 1], 'Test 33');
test(earliestAndLatest(27, 11, 23), [2, 5], 'Test 34');
test(earliestAndLatest(13, 4, 10), [1, 1], 'Test 35');
test(earliestAndLatest(19, 3, 17), [1, 1], 'Test 36');
test(earliestAndLatest(21, 9, 18), [2, 5], 'Test 37');
test(earliestAndLatest(24, 10, 23), [2, 5], 'Test 38');
test(earliestAndLatest(22, 7, 17), [3, 5], 'Test 39');
test(earliestAndLatest(15, 7, 9), [1, 1], 'Test 40');
test(earliestAndLatest(27, 9, 20), [3, 5], 'Test 41');
test(earliestAndLatest(24, 10, 15), [1, 1], 'Test 42');
test(earliestAndLatest(24, 8, 17), [1, 1], 'Test 43');
test(earliestAndLatest(18, 6, 15), [2, 5], 'Test 44');
test(earliestAndLatest(24, 9, 15), [2, 5], 'Test 45');
test(earliestAndLatest(23, 9, 15), [1, 1], 'Test 46');
test(earliestAndLatest(12, 5, 8), [1, 1], 'Test 47');
test(earliestAndLatest(25, 7, 18), [2, 5], 'Test 48');
test(earliestAndLatest(25, 2, 24), [1, 1], 'Test 49');
test(earliestAndLatest(27, 12, 24), [2, 5], 'Test 50');
test(earliestAndLatest(15, 3, 13), [1, 1], 'Test 51');
test(earliestAndLatest(21, 6, 16), [1, 1], 'Test 52');
test(earliestAndLatest(19, 4, 18), [2, 4], 'Test 53');
test(earliestAndLatest(22, 6, 19), [2, 5], 'Test 54');
test(earliestAndLatest(28, 2, 27), [1, 1], 'Test 55');
test(earliestAndLatest(25, 4, 22), [1, 1], 'Test 56');
test(earliestAndLatest(13, 3, 11), [1, 1], 'Test 57');
test(earliestAndLatest(13, 3, 9), [2, 4], 'Test 58');
test(earliestAndLatest(28, 1, 28), [1, 1], 'Test 59');
test(earliestAndLatest(23, 11, 20), [2, 5], 'Test 60');
test(earliestAndLatest(17, 3, 15), [1, 1], 'Test 61');
test(earliestAndLatest(14, 3, 10), [2, 4], 'Test 62');
test(earliestAndLatest(12, 3, 9), [2, 4], 'Test 63');
test(earliestAndLatest(25, 8, 19), [2, 5], 'Test 64');
test(earliestAndLatest(28, 12, 18), [2, 5], 'Test 65');
test(earliestAndLatest(22, 9, 14), [1, 1], 'Test 66');
test(earliestAndLatest(24, 9, 21), [2, 5], 'Test 67');
test(earliestAndLatest(19, 9, 17), [2, 5], 'Test 68');
test(earliestAndLatest(17, 4, 15), [2, 4], 'Test 69');
test(earliestAndLatest(19, 6, 14), [1, 1], 'Test 70');
test(earliestAndLatest(21, 7, 15), [1, 1], 'Test 71');
test(earliestAndLatest(27, 2, 25), [3, 3], 'Test 72');
test(earliestAndLatest(17, 6, 12), [1, 1], 'Test 73');
test(earliestAndLatest(17, 5, 13), [1, 1], 'Test 74');
test(earliestAndLatest(18, 4, 15), [1, 1], 'Test 75');
test(earliestAndLatest(21, 10, 12), [1, 1], 'Test 76');
test(earliestAndLatest(15, 4, 11), [3, 4], 'Test 77');
test(earliestAndLatest(21, 6, 19), [2, 5], 'Test 78');
test(earliestAndLatest(19, 8, 15), [2, 5], 'Test 79');
test(earliestAndLatest(20, 7, 14), [1, 1], 'Test 80');
test(earliestAndLatest(25, 8, 20), [2, 5], 'Test 81');
test(earliestAndLatest(27, 4, 23), [3, 5], 'Test 82');
test(earliestAndLatest(20, 3, 18), [1, 1], 'Test 83');
test(earliestAndLatest(26, 13, 22), [2, 5], 'Test 84');
test(earliestAndLatest(18, 5, 14), [1, 1], 'Test 85');
test(earliestAndLatest(21, 6, 15), [3, 5], 'Test 86');
test(earliestAndLatest(28, 10, 25), [2, 5], 'Test 87');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

