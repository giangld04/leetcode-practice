// Test: 1513. Number Of Substrings With Only 1S
// 28 test cases from LeetCodeDataset
// Run: node test.js

const { numSub } = require("./solution");

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

console.log("\n1513. Number Of Substrings With Only 1S\n");

test(numSub("1100110011"), 9, 'Test 1');
test(numSub("101"), 2, 'Test 2');
test(numSub("1001001001"), 4, 'Test 3');
test(numSub("1111101111"), 25, 'Test 4');
test(numSub("110110110110110"), 15, 'Test 5');
test(numSub("000"), 0, 'Test 6');
test(numSub("111111"), 21, 'Test 7');
test(numSub("0110111"), 9, 'Test 8');
test(numSub("0"), 0, 'Test 9');
test(numSub("01010101010101010101"), 10, 'Test 10');
test(numSub("111000111000111"), 18, 'Test 11');
test(numSub("1001001"), 3, 'Test 12');
test(numSub("111011101110111"), 24, 'Test 13');
test(numSub("1111111111"), 55, 'Test 14');
test(numSub("00000"), 0, 'Test 15');
test(numSub("11111111111111111111"), 210, 'Test 16');
test(numSub("111100001111"), 20, 'Test 17');
test(numSub("1"), 1, 'Test 18');
test(numSub("1100110011001100110011"), 18, 'Test 19');
test(numSub("11110000111111110000111100001111111111110000"), 134, 'Test 20');
test(numSub("11111111111111111111111111111111111111111111111111111111111111111111111111111111"), 3240, 'Test 21');
test(numSub("111000111000111000111000111000111000111000111000111000111000111000111000111"), 78, 'Test 22');
test(numSub("0101010101010101010101010101010101010101010101010101010101010101010101010101010101"), 41, 'Test 23');
test(numSub("100100100100100100100100100100100100100100100100100100100100100100100100100100100"), 27, 'Test 24');
test(numSub("0111111111101111111111101111111111101111111111101111111111101111111111101111111111101111111111101111111111"), 572, 'Test 25');
test(numSub("000000000000000000000000000000000000000000000000"), 0, 'Test 26');
test(numSub("101010101010101010101010101010101010101010101010"), 24, 'Test 27');
test(numSub("111111111100000000000000000000000000000000000000000000000000000000000000000000000001111111111"), 110, 'Test 28');

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
