// Test: 2864. Maximum Odd Binary Number
// 78 test cases from LeetCodeDataset
// Run: node test.js

const { maximumOddBinaryNumber } = require("./solution");

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

console.log("\n2864. Maximum Odd Binary Number\n");

test(maximumOddBinaryNumber("1111"), 1111, 'Test 1');
test(maximumOddBinaryNumber("101010101"), 111100001, 'Test 2');
test(maximumOddBinaryNumber("110011"), 111001, 'Test 3');
test(maximumOddBinaryNumber("111"), 111, 'Test 4');
test(maximumOddBinaryNumber("1110"), 1101, 'Test 5');
test(maximumOddBinaryNumber("0000000000000000000000000000000000000000000000000000000000000001"), 0000000000000000000000000000000000000000000000000000000000000001, 'Test 6');
test(maximumOddBinaryNumber("111000"), 110001, 'Test 7');
test(maximumOddBinaryNumber("1001001"), 1100001, 'Test 8');
test(maximumOddBinaryNumber("001010"), 100001, 'Test 9');
test(maximumOddBinaryNumber("1100"), 1001, 'Test 10');
test(maximumOddBinaryNumber("100001"), 100001, 'Test 11');
test(maximumOddBinaryNumber("010"), 001, 'Test 12');
test(maximumOddBinaryNumber("001001001"), 110000001, 'Test 13');
test(maximumOddBinaryNumber("0101"), 1001, 'Test 14');
test(maximumOddBinaryNumber("000001"), 000001, 'Test 15');
test(maximumOddBinaryNumber("10001"), 10001, 'Test 16');
test(maximumOddBinaryNumber("1100001"), 1100001, 'Test 17');
test(maximumOddBinaryNumber("11111"), 11111, 'Test 18');
test(maximumOddBinaryNumber("0101010101010101010101010101010101010101010101010101010101010101"), 1111111111111111111111111111111000000000000000000000000000000001, 'Test 19');
test(maximumOddBinaryNumber("101010"), 110001, 'Test 20');
test(maximumOddBinaryNumber("00001"), 00001, 'Test 21');
test(maximumOddBinaryNumber("1000"), 0001, 'Test 22');
test(maximumOddBinaryNumber("11100"), 11001, 'Test 23');
test(maximumOddBinaryNumber("0101010101"), 1111000001, 'Test 24');
test(maximumOddBinaryNumber("0001"), 0001, 'Test 25');
test(maximumOddBinaryNumber("11001001"), 11100001, 'Test 26');
test(maximumOddBinaryNumber("101010101010101010"), 111111110000000001, 'Test 27');
test(maximumOddBinaryNumber("01010101010101010101010101010101"), 11111111111111100000000000000001, 'Test 28');
test(maximumOddBinaryNumber("101010101010101"), 111111100000001, 'Test 29');
test(maximumOddBinaryNumber("00100100101010"), 11110000000001, 'Test 30');
test(maximumOddBinaryNumber("00000000000000000000001"), 00000000000000000000001, 'Test 31');
test(maximumOddBinaryNumber("1111000011110000"), 1111111000000001, 'Test 32');
test(maximumOddBinaryNumber("10000000000000000000000000000000000000000000000000000000000000001"), 10000000000000000000000000000000000000000000000000000000000000001, 'Test 33');
test(maximumOddBinaryNumber("1000001"), 1000001, 'Test 34');
test(maximumOddBinaryNumber("1001001001001001001001"), 1111111000000000000001, 'Test 35');
test(maximumOddBinaryNumber("00000000001"), 00000000001, 'Test 36');
test(maximumOddBinaryNumber("010011001100"), 111100000001, 'Test 37');
test(maximumOddBinaryNumber("100011100111"), 111111000001, 'Test 38');
test(maximumOddBinaryNumber("0000100010001"), 1100000000001, 'Test 39');
test(maximumOddBinaryNumber("1111000010"), 1111000001, 'Test 40');
test(maximumOddBinaryNumber("00000000000000000000000000000001"), 00000000000000000000000000000001, 'Test 41');
test(maximumOddBinaryNumber("00010010101"), 11100000001, 'Test 42');
test(maximumOddBinaryNumber("11110000"), 11100001, 'Test 43');
test(maximumOddBinaryNumber("1111111111110"), 1111111111101, 'Test 44');
test(maximumOddBinaryNumber("11010101010101010101"), 11111111110000000001, 'Test 45');
test(maximumOddBinaryNumber("00000001"), 00000001, 'Test 46');
test(maximumOddBinaryNumber("1111111111"), 1111111111, 'Test 47');
test(maximumOddBinaryNumber("010101010101"), 111110000001, 'Test 48');
test(maximumOddBinaryNumber("1010101010101010101"), 1111111110000000001, 'Test 49');
test(maximumOddBinaryNumber("000000000001"), 000000000001, 'Test 50');
test(maximumOddBinaryNumber("11111111111111110000"), 11111111111111100001, 'Test 51');
test(maximumOddBinaryNumber("11111111111111111111"), 11111111111111111111, 'Test 52');
test(maximumOddBinaryNumber("0010101010"), 1110000001, 'Test 53');
test(maximumOddBinaryNumber("11111111111111111111111111111111"), 11111111111111111111111111111111, 'Test 54');
test(maximumOddBinaryNumber("00000000000000000001"), 00000000000000000001, 'Test 55');
test(maximumOddBinaryNumber("1111111111111111"), 1111111111111111, 'Test 56');
test(maximumOddBinaryNumber("0000111111"), 1111100001, 'Test 57');
test(maximumOddBinaryNumber("111000011"), 111100001, 'Test 58');
test(maximumOddBinaryNumber("01010101010101010101"), 11111111100000000001, 'Test 59');
test(maximumOddBinaryNumber("1001101"), 1110001, 'Test 60');
test(maximumOddBinaryNumber("1100000000000000000000000000000001"), 1100000000000000000000000000000001, 'Test 61');
test(maximumOddBinaryNumber("111110000000"), 111100000001, 'Test 62');
test(maximumOddBinaryNumber("11111000000"), 11110000001, 'Test 63');
test(maximumOddBinaryNumber("10000000000"), 00000000001, 'Test 64');
test(maximumOddBinaryNumber("110100110"), 111100001, 'Test 65');
test(maximumOddBinaryNumber("1010101010"), 1111000001, 'Test 66');
test(maximumOddBinaryNumber("010101010101010101"), 111111110000000001, 'Test 67');
test(maximumOddBinaryNumber("1000000000000000000001"), 1000000000000000000001, 'Test 68');
test(maximumOddBinaryNumber("11111110000000000000000000000000"), 11111100000000000000000000000001, 'Test 69');
test(maximumOddBinaryNumber("1101001"), 1110001, 'Test 70');
test(maximumOddBinaryNumber("11001100"), 11100001, 'Test 71');
test(maximumOddBinaryNumber("1010101010101010"), 1111111000000001, 'Test 72');
test(maximumOddBinaryNumber("110000000000001"), 110000000000001, 'Test 73');
test(maximumOddBinaryNumber("1111111111111111111111"), 1111111111111111111111, 'Test 74');
test(maximumOddBinaryNumber("111000011000"), 111100000001, 'Test 75');
test(maximumOddBinaryNumber("0101010101010101010101"), 1111111111000000000001, 'Test 76');
test(maximumOddBinaryNumber("100010001"), 110000001, 'Test 77');
test(maximumOddBinaryNumber("10011001100110011001100110011001"), 11111111111111100000000000000001, 'Test 78');

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
