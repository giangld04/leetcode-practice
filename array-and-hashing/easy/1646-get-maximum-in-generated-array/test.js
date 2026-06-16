// Test: 1646. Get Maximum In Generated Array
// 31 test cases from LeetCodeDataset
// Run: node test.js

const { getMaximumGenerated } = require("./solution");

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

console.log("\n1646. Get Maximum In Generated Array\n");

test(getMaximumGenerated(0), 0, 'Test 1');
test(getMaximumGenerated(3), 2, 'Test 2');
test(getMaximumGenerated(100), 21, 'Test 3');
test(getMaximumGenerated(99), 21, 'Test 4');
test(getMaximumGenerated(2), 1, 'Test 5');
test(getMaximumGenerated(20), 7, 'Test 6');
test(getMaximumGenerated(1), 1, 'Test 7');
test(getMaximumGenerated(50), 13, 'Test 8');
test(getMaximumGenerated(7), 3, 'Test 9');
test(getMaximumGenerated(10), 4, 'Test 10');
test(getMaximumGenerated(88), 21, 'Test 11');
test(getMaximumGenerated(97), 21, 'Test 12');
test(getMaximumGenerated(63), 13, 'Test 13');
test(getMaximumGenerated(45), 13, 'Test 14');
test(getMaximumGenerated(49), 13, 'Test 15');
test(getMaximumGenerated(47), 13, 'Test 16');
test(getMaximumGenerated(60), 13, 'Test 17');
test(getMaximumGenerated(64), 13, 'Test 18');
test(getMaximumGenerated(37), 11, 'Test 19');
test(getMaximumGenerated(17), 5, 'Test 20');
test(getMaximumGenerated(42), 11, 'Test 21');
test(getMaximumGenerated(90), 21, 'Test 22');
test(getMaximumGenerated(22), 8, 'Test 23');
test(getMaximumGenerated(89), 21, 'Test 24');
test(getMaximumGenerated(75), 18, 'Test 25');
test(getMaximumGenerated(81), 18, 'Test 26');
test(getMaximumGenerated(24), 8, 'Test 27');
test(getMaximumGenerated(11), 5, 'Test 28');
test(getMaximumGenerated(15), 5, 'Test 29');
test(getMaximumGenerated(31), 8, 'Test 30');
test(getMaximumGenerated(25), 8, 'Test 31');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

