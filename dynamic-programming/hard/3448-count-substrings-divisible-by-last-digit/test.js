// Test: 3448. Count Substrings Divisible By Last Digit
// 113 test cases from LeetCodeDataset
// Run: node test.js

const { countSubstrings } = require("./solution");

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

console.log("\n3448. Count Substrings Divisible By Last Digit\n");

test(countSubstrings("24680"), 6, 'Test 1');
test(countSubstrings("11111"), 15, 'Test 2');
test(countSubstrings("5701283"), 18, 'Test 3');
test(countSubstrings("9876543210"), 35, 'Test 4');
test(countSubstrings("1001001001"), 22, 'Test 5');
test(countSubstrings("9999999999"), 55, 'Test 6');
test(countSubstrings("1111111111"), 55, 'Test 7');
test(countSubstrings("9090909090"), 25, 'Test 8');
test(countSubstrings("909090909"), 25, 'Test 9');
test(countSubstrings("2468024680"), 24, 'Test 10');
test(countSubstrings("00000"), 0, 'Test 11');
test(countSubstrings("13579"), 8, 'Test 12');
test(countSubstrings("12936"), 11, 'Test 13');
test(countSubstrings("1010101010"), 25, 'Test 14');
test(countSubstrings("12345678901234567890"), 88, 'Test 15');
test(countSubstrings("1234567890"), 20, 'Test 16');
test(countSubstrings("0000000000"), 0, 'Test 17');
test(countSubstrings("11111222223333344444"), 160, 'Test 18');
test(countSubstrings("13579135791357913579"), 118, 'Test 19');
test(countSubstrings("1234512345123451234512345123451234512345123451234512345"), 1111, 'Test 20');
test(countSubstrings("7777777777777777777777777777777"), 496, 'Test 21');
test(countSubstrings("001001001001001001001001001001001001001001001001"), 408, 'Test 22');
test(countSubstrings("12345678901234567890123456789012345678901234567890"), 587, 'Test 23');
test(countSubstrings("123456789000000000001234567890"), 148, 'Test 24');
test(countSubstrings("54321098765432109876543210"), 190, 'Test 25');
test(countSubstrings("123456789123456789123456789123456789123456789"), 522, 'Test 26');
test(countSubstrings("98765432101234567890"), 104, 'Test 27');
test(countSubstrings("1100110011001100"), 60, 'Test 28');
test(countSubstrings("123456789011121314151617181920212223242526272829303132333435363738394041424344454647484950"), 2238, 'Test 29');
test(countSubstrings("111112222233333444445555566666777778888899999"), 550, 'Test 30');
test(countSubstrings("010010001000010000010000001000000001000000000100000000001"), 216, 'Test 31');
test(countSubstrings("0102030405060708090102030405"), 158, 'Test 32');
test(countSubstrings("52525252525252525252"), 210, 'Test 33');
test(countSubstrings("25025025025025025025025025"), 243, 'Test 34');
test(countSubstrings("10000000000000000000"), 1, 'Test 35');
test(countSubstrings("86420864208642086420"), 133, 'Test 36');
test(countSubstrings("2222222222222222222"), 190, 'Test 37');
test(countSubstrings("0000000000000000000000000000000"), 0, 'Test 38');
test(countSubstrings("12300000000000000000"), 5, 'Test 39');
test(countSubstrings("123456789098765432101234567890"), 220, 'Test 40');
test(countSubstrings("1001001001001001001001001001001"), 176, 'Test 41');
test(countSubstrings("00000000001234567890"), 80, 'Test 42');
test(countSubstrings("135791113151719212325"), 184, 'Test 43');
test(countSubstrings("78945612307894561230"), 117, 'Test 44');
test(countSubstrings("12345999999999999999"), 146, 'Test 45');
test(countSubstrings("12034567890123456789"), 95, 'Test 46');
test(countSubstrings("5678901234"), 28, 'Test 47');
test(countSubstrings("01234567890123456789"), 101, 'Test 48');
test(countSubstrings("99999999999999999999"), 210, 'Test 49');
test(countSubstrings("505050505050505050505050505050"), 225, 'Test 50');
test(countSubstrings("11111111111111111111"), 210, 'Test 51');
test(countSubstrings("11223344556677889900"), 71, 'Test 52');
test(countSubstrings("10000000010000000010"), 30, 'Test 53');
test(countSubstrings("246802468024680"), 52, 'Test 54');
test(countSubstrings("100000000010000000001000000000"), 33, 'Test 55');
test(countSubstrings("12345678901112131415161718192021222324252627282930"), 898, 'Test 56');
test(countSubstrings("36912580473691258047"), 119, 'Test 57');
test(countSubstrings("3330333033303330333"), 150, 'Test 58');
test(countSubstrings("987654321987654321987654321987654321987654321"), 603, 'Test 59');
test(countSubstrings("86420864208642086420864208642086420"), 407, 'Test 60');
test(countSubstrings("9876543210987654321098765432109876543210"), 435, 'Test 61');
test(countSubstrings("98765432109876543210"), 119, 'Test 62');
test(countSubstrings("24681357902468135790"), 110, 'Test 63');
test(countSubstrings("123456789876543210123456789"), 193, 'Test 64');
test(countSubstrings("111111111122222222223333333333"), 335, 'Test 65');
test(countSubstrings("98765432100000000001"), 55, 'Test 66');
test(countSubstrings("111222333444555666777888999"), 183, 'Test 67');
test(countSubstrings("10010010010010010010"), 70, 'Test 68');
test(countSubstrings("50505050505050505050"), 100, 'Test 69');
test(countSubstrings("1001001001001001001001"), 92, 'Test 70');
test(countSubstrings("987654321987654321987654321"), 233, 'Test 71');
test(countSubstrings("112233445566778899001122334455667788990011223344"), 612, 'Test 72');
test(countSubstrings("24680246802468024680"), 93, 'Test 73');
test(countSubstrings("99999888887777766666"), 120, 'Test 74');
test(countSubstrings("258025802580258025802580258025802580258025802580"), 576, 'Test 75');
test(countSubstrings("909090909090909"), 64, 'Test 76');
test(countSubstrings("09090909090909090909"), 110, 'Test 77');
test(countSubstrings("98765432109876543210987654321098765432109876543210"), 667, 'Test 78');
test(countSubstrings("1001001001001001001"), 70, 'Test 79');
test(countSubstrings("12345678909876543210"), 104, 'Test 80');
test(countSubstrings("987654321000000000000000000000"), 35, 'Test 81');
test(countSubstrings("12213332211221333221"), 174, 'Test 82');
test(countSubstrings("1110001110001110001"), 91, 'Test 83');
test(countSubstrings("2222222222"), 55, 'Test 84');
test(countSubstrings("55555555555555555555"), 210, 'Test 85');
test(countSubstrings("123012301230123012301230"), 195, 'Test 86');
test(countSubstrings("123455432112345543211234554321"), 342, 'Test 87');
test(countSubstrings("12345098765432109876"), 101, 'Test 88');
test(countSubstrings("00000000000000000000"), 0, 'Test 89');
test(countSubstrings("13579246801357924680135792468013579246801357924680"), 691, 'Test 90');
test(countSubstrings("999000999000999000"), 72, 'Test 91');
test(countSubstrings("10101010101010101010101010101010101010101010"), 484, 'Test 92');
test(countSubstrings("13579246801357924680"), 109, 'Test 93');
test(countSubstrings("987654321098765432109876543210"), 252, 'Test 94');
test(countSubstrings("50505050505050505050505"), 144, 'Test 95');
test(countSubstrings("8642086420864208642086420864208642086420864208642086420"), 1005, 'Test 96');
test(countSubstrings("101010101010101010101010101010101010101010101010"), 576, 'Test 97');
test(countSubstrings("987654321011121314151617181920"), 316, 'Test 98');
test(countSubstrings("36936936936936936936"), 189, 'Test 99');
test(countSubstrings("5050505050505050505050"), 121, 'Test 100');
test(countSubstrings("2468024680246802468024680"), 146, 'Test 101');
test(countSubstrings("98765432101111111111"), 190, 'Test 102');
test(countSubstrings("123321123321123321123321"), 268, 'Test 103');
test(countSubstrings("44444444444444444444444444"), 351, 'Test 104');
test(countSubstrings("123412341234123412341234123412341234123412341234"), 680, 'Test 105');
test(countSubstrings("1100110011001100110011"), 138, 'Test 106');
test(countSubstrings("102030405060708090"), 39, 'Test 107');
test(countSubstrings("1212121212121212121"), 190, 'Test 108');
test(countSubstrings("9090909090909090909"), 100, 'Test 109');
test(countSubstrings("12345678900000000000"), 20, 'Test 110');
test(countSubstrings("123123123123123"), 105, 'Test 111');
test(countSubstrings("10101010101010101010"), 100, 'Test 112');
test(countSubstrings("123456789012345678901234567890"), 205, 'Test 113');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

