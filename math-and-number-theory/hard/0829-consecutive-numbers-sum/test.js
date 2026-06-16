// Test: 829. Consecutive Numbers Sum
// 54 test cases from LeetCodeDataset
// Run: node test.js

const { consecutiveNumbersSum } = require("./solution");

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

console.log("\n829. Consecutive Numbers Sum\n");

test(consecutiveNumbersSum(100), 3, 'Test 1');
test(consecutiveNumbersSum(15), 4, 'Test 2');
test(consecutiveNumbersSum(9), 3, 'Test 3');
test(consecutiveNumbersSum(1000000), 7, 'Test 4');
test(consecutiveNumbersSum(25), 3, 'Test 5');
test(consecutiveNumbersSum(1), 1, 'Test 6');
test(consecutiveNumbersSum(1000000000), 10, 'Test 7');
test(consecutiveNumbersSum(1000), 4, 'Test 8');
test(consecutiveNumbersSum(10), 2, 'Test 9');
test(consecutiveNumbersSum(5), 2, 'Test 10');
test(consecutiveNumbersSum(3), 2, 'Test 11');
test(consecutiveNumbersSum(45), 6, 'Test 12');
test(consecutiveNumbersSum(210), 8, 'Test 13');
test(consecutiveNumbersSum(897), 8, 'Test 14');
test(consecutiveNumbersSum(999999999), 20, 'Test 15');
test(consecutiveNumbersSum(49), 3, 'Test 16');
test(consecutiveNumbersSum(12345), 8, 'Test 17');
test(consecutiveNumbersSum(67890), 16, 'Test 18');
test(consecutiveNumbersSum(2147483647), 2, 'Test 19');
test(consecutiveNumbersSum(76543210), 8, 'Test 20');
test(consecutiveNumbersSum(56789), 4, 'Test 21');
test(consecutiveNumbersSum(89123456), 4, 'Test 22');
test(consecutiveNumbersSum(2019), 4, 'Test 23');
test(consecutiveNumbersSum(6789), 8, 'Test 24');
test(consecutiveNumbersSum(10000), 5, 'Test 25');
test(consecutiveNumbersSum(43210987), 8, 'Test 26');
test(consecutiveNumbersSum(1001), 8, 'Test 27');
test(consecutiveNumbersSum(2), 1, 'Test 28');
test(consecutiveNumbersSum(9876543210987654321), Execution timed out, 'Test 29');
test(consecutiveNumbersSum(200000000), 9, 'Test 30');
test(consecutiveNumbersSum(50000000), 9, 'Test 31');
test(consecutiveNumbersSum(1024), 1, 'Test 32');
test(consecutiveNumbersSum(101), 2, 'Test 33');
test(consecutiveNumbersSum(8), 1, 'Test 34');
test(consecutiveNumbersSum(10000000), 8, 'Test 35');
test(consecutiveNumbersSum(56789123), 2, 'Test 36');
test(consecutiveNumbersSum(845123), 4, 'Test 37');
test(consecutiveNumbersSum(1048576), 1, 'Test 38');
test(consecutiveNumbersSum(89), 2, 'Test 39');
test(consecutiveNumbersSum(89754321), 4, 'Test 40');
test(consecutiveNumbersSum(8472187), 4, 'Test 41');
test(consecutiveNumbersSum(84521), 2, 'Test 42');
test(consecutiveNumbersSum(13), 2, 'Test 43');
test(consecutiveNumbersSum(150), 6, 'Test 44');
test(consecutiveNumbersSum(987654321), 18, 'Test 45');
test(consecutiveNumbersSum(123456789), 12, 'Test 46');
test(consecutiveNumbersSum(1234567), 4, 'Test 47');
test(consecutiveNumbersSum(121), 3, 'Test 48');
test(consecutiveNumbersSum(999999), 64, 'Test 49');
test(consecutiveNumbersSum(123456), 4, 'Test 50');
test(consecutiveNumbersSum(500), 4, 'Test 51');
test(consecutiveNumbersSum(54321), 8, 'Test 52');
test(consecutiveNumbersSum(100000000), 9, 'Test 53');
test(consecutiveNumbersSum(1500), 8, 'Test 54');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

