// Test: 1987. Number Of Unique Good Subsequences
// 90 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfUniqueGoodSubsequences } = require("./solution");

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

console.log("\n1987. Number Of Unique Good Subsequences\n");

test(numberOfUniqueGoodSubsequences("101"), 5, 'Test 1');
test(numberOfUniqueGoodSubsequences("1111"), 4, 'Test 2');
test(numberOfUniqueGoodSubsequences("1"), 1, 'Test 3');
test(numberOfUniqueGoodSubsequences("010101"), 13, 'Test 4');
test(numberOfUniqueGoodSubsequences("111000111"), 43, 'Test 5');
test(numberOfUniqueGoodSubsequences("10000100001"), 64, 'Test 6');
test(numberOfUniqueGoodSubsequences("1001001"), 26, 'Test 7');
test(numberOfUniqueGoodSubsequences("1010101010"), 144, 'Test 8');
test(numberOfUniqueGoodSubsequences("00000"), 1, 'Test 9');
test(numberOfUniqueGoodSubsequences("000000"), 1, 'Test 10');
test(numberOfUniqueGoodSubsequences("0000000000"), 1, 'Test 11');
test(numberOfUniqueGoodSubsequences("000"), 1, 'Test 12');
test(numberOfUniqueGoodSubsequences("001"), 2, 'Test 13');
test(numberOfUniqueGoodSubsequences("11"), 2, 'Test 14');
test(numberOfUniqueGoodSubsequences("0101010101"), 89, 'Test 15');
test(numberOfUniqueGoodSubsequences("1100110011"), 99, 'Test 16');
test(numberOfUniqueGoodSubsequences("0101010"), 21, 'Test 17');
test(numberOfUniqueGoodSubsequences("0"), 1, 'Test 18');
test(numberOfUniqueGoodSubsequences("111111"), 6, 'Test 19');
test(numberOfUniqueGoodSubsequences("100101010"), 76, 'Test 20');
test(numberOfUniqueGoodSubsequences("1000000000000000000000000000000000000000000000000000000000000001"), 127, 'Test 21');
test(numberOfUniqueGoodSubsequences("1101"), 8, 'Test 22');
test(numberOfUniqueGoodSubsequences("1001010"), 29, 'Test 23');
test(numberOfUniqueGoodSubsequences("01010101"), 34, 'Test 24');
test(numberOfUniqueGoodSubsequences("11010"), 13, 'Test 25');
test(numberOfUniqueGoodSubsequences("11111"), 5, 'Test 26');
test(numberOfUniqueGoodSubsequences("1111111111"), 10, 'Test 27');
test(numberOfUniqueGoodSubsequences("00000000000000000000000000000000000000000001"), 2, 'Test 28');
test(numberOfUniqueGoodSubsequences("11011011011011011011"), 7953, 'Test 29');
test(numberOfUniqueGoodSubsequences("10000000000000000001"), 39, 'Test 30');
test(numberOfUniqueGoodSubsequences("010101010101010101010101"), 75025, 'Test 31');
test(numberOfUniqueGoodSubsequences("11111111111111111111111111111111111111111110"), 87, 'Test 32');
test(numberOfUniqueGoodSubsequences("100000000000000000000000"), 25, 'Test 33');
test(numberOfUniqueGoodSubsequences("101010101010101010101010101010101010101010101010101"), 316290802, 'Test 34');
test(numberOfUniqueGoodSubsequences("10101010101010101010"), 17711, 'Test 35');
test(numberOfUniqueGoodSubsequences("010101010101010101010101010101010101010101010101010"), 951279875, 'Test 36');
test(numberOfUniqueGoodSubsequences("0000000011111111"), 9, 'Test 37');
test(numberOfUniqueGoodSubsequences("11110000111100001111000011110000"), 121393, 'Test 38');
test(numberOfUniqueGoodSubsequences("110110110110"), 265, 'Test 39');
test(numberOfUniqueGoodSubsequences("11111000001111100000"), 836, 'Test 40');
test(numberOfUniqueGoodSubsequences("1010101010101"), 610, 'Test 41');
test(numberOfUniqueGoodSubsequences("111000111000"), 142, 'Test 42');
test(numberOfUniqueGoodSubsequences("1001001001001001001001001001001001"), 3650401, 'Test 43');
test(numberOfUniqueGoodSubsequences("0101010101010101010101010101"), 514229, 'Test 44');
test(numberOfUniqueGoodSubsequences("010101010101"), 233, 'Test 45');
test(numberOfUniqueGoodSubsequences("1010101010101010101010101010101010101010"), 267914296, 'Test 46');
test(numberOfUniqueGoodSubsequences("0101010101010101"), 1597, 'Test 47');
test(numberOfUniqueGoodSubsequences("1111111111111111111111111111111111111111"), 40, 'Test 48');
test(numberOfUniqueGoodSubsequences("11001100110011001100"), 8119, 'Test 49');
test(numberOfUniqueGoodSubsequences("000000000001"), 2, 'Test 50');
test(numberOfUniqueGoodSubsequences("1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111110"), 199, 'Test 51');
test(numberOfUniqueGoodSubsequences("01010101010101010101010101010101010101010101010"), 807526948, 'Test 52');
test(numberOfUniqueGoodSubsequences("10101010101010101010101"), 75025, 'Test 53');
test(numberOfUniqueGoodSubsequences("1001001001"), 97, 'Test 54');
test(numberOfUniqueGoodSubsequences("11001010010111"), 545, 'Test 55');
test(numberOfUniqueGoodSubsequences("000111111111111111111111111111111111111111111111111"), 49, 'Test 56');
test(numberOfUniqueGoodSubsequences("111111111111111111111111"), 24, 'Test 57');
test(numberOfUniqueGoodSubsequences("11111111111111111111111111111111111111111111"), 44, 'Test 58');
test(numberOfUniqueGoodSubsequences("1001001001001001001001001001001001001001001001001001001001"), 379190178, 'Test 59');
test(numberOfUniqueGoodSubsequences("000000000000000000000000000000000000000000000000001"), 2, 'Test 60');
test(numberOfUniqueGoodSubsequences("0101010101010101010101010101010101010101"), 165580141, 'Test 61');
test(numberOfUniqueGoodSubsequences("110110110110110110"), 3691, 'Test 62');
test(numberOfUniqueGoodSubsequences("1111000011110000"), 377, 'Test 63');
test(numberOfUniqueGoodSubsequences("000000000000"), 1, 'Test 64');
test(numberOfUniqueGoodSubsequences("1111100000011111"), 191, 'Test 65');
test(numberOfUniqueGoodSubsequences("1111111111111111111111111111"), 28, 'Test 66');
test(numberOfUniqueGoodSubsequences("111000111000111000111000111000111000111000111000111000111"), 619446900, 'Test 67');
test(numberOfUniqueGoodSubsequences("110101010101"), 377, 'Test 68');
test(numberOfUniqueGoodSubsequences("0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"), 2, 'Test 69');
test(numberOfUniqueGoodSubsequences("1001001001001001"), 1351, 'Test 70');
test(numberOfUniqueGoodSubsequences("1100110011001100"), 1393, 'Test 71');
test(numberOfUniqueGoodSubsequences("00000000000000000000000000000000"), 1, 'Test 72');
test(numberOfUniqueGoodSubsequences("01010101010101010101010101010101010101010101"), 134903163, 'Test 73');
test(numberOfUniqueGoodSubsequences("1010101010101010101010101010101010101010101010101011"), 681301736, 'Test 74');
test(numberOfUniqueGoodSubsequences("10111001001010011001"), 8492, 'Test 75');
test(numberOfUniqueGoodSubsequences("11111111111111111110"), 39, 'Test 76');
test(numberOfUniqueGoodSubsequences("111000111000111000111000111000111000111000111000"), 239244622, 'Test 77');
test(numberOfUniqueGoodSubsequences("101010101010"), 377, 'Test 78');
test(numberOfUniqueGoodSubsequences("000000000011111111110000000000"), 111, 'Test 79');
test(numberOfUniqueGoodSubsequences("00000000000000000000"), 1, 'Test 80');
test(numberOfUniqueGoodSubsequences("1111100000111110000011111"), 4341, 'Test 81');
test(numberOfUniqueGoodSubsequences("100100100100100100100100100100100100100100100100100"), 694626305, 'Test 82');
test(numberOfUniqueGoodSubsequences("000111000111000"), 142, 'Test 83');
test(numberOfUniqueGoodSubsequences("001100110011"), 99, 'Test 84');
test(numberOfUniqueGoodSubsequences("11000110001100011000"), 4401, 'Test 85');
test(numberOfUniqueGoodSubsequences("1000000000000000001"), 37, 'Test 86');
test(numberOfUniqueGoodSubsequences("111100001111000011110000111100001111000011110000111"), 133957148, 'Test 87');
test(numberOfUniqueGoodSubsequences("10010101010101010101"), 15127, 'Test 88');
test(numberOfUniqueGoodSubsequences("01010101010101010101"), 10946, 'Test 89');
test(numberOfUniqueGoodSubsequences("0001111111000"), 29, 'Test 90');

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
