// Test: 3398. Smallest Substring With Identical Characters I
// 120 test cases from LeetCodeDataset
// Run: node test.js

const { minLength } = require("./solution");

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

console.log("\n3398. Smallest Substring With Identical Characters I\n");

test(minLength("111000", 1), 3, 'Test 1');
test(minLength("11111", 2), 1, 'Test 2');
test(minLength("101010", 3), 1, 'Test 3');
test(minLength("1100110011", 3), 2, 'Test 4');
test(minLength("001100", 2), 2, 'Test 5');
test(minLength("111000111", 3), 1, 'Test 6');
test(minLength("111111", 3), 1, 'Test 7');
test(minLength("000001", 1), 2, 'Test 8');
test(minLength("11001100", 4), 1, 'Test 9');
test(minLength("1111", 1), 2, 'Test 10');
test(minLength("0101", 0), 1, 'Test 11');
test(minLength("0000", 2), 1, 'Test 12');
test(minLength("101010", 5), 1, 'Test 13');
test(minLength("0000000", 0), 7, 'Test 14');
test(minLength("111100001111", 6), 1, 'Test 15');
test(minLength("000111", 2), 1, 'Test 16');
test(minLength("111110", 2), 1, 'Test 17');
test(minLength("1100110011", 4), 2, 'Test 18');
test(minLength("110011", 4), 1, 'Test 19');
test(minLength("001100", 1), 2, 'Test 20');
test(minLength("10101010101010101010", 3), 1, 'Test 21');
test(minLength("111111111111111111111111", 7), 3, 'Test 22');
test(minLength("0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", 100), 1, 'Test 23');
test(minLength("111111111100000000001111111111", 10), 2, 'Test 24');
test(minLength("10101010101010101010101010101010", 15), 1, 'Test 25');
test(minLength("10101010101010101010101010101010101010101010", 25), 1, 'Test 26');
test(minLength("000000000000000000000000000000000000000000000000", 50), 1, 'Test 27');
test(minLength("1111111111", 5), 1, 'Test 28');
test(minLength("000000000000000000000000", 15), 1, 'Test 29');
test(minLength("1111000011110000111100001111000011110000111100001111000011110000111100001111", 30), 2, 'Test 30');
test(minLength("0000111100001111000011110000", 20), 1, 'Test 31');
test(minLength("01010101010101010101", 5), 1, 'Test 32');
test(minLength("11001100110011001100", 20), 1, 'Test 33');
test(minLength("000000000000000000000000", 10), 2, 'Test 34');
test(minLength("1110000011100000111", 8), 1, 'Test 35');
test(minLength("010010010010010010010010", 7), 2, 'Test 36');
test(minLength("111111000000111111000000111111000000111111000000", 15), 3, 'Test 37');
test(minLength("11111111111111111111", 0), 20, 'Test 38');
test(minLength("10010010010010010010", 12), 1, 'Test 39');
test(minLength("00001111000011110000", 8), 2, 'Test 40');
test(minLength("1111111111111111111111111111111111111111111111111111111111111111111111111111", 75), 1, 'Test 41');
test(minLength("000111000111000111000111000111000111000111000111", 15), 3, 'Test 42');
test(minLength("11111000001111100000", 5), 2, 'Test 43');
test(minLength("111110000011111000001111100000", 18), 1, 'Test 44');
test(minLength("01010101010101010101", 3), 1, 'Test 45');
test(minLength("0000011111", 4), 1, 'Test 46');
test(minLength("11100011100011100011", 8), 1, 'Test 47');
test(minLength("01010101010101010101010101", 12), 1, 'Test 48');
test(minLength("01010101010101010101010101010101010101010101010101010101010101010101", 30), 1, 'Test 49');
test(minLength("11111111111111111111", 8), 2, 'Test 50');
test(minLength("10101010101010101010", 10), 1, 'Test 51');
test(minLength("100100100100100100100100", 6), 2, 'Test 52');
test(minLength("11111000000001111111", 7), 2, 'Test 53');
test(minLength("100100100100100100100100100100100100100100100100100100100100100100100100100", 25), 2, 'Test 54');
test(minLength("000000000000000000000000", 30), 1, 'Test 55');
test(minLength("0101010101", 3), 1, 'Test 56');
test(minLength("01010101010101010101", 0), 1, 'Test 57');
test(minLength("00110011001100110011", 15), 1, 'Test 58');
test(minLength("0101010101010101010101010101010101010101", 20), 1, 'Test 59');
test(minLength("00000000000000000000", 5), 3, 'Test 60');
test(minLength("10101010101010101010", 7), 1, 'Test 61');
test(minLength("00001111000011110000", 5), 2, 'Test 62');
test(minLength("11111111111111111111", 15), 1, 'Test 63');
test(minLength("0011001100", 6), 1, 'Test 64');
test(minLength("010101010101010101010101010101", 15), 1, 'Test 65');
test(minLength("111111111111111111111111", 30), 1, 'Test 66');
test(minLength("00000000000000000000", 10), 1, 'Test 67');
test(minLength("11111111111111111111", 10), 1, 'Test 68');
test(minLength("00000000000000000000", 7), 2, 'Test 69');
test(minLength("111001100110011001100110011", 12), 2, 'Test 70');
test(minLength("101010101010101010101010", 1), 1, 'Test 71');
test(minLength("11110000111100001111", 10), 1, 'Test 72');
test(minLength("11100011100011100011", 9), 1, 'Test 73');
test(minLength("010101010101010101010101", 0), 1, 'Test 74');
test(minLength("1010101010101010101010", 8), 1, 'Test 75');
test(minLength("0000000000", 5), 1, 'Test 76');
test(minLength("101010101010101010101010101010", 15), 1, 'Test 77');
test(minLength("1010101010", 3), 1, 'Test 78');
test(minLength("11001100110011001100", 8), 2, 'Test 79');
test(minLength("11111111110000000000", 5), 3, 'Test 80');
test(minLength("010101010101010101010101", 10), 1, 'Test 81');
test(minLength("00000000001111111111000000000011111111", 15), 2, 'Test 82');
test(minLength("1111100000111110000011111", 10), 1, 'Test 83');
test(minLength("00001111000011110000", 10), 1, 'Test 84');
test(minLength("11111111111111111111", 5), 3, 'Test 85');
test(minLength("00011100011100011100", 9), 1, 'Test 86');
test(minLength("11110101010101010101010101010101010101010101", 12), 1, 'Test 87');
test(minLength("111111111111111111111111111111111111111111111111", 45), 1, 'Test 88');
test(minLength("01010101010101010101010101010101010101010101", 20), 1, 'Test 89');
test(minLength("01010101010101010101010101010101010101010101010101010101010101010101010101", 30), 1, 'Test 90');
test(minLength("000000000011111111110000000000", 10), 2, 'Test 91');
test(minLength("10101010101010101010", 8), 1, 'Test 92');
test(minLength("11100011100011100011", 12), 1, 'Test 93');
test(minLength("11011011011011011011", 10), 1, 'Test 94');
test(minLength("0000011111000001111100000", 10), 1, 'Test 95');
test(minLength("1110010010100101", 5), 2, 'Test 96');
test(minLength("000000000000000000", 10), 1, 'Test 97');
test(minLength("1111000011110000111100001111", 12), 2, 'Test 98');
test(minLength("001100110011001100110011", 10), 2, 'Test 99');
test(minLength("110011001100110011001100", 5), 2, 'Test 100');
test(minLength("1111000011", 5), 1, 'Test 101');
test(minLength("10101010101010101010101010101010", 18), 1, 'Test 102');
test(minLength("111110000011111", 5), 2, 'Test 103');
test(minLength("1010101010101010", 5), 1, 'Test 104');
test(minLength("1111000000", 4), 2, 'Test 105');
test(minLength("101010101010101010101010", 5), 1, 'Test 106');
test(minLength("1110000001110000011100000111000001110000011100000111000001110000011100000111", 20), 2, 'Test 107');
test(minLength("00001111000011110000111100001111000011110000", 20), 2, 'Test 108');
test(minLength("1101010101010101", 10), 1, 'Test 109');
test(minLength("1001001001001001", 7), 2, 'Test 110');
test(minLength("0110110110110110", 7), 2, 'Test 111');
test(minLength("00000000000000000000", 15), 1, 'Test 112');
test(minLength("000000000011111111110000000000", 8), 3, 'Test 113');
test(minLength("111111111111111111111111", 15), 1, 'Test 114');
test(minLength("010101010101010101010101", 15), 1, 'Test 115');
test(minLength("01010101010101010101", 10), 1, 'Test 116');
test(minLength("00000000000000000000", 20), 1, 'Test 117');
test(minLength("11110000111100001111", 12), 1, 'Test 118');
test(minLength("00001111111100001111", 6), 2, 'Test 119');
test(minLength("100000000000000000000000000000000000000000000000000", 50), 1, 'Test 120');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

