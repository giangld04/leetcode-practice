// Test: 1758. Minimum Changes To Make Alternating Binary String
// 117 test cases from LeetCodeDataset
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

console.log("\n1758. Minimum Changes To Make Alternating Binary String\n");

test(minOperations("1111"), 2, 'Test 1');
test(minOperations("101010"), 0, 'Test 2');
test(minOperations("111000"), 2, 'Test 3');
test(minOperations("1101101101"), 4, 'Test 4');
test(minOperations("001100"), 3, 'Test 5');
test(minOperations("10"), 0, 'Test 6');
test(minOperations("110011"), 3, 'Test 7');
test(minOperations("0100"), 1, 'Test 8');
test(minOperations("0110101010"), 2, 'Test 9');
test(minOperations("010101"), 0, 'Test 10');
test(minOperations("0000"), 2, 'Test 11');
test(minOperations("000111"), 2, 'Test 12');
test(minOperations("101010101010101010"), 0, 'Test 13');
test(minOperations("1100110011001100110011001100110011"), 17, 'Test 14');
test(minOperations("01010101010101010"), 0, 'Test 15');
test(minOperations("1111111111111111111111111111111111111111111111111111111111111"), 30, 'Test 16');
test(minOperations("10101101010110101010"), 7, 'Test 17');
test(minOperations("00000000000000000000000000000000"), 16, 'Test 18');
test(minOperations("111110000111110000111110000111110000111110000111110000"), 27, 'Test 19');
test(minOperations("1100110011001100"), 8, 'Test 20');
test(minOperations("010101010101010101010101"), 0, 'Test 21');
test(minOperations("111000111000111"), 5, 'Test 22');
test(minOperations("0110101010101010"), 2, 'Test 23');
test(minOperations("101010101010101010101010"), 0, 'Test 24');
test(minOperations("1010101010101001"), 2, 'Test 25');
test(minOperations("101010101010101010101"), 0, 'Test 26');
test(minOperations("1000111010010101"), 8, 'Test 27');
test(minOperations("0000000000"), 5, 'Test 28');
test(minOperations("1100110011"), 5, 'Test 29');
test(minOperations("111000111000111000111000111000"), 10, 'Test 30');
test(minOperations("11110000000000001111"), 10, 'Test 31');
test(minOperations("0000000000000000"), 8, 'Test 32');
test(minOperations("11001100110011001100110011001100"), 16, 'Test 33');
test(minOperations("1010101010101010"), 0, 'Test 34');
test(minOperations("110011001100"), 6, 'Test 35');
test(minOperations("110011001100110011"), 9, 'Test 36');
test(minOperations("010101010110"), 2, 'Test 37');
test(minOperations("0011001100110011"), 8, 'Test 38');
test(minOperations("000001111000001111000011110000111100001111000011110000"), 27, 'Test 39');
test(minOperations("1010100101010101010101010101010101"), 6, 'Test 40');
test(minOperations("11111000001111100000"), 8, 'Test 41');
test(minOperations("0101010101010101010101010101010101"), 0, 'Test 42');
test(minOperations("100100100100100100100100"), 12, 'Test 43');
test(minOperations("00110011001100110011001100110011"), 16, 'Test 44');
test(minOperations("0110110110110110"), 8, 'Test 45');
test(minOperations("10110101010101010101"), 3, 'Test 46');
test(minOperations("1010010101010101"), 4, 'Test 47');
test(minOperations("0101011010101010"), 6, 'Test 48');
test(minOperations("010101010101010101010101010101010101010101010101"), 0, 'Test 49');
test(minOperations("0011001100110"), 6, 'Test 50');
test(minOperations("11111111111111111111"), 10, 'Test 51');
test(minOperations("1001001001001001001001001001001001001001001001001001"), 26, 'Test 52');
test(minOperations("00001111111111110000"), 10, 'Test 53');
test(minOperations("1111111111111111"), 8, 'Test 54');
test(minOperations("01010101010"), 0, 'Test 55');
test(minOperations("111000111000111000111000111000111000111000111000111000111"), 19, 'Test 56');
test(minOperations("001100110011"), 6, 'Test 57');
test(minOperations("11010011"), 3, 'Test 58');
test(minOperations("00011100011100011100011100011100"), 11, 'Test 59');
test(minOperations("011011011011011011011011"), 12, 'Test 60');
test(minOperations("00000111110000011111"), 8, 'Test 61');
test(minOperations("111000111000111000111"), 7, 'Test 62');
test(minOperations("11001100110011001100"), 10, 'Test 63');
test(minOperations("01010101010101010101010101010101"), 0, 'Test 64');
test(minOperations("10010010010010010010"), 9, 'Test 65');
test(minOperations("1010101010101010101010101010"), 0, 'Test 66');
test(minOperations("1110000111000011"), 8, 'Test 67');
test(minOperations("01110111011101110111"), 5, 'Test 68');
test(minOperations("111100001111"), 6, 'Test 69');
test(minOperations("1101101101101101"), 7, 'Test 70');
test(minOperations("01100110011001100110"), 10, 'Test 71');
test(minOperations("00110011001100"), 7, 'Test 72');
test(minOperations("010101010101"), 0, 'Test 73');
test(minOperations("1111111111111111111111111111"), 14, 'Test 74');
test(minOperations("0101010101010101"), 0, 'Test 75');
test(minOperations("0001110001"), 3, 'Test 76');
test(minOperations("11111111111111111111111111111111"), 16, 'Test 77');
test(minOperations("00000000"), 4, 'Test 78');
test(minOperations("0101010101010101010101010101010101010101010101010101010101010101"), 0, 'Test 79');
test(minOperations("01100110011001100110011001100110011"), 17, 'Test 80');
test(minOperations("0101010101"), 0, 'Test 81');
test(minOperations("1001001001001001001001001001001001"), 17, 'Test 82');
test(minOperations("00001111000011110000111100001111"), 16, 'Test 83');
test(minOperations("10101010101010101"), 0, 'Test 84');
test(minOperations("111000111"), 3, 'Test 85');
test(minOperations("000000000000000000000000000000000000000000000000000000000000"), 30, 'Test 86');
test(minOperations("0111000111000111"), 5, 'Test 87');
test(minOperations("0001111000111100"), 8, 'Test 88');
test(minOperations("1010101010101"), 0, 'Test 89');
test(minOperations("00000000000000000000"), 10, 'Test 90');
test(minOperations("1111000011110000"), 8, 'Test 91');
test(minOperations("10101010101010101010101010101010"), 0, 'Test 92');
test(minOperations("01010101010101010101010101010101010101010101010101010101"), 0, 'Test 93');
test(minOperations("010010010010"), 6, 'Test 94');
test(minOperations("0111000101101010"), 8, 'Test 95');
test(minOperations("0110110110110"), 6, 'Test 96');
test(minOperations("01010101010101"), 0, 'Test 97');
test(minOperations("001100110011001100110"), 10, 'Test 98');
test(minOperations("1001001001001"), 6, 'Test 99');
test(minOperations("010101010101010101010"), 0, 'Test 100');
test(minOperations("1111111111"), 5, 'Test 101');
test(minOperations("0110011001100110"), 8, 'Test 102');
test(minOperations("1100110011001100110011001100110011001100110011001100110011001100"), 32, 'Test 103');
test(minOperations("1001100110011001"), 8, 'Test 104');
test(minOperations("01010101010101010101"), 0, 'Test 105');
test(minOperations("11111111"), 4, 'Test 106');
test(minOperations("1101001100"), 4, 'Test 107');
test(minOperations("0001110001110001110001"), 7, 'Test 108');
test(minOperations("110000111100001111000011110000"), 15, 'Test 109');
test(minOperations("01101101101101101101"), 9, 'Test 110');
test(minOperations("10101010101010101010"), 0, 'Test 111');
test(minOperations("01010010101001010101"), 7, 'Test 112');
test(minOperations("1101010101"), 1, 'Test 113');
test(minOperations("111000111000111000111000"), 8, 'Test 114');
test(minOperations("0000000000000000000000000000"), 14, 'Test 115');
test(minOperations("000111000111000"), 5, 'Test 116');
test(minOperations("0000111100001111"), 8, 'Test 117');

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
