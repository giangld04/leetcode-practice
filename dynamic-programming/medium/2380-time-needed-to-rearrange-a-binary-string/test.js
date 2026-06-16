// Test: 2380. Time Needed To Rearrange A Binary String
// 127 test cases from LeetCodeDataset
// Run: node test.js

const { secondsToRemoveOccurrences } = require("./solution");

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

console.log("\n2380. Time Needed To Rearrange A Binary String\n");

test(secondsToRemoveOccurrences("1111"), 0, 'Test 1');
test(secondsToRemoveOccurrences("00110011"), 5, 'Test 2');
test(secondsToRemoveOccurrences("0000"), 0, 'Test 3');
test(secondsToRemoveOccurrences("111000"), 0, 'Test 4');
test(secondsToRemoveOccurrences("0010110"), 4, 'Test 5');
test(secondsToRemoveOccurrences("1001001"), 4, 'Test 6');
test(secondsToRemoveOccurrences("000011110000"), 7, 'Test 7');
test(secondsToRemoveOccurrences("000111"), 5, 'Test 8');
test(secondsToRemoveOccurrences("1001001001"), 6, 'Test 9');
test(secondsToRemoveOccurrences("11111"), 0, 'Test 10');
test(secondsToRemoveOccurrences("01010101"), 4, 'Test 11');
test(secondsToRemoveOccurrences("10101010"), 3, 'Test 12');
test(secondsToRemoveOccurrences("110100110"), 4, 'Test 13');
test(secondsToRemoveOccurrences("1010101010"), 4, 'Test 14');
test(secondsToRemoveOccurrences("101010"), 2, 'Test 15');
test(secondsToRemoveOccurrences("1000000"), 0, 'Test 16');
test(secondsToRemoveOccurrences("11001100"), 3, 'Test 17');
test(secondsToRemoveOccurrences("11100"), 0, 'Test 18');
test(secondsToRemoveOccurrences("0101010101"), 5, 'Test 19');
test(secondsToRemoveOccurrences("0110101"), 4, 'Test 20');
test(secondsToRemoveOccurrences("0110011001"), 5, 'Test 21');
test(secondsToRemoveOccurrences("00000"), 0, 'Test 22');
test(secondsToRemoveOccurrences("0010010010"), 6, 'Test 23');
test(secondsToRemoveOccurrences("101010101010101010"), 8, 'Test 24');
test(secondsToRemoveOccurrences("011010101010101010100110"), 12, 'Test 25');
test(secondsToRemoveOccurrences("0010101010101010"), 8, 'Test 26');
test(secondsToRemoveOccurrences("000000000000000000000000000111111111111111111111111111111111111111111111111"), 74, 'Test 27');
test(secondsToRemoveOccurrences("01001010100101010010"), 11, 'Test 28');
test(secondsToRemoveOccurrences("11101110111011101110111011101110111011101110"), 30, 'Test 29');
test(secondsToRemoveOccurrences("00000000111111111111"), 19, 'Test 30');
test(secondsToRemoveOccurrences("1100110011001100"), 7, 'Test 31');
test(secondsToRemoveOccurrences("111011101110111011101110111011101110111011101110"), 33, 'Test 32');
test(secondsToRemoveOccurrences("000111000111000111000111000111000111"), 20, 'Test 33');
test(secondsToRemoveOccurrences("10101010101010101010101010"), 12, 'Test 34');
test(secondsToRemoveOccurrences("00000000000000001111111111111111"), 31, 'Test 35');
test(secondsToRemoveOccurrences("111000111000111"), 8, 'Test 36');
test(secondsToRemoveOccurrences("10110011001100110011"), 10, 'Test 37');
test(secondsToRemoveOccurrences("010101010101010101"), 9, 'Test 38');
test(secondsToRemoveOccurrences("0000000000000000000011111111111111111111"), 39, 'Test 39');
test(secondsToRemoveOccurrences("1100110011001100110011001100110011001100"), 19, 'Test 40');
test(secondsToRemoveOccurrences("1010101010101010"), 7, 'Test 41');
test(secondsToRemoveOccurrences("111111000000111111000000"), 11, 'Test 42');
test(secondsToRemoveOccurrences("11110000011110000111"), 11, 'Test 43');
test(secondsToRemoveOccurrences("111100001111000011110000"), 11, 'Test 44');
test(secondsToRemoveOccurrences("111111111111111111110000000000000000"), 0, 'Test 45');
test(secondsToRemoveOccurrences("0011001100110011"), 9, 'Test 46');
test(secondsToRemoveOccurrences("00000111111111"), 13, 'Test 47');
test(secondsToRemoveOccurrences("11111000001111100000"), 9, 'Test 48');
test(secondsToRemoveOccurrences("111111100000000"), 0, 'Test 49');
test(secondsToRemoveOccurrences("0000111100001111000011110000"), 15, 'Test 50');
test(secondsToRemoveOccurrences("01001000100001000001"), 15, 'Test 51');
test(secondsToRemoveOccurrences("00000101010111111"), 13, 'Test 52');
test(secondsToRemoveOccurrences("0110110110110110"), 10, 'Test 53');
test(secondsToRemoveOccurrences("01010101010101010101010101"), 13, 'Test 54');
test(secondsToRemoveOccurrences("11110000111100001111"), 11, 'Test 55');
test(secondsToRemoveOccurrences("01101101101101"), 9, 'Test 56');
test(secondsToRemoveOccurrences("000000001111111100000000"), 15, 'Test 57');
test(secondsToRemoveOccurrences("101010101010"), 5, 'Test 58');
test(secondsToRemoveOccurrences("000000011111111"), 14, 'Test 59');
test(secondsToRemoveOccurrences("110000000000001111"), 15, 'Test 60');
test(secondsToRemoveOccurrences("01001000100000001001"), 15, 'Test 61');
test(secondsToRemoveOccurrences("01010101010101010101010101010101010101010101010101"), 25, 'Test 62');
test(secondsToRemoveOccurrences("001001001001001001001001"), 16, 'Test 63');
test(secondsToRemoveOccurrences("000101010101"), 7, 'Test 64');
test(secondsToRemoveOccurrences("10010010010010"), 8, 'Test 65');
test(secondsToRemoveOccurrences("0000001111111111"), 15, 'Test 66');
test(secondsToRemoveOccurrences("00000000001111111111"), 19, 'Test 67');
test(secondsToRemoveOccurrences("000000001111111111111111"), 23, 'Test 68');
test(secondsToRemoveOccurrences("00000111110000011111"), 14, 'Test 69');
test(secondsToRemoveOccurrences("01010010101101"), 8, 'Test 70');
test(secondsToRemoveOccurrences("11101110000111000011"), 10, 'Test 71');
test(secondsToRemoveOccurrences("1001001001001001"), 10, 'Test 72');
test(secondsToRemoveOccurrences("11001100110011001100"), 9, 'Test 73');
test(secondsToRemoveOccurrences("00111100001111000011"), 11, 'Test 74');
test(secondsToRemoveOccurrences("01010101010101010101010101010101"), 16, 'Test 75');
test(secondsToRemoveOccurrences("10010010010010010010"), 12, 'Test 76');
test(secondsToRemoveOccurrences("1010101010101010101010101010"), 13, 'Test 77');
test(secondsToRemoveOccurrences("01001100110011001100"), 10, 'Test 78');
test(secondsToRemoveOccurrences("1000000000000000000000000000000000000000"), 0, 'Test 79');
test(secondsToRemoveOccurrences("111000111000"), 5, 'Test 80');
test(secondsToRemoveOccurrences("11000011110000"), 7, 'Test 81');
test(secondsToRemoveOccurrences("11111000000000"), 0, 'Test 82');
test(secondsToRemoveOccurrences("10101101010010"), 6, 'Test 83');
test(secondsToRemoveOccurrences("000000001111111111"), 17, 'Test 84');
test(secondsToRemoveOccurrences("10010101010101010101"), 10, 'Test 85');
test(secondsToRemoveOccurrences("0101010101010101"), 8, 'Test 86');
test(secondsToRemoveOccurrences("11111111111111111110"), 0, 'Test 87');
test(secondsToRemoveOccurrences("0000000000000000001"), 18, 'Test 88');
test(secondsToRemoveOccurrences("111111110000000011111111"), 15, 'Test 89');
test(secondsToRemoveOccurrences("00000111111111111111100000"), 20, 'Test 90');
test(secondsToRemoveOccurrences("0101010101010101010101010101"), 14, 'Test 91');
test(secondsToRemoveOccurrences("00010001000100010001"), 15, 'Test 92');
test(secondsToRemoveOccurrences("1111111111111111111111111111111111111111"), 0, 'Test 93');
test(secondsToRemoveOccurrences("11111100000011111100"), 11, 'Test 94');
test(secondsToRemoveOccurrences("00110011001100110011"), 11, 'Test 95');
test(secondsToRemoveOccurrences("11111111000000000000"), 0, 'Test 96');
test(secondsToRemoveOccurrences("00010010010010010010010010010010010010010010"), 29, 'Test 97');
test(secondsToRemoveOccurrences("00000111100001111000"), 12, 'Test 98');
test(secondsToRemoveOccurrences("1001001001001001001001001"), 16, 'Test 99');
test(secondsToRemoveOccurrences("01010101010101010101010101010101010101010101010101010101"), 28, 'Test 100');
test(secondsToRemoveOccurrences("00100100100100100100100100100100100100100100"), 28, 'Test 101');
test(secondsToRemoveOccurrences("01010101010101"), 7, 'Test 102');
test(secondsToRemoveOccurrences("10101010100101010101"), 10, 'Test 103');
test(secondsToRemoveOccurrences("00101010101010101010101010"), 13, 'Test 104');
test(secondsToRemoveOccurrences("000001000001000001000001000001000001"), 30, 'Test 105');
test(secondsToRemoveOccurrences("1010101010101010101010101010101010101010"), 19, 'Test 106');
test(secondsToRemoveOccurrences("1001001001001001001001001001001001001001001001001"), 32, 'Test 107');
test(secondsToRemoveOccurrences("1111000011110000111100001111"), 15, 'Test 108');
test(secondsToRemoveOccurrences("111110000011111"), 9, 'Test 109');
test(secondsToRemoveOccurrences("11111010101000000"), 3, 'Test 110');
test(secondsToRemoveOccurrences("01010101010101010101010101010101010101010101"), 22, 'Test 111');
test(secondsToRemoveOccurrences("01010101010101010101"), 10, 'Test 112');
test(secondsToRemoveOccurrences("111111110000000011111111000000001111"), 19, 'Test 113');
test(secondsToRemoveOccurrences("00011111100000111110"), 13, 'Test 114');
test(secondsToRemoveOccurrences("0000000000000000000000000000000000000001"), 39, 'Test 115');
test(secondsToRemoveOccurrences("11000011110000111100"), 11, 'Test 116');
test(secondsToRemoveOccurrences("01101101101101101101"), 13, 'Test 117');
test(secondsToRemoveOccurrences("10101010101010101010"), 9, 'Test 118');
test(secondsToRemoveOccurrences("11111111111111110000000000000000"), 0, 'Test 119');
test(secondsToRemoveOccurrences("100110011001100110011001"), 12, 'Test 120');
test(secondsToRemoveOccurrences("110110110110110110"), 10, 'Test 121');
test(secondsToRemoveOccurrences("00101010101000"), 6, 'Test 122');
test(secondsToRemoveOccurrences("11111111111111110000000000"), 0, 'Test 123');
test(secondsToRemoveOccurrences("000111000111000"), 8, 'Test 124');
test(secondsToRemoveOccurrences("001001001001001001"), 12, 'Test 125');
test(secondsToRemoveOccurrences("1000000000000001"), 14, 'Test 126');
test(secondsToRemoveOccurrences("0000111100001111"), 11, 'Test 127');

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
