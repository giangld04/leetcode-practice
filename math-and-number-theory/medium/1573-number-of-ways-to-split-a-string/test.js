// Test: 1573. Number Of Ways To Split A String
// 84 test cases from LeetCodeDataset
// Run: node test.js

const { numWays } = require("./solution");

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

console.log("\n1573. Number Of Ways To Split A String\n");

test(numWays("101010101"), 0, 'Test 1');
test(numWays("10101010101"), 4, 'Test 2');
test(numWays("0000"), 3, 'Test 3');
test(numWays("0000000"), 15, 'Test 4');
test(numWays("010101010"), 0, 'Test 5');
test(numWays("111000"), 1, 'Test 6');
test(numWays("11111111111"), 0, 'Test 7');
test(numWays("111111"), 1, 'Test 8');
test(numWays("10101"), 4, 'Test 9');
test(numWays("001001001"), 9, 'Test 10');
test(numWays("1111111"), 0, 'Test 11');
test(numWays("1001001001"), 0, 'Test 12');
test(numWays("111000111000111"), 16, 'Test 13');
test(numWays("01010101010"), 0, 'Test 14');
test(numWays("1010101010"), 0, 'Test 15');
test(numWays("0000000000"), 36, 'Test 16');
test(numWays("1100110011"), 9, 'Test 17');
test(numWays("00000000000"), 45, 'Test 18');
test(numWays("1000000000001"), 0, 'Test 19');
test(numWays("0101010101"), 0, 'Test 20');
test(numWays("10100101010101"), 0, 'Test 21');
test(numWays("11011011011"), 0, 'Test 22');
test(numWays("111000111"), 1, 'Test 23');
test(numWays("100010001"), 16, 'Test 24');
test(numWays("1001"), 0, 'Test 25');
test(numWays("01010101010101010101010101010101"), 0, 'Test 26');
test(numWays("00000000000000000000000000000000000000000000000000"), 1176, 'Test 27');
test(numWays("1001001001001001001001"), 0, 'Test 28');
test(numWays("111000111000111000111000111"), 1, 'Test 29');
test(numWays("01010101010101010101010101010101010101010101010101010101"), 0, 'Test 30');
test(numWays("0000001110000011100000111"), 36, 'Test 31');
test(numWays("1000000010000000100000001"), 0, 'Test 32');
test(numWays("1110111011101110111011101110111"), 1, 'Test 33');
test(numWays("111111111111111111111111111111111111111111111111"), 1, 'Test 34');
test(numWays("101010101010101010101010101010101010101010101010"), 4, 'Test 35');
test(numWays("1000100010001000100010001000100010001000100010001"), 0, 'Test 36');
test(numWays("001001001001001001001001001001001001001"), 0, 'Test 37');
test(numWays("1001001001001"), 0, 'Test 38');
test(numWays("00001000010000100001000010000100001000010000100001"), 0, 'Test 39');
test(numWays("111000111000111000111000111000111000111000111"), 1, 'Test 40');
test(numWays("111111111111111111111111111111111111111111111111111"), 1, 'Test 41');
test(numWays("1001001001001001001001001001001001001001001001001"), 0, 'Test 42');
test(numWays("0010101010100"), 0, 'Test 43');
test(numWays("1111000011110000111100001111"), 0, 'Test 44');
test(numWays("10101010101010101010101010"), 0, 'Test 45');
test(numWays("101010101010101010101010101010101010101010101010101"), 0, 'Test 46');
test(numWays("1001001001001001001001001001001001001001001001001001"), 9, 'Test 47');
test(numWays("100000000000000000000000000000000000000000000000000000001"), 0, 'Test 48');
test(numWays("001001001001001001001001001001001001001001001001001001"), 9, 'Test 49');
test(numWays("1100110011001100110011"), 9, 'Test 50');
test(numWays("0000111100001111000011110000111100001111"), 0, 'Test 51');
test(numWays("0011001100110011001100110011"), 0, 'Test 52');
test(numWays("110011001100110011001100110011"), 0, 'Test 53');
test(numWays("10000000001000000001"), 90, 'Test 54');
test(numWays("110011001100110"), 0, 'Test 55');
test(numWays("100000100000100000100000100000100000"), 36, 'Test 56');
test(numWays("10101010101010101010101010101010101010101010101"), 4, 'Test 57');
test(numWays("0101010101010101010101010101"), 0, 'Test 58');
test(numWays("10001000100010001000100010001000100010001000100010001000"), 0, 'Test 59');
test(numWays("111110000011111000001111100000111110000011111"), 0, 'Test 60');
test(numWays("1100110011001100110011001100110011001100110011001100"), 0, 'Test 61');
test(numWays("000000000000000"), 91, 'Test 62');
test(numWays("101010101010101010101"), 0, 'Test 63');
test(numWays("00010001000100010001"), 0, 'Test 64');
test(numWays("100000000000100000000010000000001"), 0, 'Test 65');
test(numWays("1000000000000000000001"), 0, 'Test 66');
test(numWays("1001001001001001001001001001001001001001"), 0, 'Test 67');
test(numWays("101010101010101010101010101"), 0, 'Test 68');
test(numWays("000000000000000000000000000000000000000000000000000"), 1225, 'Test 69');
test(numWays("10100100100100100"), 9, 'Test 70');
test(numWays("0100100100100100100100100100100100100100100100100100"), 0, 'Test 71');
test(numWays("111111000000111111000000111111"), 49, 'Test 72');
test(numWays("00010001000100010001000100010001"), 0, 'Test 73');
test(numWays("0000000000000000000000"), 210, 'Test 74');
test(numWays("0000000000000000000000000"), 276, 'Test 75');
test(numWays("11011011011011011011011011011011"), 0, 'Test 76');
test(numWays("11111000001111100000111110000011111"), 0, 'Test 77');
test(numWays("111000111000111000111000"), 1, 'Test 78');
test(numWays("1000010000100001000010000100001"), 0, 'Test 79');
test(numWays("110011001100110011"), 0, 'Test 80');
test(numWays("101001010010100101001010010100101001010010100101001"), 6, 'Test 81');
test(numWays("0000000000000000000000000000"), 351, 'Test 82');
test(numWays("01001001001001"), 0, 'Test 83');
test(numWays("000000000000000000000000000000000000000000000"), 946, 'Test 84');

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
