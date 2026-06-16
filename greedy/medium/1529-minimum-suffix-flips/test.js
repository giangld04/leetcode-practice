// Test: 1529. Minimum Suffix Flips
// 117 test cases from LeetCodeDataset
// Run: node test.js

const { minFlips } = require("./solution");

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

console.log("\n1529. Minimum Suffix Flips\n");

test(minFlips("00000"), 0, 'Test 1');
test(minFlips("00110"), 2, 'Test 2');
test(minFlips("1100110011"), 5, 'Test 3');
test(minFlips("000111000111"), 3, 'Test 4');
test(minFlips("001100"), 2, 'Test 5');
test(minFlips("10001"), 3, 'Test 6');
test(minFlips("010101010101010101"), 17, 'Test 7');
test(minFlips("001001001"), 5, 'Test 8');
test(minFlips("1111111111"), 1, 'Test 9');
test(minFlips("0000000000"), 0, 'Test 10');
test(minFlips("01010"), 4, 'Test 11');
test(minFlips("101"), 3, 'Test 12');
test(minFlips("11001100"), 4, 'Test 13');
test(minFlips("10010"), 4, 'Test 14');
test(minFlips("11001"), 3, 'Test 15');
test(minFlips("10111"), 3, 'Test 16');
test(minFlips("001100110011"), 5, 'Test 17');
test(minFlips("111100001111"), 3, 'Test 18');
test(minFlips("11111"), 1, 'Test 19');
test(minFlips("1001010"), 6, 'Test 20');
test(minFlips("010101"), 5, 'Test 21');
test(minFlips("1001001"), 5, 'Test 22');
test(minFlips("0101010101"), 9, 'Test 23');
test(minFlips("110011"), 3, 'Test 24');
test(minFlips("111000111"), 3, 'Test 25');
test(minFlips("10101010101010101010"), 20, 'Test 26');
test(minFlips("000011110000111100001111"), 5, 'Test 27');
test(minFlips("011010101010101010101010"), 22, 'Test 28');
test(minFlips("10101010101010101010101010101010"), 32, 'Test 29');
test(minFlips("110011001100110"), 8, 'Test 30');
test(minFlips("000000000000000000000000000000000000000000000000"), 0, 'Test 31');
test(minFlips("10001000100010001000"), 10, 'Test 32');
test(minFlips("101010101010101010101010101010101010101010101010"), 48, 'Test 33');
test(minFlips("000111000111000"), 4, 'Test 34');
test(minFlips("1001001001"), 7, 'Test 35');
test(minFlips("1111111111111111111111111111111111111111111111111111111111111111"), 1, 'Test 36');
test(minFlips("01010101010101010101"), 19, 'Test 37');
test(minFlips("1001001001001001001001001001001001001001"), 27, 'Test 38');
test(minFlips("1010101010101010101010101010"), 28, 'Test 39');
test(minFlips("00000111110000011111"), 3, 'Test 40');
test(minFlips("0000000000111111111100000000001111111111"), 3, 'Test 41');
test(minFlips("11111111111111111111111111"), 1, 'Test 42');
test(minFlips("1010101010101010101010101010101010101010101010101010"), 52, 'Test 43');
test(minFlips("000000000000000000000001"), 1, 'Test 44');
test(minFlips("1100110011001100110011001100"), 14, 'Test 45');
test(minFlips("00000000000000000000000000000000000000000000000000000000000000000"), 0, 'Test 46');
test(minFlips("00000000000000000000000000"), 0, 'Test 47');
test(minFlips("00110011001100110011"), 9, 'Test 48');
test(minFlips("1111111111111111111111111111"), 1, 'Test 49');
test(minFlips("11111111111111111110"), 2, 'Test 50');
test(minFlips("11000000000000000001"), 3, 'Test 51');
test(minFlips("111111111111111111111111111111111111111111111111"), 1, 'Test 52');
test(minFlips("101010101010101010101010101010101010"), 36, 'Test 53');
test(minFlips("0101010101010101010101010101"), 27, 'Test 54');
test(minFlips("110110110110110110110110110110"), 20, 'Test 55');
test(minFlips("111100001111000011110000"), 6, 'Test 56');
test(minFlips("000111000111000111000111"), 7, 'Test 57');
test(minFlips("100110011001100110011001"), 13, 'Test 58');
test(minFlips("01010101010101010101010101010101010101"), 37, 'Test 59');
test(minFlips("000000000000000000000000000000000000"), 0, 'Test 60');
test(minFlips("10010010010010010010010010010010010010010010010010"), 34, 'Test 61');
test(minFlips("1001001001001001001001001001001001001001001001001"), 33, 'Test 62');
test(minFlips("01100110011001100110"), 10, 'Test 63');
test(minFlips("11110000111100001111"), 5, 'Test 64');
test(minFlips("111000111000111000111000"), 8, 'Test 65');
test(minFlips("11111000001111100000111110000011111000001111100000"), 10, 'Test 66');
test(minFlips("00000000000000000000000000000000000000000000000000"), 0, 'Test 67');
test(minFlips("10101010101010101010101010"), 26, 'Test 68');
test(minFlips("11001100110011001100110011"), 13, 'Test 69');
test(minFlips("00110011001100110011001100110011001100110011001100"), 24, 'Test 70');
test(minFlips("0111111111111111111111111111"), 1, 'Test 71');
test(minFlips("01010101010101010101010101"), 25, 'Test 72');
test(minFlips("11111000000000000000"), 2, 'Test 73');
test(minFlips("1000000000000000000000000000"), 2, 'Test 74');
test(minFlips("11111111111111111111111111111111111111111111"), 1, 'Test 75');
test(minFlips("00000111110000011111000001111100000111110000011111"), 9, 'Test 76');
test(minFlips("01001001001001001001001001001001"), 21, 'Test 77');
test(minFlips("11111000001111100000"), 4, 'Test 78');
test(minFlips("00000000000000000001"), 1, 'Test 79');
test(minFlips("11011011011011011011"), 13, 'Test 80');
test(minFlips("001001001001001001001001"), 15, 'Test 81');
test(minFlips("11001100110011001100110011001100110011001100110011"), 25, 'Test 82');
test(minFlips("001100110011001100110011001100110011001100110011"), 23, 'Test 83');
test(minFlips("11001100110011001100110011001100"), 16, 'Test 84');
test(minFlips("1001001001001001001001001001"), 19, 'Test 85');
test(minFlips("00001111000011110000"), 4, 'Test 86');
test(minFlips("111000111000111000111000111000111000111000111000111000111000111000"), 22, 'Test 87');
test(minFlips("111111111111111111111111111111111111"), 1, 'Test 88');
test(minFlips("0101010101010101010101010101010101010101010101010101"), 51, 'Test 89');
test(minFlips("00000000000000000000000000000000000000000000"), 0, 'Test 90');
test(minFlips("01110111011101110111"), 9, 'Test 91');
test(minFlips("0110110110"), 6, 'Test 92');
test(minFlips("00000111111111111111"), 1, 'Test 93');
test(minFlips("000111000111000111"), 5, 'Test 94');
test(minFlips("000011110000"), 2, 'Test 95');
test(minFlips("11111111111111111111111111111111111111111111111110"), 2, 'Test 96');
test(minFlips("01001001001001001001"), 13, 'Test 97');
test(minFlips("111111111111111111111110"), 2, 'Test 98');
test(minFlips("101010101010101010"), 18, 'Test 99');
test(minFlips("100101010101010101010101"), 23, 'Test 100');
test(minFlips("00000000001111111111000000000011111111110000000000"), 4, 'Test 101');
test(minFlips("010101010101010101010101010101"), 29, 'Test 102');
test(minFlips("0101010101010101010101010101010101"), 33, 'Test 103');
test(minFlips("000000000000000000000000000000"), 0, 'Test 104');
test(minFlips("01010101010101010101010101010101010101010101010101"), 49, 'Test 105');
test(minFlips("0011001100110011001100110011"), 13, 'Test 106');
test(minFlips("11001100110011001100"), 10, 'Test 107');
test(minFlips("00001111111111110000"), 2, 'Test 108');
test(minFlips("01001001001001001001001001001001001001001001001001"), 33, 'Test 109');
test(minFlips("00000000001111111111"), 1, 'Test 110');
test(minFlips("01001001001001001001001001001001001001001001"), 29, 'Test 111');
test(minFlips("01010101010101010101010101010101"), 31, 'Test 112');
test(minFlips("0000000000000000000000000000"), 0, 'Test 113');
test(minFlips("11111111110000000000"), 2, 'Test 114');
test(minFlips("110011001100110011"), 9, 'Test 115');
test(minFlips("10010010010010010010"), 14, 'Test 116');
test(minFlips("11111111111111111111"), 1, 'Test 117');

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
