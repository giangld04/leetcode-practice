// Test: 564. Find The Closest Palindrome
// 114 test cases from LeetCodeDataset
// Run: node test.js

const { nearestPalindromic } = require("./solution");

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

console.log("\n564. Find The Closest Palindrome\n");

test(nearestPalindromic("10"), 9, 'Test 1');
test(nearestPalindromic("1001"), 999, 'Test 2');
test(nearestPalindromic("1234"), 1221, 'Test 3');
test(nearestPalindromic("123321"), 122221, 'Test 4');
test(nearestPalindromic("999999999"), 1000000001, 'Test 5');
test(nearestPalindromic("11"), 9, 'Test 6');
test(nearestPalindromic("9999"), 10001, 'Test 7');
test(nearestPalindromic("111111111"), 111101111, 'Test 8');
test(nearestPalindromic("9"), 8, 'Test 9');
test(nearestPalindromic("111111111111111111"), 111111110011111111, 'Test 10');
test(nearestPalindromic("10001"), 9999, 'Test 11');
test(nearestPalindromic("1000000000"), 999999999, 'Test 12');
test(nearestPalindromic("233"), 232, 'Test 13');
test(nearestPalindromic("987654321"), 987656789, 'Test 14');
test(nearestPalindromic("1221"), 1111, 'Test 15');
test(nearestPalindromic("123456789"), 123454321, 'Test 16');
test(nearestPalindromic("101"), 99, 'Test 17');
test(nearestPalindromic("1"), 0, 'Test 18');
test(nearestPalindromic("10000"), 9999, 'Test 19');
test(nearestPalindromic("123454321"), 123444321, 'Test 20');
test(nearestPalindromic("1000000001"), 999999999, 'Test 21');
test(nearestPalindromic("12321"), 12221, 'Test 22');
test(nearestPalindromic("99"), 101, 'Test 23');
test(nearestPalindromic("999999999999999999"), 1000000000000000001, 'Test 24');
test(nearestPalindromic("1000"), 999, 'Test 25');
test(nearestPalindromic("1000001"), 999999, 'Test 26');
test(nearestPalindromic("123"), 121, 'Test 27');
test(nearestPalindromic("1234321"), 1233321, 'Test 28');
test(nearestPalindromic("999"), 1001, 'Test 29');
test(nearestPalindromic("123456"), 123321, 'Test 30');
test(nearestPalindromic("1000000000000000000"), 999999999999999999, 'Test 31');
test(nearestPalindromic("100"), 99, 'Test 32');
test(nearestPalindromic("9223372036854775807"), 9223372037302733229, 'Test 33');
test(nearestPalindromic("923429"), 923329, 'Test 34');
test(nearestPalindromic("1234567887654321"), 1234567777654321, 'Test 35');
test(nearestPalindromic("2345678987654321"), 2345678998765432, 'Test 36');
test(nearestPalindromic("1000000000000000000000000001"), 999999999999999999999999999, 'Test 37');
test(nearestPalindromic("123456789876543210"), 123456789987654321, 'Test 38');
test(nearestPalindromic("10000000000000000100"), 10000000000000000001, 'Test 39');
test(nearestPalindromic("99999999999999999999"), 100000000000000000001, 'Test 40');
test(nearestPalindromic("9999999999"), 10000000001, 'Test 41');
test(nearestPalindromic("10000000000"), 9999999999, 'Test 42');
test(nearestPalindromic("2000002"), 1999991, 'Test 43');
test(nearestPalindromic("100001"), 99999, 'Test 44');
test(nearestPalindromic("101010101010101010"), 101010101101010101, 'Test 45');
test(nearestPalindromic("112233445566778899"), 112233445544332211, 'Test 46');
test(nearestPalindromic("200000000000000000001"), 200000000000000000002, 'Test 47');
test(nearestPalindromic("12345678987654322"), 12345678987654321, 'Test 48');
test(nearestPalindromic("888888888"), 888878888, 'Test 49');
test(nearestPalindromic("221122"), 220022, 'Test 50');
test(nearestPalindromic("222222222222222222"), 222222221122222222, 'Test 51');
test(nearestPalindromic("99999999999999999999999999"), 100000000000000000000000001, 'Test 52');
test(nearestPalindromic("1234567890123456789"), 1234567889887654321, 'Test 53');
test(nearestPalindromic("98765432123456789"), 98765432023456789, 'Test 54');
test(nearestPalindromic("10000000000000000000"), 9999999999999999999, 'Test 55');
test(nearestPalindromic("123456789876543221"), 123456789987654321, 'Test 56');
test(nearestPalindromic("5555555555555555"), 5555555445555555, 'Test 57');
test(nearestPalindromic("1111111111"), 1111001111, 'Test 58');
test(nearestPalindromic("12345678987654321"), 12345678887654321, 'Test 59');
test(nearestPalindromic("10000000000000000000001"), 9999999999999999999999, 'Test 60');
test(nearestPalindromic("1111"), 1001, 'Test 61');
test(nearestPalindromic("111"), 101, 'Test 62');
test(nearestPalindromic("9998"), 9999, 'Test 63');
test(nearestPalindromic("100000000001"), 99999999999, 'Test 64');
test(nearestPalindromic("8888888888"), 8888778888, 'Test 65');
test(nearestPalindromic("11111111111111111"), 11111111011111111, 'Test 66');
test(nearestPalindromic("888888888888888888"), 888888887788888888, 'Test 67');
test(nearestPalindromic("135797531"), 135787531, 'Test 68');
test(nearestPalindromic("123456789012345678901234567890123456789"), 123456789012345678898876543210987654321, 'Test 69');
test(nearestPalindromic("9876543210123456789"), 9876543211123456789, 'Test 70');
test(nearestPalindromic("11122111"), 11111111, 'Test 71');
test(nearestPalindromic("100000000000000000000000001"), 99999999999999999999999999, 'Test 72');
test(nearestPalindromic("100010001"), 100000001, 'Test 73');
test(nearestPalindromic("1000000000000000000000000000000"), 999999999999999999999999999999, 'Test 74');
test(nearestPalindromic("12344321"), 12333321, 'Test 75');
test(nearestPalindromic("12345678900987654321"), 12345678899887654321, 'Test 76');
test(nearestPalindromic("2147483647"), 2147447412, 'Test 77');
test(nearestPalindromic("1800000000"), 1799999971, 'Test 78');
test(nearestPalindromic("100000000000000000"), 99999999999999999, 'Test 79');
test(nearestPalindromic("9999999999999999999999999"), 10000000000000000000000001, 'Test 80');
test(nearestPalindromic("9999999999999999999"), 10000000000000000001, 'Test 81');
test(nearestPalindromic("9876543210"), 9876556789, 'Test 82');
test(nearestPalindromic("99999"), 100001, 'Test 83');
test(nearestPalindromic("1111111111111111111"), 1111111110111111111, 'Test 84');
test(nearestPalindromic("987654321098765432109876543210987654321"), 987654321098765432111234567890123456789, 'Test 85');
test(nearestPalindromic("112233445544332211"), 112233444444332211, 'Test 86');
test(nearestPalindromic("9999999999999999"), 10000000000000001, 'Test 87');
test(nearestPalindromic("9999999999999999999999"), 10000000000000000000001, 'Test 88');
test(nearestPalindromic("10000000001"), 9999999999, 'Test 89');
test(nearestPalindromic("999999999999999999999"), 1000000000000000000001, 'Test 90');
test(nearestPalindromic("999999999999999998"), 999999999999999999, 'Test 91');
test(nearestPalindromic("1000000000000000000000000"), 999999999999999999999999, 'Test 92');
test(nearestPalindromic("100000000000000000001"), 99999999999999999999, 'Test 93');
test(nearestPalindromic("2000000000000000000"), 2000000000000000002, 'Test 94');
test(nearestPalindromic("1234567898765432"), 1234567887654321, 'Test 95');
test(nearestPalindromic("100000000000000000000000000000000000000001"), 99999999999999999999999999999999999999999, 'Test 96');
test(nearestPalindromic("1000000000000000000001"), 999999999999999999999, 'Test 97');
test(nearestPalindromic("11111111111111111111"), 11111111100111111111, 'Test 98');
test(nearestPalindromic("999999999999999999999999"), 1000000000000000000000001, 'Test 99');
test(nearestPalindromic("987654321123456789"), 987654320023456789, 'Test 100');
test(nearestPalindromic("876543210"), 876545678, 'Test 101');
test(nearestPalindromic("1234567890987654321"), 1234567891987654321, 'Test 102');
test(nearestPalindromic("1001001001001"), 1001000001001, 'Test 103');
test(nearestPalindromic("99999999999999999"), 100000000000000001, 'Test 104');
test(nearestPalindromic("98765432109876543210"), 98765432111123456789, 'Test 105');
test(nearestPalindromic("111111111111111110"), 111111111111111111, 'Test 106');
test(nearestPalindromic("92345678987654322"), 92345678987654329, 'Test 107');
test(nearestPalindromic("1000000000000000001"), 999999999999999999, 'Test 108');
test(nearestPalindromic("111111111111111111111"), 111111111101111111111, 'Test 109');
test(nearestPalindromic("8000000000000000000"), 7999999999999999997, 'Test 110');
test(nearestPalindromic("100000000000000001"), 99999999999999999, 'Test 111');
test(nearestPalindromic("10000000000000000"), 9999999999999999, 'Test 112');
test(nearestPalindromic("10000000000000000001"), 9999999999999999999, 'Test 113');
test(nearestPalindromic("246808642"), 246818642, 'Test 114');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

