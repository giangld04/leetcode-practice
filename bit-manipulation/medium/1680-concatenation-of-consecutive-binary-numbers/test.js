// Test: 1680. Concatenation Of Consecutive Binary Numbers
// 28 test cases from LeetCodeDataset
// Run: node test.js

const { concatenatedBinary } = require("./solution");

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

console.log("\n1680. Concatenation Of Consecutive Binary Numbers\n");

test(concatenatedBinary(3), 27, 'Test 1');
test(concatenatedBinary(100000), 757631812, 'Test 2');
test(concatenatedBinary(100), 310828084, 'Test 3');
test(concatenatedBinary(12), 505379714, 'Test 4');
test(concatenatedBinary(10000), 356435599, 'Test 5');
test(concatenatedBinary(20), 632668867, 'Test 6');
test(concatenatedBinary(1), 1, 'Test 7');
test(concatenatedBinary(1000), 499361981, 'Test 8');
test(concatenatedBinary(10), 462911642, 'Test 9');
test(concatenatedBinary(5), 1765, 'Test 10');
test(concatenatedBinary(15000), 760107204, 'Test 11');
test(concatenatedBinary(99999), 880407397, 'Test 12');
test(concatenatedBinary(12345), 836722104, 'Test 13');
test(concatenatedBinary(67890), 121883656, 'Test 14');
test(concatenatedBinary(32767), 351669993, 'Test 15');
test(concatenatedBinary(90000), 333354001, 'Test 16');
test(concatenatedBinary(50000), 305317209, 'Test 17');
test(concatenatedBinary(60000), 841047212, 'Test 18');
test(concatenatedBinary(30000), 789968936, 'Test 19');
test(concatenatedBinary(80000), 801174769, 'Test 20');
test(concatenatedBinary(8192), 853721666, 'Test 21');
test(concatenatedBinary(65536), 273282097, 'Test 22');
test(concatenatedBinary(5000), 754628255, 'Test 23');
test(concatenatedBinary(75000), 363627085, 'Test 24');
test(concatenatedBinary(40000), 162370743, 'Test 25');
test(concatenatedBinary(65535), 183542430, 'Test 26');
test(concatenatedBinary(500), 715412131, 'Test 27');
test(concatenatedBinary(25000), 110872861, 'Test 28');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

