// Test: 2896. Apply Operations To Make Two Strings Equal
// 113 test cases from LeetCodeDataset
// Run: node test.js

const { minOperations } = require("./solution");

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

console.log("\n2896. Apply Operations To Make Two Strings Equal\n");

test(minOperations("101010", "010101", 1), 3, 'Test 1');
test(minOperations("1111", "1111", 3), 0, 'Test 2');
test(minOperations("101010", "010101", 5), 3, 'Test 3');
test(minOperations("1111", "1111", 5), 0, 'Test 4');
test(minOperations("1111", "1111", 10), 0, 'Test 5');
test(minOperations("001100", "110011", 3), 3, 'Test 6');
test(minOperations("101010", "010101", 3), 3, 'Test 7');
test(minOperations("1100011000", "0101001010", 2), 4, 'Test 8');
test(minOperations("0000", "1111", 1), 2, 'Test 9');
test(minOperations("0000", "1111", 5), 2, 'Test 10');
test(minOperations("10110", "00011", 4), -1, 'Test 11');
test(minOperations("110100001111001011010101010101010101010101", "001011110001010100101010101010101010101010", 8), 22, 'Test 12');
test(minOperations("01010101010101", "10101010101010", 1), 7, 'Test 13');
test(minOperations("00000000000000", "11111111111111", 1), 7, 'Test 14');
test(minOperations("1010101010101010101010", "1101101101101101101101", 7), 12, 'Test 15');
test(minOperations("000000000000", "111111111111", 10), 6, 'Test 16');
test(minOperations("000000000000000000000000000000000000", "111111111111111111111111111111111111", 20), 18, 'Test 17');
test(minOperations("110011001100", "001100110011", 7), 6, 'Test 18');
test(minOperations("111000111000111", "000111000111000", 15), -1, 'Test 19');
test(minOperations("101010101010", "010101010101", 7), 6, 'Test 20');
test(minOperations("11001100110011", "00110011001100", 10), 7, 'Test 21');
test(minOperations("0000000000000000000000", "1111111111111111111111", 20), 11, 'Test 22');
test(minOperations("110011001100", "001100110011", 6), 6, 'Test 23');
test(minOperations("1111000011", "0000111100", 4), 5, 'Test 24');
test(minOperations("1001001001001001", "0110110110110110", 15), 8, 'Test 25');
test(minOperations("111000111000", "000111000111", 6), 6, 'Test 26');
test(minOperations("000000000000", "111111111111", 100), 6, 'Test 27');
test(minOperations("1111000011110000", "0000111100001111", 3), 8, 'Test 28');
test(minOperations("01010101010", "10101010101", 10), -1, 'Test 29');
test(minOperations("111000000111", "000111111000", 3), 6, 'Test 30');
test(minOperations("101010101010", "010101010101", 4), 6, 'Test 31');
test(minOperations("100110011001", "011001100110", 7), 6, 'Test 32');
test(minOperations("111100001111", "000011110000", 3), 6, 'Test 33');
test(minOperations("10101010101010101010101010101010", "01010101010101010101010101010101", 5), 16, 'Test 34');
test(minOperations("1100101010101010", "0110010101010101", 5), 8, 'Test 35');
test(minOperations("10010010010010010010010010010010", "01101101101101101101101101101101", 3), 16, 'Test 36');
test(minOperations("100010001000", "011101110111", 20), 6, 'Test 37');
test(minOperations("111000111000", "000111000111", 8), 6, 'Test 38');
test(minOperations("0011001100", "1100110011", 2), 5, 'Test 39');
test(minOperations("010101010101010101010101", "101010101010101010101010", 1), 12, 'Test 40');
test(minOperations("1010101010101010101010", "0101010101010101010101", 4), 11, 'Test 41');
test(minOperations("0110011001", "1001100110", 7), 5, 'Test 42');
test(minOperations("101010101010", "101010101010", 7), 0, 'Test 43');
test(minOperations("10101010101010", "01010101010101", 5), 7, 'Test 44');
test(minOperations("0000000000", "1111111111", 10), 5, 'Test 45');
test(minOperations("101010101010", "101010101010", 10), 0, 'Test 46');
test(minOperations("111111111111", "000000000000", 1), 6, 'Test 47');
test(minOperations("101010101010", "010101010101", 1), 6, 'Test 48');
test(minOperations("110101010101", "001010101010", 10), 6, 'Test 49');
test(minOperations("101010101010", "110011001100", 8), 3, 'Test 50');
test(minOperations("111000001110", "111111111111", 6), 6, 'Test 51');
test(minOperations("11110000111100001111", "00001111000011110000", 10), 10, 'Test 52');
test(minOperations("1001100110", "1100110011", 2), -1, 'Test 53');
test(minOperations("010101010101", "101010101010", 10), 6, 'Test 54');
test(minOperations("10101010101010", "01010101010101", 4), 7, 'Test 55');
test(minOperations("0000000000000000000000", "0000000000000000000000", 8), 0, 'Test 56');
test(minOperations("11110000", "00001111", 3), 4, 'Test 57');
test(minOperations("101010101010", "101010101010", 1), 0, 'Test 58');
test(minOperations("0000000000", "1111111111", 15), 5, 'Test 59');
test(minOperations("1100110011", "0011001100", 10), 5, 'Test 60');
test(minOperations("1111000011110000", "0000111100001111", 8), 8, 'Test 61');
test(minOperations("111011101110", "000100010001", 4), 6, 'Test 62');
test(minOperations("11111111111111", "11111111111111", 100), 0, 'Test 63');
test(minOperations("000000000000000000000000000000", "111111111111111111111111111111", 50), 15, 'Test 64');
test(minOperations("110110110110", "111001100111", 2), 4, 'Test 65');
test(minOperations("111000111", "111111111", 1), -1, 'Test 66');
test(minOperations("0101010101", "1100110011", 2), -1, 'Test 67');
test(minOperations("0101010101010101010101010101010101010101", "1010101010101010101010101010101010101010", 4), 20, 'Test 68');
test(minOperations("01010101010101010101", "10101010101010101010", 3), 10, 'Test 69');
test(minOperations("1001100110", "0110011001", 3), 5, 'Test 70');
test(minOperations("1111111111", "0000000000", 3), 5, 'Test 71');
test(minOperations("1100110011", "0011001100", 5), 5, 'Test 72');
test(minOperations("110110110110110110", "001001001001001001", 6), 9, 'Test 73');
test(minOperations("1111111111111111111111", "1111111111111111111111", 2), 0, 'Test 74');
test(minOperations("111000111000", "000111000111", 3), 6, 'Test 75');
test(minOperations("01010101010101", "10101010101010", 8), 7, 'Test 76');
test(minOperations("1001001001", "0110110110", 6), 5, 'Test 77');
test(minOperations("0101010101", "1010101010", 10), 5, 'Test 78');
test(minOperations("1101101101", "1010101010", 5), 6, 'Test 79');
test(minOperations("010101010101", "101010101010", 2), 6, 'Test 80');
test(minOperations("111000111000", "000111000111", 7), 6, 'Test 81');
test(minOperations("1100110011001100", "0011001100110011", 9), 8, 'Test 82');
test(minOperations("1101010101", "0110101010", 5), -1, 'Test 83');
test(minOperations("110000110000", "001111001111", 4), 6, 'Test 84');
test(minOperations("1100110011", "0011001100", 8), 5, 'Test 85');
test(minOperations("111111111111", "000000000000", 2), 6, 'Test 86');
test(minOperations("100010001000", "011101110111", 4), 6, 'Test 87');
test(minOperations("10101010101010", "01010101010101", 8), 7, 'Test 88');
test(minOperations("10101010101010", "11001100110011", 6), -1, 'Test 89');
test(minOperations("11010101010101010101", "00101010101010101010", 2), 10, 'Test 90');
test(minOperations("110011001100110011001100", "001100110011001100110011", 9), 12, 'Test 91');
test(minOperations("111000111000", "000111000111", 10), 6, 'Test 92');
test(minOperations("10101010101010", "01010101010101", 15), 7, 'Test 93');
test(minOperations("1001001001", "1110111011", 5), 5, 'Test 94');
test(minOperations("111111000000", "000000111111", 2), 6, 'Test 95');
test(minOperations("110011001100110011001100110011001100", "110011001100110011001100110011001100", 15), 0, 'Test 96');
test(minOperations("110001100011", "001110011100", 2), 6, 'Test 97');
test(minOperations("100100100100", "011001100110", 1), 3, 'Test 98');
test(minOperations("110011001100", "001100110011", 5), 6, 'Test 99');
test(minOperations("1001010010", "0110101101", 5), 5, 'Test 100');
test(minOperations("111111111111", "000000000000", 3), 6, 'Test 101');
test(minOperations("111000111000111", "000111000111000", 1), -1, 'Test 102');
test(minOperations("110111011101", "001000100010", 6), 6, 'Test 103');
test(minOperations("11110000", "00001111", 1), 4, 'Test 104');
test(minOperations("011001100110", "100110011001", 9), 6, 'Test 105');
test(minOperations("11111111111111111111111111111111", "11111111111111111111111111111111", 7), 0, 'Test 106');
test(minOperations("10101010101010101010101010101010", "01010101010101010101010101010101", 10), 16, 'Test 107');
test(minOperations("1100101100", "0011010011", 5), 5, 'Test 108');
test(minOperations("000000000000", "111111111111", 1), 6, 'Test 109');
test(minOperations("100100100100", "100100100100", 7), 0, 'Test 110');
test(minOperations("111000111", "111111111", 5), -1, 'Test 111');
test(minOperations("1001010101", "0110101010", 5), 5, 'Test 112');
test(minOperations("110110110110", "001001001001", 2), 6, 'Test 113');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

