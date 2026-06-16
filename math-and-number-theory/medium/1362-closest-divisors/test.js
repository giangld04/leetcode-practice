// Test: 1362. Closest Divisors
// 54 test cases from LeetCodeDataset
// Run: node test.js

const { closestDivisors } = require("./solution");

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

console.log("\n1362. Closest Divisors\n");

test(closestDivisors(1000000000), [23658, 42269], 'Test 1');
test(closestDivisors(999), [25, 40], 'Test 2');
test(closestDivisors(8), [3, 3], 'Test 3');
test(closestDivisors(1), [1, 2], 'Test 4');
test(closestDivisors(100), [6, 17], 'Test 5');
test(closestDivisors(123), [5, 25], 'Test 6');
test(closestDivisors(100000000), [7122, 14041], 'Test 7');
test(closestDivisors(111111111), [9352, 11881], 'Test 8');
test(closestDivisors(555555555), [1457, 381301], 'Test 9');
test(closestDivisors(456789), [170, 2687], 'Test 10');
test(closestDivisors(888888888), [21847, 40687], 'Test 11');
test(closestDivisors(999999998), [31250, 32000], 'Test 12');
test(closestDivisors(4), [2, 3], 'Test 13');
test(closestDivisors(234567890), [13707, 17113], 'Test 14');
test(closestDivisors(999999997), [2997, 333667], 'Test 15');
test(closestDivisors(1048575), [1024, 1024], 'Test 16');
test(closestDivisors(800000000), [20201, 39602], 'Test 17');
test(closestDivisors(123456789), [370, 333667], 'Test 18');
test(closestDivisors(300000000), [49, 6122449], 'Test 19');
test(closestDivisors(104729), [30, 3491], 'Test 20');
test(closestDivisors(65535), [256, 256], 'Test 21');
test(closestDivisors(500000000), [11829, 42269], 'Test 22');
test(closestDivisors(499999999), [20000, 25000], 'Test 23');
test(closestDivisors(135792468), [7810, 17387], 'Test 24');
test(closestDivisors(1000000001), [23658, 42269], 'Test 25');
test(closestDivisors(77777777), [7213, 10783], 'Test 26');
test(closestDivisors(2000000000), [38038, 52579], 'Test 27');
test(closestDivisors(100000001), [7122, 14041], 'Test 28');
test(closestDivisors(499999), [625, 800], 'Test 29');
test(closestDivisors(319912345), [12039, 26573], 'Test 30');
test(closestDivisors(345678901), [10853, 31851], 'Test 31');
test(closestDivisors(456789123), [17525, 26065], 'Test 32');
test(closestDivisors(789012345), [24293, 32479], 'Test 33');
test(closestDivisors(987654321), [1402, 704461], 'Test 34');
test(closestDivisors(1000000000000000000), Execution timed out, 'Test 35');
test(closestDivisors(1048576), [17, 61681], 'Test 36');
test(closestDivisors(2), [2, 2], 'Test 37');
test(closestDivisors(8675309), [2653, 3270], 'Test 38');
test(closestDivisors(600000001), [98, 6122449], 'Test 39');
test(closestDivisors(1122334455), [8, 140291807], 'Test 40');
test(closestDivisors(42424242), [124, 342131], 'Test 41');
test(closestDivisors(999999999), [31250, 32000], 'Test 42');
test(closestDivisors(1000000), [101, 9901], 'Test 43');
test(closestDivisors(49), [5, 10], 'Test 44');
test(closestDivisors(750000000), [4727, 158663], 'Test 45');
test(closestDivisors(876543210), [12652, 69281], 'Test 46');
test(closestDivisors(500000001), [3362, 148721], 'Test 47');
test(closestDivisors(65536), [198, 331], 'Test 48');
test(closestDivisors(314159), [560, 561], 'Test 49');
test(closestDivisors(271828182), [11, 24711653], 'Test 50');
test(closestDivisors(678901234), [22686, 29926], 'Test 51');
test(closestDivisors(2147483647), [32768, 65536], 'Test 52');
test(closestDivisors(3), [2, 2], 'Test 53');
test(closestDivisors(15), [4, 4], 'Test 54');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

