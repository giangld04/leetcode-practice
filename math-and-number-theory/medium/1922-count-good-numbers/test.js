// Test: 1922. Count Good Numbers
// 29 test cases from LeetCodeDataset
// Run: node test.js

const { countGoodNumbers } = require("./solution");

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

console.log("\n1922. Count Good Numbers\n");

test(countGoodNumbers(1), 5, 'Test 1');
test(countGoodNumbers(4), 400, 'Test 2');
test(countGoodNumbers(50), 564908303, 'Test 3');
test(countGoodNumbers(500), 315782032, 'Test 4');
test(countGoodNumbers(15), 399999958, 'Test 5');
test(countGoodNumbers(200), 864605215, 'Test 6');
test(countGoodNumbers(9999), 581472940, 'Test 7');
test(countGoodNumbers(1001), 180104935, 'Test 8');
test(countGoodNumbers(999999), 292848977, 'Test 9');
test(countGoodNumbers(5000), 942089435, 'Test 10');
test(countGoodNumbers(100000), 86331955, 'Test 11');
test(countGoodNumbers(987654), 23531209, 'Test 12');
test(countGoodNumbers(30), 624001610, 'Test 13');
test(countGoodNumbers(50000), 3743005, 'Test 14');
test(countGoodNumbers(1000), 36020987, 'Test 15');
test(countGoodNumbers(2000000), 673965923, 'Test 16');
test(countGoodNumbers(1234567), 908610489, 'Test 17');
test(countGoodNumbers(20), 999928327, 'Test 18');
test(countGoodNumbers(5000000), 116786656, 'Test 19');
test(countGoodNumbers(10000), 325891746, 'Test 20');
test(countGoodNumbers(10), 3200000, 'Test 21');
test(countGoodNumbers(7500000), 507123017, 'Test 22');
test(countGoodNumbers(100), 564490093, 'Test 23');
test(countGoodNumbers(500000), 39955027, 'Test 24');
test(countGoodNumbers(12345), 162263372, 'Test 25');
test(countGoodNumbers(67890), 934713327, 'Test 26');
test(countGoodNumbers(10000000), 924188482, 'Test 27');
test(countGoodNumbers(123456), 182747849, 'Test 28');
test(countGoodNumbers(1000000), 171395901, 'Test 29');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

