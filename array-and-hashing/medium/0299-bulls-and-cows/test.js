// Test: 299. Bulls And Cows
// 115 test cases from LeetCodeDataset
// Run: node test.js

const { getHint } = require("./solution");

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

console.log("\n299. Bulls And Cows\n");

test(getHint("1010101010", "0101010101"), 0A10B, 'Test 1');
test(getHint("1234567890", "1111111111"), 1A0B, 'Test 2');
test(getHint("0000", "1111"), 0A0B, 'Test 3');
test(getHint("111222333", "333222111"), 3A6B, 'Test 4');
test(getHint("9999999999", "1111111111"), 0A0B, 'Test 5');
test(getHint("1112", "1122"), 3A0B, 'Test 6');
test(getHint("9305", "7315"), 2A0B, 'Test 7');
test(getHint("1122", "2211"), 0A4B, 'Test 8');
test(getHint("1234567890", "0987654321"), 0A10B, 'Test 9');
test(getHint("1111", "1111"), 4A0B, 'Test 10');
test(getHint("0000", "0000"), 4A0B, 'Test 11');
test(getHint("5678901234", "1234567890"), 0A10B, 'Test 12');
test(getHint("1234", "4321"), 0A4B, 'Test 13');
test(getHint("111222333", "123123123"), 3A6B, 'Test 14');
test(getHint("1234567890", "9876543210"), 2A8B, 'Test 15');
test(getHint("1123", "0111"), 1A1B, 'Test 16');
test(getHint("1807", "7810"), 1A3B, 'Test 17');
test(getHint("2222", "1111"), 0A0B, 'Test 18');
test(getHint("0000000000", "0000000000"), 10A0B, 'Test 19');
test(getHint("1234567890", "1234567890"), 10A0B, 'Test 20');
test(getHint("0000000000", "1111111111"), 0A0B, 'Test 21');
test(getHint("12345678901234567890", "09876543210987654321"), 0A20B, 'Test 22');
test(getHint("1112223334", "4332221110"), 3A6B, 'Test 23');
test(getHint("9876543210", "0123456789"), 0A10B, 'Test 24');
test(getHint("5555555555", "5555555555"), 10A0B, 'Test 25');
test(getHint("1111111111", "1212121212"), 5A0B, 'Test 26');
test(getHint("123123", "321321"), 2A4B, 'Test 27');
test(getHint("111222", "222111"), 0A6B, 'Test 28');
test(getHint("001122", "221100"), 2A4B, 'Test 29');
test(getHint("111122223333444455556666777788889999", "999988887777666655554444333322221111"), 4A32B, 'Test 30');
test(getHint("1234123412", "1234123412"), 10A0B, 'Test 31');
test(getHint("1111111111111111", "1111111111111111"), 16A0B, 'Test 32');
test(getHint("5656565656", "6565656565"), 0A10B, 'Test 33');
test(getHint("11223344", "44332211"), 0A8B, 'Test 34');
test(getHint("888888", "888888"), 6A0B, 'Test 35');
test(getHint("0123456789", "9876543210"), 0A10B, 'Test 36');
test(getHint("1111222233334444", "4444333322221111"), 0A16B, 'Test 37');
test(getHint("12345678901234567890", "12345678900000000000"), 11A0B, 'Test 38');
test(getHint("00000000", "88888888"), 0A0B, 'Test 39');
test(getHint("12345678900000000000", "00000000001234567890"), 2A18B, 'Test 40');
test(getHint("1010101010", "1010101010"), 10A0B, 'Test 41');
test(getHint("11223344556677889900", "00998877665544332211"), 0A20B, 'Test 42');
test(getHint("12345678901234567890", "12345678901234567890"), 20A0B, 'Test 43');
test(getHint("2234567890", "0987654322"), 0A10B, 'Test 44');
test(getHint("1000000001", "0111111110"), 0A4B, 'Test 45');
test(getHint("9111111119", "9111111119"), 10A0B, 'Test 46');
test(getHint("99887766554433221100", "00112233445566778899"), 0A20B, 'Test 47');
test(getHint("1111111111", "0000000001"), 1A0B, 'Test 48');
test(getHint("1000100010", "0111011101"), 0A6B, 'Test 49');
test(getHint("11112222333344445555", "55554444333322221111"), 4A16B, 'Test 50');
test(getHint("1223344556", "1122334455"), 5A4B, 'Test 51');
test(getHint("1112223334", "4332221119"), 3A6B, 'Test 52');
test(getHint("0011001100", "1100110011"), 0A8B, 'Test 53');
test(getHint("9876543210", "9876543210"), 10A0B, 'Test 54');
test(getHint("2222222222", "2222222222"), 10A0B, 'Test 55');
test(getHint("999988887777", "888877776666"), 0A8B, 'Test 56');
test(getHint("98765432109876543210", "01234567890123456789"), 0A20B, 'Test 57');
test(getHint("1122334455", "1122334455"), 10A0B, 'Test 58');
test(getHint("1234123412", "2143214321"), 0A10B, 'Test 59');
test(getHint("12341234", "43214321"), 0A8B, 'Test 60');
test(getHint("555555", "555555"), 6A0B, 'Test 61');
test(getHint("1111111111", "1111111111"), 10A0B, 'Test 62');
test(getHint("1111111111", "2222222222"), 0A0B, 'Test 63');
test(getHint("1000000000", "0111111111"), 0A2B, 'Test 64');
test(getHint("1112223334", "1111111111"), 3A0B, 'Test 65');
test(getHint("0123012301", "1032103210"), 0A10B, 'Test 66');
test(getHint("9999999999", "9999999999"), 10A0B, 'Test 67');
test(getHint("9876543210", "1234567890"), 2A8B, 'Test 68');
test(getHint("1231231231", "3123123123"), 0A9B, 'Test 69');
test(getHint("5638472910", "1092748356"), 0A10B, 'Test 70');
test(getHint("1112223334", "4333222111"), 2A8B, 'Test 71');
test(getHint("12345678901234567890", "98765432109876543210"), 4A16B, 'Test 72');
test(getHint("1020304050", "0102030405"), 0A10B, 'Test 73');
test(getHint("5678901234", "5566778899"), 1A4B, 'Test 74');
test(getHint("101010", "010101"), 0A6B, 'Test 75');
test(getHint("1122334455", "5544332211"), 2A8B, 'Test 76');
test(getHint("1234123412", "2341234123"), 0A9B, 'Test 77');
test(getHint("33331111", "11113333"), 0A8B, 'Test 78');
test(getHint("2222222222", "1111111111"), 0A0B, 'Test 79');
test(getHint("1111111111", "1010101010"), 5A0B, 'Test 80');
test(getHint("111222333444555666777888999000", "000999888777666555444333222111"), 0A30B, 'Test 81');
test(getHint("99998888777766665555", "55554444333322221111"), 0A4B, 'Test 82');
test(getHint("0000000000", "9999999999"), 0A0B, 'Test 83');
test(getHint("1221122112", "2112211221"), 0A10B, 'Test 84');
test(getHint("5678901234", "0123456789"), 0A10B, 'Test 85');
test(getHint("04730865", "58600074"), 1A6B, 'Test 86');
test(getHint("1223344556", "1223344556"), 10A0B, 'Test 87');
test(getHint("1234567890", "5432109876"), 2A8B, 'Test 88');
test(getHint("12345678901234567890", "01234567890123456789"), 0A20B, 'Test 89');
test(getHint("0000111122223333", "3333222211110000"), 0A16B, 'Test 90');
test(getHint("1234567890", "0123456789"), 0A10B, 'Test 91');
test(getHint("000000", "000000"), 6A0B, 'Test 92');
test(getHint("111122223333", "111122223333"), 12A0B, 'Test 93');
test(getHint("111122223333", "333344445555"), 0A4B, 'Test 94');
test(getHint("25432109876543210987654321", "10987654321098765432125432"), 0A26B, 'Test 95');
test(getHint("9999999999", "8888888888"), 0A0B, 'Test 96');
test(getHint("8888888888", "8888888888"), 10A0B, 'Test 97');
test(getHint("2457", "5247"), 1A3B, 'Test 98');
test(getHint("5608055740", "5708055640"), 8A2B, 'Test 99');
test(getHint("1234555555", "5555555551"), 5A2B, 'Test 100');
test(getHint("1223344556", "6554433221"), 0A10B, 'Test 101');
test(getHint("00112233445566778899", "99887766554433221100"), 0A20B, 'Test 102');
test(getHint("1234123412", "2345234523"), 0A7B, 'Test 103');
test(getHint("122112", "211221"), 0A6B, 'Test 104');
test(getHint("112233", "332211"), 2A4B, 'Test 105');
test(getHint("1231231231", "3213213213"), 3A6B, 'Test 106');
test(getHint("1212121212", "2121212121"), 0A10B, 'Test 107');
test(getHint("1221", "1122"), 2A2B, 'Test 108');
test(getHint("123456", "654321"), 0A6B, 'Test 109');
test(getHint("000111222", "222111000"), 3A6B, 'Test 110');
test(getHint("12213312", "21123312"), 4A4B, 'Test 111');
test(getHint("8888", "8888"), 4A0B, 'Test 112');
test(getHint("999999", "123456"), 0A0B, 'Test 113');
test(getHint("9876543210", "1098765432"), 0A10B, 'Test 114');
test(getHint("9000000000", "9000000000"), 10A0B, 'Test 115');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

