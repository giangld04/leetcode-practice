// Test: 668. Kth Smallest Number In Multiplication Table
// 95 test cases from LeetCodeDataset
// Run: node test.js

const { findKthNumber } = require("./solution");

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

console.log("\n668. Kth Smallest Number In Multiplication Table\n");

test(findKthNumber(3, 3, 5), 3, 'Test 1');
test(findKthNumber(10, 10, 25), 10, 'Test 2');
test(findKthNumber(5, 5, 1), 1, 'Test 3');
test(findKthNumber(4, 4, 10), 6, 'Test 4');
test(findKthNumber(4, 4, 8), 4, 'Test 5');
test(findKthNumber(30000, 30000, 10000), 1358, 'Test 6');
test(findKthNumber(2, 3, 6), 6, 'Test 7');
test(findKthNumber(5, 6, 15), 8, 'Test 8');
test(findKthNumber(30000, 30000, 100), 28, 'Test 9');
test(findKthNumber(1, 1, 1), 1, 'Test 10');
test(findKthNumber(4, 4, 7), 4, 'Test 11');
test(findKthNumber(1, 30000, 15000), 15000, 'Test 12');
test(findKthNumber(1000, 1, 500), 500, 'Test 13');
test(findKthNumber(12345, 6789, 5000000), 906384, 'Test 14');
test(findKthNumber(12000, 12000, 71999999), 26888084, 'Test 15');
test(findKthNumber(9999, 9999, 99980001), 99980001, 'Test 16');
test(findKthNumber(10000, 10, 5000), 1709, 'Test 17');
test(findKthNumber(10, 1, 5), 5, 'Test 18');
test(findKthNumber(9999, 10000, 49995000), 18671202, 'Test 19');
test(findKthNumber(5000, 5000, 12500000), 4669497, 'Test 20');
test(findKthNumber(10, 10000, 5000), 1709, 'Test 21');
test(findKthNumber(15000, 15000, 11250000), 1961750, 'Test 22');
test(findKthNumber(10000, 10000, 50000000), 18673076, 'Test 23');
test(findKthNumber(8000, 8000, 39999999), 17356893, 'Test 24');
test(findKthNumber(7, 9, 45), 27, 'Test 25');
test(findKthNumber(10, 15, 45), 18, 'Test 26');
test(findKthNumber(25000, 25000, 6250000), 821997, 'Test 27');
test(findKthNumber(5000, 20000, 1000000), 132820, 'Test 28');
test(findKthNumber(10000, 15000, 2000000), 275724, 'Test 29');
test(findKthNumber(10000, 10000, 99999999), 99990000, 'Test 30');
test(findKthNumber(7, 7, 49), 49, 'Test 31');
test(findKthNumber(12345, 67890, 4567890), 553668, 'Test 32');
test(findKthNumber(300, 100, 28000), 19899, 'Test 33');
test(findKthNumber(7500, 2500, 18749999), 18747500, 'Test 34');
test(findKthNumber(1000, 30000, 2999900), 617430, 'Test 35');
test(findKthNumber(30000, 1, 29999), 29999, 'Test 36');
test(findKthNumber(200, 100, 19900), 18145, 'Test 37');
test(findKthNumber(250, 250, 12500), 3210, 'Test 38');
test(findKthNumber(1, 30000, 30000), 30000, 'Test 39');
test(findKthNumber(100, 50, 2500), 969, 'Test 40');
test(findKthNumber(30000, 1000, 2999900), 617430, 'Test 41');
test(findKthNumber(20000, 25000, 4000000), 509960, 'Test 42');
test(findKthNumber(30000, 25000, 7500000), 986034, 'Test 43');
test(findKthNumber(1, 10, 5), 5, 'Test 44');
test(findKthNumber(15000, 20000, 500000), 53798, 'Test 45');
test(findKthNumber(15000, 20000, 900000), 102087, 'Test 46');
test(findKthNumber(30000, 30000, 8999999), 1182788, 'Test 47');
test(findKthNumber(3000, 1000, 2999000), 2925000, 'Test 48');
test(findKthNumber(15000, 20000, 1500000), 180253, 'Test 49');
test(findKthNumber(8, 7, 28), 14, 'Test 50');
test(findKthNumber(2500, 2500, 3125000), 1167987, 'Test 51');
test(findKthNumber(10000, 10000, 100000000), 100000000, 'Test 52');
test(findKthNumber(30000, 1, 15000), 15000, 'Test 53');
test(findKthNumber(12345, 6789, 500000), 62055, 'Test 54');
test(findKthNumber(10000, 10000, 9999999), 2047629, 'Test 55');
test(findKthNumber(8000, 4000, 3199999), 655946, 'Test 56');
test(findKthNumber(30000, 15000, 449999999), 449985000, 'Test 57');
test(findKthNumber(7, 11, 45), 24, 'Test 58');
test(findKthNumber(15000, 15000, 5625000), 858635, 'Test 59');
test(findKthNumber(5000, 5000, 12345678), 4578057, 'Test 60');
test(findKthNumber(15000, 25000, 500000), 52647, 'Test 61');
test(findKthNumber(10, 10, 99), 90, 'Test 62');
test(findKthNumber(20000, 20000, 39999999), 8185453, 'Test 63');
test(findKthNumber(10000, 10000, 1), 1, 'Test 64');
test(findKthNumber(30, 30, 400), 153, 'Test 65');
test(findKthNumber(20000, 15000, 2999999), 395392, 'Test 66');
test(findKthNumber(20, 25, 400), 234, 'Test 67');
test(findKthNumber(2500, 7500, 9375000), 3502712, 'Test 68');
test(findKthNumber(5000, 5000, 1250000), 218673, 'Test 69');
test(findKthNumber(150, 200, 14999), 5684, 'Test 70');
test(findKthNumber(100, 50, 2499), 968, 'Test 71');
test(findKthNumber(12345, 6789, 83245678), 74281625, 'Test 72');
test(findKthNumber(100, 200, 10000), 3807, 'Test 73');
test(findKthNumber(25000, 25000, 12500000), 1833387, 'Test 74');
test(findKthNumber(7, 8, 28), 14, 'Test 75');
test(findKthNumber(7, 10, 50), 30, 'Test 76');
test(findKthNumber(10, 5, 20), 10, 'Test 77');
test(findKthNumber(50, 75, 2000), 810, 'Test 78');
test(findKthNumber(15000, 15000, 10000000), 1701960, 'Test 79');
test(findKthNumber(1, 30000, 25000), 25000, 'Test 80');
test(findKthNumber(1, 30000, 20000), 20000, 'Test 81');
test(findKthNumber(20000, 15000, 200000000), 91383084, 'Test 82');
test(findKthNumber(3000, 2500, 7499999), 7497500, 'Test 83');
test(findKthNumber(100, 100, 4950), 1887, 'Test 84');
test(findKthNumber(15, 20, 100), 36, 'Test 85');
test(findKthNumber(20000, 15000, 1000000), 114741, 'Test 86');
test(findKthNumber(15000, 15000, 1000000), 118734, 'Test 87');
test(findKthNumber(25000, 5000, 2000000), 284382, 'Test 88');
test(findKthNumber(30000, 30000, 9000000), 1182788, 'Test 89');
test(findKthNumber(30000, 1, 30000), 30000, 'Test 90');
test(findKthNumber(15000, 20000, 2999999), 395392, 'Test 91');
test(findKthNumber(500, 500, 125000), 46917, 'Test 92');
test(findKthNumber(100, 100, 5000), 1917, 'Test 93');
test(findKthNumber(100, 100, 4900), 1856, 'Test 94');
test(findKthNumber(1500, 2000, 1500000), 560898, 'Test 95');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

