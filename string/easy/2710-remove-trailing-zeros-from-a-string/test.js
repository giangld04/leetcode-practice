// Test: 2710. Remove Trailing Zeros From A String
// 24 test cases from LeetCodeDataset
// Run: node test.js

const { removeTrailingZeros } = require("./solution");

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

console.log("\n2710. Remove Trailing Zeros From A String\n");

test(removeTrailingZeros("10"), 1, 'Test 1');
test(removeTrailingZeros("100100"), 1001, 'Test 2');
test(removeTrailingZeros("1111111111"), 1111111111, 'Test 3');
test(removeTrailingZeros("1000"), 1, 'Test 4');
test(removeTrailingZeros("1"), 1, 'Test 5');
test(removeTrailingZeros("9876543210"), 987654321, 'Test 6');
test(removeTrailingZeros("10500"), 105, 'Test 7');
test(removeTrailingZeros("0"), , 'Test 8');
test(removeTrailingZeros("51230100"), 512301, 'Test 9');
test(removeTrailingZeros("10101000"), 10101, 'Test 10');
test(removeTrailingZeros("987654321000"), 987654321, 'Test 11');
test(removeTrailingZeros("000000000000000000000"), , 'Test 12');
test(removeTrailingZeros("123"), 123, 'Test 13');
test(removeTrailingZeros("999999999999999999999"), 999999999999999999999, 'Test 14');
test(removeTrailingZeros("1000000000000000000001"), 1000000000000000000001, 'Test 15');
test(removeTrailingZeros("1010101010"), 101010101, 'Test 16');
test(removeTrailingZeros("999999999900"), 9999999999, 'Test 17');
test(removeTrailingZeros("10000"), 1, 'Test 18');
test(removeTrailingZeros("1001001000"), 1001001, 'Test 19');
test(removeTrailingZeros("1000000000"), 1, 'Test 20');
test(removeTrailingZeros("100100100"), 1001001, 'Test 21');
test(removeTrailingZeros("9999999999"), 9999999999, 'Test 22');
test(removeTrailingZeros("00001"), 00001, 'Test 23');
test(removeTrailingZeros("100000"), 1, 'Test 24');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

