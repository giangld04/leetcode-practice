// Test: 397. Integer Replacement
// 37 test cases from LeetCodeDataset
// Run: node test.js

const { integerReplacement } = require("./solution");

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

console.log("\n397. Integer Replacement\n");

test(integerReplacement(8), 3, 'Test 1');
test(integerReplacement(15), 5, 'Test 2');
test(integerReplacement(4), 2, 'Test 3');
test(integerReplacement(2147483647), 32, 'Test 4');
test(integerReplacement(1), 0, 'Test 5');
test(integerReplacement(1000000000), 38, 'Test 6');
test(integerReplacement(7), 4, 'Test 7');
test(integerReplacement(317), 11, 'Test 8');
test(integerReplacement(63), 7, 'Test 9');
test(integerReplacement(21), 6, 'Test 10');
test(integerReplacement(32767), 16, 'Test 11');
test(integerReplacement(50000), 20, 'Test 12');
test(integerReplacement(2047), 12, 'Test 13');
test(integerReplacement(16383), 15, 'Test 14');
test(integerReplacement(5), 3, 'Test 15');
test(integerReplacement(123), 9, 'Test 16');
test(integerReplacement(134217727), 28, 'Test 17');
test(integerReplacement(64), 6, 'Test 18');
test(integerReplacement(99), 9, 'Test 19');
test(integerReplacement(1073741823), 31, 'Test 20');
test(integerReplacement(23), 6, 'Test 21');
test(integerReplacement(51), 8, 'Test 22');
test(integerReplacement(16777215), 25, 'Test 23');
test(integerReplacement(101), 9, 'Test 24');
test(integerReplacement(99999999), 32, 'Test 25');
test(integerReplacement(2048), 11, 'Test 26');
test(integerReplacement(999), 13, 'Test 27');
test(integerReplacement(27), 7, 'Test 28');
test(integerReplacement(8191), 14, 'Test 29');
test(integerReplacement(1023), 11, 'Test 30');
test(integerReplacement(19), 6, 'Test 31');
test(integerReplacement(65535), 17, 'Test 32');
test(integerReplacement(513), 10, 'Test 33');
test(integerReplacement(127), 8, 'Test 34');
test(integerReplacement(1048575), 21, 'Test 35');
test(integerReplacement(31), 6, 'Test 36');
test(integerReplacement(1000000), 24, 'Test 37');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

