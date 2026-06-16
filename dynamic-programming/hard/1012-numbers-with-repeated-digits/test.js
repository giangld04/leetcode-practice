// Test: 1012. Numbers With Repeated Digits
// 59 test cases from LeetCodeDataset
// Run: node test.js

const { numDupDigitsAtMostN } = require("./solution");

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

console.log("\n1012. Numbers With Repeated Digits\n");

test(numDupDigitsAtMostN(99999), 67509, 'Test 1');
test(numDupDigitsAtMostN(999999999), 994388229, 'Test 2');
test(numDupDigitsAtMostN(9999999), 9287109, 'Test 3');
test(numDupDigitsAtMostN(100), 10, 'Test 4');
test(numDupDigitsAtMostN(56789), 37493, 'Test 5');
test(numDupDigitsAtMostN(1000), 262, 'Test 6');
test(numDupDigitsAtMostN(50), 4, 'Test 7');
test(numDupDigitsAtMostN(300), 66, 'Test 8');
test(numDupDigitsAtMostN(10000), 4726, 'Test 9');
test(numDupDigitsAtMostN(101), 11, 'Test 10');
test(numDupDigitsAtMostN(100000), 67510, 'Test 11');
test(numDupDigitsAtMostN(999), 261, 'Test 12');
test(numDupDigitsAtMostN(9999), 4725, 'Test 13');
test(numDupDigitsAtMostN(20), 1, 'Test 14');
test(numDupDigitsAtMostN(1000000000), 994388230, 'Test 15');
test(numDupDigitsAtMostN(987654321), 982042551, 'Test 16');
test(numDupDigitsAtMostN(1234), 431, 'Test 17');
test(numDupDigitsAtMostN(1000000), 831430, 'Test 18');
test(numDupDigitsAtMostN(123456789), 121064705, 'Test 19');
test(numDupDigitsAtMostN(1), 0, 'Test 20');
test(numDupDigitsAtMostN(10), 0, 'Test 21');
test(numDupDigitsAtMostN(222222222), 219432852, 'Test 22');
test(numDupDigitsAtMostN(567890), 465294, 'Test 23');
test(numDupDigitsAtMostN(1234567890123456789), 1234567890114579099, 'Test 24');
test(numDupDigitsAtMostN(111111), 76941, 'Test 25');
test(numDupDigitsAtMostN(746384741), 741672419, 'Test 26');
test(numDupDigitsAtMostN(23456), 14387, 'Test 27');
test(numDupDigitsAtMostN(100100100), 97754250, 'Test 28');
test(numDupDigitsAtMostN(234567890), 231766695, 'Test 29');
test(numDupDigitsAtMostN(23456789), 22516226, 'Test 30');
test(numDupDigitsAtMostN(876543210), 871340553, 'Test 31');
test(numDupDigitsAtMostN(101010101), 98664251, 'Test 32');
test(numDupDigitsAtMostN(200000000), 197291270, 'Test 33');
test(numDupDigitsAtMostN(900000000), 894751110, 'Test 34');
test(numDupDigitsAtMostN(10000000), 9287110, 'Test 35');
test(numDupDigitsAtMostN(987654319), 982042551, 'Test 36');
test(numDupDigitsAtMostN(99999999), 97654149, 'Test 37');
test(numDupDigitsAtMostN(314159265), 311036535, 'Test 38');
test(numDupDigitsAtMostN(543210987), 539235633, 'Test 39');
test(numDupDigitsAtMostN(1000000010), 994388240, 'Test 40');
test(numDupDigitsAtMostN(899899), 746449, 'Test 41');
test(numDupDigitsAtMostN(1122334455), 1116682365, 'Test 42');
test(numDupDigitsAtMostN(555555555), 551556585, 'Test 43');
test(numDupDigitsAtMostN(271828182), 268868772, 'Test 44');
test(numDupDigitsAtMostN(111111111), 108724941, 'Test 45');
test(numDupDigitsAtMostN(1234567890), 1228909886, 'Test 46');
test(numDupDigitsAtMostN(888888888), 883680318, 'Test 47');
test(numDupDigitsAtMostN(11111), 5501, 'Test 48');
test(numDupDigitsAtMostN(987654320), 982042551, 'Test 49');
test(numDupDigitsAtMostN(500000), 407030, 'Test 50');
test(numDupDigitsAtMostN(98765), 66275, 'Test 51');
test(numDupDigitsAtMostN(500000000), 496202630, 'Test 52');
test(numDupDigitsAtMostN(88888888), 86744638, 'Test 53');
test(numDupDigitsAtMostN(1234567), 1058291, 'Test 54');
test(numDupDigitsAtMostN(999999), 831429, 'Test 55');
test(numDupDigitsAtMostN(123456), 89039, 'Test 56');
test(numDupDigitsAtMostN(87654321), 85513027, 'Test 57');
test(numDupDigitsAtMostN(54321), 35467, 'Test 58');
test(numDupDigitsAtMostN(100000000), 97654150, 'Test 59');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

