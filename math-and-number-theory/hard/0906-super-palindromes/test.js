// Test: 906. Super Palindromes
// 86 test cases from LeetCodeDataset
// Run: node test.js

const { superpalindromesInRange } = require("./solution");

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

console.log("\n906. Super Palindromes\n");

test(superpalindromesInRange("1000000000", "1000000000000000000"), 49, 'Test 1');
test(superpalindromesInRange("123", "456"), 0, 'Test 2');
test(superpalindromesInRange("50", "10000"), 2, 'Test 3');
test(superpalindromesInRange("4", "1000"), 4, 'Test 4');
test(superpalindromesInRange("1", "2"), 1, 'Test 5');
test(superpalindromesInRange("123", "456789"), 6, 'Test 6');
test(superpalindromesInRange("100", "1000000"), 7, 'Test 7');
test(superpalindromesInRange("1", "100000000000000000"), 70, 'Test 8');
test(superpalindromesInRange("9", "9"), 1, 'Test 9');
test(superpalindromesInRange("100000000000000000", "999999999999999999"), 0, 'Test 10');
test(superpalindromesInRange("50", "1000"), 2, 'Test 11');
test(superpalindromesInRange("999999999999999999", "999999999999999999"), 0, 'Test 12');
test(superpalindromesInRange("100000000", "1000000000000000000"), 57, 'Test 13');
test(superpalindromesInRange("10", "100"), 0, 'Test 14');
test(superpalindromesInRange("123456789", "987654321"), 3, 'Test 15');
test(superpalindromesInRange("100000000000000000", "1000000000000000000"), 0, 'Test 16');
test(superpalindromesInRange("987654321", "987654321987654321"), 49, 'Test 17');
test(superpalindromesInRange("100000000", "10000000000"), 8, 'Test 18');
test(superpalindromesInRange("800000000000000000", "888888888888888888"), 0, 'Test 19');
test(superpalindromesInRange("987654321098765432", "999999999999999999"), 0, 'Test 20');
test(superpalindromesInRange("1000000000000", "2000000000000"), 11, 'Test 21');
test(superpalindromesInRange("12345678987654321", "12345678987654321"), 1, 'Test 22');
test(superpalindromesInRange("100000000000000", "1000000000000000"), 9, 'Test 23');
test(superpalindromesInRange("1", "1000000000000000000"), 70, 'Test 24');
test(superpalindromesInRange("123456789012345678", "876543210987654321"), 0, 'Test 25');
test(superpalindromesInRange("1000000000", "1234567890123456789"), 64, 'Test 26');
test(superpalindromesInRange("1000000000000000000", "2000000000000000000"), 15, 'Test 27');
test(superpalindromesInRange("12345678987654321", "98765432123456789"), 3, 'Test 28');
test(superpalindromesInRange("2000000000", "3000000000"), 0, 'Test 29');
test(superpalindromesInRange("500000000000000000", "555555555555555555"), 0, 'Test 30');
test(superpalindromesInRange("12345678987654321", "12345678987654321987654321987654321"), 21, 'Test 31');
test(superpalindromesInRange("333333333333333333", "444444444444444444"), 0, 'Test 32');
test(superpalindromesInRange("900000000000000000", "999999999999999999"), 0, 'Test 33');
test(superpalindromesInRange("9007199254740992", "900719925474099200"), 22, 'Test 34');
test(superpalindromesInRange("8765432101234567876543210", "987654321123456789876543210"), 0, 'Test 35');
test(superpalindromesInRange("10000000000", "100000000000000000"), 49, 'Test 36');
test(superpalindromesInRange("1000000000000", "9999999999999"), 13, 'Test 37');
test(superpalindromesInRange("500000000", "600000000"), 0, 'Test 38');
test(superpalindromesInRange("499", "501"), 0, 'Test 39');
test(superpalindromesInRange("123", "123456789012345678"), 66, 'Test 40');
test(superpalindromesInRange("1", "999999999999999999"), 70, 'Test 41');
test(superpalindromesInRange("99999999999999998", "999999999999999999"), 0, 'Test 42');
test(superpalindromesInRange("999999999", "10000000000"), 0, 'Test 43');
test(superpalindromesInRange("9876543210", "9876543210987654321"), 65, 'Test 44');
test(superpalindromesInRange("9876543210123456789", "9876543210123456789"), 0, 'Test 45');
test(superpalindromesInRange("98000000000000000", "98100000000000000"), 0, 'Test 46');
test(superpalindromesInRange("888888888888888888", "999999999999999999"), 0, 'Test 47');
test(superpalindromesInRange("123456789123456789", "987654321987654321"), 0, 'Test 48');
test(superpalindromesInRange("100000000000000", "110000000000000"), 4, 'Test 49');
test(superpalindromesInRange("50000000000", "60000000000"), 0, 'Test 50');
test(superpalindromesInRange("12321", "98789"), 4, 'Test 51');
test(superpalindromesInRange("9223372036854775807", "9223372036854775808"), 0, 'Test 52');
test(superpalindromesInRange("111111111", "222222222"), 3, 'Test 53');
test(superpalindromesInRange("100000000000000000", "18446744073709551615"), 16, 'Test 54');
test(superpalindromesInRange("100000000000000000", "100000000000000001"), 0, 'Test 55');
test(superpalindromesInRange("99999999999999999", "1000000000000000000"), 0, 'Test 56');
test(superpalindromesInRange("987654321", "987654321012345678"), 49, 'Test 57');
test(superpalindromesInRange("999999999999999999", "1000000000000000000"), 0, 'Test 58');
test(superpalindromesInRange("1000000", "100000000"), 3, 'Test 59');
test(superpalindromesInRange("100000000000000", "1000000000000000000"), 31, 'Test 60');
test(superpalindromesInRange("1000000000000000000", "9999999999999999999"), 16, 'Test 61');
test(superpalindromesInRange("10000", "100000000"), 8, 'Test 62');
test(superpalindromesInRange("10000000000", "11000000000"), 2, 'Test 63');
test(superpalindromesInRange("3000000000000", "4000000000000"), 0, 'Test 64');
test(superpalindromesInRange("123456789012345678", "987654321098765432"), 0, 'Test 65');
test(superpalindromesInRange("1000000000000000000", "1000000000000000000"), 0, 'Test 66');
test(superpalindromesInRange("123", "12345678987654321"), 64, 'Test 67');
test(superpalindromesInRange("1000000000", "999999999999999999"), 49, 'Test 68');
test(superpalindromesInRange("1234567891011121314", "15161718192021222324"), 1, 'Test 69');
test(superpalindromesInRange("100000000000000000", "900000000000000000"), 0, 'Test 70');
test(superpalindromesInRange("1000000000", "1000000000000"), 5, 'Test 71');
test(superpalindromesInRange("7000000000000000000", "8000000000000000000"), 0, 'Test 72');
test(superpalindromesInRange("1000000000000000000", "1000000000000000001"), 0, 'Test 73');
test(superpalindromesInRange("1000000000", "9999999999"), 0, 'Test 74');
test(superpalindromesInRange("50000000000000000", "60000000000000000"), 0, 'Test 75');
test(superpalindromesInRange("555555555555555555", "666666666666666666"), 0, 'Test 76');
test(superpalindromesInRange("10000000000000000", "1000000000000000000"), 22, 'Test 77');
test(superpalindromesInRange("100000000000000000", "18014398509481983"), 0, 'Test 78');
test(superpalindromesInRange("111111111", "999999999999999"), 32, 'Test 79');
test(superpalindromesInRange("800000000000000000", "899999999999999999"), 0, 'Test 80');
test(superpalindromesInRange("111111111111111111", "222222222222222222"), 0, 'Test 81');
test(superpalindromesInRange("500000000000000000", "600000000000000000"), 0, 'Test 82');
test(superpalindromesInRange("484", "576"), 1, 'Test 83');
test(superpalindromesInRange("999999999999999", "999999999999999999"), 22, 'Test 84');
test(superpalindromesInRange("80000000000", "90000000000"), 0, 'Test 85');
test(superpalindromesInRange("1000000", "1000000000"), 11, 'Test 86');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

