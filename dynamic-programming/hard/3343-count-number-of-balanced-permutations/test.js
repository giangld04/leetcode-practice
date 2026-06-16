// Test: 3343. Count Number Of Balanced Permutations
// 113 test cases from LeetCodeDataset
// Run: node test.js

const { countBalancedPermutations } = require("./solution");

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

console.log("\n3343. Count Number Of Balanced Permutations\n");

test(countBalancedPermutations("9876543210"), 0, 'Test 1');
test(countBalancedPermutations("12344321"), 648, 'Test 2');
test(countBalancedPermutations("1212"), 4, 'Test 3');
test(countBalancedPermutations("123"), 2, 'Test 4');
test(countBalancedPermutations("2020"), 4, 'Test 5');
test(countBalancedPermutations("1020304050"), 0, 'Test 6');
test(countBalancedPermutations("2222"), 1, 'Test 7');
test(countBalancedPermutations("55555555"), 1, 'Test 8');
test(countBalancedPermutations("24680"), 24, 'Test 9');
test(countBalancedPermutations("00000000"), 1, 'Test 10');
test(countBalancedPermutations("123321"), 36, 'Test 11');
test(countBalancedPermutations("1221"), 4, 'Test 12');
test(countBalancedPermutations("1234567890"), 0, 'Test 13');
test(countBalancedPermutations("112"), 1, 'Test 14');
test(countBalancedPermutations("102030405060708090"), 0, 'Test 15');
test(countBalancedPermutations("11111111"), 1, 'Test 16');
test(countBalancedPermutations("13579"), 0, 'Test 17');
test(countBalancedPermutations("12212121"), 36, 'Test 18');
test(countBalancedPermutations("12345"), 0, 'Test 19');
test(countBalancedPermutations("12212112"), 36, 'Test 20');
test(countBalancedPermutations("11112222"), 36, 'Test 21');
test(countBalancedPermutations("0000"), 1, 'Test 22');
test(countBalancedPermutations("11111111119999999999"), 63504, 'Test 23');
test(countBalancedPermutations("55555555555555555555555555555555555555555555"), 1, 'Test 24');
test(countBalancedPermutations("222111"), 0, 'Test 25');
test(countBalancedPermutations("123456789876543210123456789876543210"), 190056824, 'Test 26');
test(countBalancedPermutations("98765432109876543210"), 900134141, 'Test 27');
test(countBalancedPermutations("9876543210123456789"), 790013419, 'Test 28');
test(countBalancedPermutations("0000000000"), 1, 'Test 29');
test(countBalancedPermutations("111222333444555"), 0, 'Test 30');
test(countBalancedPermutations("99887766554433221100"), 900134141, 'Test 31');
test(countBalancedPermutations("1234123412341234123412341234"), 781838043, 'Test 32');
test(countBalancedPermutations("111122223333"), 9300, 'Test 33');
test(countBalancedPermutations("122133445566778899"), 219955538, 'Test 34');
test(countBalancedPermutations("1234567890123456789012345678901234567890"), 607589218, 'Test 35');
test(countBalancedPermutations("123456789012345678901234567890123456789012345678901234567890123456"), 0, 'Test 36');
test(countBalancedPermutations("123456789"), 0, 'Test 37');
test(countBalancedPermutations("123123123123123123123123"), 820829773, 'Test 38');
test(countBalancedPermutations("98765432109876543210987654321098765432109876543210"), 0, 'Test 39');
test(countBalancedPermutations("111222333444"), 72800, 'Test 40');
test(countBalancedPermutations("12121212121212121212"), 63504, 'Test 41');
test(countBalancedPermutations("00000000000000000000111111111111"), 64128064, 'Test 42');
test(countBalancedPermutations("5040302010"), 0, 'Test 43');
test(countBalancedPermutations("12121212121212121212121212121212121212121212121212"), 0, 'Test 44');
test(countBalancedPermutations("1111111111"), 1, 'Test 45');
test(countBalancedPermutations("101010101010101010"), 0, 'Test 46');
test(countBalancedPermutations("1234567890123456789012345678901234567890123456789012345678901234567890"), 0, 'Test 47');
test(countBalancedPermutations("2020202020202020202020202020202020202020"), 134779298, 'Test 48');
test(countBalancedPermutations("1111111111111111111111111111111111111111111111111111111111111111111111111111111112"), 0, 'Test 49');
test(countBalancedPermutations("555555555566666666667777777777888888888899999999999"), 0, 'Test 50');
test(countBalancedPermutations("5555555555555555555"), 0, 'Test 51');
test(countBalancedPermutations("1223334444"), 2600, 'Test 52');
test(countBalancedPermutations("123321123321"), 9300, 'Test 53');
test(countBalancedPermutations("99999999999999999999999999999999999999999999999999999999999999999999999999999"), 0, 'Test 54');
test(countBalancedPermutations("1212121212"), 0, 'Test 55');
test(countBalancedPermutations("12233445566778899"), 0, 'Test 56');
test(countBalancedPermutations("5555555555"), 1, 'Test 57');
test(countBalancedPermutations("012345678901234567890123456789012345678901234567890123456789012345"), 0, 'Test 58');
test(countBalancedPermutations("11111111112222222222"), 63504, 'Test 59');
test(countBalancedPermutations("5555555555555555555555555555555555555555555555555555555555555555555555555555555"), 0, 'Test 60');
test(countBalancedPermutations("123123123123"), 9300, 'Test 61');
test(countBalancedPermutations("22221111"), 36, 'Test 62');
test(countBalancedPermutations("5555555555555555555555555555555555555555"), 1, 'Test 63');
test(countBalancedPermutations("81818181818181818181818181818181818181818181818181818181818181818181818"), 0, 'Test 64');
test(countBalancedPermutations("000000000011111111112222222222"), 742310809, 'Test 65');
test(countBalancedPermutations("111122223333444455556666777788889999111122223333"), 59512384, 'Test 66');
test(countBalancedPermutations("222222222222222222"), 1, 'Test 67');
test(countBalancedPermutations("909090909090909090909090909090909090909090909090909090909090909090909090"), 799529048, 'Test 68');
test(countBalancedPermutations("0120120120120120120120120120"), 0, 'Test 69');
test(countBalancedPermutations("1357924680135792468013579246801357924680"), 607589218, 'Test 70');
test(countBalancedPermutations("999888777666555444333222111000"), 0, 'Test 71');
test(countBalancedPermutations("102030405060708090102030405060708090102030405060708090"), 0, 'Test 72');
test(countBalancedPermutations("010101010101010101010101010101010101010101010101010101010101010101010101010101010"), 273892679, 'Test 73');
test(countBalancedPermutations("000000000000000000000000000000000000000000000000000000000000000000000000"), 1, 'Test 74');
test(countBalancedPermutations("4958271635"), 172800, 'Test 75');
test(countBalancedPermutations("99999999999999999999"), 1, 'Test 76');
test(countBalancedPermutations("2222222222"), 1, 'Test 77');
test(countBalancedPermutations("88888888888888888888888888888888888888888888888888888888888888888888888888888888"), 1, 'Test 78');
test(countBalancedPermutations("123412341234"), 72800, 'Test 79');
test(countBalancedPermutations("9999999999999999999999999999999999999999999999999999999999999999"), 1, 'Test 80');
test(countBalancedPermutations("1357924680"), 0, 'Test 81');
test(countBalancedPermutations("98765432101234567890"), 900134141, 'Test 82');
test(countBalancedPermutations("123412341234123412341234123412341234"), 463799437, 'Test 83');
test(countBalancedPermutations("12212212"), 0, 'Test 84');
test(countBalancedPermutations("12121212"), 36, 'Test 85');
test(countBalancedPermutations("111222333444555666777"), 193822140, 'Test 86');
test(countBalancedPermutations("2233445566778899"), 756825558, 'Test 87');
test(countBalancedPermutations("111222333444555666777888999"), 0, 'Test 88');
test(countBalancedPermutations("1000000000"), 0, 'Test 89');
test(countBalancedPermutations("9999999999"), 1, 'Test 90');
test(countBalancedPermutations("000000000000000000001111111111111111111122222222222222222222"), 755410506, 'Test 91');
test(countBalancedPermutations("123123123123123123123"), 71961120, 'Test 92');
test(countBalancedPermutations("123321456654"), 972000, 'Test 93');
test(countBalancedPermutations("000011112222"), 9300, 'Test 94');
test(countBalancedPermutations("9876543211"), 158400, 'Test 95');
test(countBalancedPermutations("12345678901234567890123456789012345678901234567890"), 0, 'Test 96');
test(countBalancedPermutations("101010101010101010101010101010101010101010101010101010101010101010"), 0, 'Test 97');
test(countBalancedPermutations("9988776655"), 19800, 'Test 98');
test(countBalancedPermutations("121212121212"), 400, 'Test 99');
test(countBalancedPermutations("10101010101010101010"), 63504, 'Test 100');
test(countBalancedPermutations("1010101010"), 0, 'Test 101');
test(countBalancedPermutations("7777777777777777777777777777777777777777777777777777777777777777777777777777777"), 0, 'Test 102');
test(countBalancedPermutations("11111111111111111111"), 1, 'Test 103');
test(countBalancedPermutations("555555555555555555555555555555555555555555555555555555555555555555555555555"), 0, 'Test 104');
test(countBalancedPermutations("01234567890123456789012345678901234567890123456789"), 0, 'Test 105');
test(countBalancedPermutations("12345678901234567890"), 900134141, 'Test 106');
test(countBalancedPermutations("9999999999999999999999999999999999999999"), 1, 'Test 107');
test(countBalancedPermutations("1111111111222222222233333333334444444444"), 353173291, 'Test 108');
test(countBalancedPermutations("12233344445555555555566666666667777777777777888888888888899999999999999"), 864162378, 'Test 109');
test(countBalancedPermutations("11223344"), 648, 'Test 110');
test(countBalancedPermutations("1234123412341234"), 10750600, 'Test 111');
test(countBalancedPermutations("11111111111111111111111111111111111111111111111111111111111111111111111111111111"), 1, 'Test 112');
test(countBalancedPermutations("00101010202020"), 0, 'Test 113');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

