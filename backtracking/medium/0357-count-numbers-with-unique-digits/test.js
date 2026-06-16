// Test: 357. Count Numbers With Unique Digits
// 11 test cases from LeetCodeDataset
// Run: node test.js

const { countNumbersWithUniqueDigits } = require("./solution");

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

console.log("\n357. Count Numbers With Unique Digits\n");

test(countNumbersWithUniqueDigits(0), 1, 'Test 1');
test(countNumbersWithUniqueDigits(8), 2345851, 'Test 2');
test(countNumbersWithUniqueDigits(3), 739, 'Test 3');
test(countNumbersWithUniqueDigits(4), 5275, 'Test 4');
test(countNumbersWithUniqueDigits(6), 168571, 'Test 5');
test(countNumbersWithUniqueDigits(2), 91, 'Test 6');
test(countNumbersWithUniqueDigits(1), 10, 'Test 7');
test(countNumbersWithUniqueDigits(7), 712891, 'Test 8');
test(countNumbersWithUniqueDigits(5), 32491, 'Test 9');
test(countNumbersWithUniqueDigits(9), 5611771, 'Test 10');
test(countNumbersWithUniqueDigits(10), 8877691, 'Test 11');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

