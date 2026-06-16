// Test: 258. Add Digits
// 75 test cases from LeetCodeDataset
// Run: node test.js

const { addDigits } = require("./solution");

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

console.log("\n258. Add Digits\n");

test(addDigits(10), 1, 'Test 1');
test(addDigits(9), 9, 'Test 2');
test(addDigits(111111111), 9, 'Test 3');
test(addDigits(47), 2, 'Test 4');
test(addDigits(456789), 3, 'Test 5');
test(addDigits(38), 2, 'Test 6');
test(addDigits(45), 9, 'Test 7');
test(addDigits(234567890), 8, 'Test 8');
test(addDigits(1000000000), 1, 'Test 9');
test(addDigits(942), 6, 'Test 10');
test(addDigits(123), 6, 'Test 11');
test(addDigits(987654321), 9, 'Test 12');
test(addDigits(0), 0, 'Test 13');
test(addDigits(4567), 4, 'Test 14');
test(addDigits(1), 1, 'Test 15');
test(addDigits(111), 3, 'Test 16');
test(addDigits(999999999), 9, 'Test 17');
test(addDigits(19), 1, 'Test 18');
test(addDigits(9999), 9, 'Test 19');
test(addDigits(10000), 1, 'Test 20');
test(addDigits(1010101010101010101), 1, 'Test 21');
test(addDigits(222222222), 9, 'Test 22');
test(addDigits(555555555), 9, 'Test 23');
test(addDigits(1234567890123456789), 9, 'Test 24');
test(addDigits(66666666666666666666), 3, 'Test 25');
test(addDigits(9999999999999999999), 9, 'Test 26');
test(addDigits(888888888), 9, 'Test 27');
test(addDigits(1111111111), 1, 'Test 28');
test(addDigits(123456789012345678901234567890), 9, 'Test 29');
test(addDigits(27), 9, 'Test 30');
test(addDigits(98765432109876543210), 9, 'Test 31');
test(addDigits(444444444), 9, 'Test 32');
test(addDigits(2222222222), 2, 'Test 33');
test(addDigits(88888888888888888888), 7, 'Test 34');
test(addDigits(33333333333333333333), 6, 'Test 35');
test(addDigits(5555555555555555555), 5, 'Test 36');
test(addDigits(999999999999999999), 9, 'Test 37');
test(addDigits(777777777), 9, 'Test 38');
test(addDigits(888888888888888888), 9, 'Test 39');
test(addDigits(1999999999999999999), 1, 'Test 40');
test(addDigits(666666666), 9, 'Test 41');
test(addDigits(123456789), 9, 'Test 42');
test(addDigits(9876543210), 9, 'Test 43');
test(addDigits(5), 5, 'Test 44');
test(addDigits(555555555555555555555555555555), 6, 'Test 45');
test(addDigits(333333333), 9, 'Test 46');
test(addDigits(11), 2, 'Test 47');
test(addDigits(1111111111111111111), 1, 'Test 48');
test(addDigits(4321098765432109876543210987654321), 1, 'Test 49');
test(addDigits(1234567890), 9, 'Test 50');
test(addDigits(101010101010101010101010101010), 6, 'Test 51');
test(addDigits(543210987654321), 6, 'Test 52');
test(addDigits(44444444444444444444), 8, 'Test 53');
test(addDigits(94528), 1, 'Test 54');
test(addDigits(12345678901234567890), 9, 'Test 55');
test(addDigits(8888888888888888888), 8, 'Test 56');
test(addDigits(18), 9, 'Test 57');
test(addDigits(77777777777777777777), 5, 'Test 58');
test(addDigits(987654321987654321), 9, 'Test 59');
test(addDigits(876543210987654321098765432109876543210), 9, 'Test 60');
test(addDigits(4321), 1, 'Test 61');
test(addDigits(22222222222222222222), 4, 'Test 62');
test(addDigits(9876543210987654321), 9, 'Test 63');
test(addDigits(369369369), 9, 'Test 64');
test(addDigits(898989898989898989898989898989), 3, 'Test 65');
test(addDigits(2222222222222222222), 2, 'Test 66');
test(addDigits(123456789123456789), 9, 'Test 67');
test(addDigits(9999999999), 9, 'Test 68');
test(addDigits(11111111111111111111), 2, 'Test 69');
test(addDigits(55555555555555555555), 1, 'Test 70');
test(addDigits(99999999999999999999), 9, 'Test 71');
test(addDigits(5689423749832749823749237492374923749237492374923749237492374923749237492374), 2, 'Test 72');
test(addDigits(191919191919191919191919191919), 6, 'Test 73');
test(addDigits(987654321098765432109876543210), 9, 'Test 74');
test(addDigits(12345678987654321), 9, 'Test 75');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

