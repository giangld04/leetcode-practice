// Test: 1850. Minimum Adjacent Swaps To Reach The Kth Smallest Number
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { getMinSwaps } = require("./solution");

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

console.log("\n1850. Minimum Adjacent Swaps To Reach The Kth Smallest Number\n");

test(getMinSwaps("111222333", 10), 3, 'Test 1');
test(getMinSwaps("1234567890", 5), 2, 'Test 2');
test(getMinSwaps("1111111111", 5), 0, 'Test 3');
test(getMinSwaps("9876543210", 3), 0, 'Test 4');
test(getMinSwaps("5489355142", 4), 2, 'Test 5');
test(getMinSwaps("321", 2), 0, 'Test 6');
test(getMinSwaps("1000001", 2), 2, 'Test 7');
test(getMinSwaps("343123", 3), 2, 'Test 8');
test(getMinSwaps("00123", 1), 1, 'Test 9');
test(getMinSwaps("12345678901234567890", 10), 5, 'Test 10');
test(getMinSwaps("9999999999", 1), 0, 'Test 11');
test(getMinSwaps("9876543210", 5), 0, 'Test 12');
test(getMinSwaps("1234567890", 3), 3, 'Test 13');
test(getMinSwaps("321", 1), 0, 'Test 14');
test(getMinSwaps("11112", 4), 4, 'Test 15');
test(getMinSwaps("000000000000000000000000000000000000000000000000", 1), 0, 'Test 16');
test(getMinSwaps("12345678901234567890123456789012345678901234567890", 500), 11, 'Test 17');
test(getMinSwaps("00000000001111111111", 500), 28, 'Test 18');
test(getMinSwaps("12345678901234567890", 1000), 9, 'Test 19');
test(getMinSwaps("111112222233333", 500), 9, 'Test 20');
test(getMinSwaps("123456789012345678901234567890", 50), 3, 'Test 21');
test(getMinSwaps("1234567890987654321012345678909876543210", 100), 39, 'Test 22');
test(getMinSwaps("00000000000000000000000000000000000000000000000001", 1), 1, 'Test 23');
test(getMinSwaps("01234567890123456789", 500), 8, 'Test 24');
test(getMinSwaps("5555555555555555555555555555555555555555555555555", 10), 0, 'Test 25');
test(getMinSwaps("3333333333", 1), 0, 'Test 26');
test(getMinSwaps("1212121212121212121212121212", 500), 6, 'Test 27');
test(getMinSwaps("9876543210", 10), 0, 'Test 28');
test(getMinSwaps("5678987656789", 250), 10, 'Test 29');
test(getMinSwaps("12345678909876543210", 500), 37, 'Test 30');
test(getMinSwaps("55667788990011223344", 500), 11, 'Test 31');
test(getMinSwaps("3456789012", 10), 2, 'Test 32');
test(getMinSwaps("123123123123123123123123123123123123123123", 200), 6, 'Test 33');
test(getMinSwaps("123321123321", 50), 3, 'Test 34');
test(getMinSwaps("9876543210", 15), 0, 'Test 35');
test(getMinSwaps("1000000000000000000000000000000000000000000000000001", 10), 10, 'Test 36');
test(getMinSwaps("12345678901234567890", 100), 8, 'Test 37');
test(getMinSwaps("3214567890", 10), 5, 'Test 38');
test(getMinSwaps("123321123321", 100), 5, 'Test 39');
test(getMinSwaps("987654321098765432109876543210", 1000), 37, 'Test 40');
test(getMinSwaps("01234567890123456789", 1000), 8, 'Test 41');
test(getMinSwaps("3333333333", 500), 0, 'Test 42');
test(getMinSwaps("3333222211110000", 100), 0, 'Test 43');
test(getMinSwaps("9876543210987654321098765432109876543210", 50), 42, 'Test 44');
test(getMinSwaps("987654321987654321987654321", 500), 28, 'Test 45');
test(getMinSwaps("33333333333333333333", 1), 0, 'Test 46');
test(getMinSwaps("01010101010101010101", 250), 3, 'Test 47');
test(getMinSwaps("987654321987654321", 100), 30, 'Test 48');
test(getMinSwaps("22222222222222222223", 500), 19, 'Test 49');
test(getMinSwaps("333333333333333333333333333333333333333333333333", 10), 0, 'Test 50');
test(getMinSwaps("987654321098765432109876543210987654321098765432109876543210", 500), 37, 'Test 51');
test(getMinSwaps("1010101010101010", 50), 5, 'Test 52');
test(getMinSwaps("1221112222211122222211111222222211111111122222222222222", 100), 19, 'Test 53');
test(getMinSwaps("99887766554433221100", 500), 0, 'Test 54');
test(getMinSwaps("1234554321", 10), 13, 'Test 55');
test(getMinSwaps("0000000001", 1), 1, 'Test 56');
test(getMinSwaps("44444444444444444444", 100), 0, 'Test 57');
test(getMinSwaps("111122223333444455556666777788889999", 1000), 15, 'Test 58');
test(getMinSwaps("90876543210987654321", 50), 34, 'Test 59');
test(getMinSwaps("1234321234321", 50), 6, 'Test 60');
test(getMinSwaps("111111111111111111112", 1000), 20, 'Test 61');
test(getMinSwaps("98765432109876543210", 10), 42, 'Test 62');
test(getMinSwaps("1234567890", 100), 8, 'Test 63');
test(getMinSwaps("55555555555555555555", 100), 0, 'Test 64');
test(getMinSwaps("555444333222111000", 300), 0, 'Test 65');
test(getMinSwaps("123123123123123123123", 200), 6, 'Test 66');
test(getMinSwaps("0000000000000000000000000000000000000000000000000001", 1), 1, 'Test 67');
test(getMinSwaps("33333333332222222222111111111111", 500), 0, 'Test 68');
test(getMinSwaps("9876543210", 50), 0, 'Test 69');
test(getMinSwaps("33333333333333333333333333333333333333333333333333", 1), 0, 'Test 70');
test(getMinSwaps("102030405060708090", 50), 8, 'Test 71');
test(getMinSwaps("989796959493929190898887868584838281807978777675747372717069686766656463626160595857565554535251504948474645444342414039383736353433323130292827262524232221201918171615141312111009080706050403020100", 1000), 15, 'Test 72');
test(getMinSwaps("00000000000000000001", 10), 10, 'Test 73');
test(getMinSwaps("23456789012345678901", 500), 10, 'Test 74');
test(getMinSwaps("0000000000000000000000000000000000001", 1), 1, 'Test 75');
test(getMinSwaps("13579135791357913579", 500), 7, 'Test 76');
test(getMinSwaps("876543210123456789", 500), 8, 'Test 77');
test(getMinSwaps("10000000001", 5), 5, 'Test 78');
test(getMinSwaps("3333333333", 100), 0, 'Test 79');
test(getMinSwaps("1111111111111111111111111111111111111111", 100), 0, 'Test 80');
test(getMinSwaps("98765432101234567890", 20), 7, 'Test 81');
test(getMinSwaps("98765432109876543210", 1000), 37, 'Test 82');
test(getMinSwaps("1221122112211221", 100), 13, 'Test 83');
test(getMinSwaps("222111333000444555666777888999", 500), 10, 'Test 84');
test(getMinSwaps("123456789876543210", 100), 39, 'Test 85');
test(getMinSwaps("11223344556677889900", 50), 12, 'Test 86');
test(getMinSwaps("12345678900987654321", 200), 31, 'Test 87');
test(getMinSwaps("432111111111111111111111111111", 100), 0, 'Test 88');
test(getMinSwaps("9999999999999999999999999999999999999999999999999999", 5), 0, 'Test 89');
test(getMinSwaps("12345678909876543210", 5), 43, 'Test 90');
test(getMinSwaps("11223344556677889900", 100), 9, 'Test 91');
test(getMinSwaps("11111111112222222222", 100), 11, 'Test 92');
test(getMinSwaps("12345678901234567890", 5), 2, 'Test 93');
test(getMinSwaps("133221100998877665544332211", 1000), 133, 'Test 94');
test(getMinSwaps("12345678901234567890", 20), 7, 'Test 95');
test(getMinSwaps("000000000011111111112222222222", 100), 11, 'Test 96');
test(getMinSwaps("55555555555555555555555555555555555555555555555555555", 5), 0, 'Test 97');
test(getMinSwaps("11223344556677889900", 1000), 11, 'Test 98');
test(getMinSwaps("1111222233334444", 1000), 15, 'Test 99');
test(getMinSwaps("9999999999888888888877777777776666666666", 1000), 0, 'Test 100');
test(getMinSwaps("11223344556677889900", 200), 9, 'Test 101');
test(getMinSwaps("99999999999999999999", 1000), 0, 'Test 102');
test(getMinSwaps("2233445566", 300), 4, 'Test 103');
test(getMinSwaps("99999999999999999999", 100), 0, 'Test 104');
test(getMinSwaps("98765432109876543210987654321098765432109876543210", 1000), 37, 'Test 105');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

