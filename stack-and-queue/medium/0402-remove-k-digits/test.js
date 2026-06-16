// Test: 402. Remove K Digits
// 111 test cases from LeetCodeDataset
// Run: node test.js

const { removeKdigits } = require("./solution");

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

console.log("\n402. Remove K Digits\n");

test(removeKdigits("100", 1), 0, 'Test 1');
test(removeKdigits("999", 2), 9, 'Test 2');
test(removeKdigits("1234567890", 9), 0, 'Test 3');
test(removeKdigits("111111", 2), 1111, 'Test 4');
test(removeKdigits("987654321", 5), 4321, 'Test 5');
test(removeKdigits("11111", 2), 111, 'Test 6');
test(removeKdigits("12345", 2), 123, 'Test 7');
test(removeKdigits("1111", 2), 11, 'Test 8');
test(removeKdigits("10001", 1), 1, 'Test 9');
test(removeKdigits("123456789", 5), 1234, 'Test 10');
test(removeKdigits("112", 1), 11, 'Test 11');
test(removeKdigits("99991", 1), 9991, 'Test 12');
test(removeKdigits("123123", 3), 112, 'Test 13');
test(removeKdigits("10200", 1), 200, 'Test 14');
test(removeKdigits("1234567890", 5), 12340, 'Test 15');
test(removeKdigits("1432219", 3), 1219, 'Test 16');
test(removeKdigits("9999", 2), 99, 'Test 17');
test(removeKdigits("10", 1), 0, 'Test 18');
test(removeKdigits("10", 2), 0, 'Test 19');
test(removeKdigits("100100", 3), 0, 'Test 20');
test(removeKdigits("333222111", 5), 2111, 'Test 21');
test(removeKdigits("9999999999", 5), 99999, 'Test 22');
test(removeKdigits("12345678900000000000", 10), 0, 'Test 23');
test(removeKdigits("110011001100", 6), 0, 'Test 24');
test(removeKdigits("123123123123", 6), 111123, 'Test 25');
test(removeKdigits("123454321", 4), 12321, 'Test 26');
test(removeKdigits("111999111999", 6), 111111, 'Test 27');
test(removeKdigits("2020202020", 5), 0, 'Test 28');
test(removeKdigits("100100100100100", 5), 0, 'Test 29');
test(removeKdigits("532354235", 4), 23235, 'Test 30');
test(removeKdigits("1000000000", 9), 0, 'Test 31');
test(removeKdigits("3847283948574859234895742389475", 20), 22342389475, 'Test 32');
test(removeKdigits("999888777666", 6), 777666, 'Test 33');
test(removeKdigits("100010001", 3), 0, 'Test 34');
test(removeKdigits("111000111000", 6), 0, 'Test 35');
test(removeKdigits("5432100000", 2), 32100000, 'Test 36');
test(removeKdigits("123456789987654321", 10), 12344321, 'Test 37');
test(removeKdigits("1221221221", 5), 11121, 'Test 38');
test(removeKdigits("00000000000000000000", 10), 0, 'Test 39');
test(removeKdigits("111222333444", 6), 111222, 'Test 40');
test(removeKdigits("12345678901234567890", 10), 123456780, 'Test 41');
test(removeKdigits("1000000000", 8), 0, 'Test 42');
test(removeKdigits("100010001000", 6), 0, 'Test 43');
test(removeKdigits("10000000000000000000", 15), 0, 'Test 44');
test(removeKdigits("59112346758", 4), 1123458, 'Test 45');
test(removeKdigits("1122334455", 5), 11223, 'Test 46');
test(removeKdigits("100100100100", 5), 0, 'Test 47');
test(removeKdigits("100100100100", 6), 0, 'Test 48');
test(removeKdigits("5959595959", 5), 55555, 'Test 49');
test(removeKdigits("111222333", 5), 1112, 'Test 50');
test(removeKdigits("12345678900000000000", 15), 0, 'Test 51');
test(removeKdigits("1000100010001000", 8), 0, 'Test 52');
test(removeKdigits("11111111111111111111", 15), 11111, 'Test 53');
test(removeKdigits("1098765432", 5), 5432, 'Test 54');
test(removeKdigits("12341234", 4), 1123, 'Test 55');
test(removeKdigits("987654321098765432109876543210", 20), 76543210, 'Test 56');
test(removeKdigits("100010001000", 5), 0, 'Test 57');
test(removeKdigits("999111999111", 4), 11199111, 'Test 58');
test(removeKdigits("98765432101234567890", 10), 123456780, 'Test 59');
test(removeKdigits("1234512345", 5), 11234, 'Test 60');
test(removeKdigits("100010001", 4), 0, 'Test 61');
test(removeKdigits("12345678909876543210", 15), 3210, 'Test 62');
test(removeKdigits("98765432100000", 10), 0, 'Test 63');
test(removeKdigits("99887766554433221100", 10), 4433221100, 'Test 64');
test(removeKdigits("100020003000", 3), 0, 'Test 65');
test(removeKdigits("123412341234", 6), 111234, 'Test 66');
test(removeKdigits("98765432100000000000", 10), 0, 'Test 67');
test(removeKdigits("100000000000000000000000000000000000000000000000", 50), 0, 'Test 68');
test(removeKdigits("98765432100123456789", 10), 12345678, 'Test 69');
test(removeKdigits("9876543210", 5), 43210, 'Test 70');
test(removeKdigits("98765432109876543210", 10), 876543210, 'Test 71');
test(removeKdigits("101010101010", 5), 10, 'Test 72');
test(removeKdigits("123456789", 4), 12345, 'Test 73');
test(removeKdigits("5432154321", 5), 14321, 'Test 74');
test(removeKdigits("533729941590110", 5), 2941590110, 'Test 75');
test(removeKdigits("100100100100100100100100100100100100100", 20), 0, 'Test 76');
test(removeKdigits("123321123321", 5), 1112321, 'Test 77');
test(removeKdigits("1000100010", 5), 0, 'Test 78');
test(removeKdigits("55555555555555555555", 15), 55555, 'Test 79');
test(removeKdigits("111222333", 4), 11122, 'Test 80');
test(removeKdigits("1234567890", 1), 123456780, 'Test 81');
test(removeKdigits("59595959", 4), 5555, 'Test 82');
test(removeKdigits("999887766554433221100", 10), 54433221100, 'Test 83');
test(removeKdigits("10000000000000000000", 10), 0, 'Test 84');
test(removeKdigits("533721121233121212", 7), 11123121212, 'Test 85');
test(removeKdigits("11111111111111111111", 10), 1111111111, 'Test 86');
test(removeKdigits("5432109876543210", 10), 43210, 'Test 87');
test(removeKdigits("543210123456789", 5), 123456789, 'Test 88');
test(removeKdigits("9999999999", 9), 9, 'Test 89');
test(removeKdigits("1010101010", 5), 0, 'Test 90');
test(removeKdigits("123456789012345678901234567890", 20), 12345670, 'Test 91');
test(removeKdigits("111222333444555666777888999000111222", 20), 1112223000111222, 'Test 92');
test(removeKdigits("100100100", 3), 0, 'Test 93');
test(removeKdigits("999888777666555444333222111000", 15), 444333222111000, 'Test 94');
test(removeKdigits("12003004005", 3), 4005, 'Test 95');
test(removeKdigits("5959595959", 4), 555559, 'Test 96');
test(removeKdigits("129384756", 3), 123456, 'Test 97');
test(removeKdigits("0000000000", 5), 0, 'Test 98');
test(removeKdigits("3332211", 3), 2211, 'Test 99');
test(removeKdigits("1223344556677889900", 10), 122334400, 'Test 100');
test(removeKdigits("111222333444555", 10), 11122, 'Test 101');
test(removeKdigits("54321", 2), 321, 'Test 102');
test(removeKdigits("999999999999", 11), 9, 'Test 103');
test(removeKdigits("999999999", 5), 9999, 'Test 104');
test(removeKdigits("120012001200", 6), 0, 'Test 105');
test(removeKdigits("11223344556677889900", 15), 11200, 'Test 106');
test(removeKdigits("999999999999", 6), 999999, 'Test 107');
test(removeKdigits("100000000000000000000", 19), 0, 'Test 108');
test(removeKdigits("100010001", 6), 0, 'Test 109');
test(removeKdigits("123045607890", 5), 407890, 'Test 110');
test(removeKdigits("123456789000000000000000000000000000000000000000", 50), 0, 'Test 111');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

