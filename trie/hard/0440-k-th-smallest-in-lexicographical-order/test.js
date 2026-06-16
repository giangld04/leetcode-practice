// Test: 440. K Th Smallest In Lexicographical Order
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

console.log("\n440. K Th Smallest In Lexicographical Order\n");

test(findKthNumber(13, 2), 10, 'Test 1');
test(findKthNumber(1, 1), 1, 'Test 2');
test(findKthNumber(100000, 50000), 54998, 'Test 3');
test(findKthNumber(10, 10), 9, 'Test 4');
test(findKthNumber(1000000, 100000), 189998, 'Test 5');
test(findKthNumber(200, 150), 53, 'Test 6');
test(findKthNumber(10, 1), 1, 'Test 7');
test(findKthNumber(1000, 100), 188, 'Test 8');
test(findKthNumber(999999999, 500000000), 549999999, 'Test 9');
test(findKthNumber(999, 999), 999, 'Test 10');
test(findKthNumber(99999, 50000), 54999, 'Test 11');
test(findKthNumber(2, 1), 1, 'Test 12');
test(findKthNumber(100, 10), 17, 'Test 13');
test(findKthNumber(1000000000, 100000000), 189999998, 'Test 14');
test(findKthNumber(20, 15), 4, 'Test 15');
test(findKthNumber(999999999, 123456789), 211111103, 'Test 16');
test(findKthNumber(999999999, 999999999), 999999999, 'Test 17');
test(findKthNumber(1000, 50), 142, 'Test 18');
test(findKthNumber(50, 25), 31, 'Test 19');
test(findKthNumber(10000, 9876), 9887, 'Test 20');
test(findKthNumber(98765, 87654), 88888, 'Test 21');
test(findKthNumber(111111111, 55555555), 49999998, 'Test 22');
test(findKthNumber(999999990, 500000000), 549999999, 'Test 23');
test(findKthNumber(987654321, 456789012), 511110104, 'Test 24');
test(findKthNumber(123456789, 123456789), 99999999, 'Test 25');
test(findKthNumber(1000000000, 500000000), 549999998, 'Test 26');
test(findKthNumber(1000000000, 1), 1, 'Test 27');
test(findKthNumber(333333333, 111111111), 199999999, 'Test 28');
test(findKthNumber(897654321, 123456789), 211111103, 'Test 29');
test(findKthNumber(456789123, 222222222), 299999999, 'Test 30');
test(findKthNumber(999999999, 1), 1, 'Test 31');
test(findKthNumber(987654321, 987654320), 99999998, 'Test 32');
test(findKthNumber(700000000, 700000000), 99999999, 'Test 33');
test(findKthNumber(777777777, 333333333), 399999999, 'Test 34');
test(findKthNumber(111111111, 33333333), 29999998, 'Test 35');
test(findKthNumber(200000000, 150000000), 54999998, 'Test 36');
test(findKthNumber(500, 250), 323, 'Test 37');
test(findKthNumber(500000000, 1), 1, 'Test 38');
test(findKthNumber(123456789, 1), 1, 'Test 39');
test(findKthNumber(10000, 5000), 5498, 'Test 40');
test(findKthNumber(777777777, 222222222), 299999999, 'Test 41');
test(findKthNumber(999999998, 999999998), 999999998, 'Test 42');
test(findKthNumber(500000000, 300000000), 369999999, 'Test 43');
test(findKthNumber(876543210, 123456789), 211111103, 'Test 44');
test(findKthNumber(987654321, 123456789), 211111103, 'Test 45');
test(findKthNumber(999999990, 999999990), 999999990, 'Test 46');
test(findKthNumber(2147483647, 1073741823), 1966367637, 'Test 47');
test(findKthNumber(500, 1), 1, 'Test 48');
test(findKthNumber(666666666, 333333333), 399999999, 'Test 49');
test(findKthNumber(123456789, 98765432), 77777776, 'Test 50');
test(findKthNumber(98765, 45678), 51107, 'Test 51');
test(findKthNumber(10000, 1000), 1898, 'Test 52');
test(findKthNumber(500000000, 250000000), 324999998, 'Test 53');
test(findKthNumber(10000, 9999), 9998, 'Test 54');
test(findKthNumber(500, 499), 98, 'Test 55');
test(findKthNumber(1000000000, 123456789), 211111102, 'Test 56');
test(findKthNumber(876543210, 543210987), 588889887, 'Test 57');
test(findKthNumber(400000000, 200000000), 279999999, 'Test 58');
test(findKthNumber(600000000, 500000000), 549999999, 'Test 59');
test(findKthNumber(876543210, 432109876), 488898887, 'Test 60');
test(findKthNumber(100000000, 99999999), 99999998, 'Test 61');
test(findKthNumber(800000000, 123456789), 211111103, 'Test 62');
test(findKthNumber(555555555, 277777777), 349999998, 'Test 63');
test(findKthNumber(987654321, 87654321), 178888887, 'Test 64');
test(findKthNumber(87654321, 5000000), 14499998, 'Test 65');
test(findKthNumber(1000000, 1000000), 999999, 'Test 66');
test(findKthNumber(888888888, 444444444), 499999999, 'Test 67');
test(findKthNumber(876543210, 345678901), 411111004, 'Test 68');
test(findKthNumber(987654321, 1), 1, 'Test 69');
test(findKthNumber(99999999, 50000000), 54999999, 'Test 70');
test(findKthNumber(999999999, 999999998), 999999998, 'Test 71');
test(findKthNumber(333333333, 166666666), 249999998, 'Test 72');
test(findKthNumber(1234567, 999999), 788887, 'Test 73');
test(findKthNumber(100000000, 10000000), 18999998, 'Test 74');
test(findKthNumber(100000000, 50000000), 54999998, 'Test 75');
test(findKthNumber(100000, 99999), 99998, 'Test 76');
test(findKthNumber(1000, 500), 548, 'Test 77');
test(findKthNumber(1234567, 345678), 199998, 'Test 78');
test(findKthNumber(123456789, 67890123), 49989999, 'Test 79');
test(findKthNumber(999999, 500000), 549999, 'Test 80');
test(findKthNumber(800000000, 400000000), 459999999, 'Test 81');
test(findKthNumber(1234567, 678901), 499899, 'Test 82');
test(findKthNumber(200000000, 100000000), 189999999, 'Test 83');
test(findKthNumber(100000, 75000), 77498, 'Test 84');
test(findKthNumber(123456789, 987654321), Execution timed out, 'Test 85');
test(findKthNumber(2147483647, 1000000000), 1899999999, 'Test 86');
test(findKthNumber(300000000, 150000000), 234999998, 'Test 87');
test(findKthNumber(900000000, 800000000), 819999999, 'Test 88');
test(findKthNumber(300000000, 100000000), 189999999, 'Test 89');
test(findKthNumber(899999999, 500000000), 549999999, 'Test 90');
test(findKthNumber(1000000, 999999), 999998, 'Test 91');
test(findKthNumber(98765, 12345), 21107, 'Test 92');
test(findKthNumber(234567890, 123456789), 211111103, 'Test 93');
test(findKthNumber(2147483647, 1500000000), 417264712, 'Test 94');
test(findKthNumber(600000000, 300000000), 369999999, 'Test 95');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

