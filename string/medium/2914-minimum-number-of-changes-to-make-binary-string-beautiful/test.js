// Test: 2914. Minimum Number Of Changes To Make Binary String Beautiful
// 116 test cases from LeetCodeDataset
// Run: node test.js

const { minChanges } = require("./solution");

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

console.log("\n2914. Minimum Number Of Changes To Make Binary String Beautiful\n");

test(minChanges("1111"), 0, 'Test 1');
test(minChanges("101010"), 3, 'Test 2');
test(minChanges("11001100"), 0, 'Test 3');
test(minChanges("001100"), 0, 'Test 4');
test(minChanges("10"), 1, 'Test 5');
test(minChanges("110011"), 0, 'Test 6');
test(minChanges("00110011"), 0, 'Test 7');
test(minChanges("11110000"), 0, 'Test 8');
test(minChanges("0101"), 2, 'Test 9');
test(minChanges("010101"), 3, 'Test 10');
test(minChanges("1001"), 2, 'Test 11');
test(minChanges("0000"), 0, 'Test 12');
test(minChanges("00001111"), 0, 'Test 13');
test(minChanges("111111111111111111111111"), 0, 'Test 14');
test(minChanges("000000111111000000111111"), 0, 'Test 15');
test(minChanges("110011001100110011001100"), 0, 'Test 16');
test(minChanges("1100110011001100"), 0, 'Test 17');
test(minChanges("010101010101010101010101"), 12, 'Test 18');
test(minChanges("00000000111111110000000011111111"), 0, 'Test 19');
test(minChanges("10101001010101"), 7, 'Test 20');
test(minChanges("10101010101010101010101010"), 13, 'Test 21');
test(minChanges("0000111111000011111100001111"), 0, 'Test 22');
test(minChanges("00001111000011110000"), 0, 'Test 23');
test(minChanges("101010101010101010101010"), 12, 'Test 24');
test(minChanges("1010101010"), 5, 'Test 25');
test(minChanges("0000000000000000"), 0, 'Test 26');
test(minChanges("1010100101010101"), 8, 'Test 27');
test(minChanges("1010101010101010"), 8, 'Test 28');
test(minChanges("011101110111"), 3, 'Test 29');
test(minChanges("110011001100"), 0, 'Test 30');
test(minChanges("111111000000111111000000"), 0, 'Test 31');
test(minChanges("10011001100110011001"), 10, 'Test 32');
test(minChanges("10111000111000111000"), 4, 'Test 33');
test(minChanges("0100100100100100"), 5, 'Test 34');
test(minChanges("01001001001001"), 5, 'Test 35');
test(minChanges("0011001100110011"), 0, 'Test 36');
test(minChanges("00001100001100001100"), 0, 'Test 37');
test(minChanges("000111000111"), 2, 'Test 38');
test(minChanges("110101010101"), 5, 'Test 39');
test(minChanges("111111111111"), 0, 'Test 40');
test(minChanges("0110110110110110"), 6, 'Test 41');
test(minChanges("11110000111100001111"), 0, 'Test 42');
test(minChanges("1010010101010101"), 8, 'Test 43');
test(minChanges("0101011010101010"), 8, 'Test 44');
test(minChanges("101010101010"), 6, 'Test 45');
test(minChanges("11111111111111111111"), 0, 'Test 46');
test(minChanges("000011110000"), 0, 'Test 47');
test(minChanges("1100111100000011"), 0, 'Test 48');
test(minChanges("1111111111111111"), 0, 'Test 49');
test(minChanges("110000110000"), 0, 'Test 50');
test(minChanges("01100110011001"), 7, 'Test 51');
test(minChanges("11111111000000001111111100000000"), 0, 'Test 52');
test(minChanges("11010101"), 3, 'Test 53');
test(minChanges("1111001111001111"), 0, 'Test 54');
test(minChanges("11001100110011000000"), 0, 'Test 55');
test(minChanges("0110100100110001"), 5, 'Test 56');
test(minChanges("1011001100110011"), 1, 'Test 57');
test(minChanges("11010101101010101010"), 9, 'Test 58');
test(minChanges("000000000000"), 0, 'Test 59');
test(minChanges("100000000001"), 2, 'Test 60');
test(minChanges("1001001001001001"), 6, 'Test 61');
test(minChanges("11001100110011001100"), 0, 'Test 62');
test(minChanges("11100011100011100011"), 3, 'Test 63');
test(minChanges("1010101010101010101010101010"), 14, 'Test 64');
test(minChanges("0000110000110000"), 0, 'Test 65');
test(minChanges("0000111111110000"), 0, 'Test 66');
test(minChanges("111000111000"), 2, 'Test 67');
test(minChanges("1111111100000000"), 0, 'Test 68');
test(minChanges("111100001111"), 0, 'Test 69');
test(minChanges("1100101011110000"), 2, 'Test 70');
test(minChanges("1010101001010101"), 8, 'Test 71');
test(minChanges("01100110011001100110"), 10, 'Test 72');
test(minChanges("1000100010001000100010001000"), 7, 'Test 73');
test(minChanges("010101010101"), 6, 'Test 74');
test(minChanges("11010101010101"), 6, 'Test 75');
test(minChanges("0101010101010101"), 8, 'Test 76');
test(minChanges("000000000000000000000000"), 0, 'Test 77');
test(minChanges("00000000"), 0, 'Test 78');
test(minChanges("0101010101010101010101010101"), 14, 'Test 79');
test(minChanges("11110011000011110000111100"), 0, 'Test 80');
test(minChanges("00010001000100010001"), 5, 'Test 81');
test(minChanges("01010101010110101010"), 10, 'Test 82');
test(minChanges("11001011001011"), 2, 'Test 83');
test(minChanges("1111000011111100"), 0, 'Test 84');
test(minChanges("0111011101110111011101110111"), 7, 'Test 85');
test(minChanges("100010001000"), 3, 'Test 86');
test(minChanges("00110011001100110011"), 0, 'Test 87');
test(minChanges("1110001110001110"), 3, 'Test 88');
test(minChanges("00000000000000000000"), 0, 'Test 89');
test(minChanges("1111000011110000"), 0, 'Test 90');
test(minChanges("110000111100110000111100"), 0, 'Test 91');
test(minChanges("0000000011111111"), 0, 'Test 92');
test(minChanges("0101010110101010"), 8, 'Test 93');
test(minChanges("1111000000001111"), 0, 'Test 94');
test(minChanges("1100001100001100"), 0, 'Test 95');
test(minChanges("0110011001100110"), 8, 'Test 96');
test(minChanges("1101001101001101"), 3, 'Test 97');
test(minChanges("100110011001"), 6, 'Test 98');
test(minChanges("1001100110011001"), 8, 'Test 99');
test(minChanges("001001001001"), 4, 'Test 100');
test(minChanges("01010101010101010101"), 10, 'Test 101');
test(minChanges("110000111100"), 0, 'Test 102');
test(minChanges("110110110110"), 4, 'Test 103');
test(minChanges("11111111"), 0, 'Test 104');
test(minChanges("1111000011000011"), 0, 'Test 105');
test(minChanges("01010101"), 4, 'Test 106');
test(minChanges("11111111000000001111"), 0, 'Test 107');
test(minChanges("0101101010101010"), 8, 'Test 108');
test(minChanges("10101010101010101010"), 10, 'Test 109');
test(minChanges("00000000111111110000"), 0, 'Test 110');
test(minChanges("0000001111110000"), 0, 'Test 111');
test(minChanges("1111110000001111"), 0, 'Test 112');
test(minChanges("1101010101"), 4, 'Test 113');
test(minChanges("1011101110111011"), 4, 'Test 114');
test(minChanges("001100110011"), 0, 'Test 115');
test(minChanges("0000111100001111"), 0, 'Test 116');

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
