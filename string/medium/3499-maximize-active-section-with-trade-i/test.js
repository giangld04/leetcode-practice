// Test: 3499. Maximize Active Section With Trade I
// 88 test cases from LeetCodeDataset
// Run: node test.js

const { maxActiveSectionsAfterTrade } = require("./solution");

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

console.log("\n3499. Maximize Active Section With Trade I\n");

test(maxActiveSectionsAfterTrade("01010"), 4, 'Test 1');
test(maxActiveSectionsAfterTrade("1000100"), 7, 'Test 2');
test(maxActiveSectionsAfterTrade("010101010"), 6, 'Test 3');
test(maxActiveSectionsAfterTrade("1001001001"), 8, 'Test 4');
test(maxActiveSectionsAfterTrade("11111"), 5, 'Test 5');
test(maxActiveSectionsAfterTrade("0011001100"), 8, 'Test 6');
test(maxActiveSectionsAfterTrade("1100110011"), 10, 'Test 7');
test(maxActiveSectionsAfterTrade("000"), 0, 'Test 8');
test(maxActiveSectionsAfterTrade("0101010101"), 7, 'Test 9');
test(maxActiveSectionsAfterTrade("01"), 1, 'Test 10');
test(maxActiveSectionsAfterTrade("101010101"), 7, 'Test 11');
test(maxActiveSectionsAfterTrade("10101010101"), 8, 'Test 12');
test(maxActiveSectionsAfterTrade("0100"), 4, 'Test 13');
test(maxActiveSectionsAfterTrade("00000"), 0, 'Test 14');
test(maxActiveSectionsAfterTrade("01001001001"), 8, 'Test 15');
test(maxActiveSectionsAfterTrade("111"), 3, 'Test 16');
test(maxActiveSectionsAfterTrade("001100110011001100110011001100110011001100110011"), 28, 'Test 17');
test(maxActiveSectionsAfterTrade("000000000000000000000"), 0, 'Test 18');
test(maxActiveSectionsAfterTrade("000000111111000000111111000000111111000000111111"), 36, 'Test 19');
test(maxActiveSectionsAfterTrade("100000100000100000100000100000100000100000100000"), 18, 'Test 20');
test(maxActiveSectionsAfterTrade("0011001100110011001100110011001100110011001100110011001100110011"), 36, 'Test 21');
test(maxActiveSectionsAfterTrade("11001100110011001100110011001100110011001100110011001100110011001100"), 38, 'Test 22');
test(maxActiveSectionsAfterTrade("1111100000111110000011111000001111100000111110000011111000001111100000"), 45, 'Test 23');
test(maxActiveSectionsAfterTrade("00011001100110011001100110011001100110011001100110011001100110011001100"), 39, 'Test 24');
test(maxActiveSectionsAfterTrade("0100100100100100100100100100100100100100100100100100100100100100100100100"), 28, 'Test 25');
test(maxActiveSectionsAfterTrade("100100100100100100100100100100100100100100100100100100100100100100100100"), 28, 'Test 26');
test(maxActiveSectionsAfterTrade("01010101010101010101010101010101010101010101010101010101"), 30, 'Test 27');
test(maxActiveSectionsAfterTrade("11100111001110011100111"), 19, 'Test 28');
test(maxActiveSectionsAfterTrade("10101010101010101010101010101010101010101010"), 24, 'Test 29');
test(maxActiveSectionsAfterTrade("10101010101010101010101010101010101010101010101010101010101"), 32, 'Test 30');
test(maxActiveSectionsAfterTrade("001001001001001001001001001001001001001001001001001001001001001"), 25, 'Test 31');
test(maxActiveSectionsAfterTrade("111111111111111111111111111111111111111111111111"), 48, 'Test 32');
test(maxActiveSectionsAfterTrade("11111111111111111111111111111111111111111111111111111111"), 56, 'Test 33');
test(maxActiveSectionsAfterTrade("111000100110011001100110011001100110011001100110"), 29, 'Test 34');
test(maxActiveSectionsAfterTrade("101010101010101010101010101010101010101010101010"), 26, 'Test 35');
test(maxActiveSectionsAfterTrade("000111000111000111000111000111000111000111000111000111000"), 33, 'Test 36');
test(maxActiveSectionsAfterTrade("1111111111111111111111111111111111111111111111111111111111110"), 60, 'Test 37');
test(maxActiveSectionsAfterTrade("1000001000001000001000001"), 15, 'Test 38');
test(maxActiveSectionsAfterTrade("111000111000111000111000111000111000111000111000111000111000111"), 39, 'Test 39');
test(maxActiveSectionsAfterTrade("010101010101010101010"), 12, 'Test 40');
test(maxActiveSectionsAfterTrade("1000100010001000100010001000100010001000100010001"), 19, 'Test 41');
test(maxActiveSectionsAfterTrade("010100101001010010100101001"), 14, 'Test 42');
test(maxActiveSectionsAfterTrade("0101010101010101010101010101010101010101010101010101010101"), 31, 'Test 43');
test(maxActiveSectionsAfterTrade("010101010101010101010101010101010101010101010101"), 26, 'Test 44');
test(maxActiveSectionsAfterTrade("000000000000000000000000000000000000000000000001"), 1, 'Test 45');
test(maxActiveSectionsAfterTrade("111000111000111000111000111000111000111000111000111000111000111000"), 39, 'Test 46');
test(maxActiveSectionsAfterTrade("010101010101010101010101010101010101010101010101010101010101010101010101"), 38, 'Test 47');
test(maxActiveSectionsAfterTrade("11010001110110000100110110001001110110011011000110110"), 33, 'Test 48');
test(maxActiveSectionsAfterTrade("01110111011101110111011101110111011101110111011101110111"), 44, 'Test 49');
test(maxActiveSectionsAfterTrade("1111000011110000111100001111"), 24, 'Test 50');
test(maxActiveSectionsAfterTrade("000111000111000111000111000111000111"), 24, 'Test 51');
test(maxActiveSectionsAfterTrade("1000001000001000001000001000001000001000001000001"), 19, 'Test 52');
test(maxActiveSectionsAfterTrade("11110000111100001111000011110000111100001111000011110000111100001111"), 44, 'Test 53');
test(maxActiveSectionsAfterTrade("0000011111000001111100000111110000011111000001111100000111110000011111"), 45, 'Test 54');
test(maxActiveSectionsAfterTrade("001001001001001001001001001001001001001001001001001001"), 22, 'Test 55');
test(maxActiveSectionsAfterTrade("01001001001001001001001001001001001001001001001001001001001001"), 25, 'Test 56');
test(maxActiveSectionsAfterTrade("111111111111111111111111111111111111111111111110"), 47, 'Test 57');
test(maxActiveSectionsAfterTrade("10000010001000001000001000001000001000001000001000001000001"), 21, 'Test 58');
test(maxActiveSectionsAfterTrade("00111000111000111000111000111000111000111000111000111000111000111000"), 39, 'Test 59');
test(maxActiveSectionsAfterTrade("110001100011000110001100011000110001100011000110001100011000110001100011"), 36, 'Test 60');
test(maxActiveSectionsAfterTrade("1000000000000000000000000000000000000000000000000000000000001"), 2, 'Test 61');
test(maxActiveSectionsAfterTrade("0101010101010101010101010101010101010101010101010101010101010101"), 34, 'Test 62');
test(maxActiveSectionsAfterTrade("01010101010101010101010101010101010101010101"), 24, 'Test 63');
test(maxActiveSectionsAfterTrade("011001100110011001100110011001100110011001100110"), 28, 'Test 64');
test(maxActiveSectionsAfterTrade("110000010001001000010000001"), 17, 'Test 65');
test(maxActiveSectionsAfterTrade("1001001001001001001001001001001001001001001001001001001001001001001"), 27, 'Test 66');
test(maxActiveSectionsAfterTrade("11111110000011111100000000011111111111111100000011111111"), 51, 'Test 67');
test(maxActiveSectionsAfterTrade("01000100010001000100010001000100010001"), 16, 'Test 68');
test(maxActiveSectionsAfterTrade("11111111111111111111111111111111111111111111111111111111111111111111111"), 71, 'Test 69');
test(maxActiveSectionsAfterTrade("111000111000111000111000111000111000111000111000111000111"), 36, 'Test 70');
test(maxActiveSectionsAfterTrade("110011001100110011001100110011001100110011001100"), 28, 'Test 71');
test(maxActiveSectionsAfterTrade("00001111000011110000111100001111000011110000111100001111000011110000"), 40, 'Test 72');
test(maxActiveSectionsAfterTrade("101010101010101010101"), 13, 'Test 73');
test(maxActiveSectionsAfterTrade("111111000000111111000000111111000000111111"), 36, 'Test 74');
test(maxActiveSectionsAfterTrade("111111111111111111111"), 21, 'Test 75');
test(maxActiveSectionsAfterTrade("01100110011001100110011001100110011001100110011001100110011001100"), 36, 'Test 76');
test(maxActiveSectionsAfterTrade("00100000100000100000100000100"), 15, 'Test 77');
test(maxActiveSectionsAfterTrade("0011001100110011001100110011001100110011001100110011001100110011001100"), 38, 'Test 78');
test(maxActiveSectionsAfterTrade("00100100100100100100100100100100100100100100100100100100100100100"), 25, 'Test 79');
test(maxActiveSectionsAfterTrade("1010101010101010101010101010101010101010101010101010101010101010"), 34, 'Test 80');
test(maxActiveSectionsAfterTrade("00000000000000000000000000000000000000000000000000000000"), 0, 'Test 81');
test(maxActiveSectionsAfterTrade("111111111111111111111111111111111111111111111111111111"), 54, 'Test 82');
test(maxActiveSectionsAfterTrade("00001111000011110000111100001111"), 24, 'Test 83');
test(maxActiveSectionsAfterTrade("101010101010101010101010101010101010101010101010101010101010101010101010"), 38, 'Test 84');
test(maxActiveSectionsAfterTrade("11001100110011001100110011001100110011"), 24, 'Test 85');
test(maxActiveSectionsAfterTrade("000000000000000000000000000000000000000000000000"), 0, 'Test 86');
test(maxActiveSectionsAfterTrade("0000000000000000000000000000000000000000000000000000000000000000000000"), 0, 'Test 87');
test(maxActiveSectionsAfterTrade("111000111000111000111"), 18, 'Test 88');

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
