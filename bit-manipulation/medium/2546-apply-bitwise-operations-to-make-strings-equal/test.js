// Test: 2546. Apply Bitwise Operations To Make Strings Equal
// 95 test cases from LeetCodeDataset
// Run: node test.js

const { makeStringsEqual } = require("./solution");

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

console.log("\n2546. Apply Bitwise Operations To Make Strings Equal\n");

test(makeStringsEqual("1001", "1001"), true, 'Test 1');
test(makeStringsEqual("1010", "0110"), true, 'Test 2');
test(makeStringsEqual("11", "00"), false, 'Test 3');
test(makeStringsEqual("0000", "0000"), true, 'Test 4');
test(makeStringsEqual("1100", "0011"), true, 'Test 5');
test(makeStringsEqual("1101", "1101"), true, 'Test 6');
test(makeStringsEqual("1111", "1111"), true, 'Test 7');
test(makeStringsEqual("111000", "000111"), true, 'Test 8');
test(makeStringsEqual("1001", "1100"), true, 'Test 9');
test(makeStringsEqual("0101", "1010"), true, 'Test 10');
test(makeStringsEqual("101010", "010101"), true, 'Test 11');
test(makeStringsEqual("000111", "111000"), true, 'Test 12');
test(makeStringsEqual("11110000000000000000", "00001111111111111111"), true, 'Test 13');
test(makeStringsEqual("11001100110011001100", "00110011001100110011"), true, 'Test 14');
test(makeStringsEqual("111100001111", "000011110000"), true, 'Test 15');
test(makeStringsEqual("101010101010", "010101010101"), true, 'Test 16');
test(makeStringsEqual("0000000000", "1010101010"), false, 'Test 17');
test(makeStringsEqual("11111111111111111111", "11111111111111111111"), true, 'Test 18');
test(makeStringsEqual("10010010010010010010", "01101101101101101101"), true, 'Test 19');
test(makeStringsEqual("01010101010101010101", "10101010101010101010"), true, 'Test 20');
test(makeStringsEqual("0101010101", "1010101010"), true, 'Test 21');
test(makeStringsEqual("10101010101010", "01010101010101"), true, 'Test 22');
test(makeStringsEqual("0110011001", "1001100110"), true, 'Test 23');
test(makeStringsEqual("0101010101", "1010101011"), true, 'Test 24');
test(makeStringsEqual("0101010101", "0000000000"), false, 'Test 25');
test(makeStringsEqual("0000011111", "1111100000"), true, 'Test 26');
test(makeStringsEqual("111000111000", "100111100111"), true, 'Test 27');
test(makeStringsEqual("1000000001", "0111111110"), true, 'Test 28');
test(makeStringsEqual("00000000000000000000", "10101010101010101010"), false, 'Test 29');
test(makeStringsEqual("10101010101010101010101010101010", "01010101010101010101010101010101"), true, 'Test 30');
test(makeStringsEqual("110101", "011010"), true, 'Test 31');
test(makeStringsEqual("1010101010", "1111111111"), true, 'Test 32');
test(makeStringsEqual("110000110000", "001111001111"), true, 'Test 33');
test(makeStringsEqual("0000111100", "1111000011"), true, 'Test 34');
test(makeStringsEqual("1111000011", "1100110011"), true, 'Test 35');
test(makeStringsEqual("1001011011011011", "0110100100100100"), true, 'Test 36');
test(makeStringsEqual("101010101010101010", "010101010101010101"), true, 'Test 37');
test(makeStringsEqual("1000000001", "1000000001"), true, 'Test 38');
test(makeStringsEqual("10101010101010101010101010", "01010101010101010101010101"), true, 'Test 39');
test(makeStringsEqual("0000000000", "1111111111"), false, 'Test 40');
test(makeStringsEqual("1111111111", "1111111111"), true, 'Test 41');
test(makeStringsEqual("1100110011001100", "0011001100110011"), true, 'Test 42');
test(makeStringsEqual("00000000000000000000", "11111111111111111111"), false, 'Test 43');
test(makeStringsEqual("1111000011110000", "0000111100001111"), true, 'Test 44');
test(makeStringsEqual("0010101110", "1001010110"), true, 'Test 45');
test(makeStringsEqual("1111100000000000", "0000011111111111"), true, 'Test 46');
test(makeStringsEqual("11000110001100011000", "00111001110011100111"), true, 'Test 47');
test(makeStringsEqual("1001100110", "0110011001"), true, 'Test 48');
test(makeStringsEqual("10101010101010101010", "01010101010101010101"), true, 'Test 49');
test(makeStringsEqual("1111111100", "0000000011"), true, 'Test 50');
test(makeStringsEqual("1101010101", "1110110110"), true, 'Test 51');
test(makeStringsEqual("11110000111100001111", "00001111000011110000"), true, 'Test 52');
test(makeStringsEqual("1100110011", "0011001100"), true, 'Test 53');
test(makeStringsEqual("1010101010", "0101010101"), true, 'Test 54');
test(makeStringsEqual("1010010101", "0101101010"), true, 'Test 55');
test(makeStringsEqual("11111111000000001111", "11111111000000001111"), true, 'Test 56');
test(makeStringsEqual("01001000100001001000", "10110111011110110111"), true, 'Test 57');
test(makeStringsEqual("000011110000", "111100001111"), true, 'Test 58');
test(makeStringsEqual("1000001000", "0010000010"), true, 'Test 59');
test(makeStringsEqual("11100000000000000000", "11100000000000000000"), true, 'Test 60');
test(makeStringsEqual("00000000000000000000", "00000000000000000000"), true, 'Test 61');
test(makeStringsEqual("00001111", "11110000"), true, 'Test 62');
test(makeStringsEqual("1111000011", "0000111100"), true, 'Test 63');
test(makeStringsEqual("10000010000010000010", "01111101111101111101"), true, 'Test 64');
test(makeStringsEqual("1110001110", "0001110001"), true, 'Test 65');
test(makeStringsEqual("0001000100", "1110111011"), true, 'Test 66');
test(makeStringsEqual("11111111111111111111", "00000000000000000000"), false, 'Test 67');
test(makeStringsEqual("11001100110011001100", "10101010101010101010"), true, 'Test 68');
test(makeStringsEqual("00001111111111110000", "11110000000000001111"), true, 'Test 69');
test(makeStringsEqual("1111111111", "0000000000"), false, 'Test 70');
test(makeStringsEqual("0101010101", "1101101101"), true, 'Test 71');
test(makeStringsEqual("1101101101", "0010010010"), true, 'Test 72');
test(makeStringsEqual("1010101010101010", "0101010101010101"), true, 'Test 73');
test(makeStringsEqual("11001100", "00110011"), true, 'Test 74');
test(makeStringsEqual("01001000100001001000", "01001000100001001000"), true, 'Test 75');
test(makeStringsEqual("10101010", "01010101"), true, 'Test 76');
test(makeStringsEqual("1001011011", "0110100100"), true, 'Test 77');
test(makeStringsEqual("101101101101", "010010010010"), true, 'Test 78');
test(makeStringsEqual("010010", "100100"), true, 'Test 79');
test(makeStringsEqual("11110000", "00001111"), true, 'Test 80');
test(makeStringsEqual("111000111000", "111000111000"), true, 'Test 81');
test(makeStringsEqual("110011001100", "001100110011"), true, 'Test 82');
test(makeStringsEqual("000111000111", "111000111000"), true, 'Test 83');
test(makeStringsEqual("1101110111", "0010001000"), true, 'Test 84');
test(makeStringsEqual("11111111111100000000", "00000000000011111111"), true, 'Test 85');
test(makeStringsEqual("10100101001010010100", "01011010110101101011"), true, 'Test 86');
test(makeStringsEqual("10101010101010101010", "11111111111111111111"), true, 'Test 87');
test(makeStringsEqual("001100110011", "110011001100"), true, 'Test 88');
test(makeStringsEqual("1111100000", "0000011111"), true, 'Test 89');
test(makeStringsEqual("000000", "000000"), true, 'Test 90');
test(makeStringsEqual("1111110000", "0000001111"), true, 'Test 91');
test(makeStringsEqual("100010001000", "011101110111"), true, 'Test 92');
test(makeStringsEqual("1010101010", "1010101011"), true, 'Test 93');
test(makeStringsEqual("111111", "111111"), true, 'Test 94');
test(makeStringsEqual("1110001110", "1110001110"), true, 'Test 95');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

// Auto-mark DONE when all tests pass
if (!failed) {
  const path = require("path");
  const fs = require("fs");
  const dir = __dirname;
  const folder = path.basename(dir);
  if (!folder.startsWith("DONE-")) {
    const parent = path.dirname(dir);
    const newDir = path.join(parent, "DONE-" + folder);
    fs.renameSync(dir, newDir);
    const readme = path.join(newDir, "README.md");
    if (fs.existsSync(readme)) {
      let c = fs.readFileSync(readme, "utf-8");
      if (!c.includes("<!-- SOLVED -->")) {
        c = c.replace(/^(# .+)$/m, "$1 ✅\n<!-- SOLVED -->");
        fs.writeFileSync(readme, c);
      }
    }
    console.log("✅ DONE → " + "DONE-" + folder);
  }
}
