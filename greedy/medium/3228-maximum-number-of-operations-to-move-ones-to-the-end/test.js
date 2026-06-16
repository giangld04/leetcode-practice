// Test: 3228. Maximum Number Of Operations To Move Ones To The End
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { maxOperations } = require("./solution");

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

console.log("\n3228. Maximum Number Of Operations To Move Ones To The End\n");

test(maxOperations("00111"), 0, 'Test 1');
test(maxOperations("101100110"), 9, 'Test 2');
test(maxOperations("000111000"), 3, 'Test 3');
test(maxOperations("11110000"), 4, 'Test 4');
test(maxOperations("010101010"), 10, 'Test 5');
test(maxOperations("1001001001001"), 10, 'Test 6');
test(maxOperations("100001110"), 5, 'Test 7');
test(maxOperations("1111111111"), 0, 'Test 8');
test(maxOperations("1010101"), 6, 'Test 9');
test(maxOperations("1000000000"), 1, 'Test 10');
test(maxOperations("00001111"), 0, 'Test 11');
test(maxOperations("10001"), 1, 'Test 12');
test(maxOperations("00000000"), 0, 'Test 13');
test(maxOperations("11111"), 0, 'Test 14');
test(maxOperations("1001001001"), 6, 'Test 15');
test(maxOperations("11111111"), 0, 'Test 16');
test(maxOperations("110001101"), 6, 'Test 17');
test(maxOperations("1001101"), 4, 'Test 18');
test(maxOperations("1010101010"), 15, 'Test 19');
test(maxOperations("1100011"), 2, 'Test 20');
test(maxOperations("1100110011"), 6, 'Test 21');
test(maxOperations("101000101"), 6, 'Test 22');
test(maxOperations("1101001"), 5, 'Test 23');
test(maxOperations("101010"), 6, 'Test 24');
test(maxOperations("0101010101"), 10, 'Test 25');
test(maxOperations("110000011"), 2, 'Test 26');
test(maxOperations("00000"), 0, 'Test 27');
test(maxOperations("100010001"), 3, 'Test 28');
test(maxOperations("11010000011100000111"), 11, 'Test 29');
test(maxOperations("111111111111111111111111111111111111111111111111"), 0, 'Test 30');
test(maxOperations("11001011001011001011"), 33, 'Test 31');
test(maxOperations("00000000000000000000000000000000"), 0, 'Test 32');
test(maxOperations("110010010101001"), 20, 'Test 33');
test(maxOperations("100001000010000100001"), 10, 'Test 34');
test(maxOperations("1010101010101010101"), 45, 'Test 35');
test(maxOperations("0110011001100110011001100110011001100110011001100110011001"), 210, 'Test 36');
test(maxOperations("10010010010010010010010010010010010010010010010010"), 153, 'Test 37');
test(maxOperations("00001111000011110000"), 12, 'Test 38');
test(maxOperations("111000111000111"), 9, 'Test 39');
test(maxOperations("000111000111000111"), 9, 'Test 40');
test(maxOperations("10101010101010101010101010101010101010101010101"), 276, 'Test 41');
test(maxOperations("0000000000000000000000000000000000000000000000000001"), 0, 'Test 42');
test(maxOperations("1111111111111111111111111111111111111"), 0, 'Test 43');
test(maxOperations("1010101010101010101010101010101010101010101010101"), 300, 'Test 44');
test(maxOperations("110000000000000000000000000000000000000000000000000000000000000000"), 2, 'Test 45');
test(maxOperations("110011001100"), 12, 'Test 46');
test(maxOperations("101010101010101010101010101010101010101010101"), 253, 'Test 47');
test(maxOperations("111100001111000011110000"), 24, 'Test 48');
test(maxOperations("00011110001111000111100011110001111000111100011110"), 112, 'Test 49');
test(maxOperations("0011001100110011"), 12, 'Test 50');
test(maxOperations("000000111111"), 0, 'Test 51');
test(maxOperations("01001001001001001001001001001001001001001001001001"), 136, 'Test 52');
test(maxOperations("10101010101010101010101"), 66, 'Test 53');
test(maxOperations("000011110000111100001111000011110000"), 40, 'Test 54');
test(maxOperations("0000111100001111000011110000"), 24, 'Test 55');
test(maxOperations("0000000000000000000000000000000000000000"), 0, 'Test 56');
test(maxOperations("1001001001001001001001001001001"), 55, 'Test 57');
test(maxOperations("100000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000"), 3, 'Test 58');
test(maxOperations("01010101010101010101010101010101010101010101010101"), 300, 'Test 59');
test(maxOperations("100000000000000000000000000000000000000000000000000000000000000001"), 1, 'Test 60');
test(maxOperations("10000000000000000000000000000000000000000000000000001"), 1, 'Test 61');
test(maxOperations("1000000001000000010000000100000001"), 10, 'Test 62');
test(maxOperations("111000111000111000111000111000111000111000"), 84, 'Test 63');
test(maxOperations("00000000001111111111"), 0, 'Test 64');
test(maxOperations("10000000100000001000000010000000"), 10, 'Test 65');
test(maxOperations("00000111110000011111"), 5, 'Test 66');
test(maxOperations("111000111000111000111"), 18, 'Test 67');
test(maxOperations("1000000000000000000000000000000000000000000000000000"), 1, 'Test 68');
test(maxOperations("11111111110000000000"), 10, 'Test 69');
test(maxOperations("01010101010101010101010101010101"), 120, 'Test 70');
test(maxOperations("0101010101010101010101010101010101010101"), 190, 'Test 71');
test(maxOperations("1010101010101010101010101010"), 105, 'Test 72');
test(maxOperations("100000000000000000000000000000000000000000000000"), 1, 'Test 73');
test(maxOperations("00000000000000000000000000000000000000000000000000000000000"), 0, 'Test 74');
test(maxOperations("1111111100000000"), 8, 'Test 75');
test(maxOperations("111000111000111000111000111000111000111000111000111000111000111"), 165, 'Test 76');
test(maxOperations("11110000111100001111000011110000"), 40, 'Test 77');
test(maxOperations("1111111111111111111111111111111111111111111111111111000000000000000000000000000000000000000000000000"), 52, 'Test 78');
test(maxOperations("1101101101101101101101101101101101101101"), 182, 'Test 79');
test(maxOperations("0101010101010101"), 28, 'Test 80');
test(maxOperations("11111111111111111111111111111111"), 0, 'Test 81');
test(maxOperations("1010101010101010101010101010101010101010101010101010101010"), 435, 'Test 82');
test(maxOperations("000000000000000000000000000000000000000000000000000000000000000001"), 0, 'Test 83');
test(maxOperations("11111000001111100000111110000011111000001111100000"), 75, 'Test 84');
test(maxOperations("1001001001001001001"), 21, 'Test 85');
test(maxOperations("1001001001001001001001001001001001001001"), 91, 'Test 86');
test(maxOperations("11111110000000"), 7, 'Test 87');
test(maxOperations("100000010000001"), 3, 'Test 88');
test(maxOperations("00001111000011110000111100001111"), 24, 'Test 89');
test(maxOperations("1111111111111111111111111111111111111111"), 0, 'Test 90');
test(maxOperations("111000011100001110000111"), 18, 'Test 91');
test(maxOperations("1111000011110000"), 12, 'Test 92');
test(maxOperations("10101010101010101010101010101010"), 136, 'Test 93');
test(maxOperations("0000000011111111"), 0, 'Test 94');
test(maxOperations("1001100110011001100110011001100110011001100110011001100110"), 225, 'Test 95');
test(maxOperations("1100010010011010"), 22, 'Test 96');
test(maxOperations("0100101001010010100101001010010100101001"), 120, 'Test 97');
test(maxOperations("1100000011110000001111000000"), 18, 'Test 98');
test(maxOperations("1010101010101010101010101010101010101010"), 210, 'Test 99');
test(maxOperations("0000111100001111000011110000111100001111"), 40, 'Test 100');
test(maxOperations("01010101010101010101"), 45, 'Test 101');
test(maxOperations("010101010101010101010101010101010101010101010101010101010101010101"), 528, 'Test 102');
test(maxOperations("0000000000000000000000000000000000000"), 0, 'Test 103');
test(maxOperations("10101010101010101010"), 55, 'Test 104');
test(maxOperations("00011110000111100001111"), 12, 'Test 105');
test(maxOperations("1111111111111111111111111111111111111111111111111111111111"), 0, 'Test 106');
test(maxOperations("0000111100001111"), 4, 'Test 107');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

