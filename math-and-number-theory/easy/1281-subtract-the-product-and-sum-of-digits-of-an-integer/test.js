// Test: 1281. Subtract The Product And Sum Of Digits Of An Integer
// 55 test cases from LeetCodeDataset
// Run: node test.js

const { subtractProductAndSum } = require("./solution");

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

console.log("\n1281. Subtract The Product And Sum Of Digits Of An Integer\n");

test(subtractProductAndSum(99999), 59004, 'Test 1');
test(subtractProductAndSum(11111), -4, 'Test 2');
test(subtractProductAndSum(789), 480, 'Test 3');
test(subtractProductAndSum(1111), -3, 'Test 4');
test(subtractProductAndSum(234), 15, 'Test 5');
test(subtractProductAndSum(12345), 105, 'Test 6');
test(subtractProductAndSum(456), 105, 'Test 7');
test(subtractProductAndSum(10000), -1, 'Test 8');
test(subtractProductAndSum(9999), 6525, 'Test 9');
test(subtractProductAndSum(100), -1, 'Test 10');
test(subtractProductAndSum(105), -6, 'Test 11');
test(subtractProductAndSum(1000), -1, 'Test 12');
test(subtractProductAndSum(4421), 21, 'Test 13');
test(subtractProductAndSum(4321), 14, 'Test 14');
test(subtractProductAndSum(123), 0, 'Test 15');
test(subtractProductAndSum(33333), 228, 'Test 16');
test(subtractProductAndSum(199999), 59003, 'Test 17');
test(subtractProductAndSum(55555), 3100, 'Test 18');
test(subtractProductAndSum(10987), -25, 'Test 19');
test(subtractProductAndSum(77777), 16772, 'Test 20');
test(subtractProductAndSum(67890), -30, 'Test 21');
test(subtractProductAndSum(111111), -5, 'Test 22');
test(subtractProductAndSum(86420), -20, 'Test 23');
test(subtractProductAndSum(56789), 15085, 'Test 24');
test(subtractProductAndSum(888888), 262096, 'Test 25');
test(subtractProductAndSum(24680), -20, 'Test 26');
test(subtractProductAndSum(987654), 60441, 'Test 27');
test(subtractProductAndSum(59382), 2133, 'Test 28');
test(subtractProductAndSum(80808), -24, 'Test 29');
test(subtractProductAndSum(50400), -9, 'Test 30');
test(subtractProductAndSum(234567), 5013, 'Test 31');
test(subtractProductAndSum(44444), 1004, 'Test 32');
test(subtractProductAndSum(102030405), -15, 'Test 33');
test(subtractProductAndSum(59876), 15085, 'Test 34');
test(subtractProductAndSum(100000), -1, 'Test 35');
test(subtractProductAndSum(10401), -6, 'Test 36');
test(subtractProductAndSum(10101), -3, 'Test 37');
test(subtractProductAndSum(7654321), 5012, 'Test 38');
test(subtractProductAndSum(29999), 13084, 'Test 39');
test(subtractProductAndSum(22222), 22, 'Test 40');
test(subtractProductAndSum(987654321), 362835, 'Test 41');
test(subtractProductAndSum(13579), 920, 'Test 42');
test(subtractProductAndSum(101010), -3, 'Test 43');
test(subtractProductAndSum(90909), -27, 'Test 44');
test(subtractProductAndSum(98765), 15085, 'Test 45');
test(subtractProductAndSum(43210), -10, 'Test 46');
test(subtractProductAndSum(95135), 652, 'Test 47');
test(subtractProductAndSum(91123), 38, 'Test 48');
test(subtractProductAndSum(314159), 517, 'Test 49');
test(subtractProductAndSum(999999), 531387, 'Test 50');
test(subtractProductAndSum(123456), 699, 'Test 51');
test(subtractProductAndSum(10010), -2, 'Test 52');
test(subtractProductAndSum(54321), 105, 'Test 53');
test(subtractProductAndSum(505050), -15, 'Test 54');
test(subtractProductAndSum(76543), 2495, 'Test 55');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

