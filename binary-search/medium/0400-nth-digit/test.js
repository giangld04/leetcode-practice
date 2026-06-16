// Test: 400. Nth Digit
// 50 test cases from LeetCodeDataset
// Run: node test.js

const { findNthDigit } = require("./solution");

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

console.log("\n400. Nth Digit\n");

test(findNthDigit(3), 3, 'Test 1');
test(findNthDigit(11), 0, 'Test 2');
test(findNthDigit(231), 3, 'Test 3');
test(findNthDigit(15), 2, 'Test 4');
test(findNthDigit(2147483647), 2, 'Test 5');
test(findNthDigit(1000000), 1, 'Test 6');
test(findNthDigit(123456789), 2, 'Test 7');
test(findNthDigit(100), 5, 'Test 8');
test(findNthDigit(1000), 3, 'Test 9');
test(findNthDigit(99999), 1, 'Test 10');
test(findNthDigit(999999999), 9, 'Test 11');
test(findNthDigit(2147483646), 2, 'Test 12');
test(findNthDigit(12345), 3, 'Test 13');
test(findNthDigit(2000000000), 3, 'Test 14');
test(findNthDigit(50000), 1, 'Test 15');
test(findNthDigit(50), 3, 'Test 16');
test(findNthDigit(190), 1, 'Test 17');
test(findNthDigit(987654), 3, 'Test 18');
test(findNthDigit(123), 6, 'Test 19');
test(findNthDigit(300), 6, 'Test 20');
test(findNthDigit(99), 4, 'Test 21');
test(findNthDigit(10000), 7, 'Test 22');
test(findNthDigit(1001), 7, 'Test 23');
test(findNthDigit(8976543), 4, 'Test 24');
test(findNthDigit(2100000000), 5, 'Test 25');
test(findNthDigit(360), 6, 'Test 26');
test(findNthDigit(2147483645), 7, 'Test 27');
test(findNthDigit(777777777), 0, 'Test 28');
test(findNthDigit(100000), 2, 'Test 29');
test(findNthDigit(20000), 7, 'Test 30');
test(findNthDigit(999), 9, 'Test 31');
test(findNthDigit(1000000010), 2, 'Test 32');
test(findNthDigit(5000), 2, 'Test 33');
test(findNthDigit(256), 1, 'Test 34');
test(findNthDigit(1000000000), 1, 'Test 35');
test(findNthDigit(1000000001), 2, 'Test 36');
test(findNthDigit(111111111), 7, 'Test 37');
test(findNthDigit(987654321), 7, 'Test 38');
test(findNthDigit(888888888), 0, 'Test 39');
test(findNthDigit(2500), 8, 'Test 40');
test(findNthDigit(500000), 5, 'Test 41');
test(findNthDigit(189), 9, 'Test 42');
test(findNthDigit(150000000), 8, 'Test 43');
test(findNthDigit(500000000), 8, 'Test 44');
test(findNthDigit(9), 9, 'Test 45');
test(findNthDigit(1234567), 2, 'Test 46');
test(findNthDigit(19999), 2, 'Test 47');
test(findNthDigit(999999), 4, 'Test 48');
test(findNthDigit(123456), 6, 'Test 49');
test(findNthDigit(10), 1, 'Test 50');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

