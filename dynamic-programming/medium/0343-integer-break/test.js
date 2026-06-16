// Test: 343. Integer Break
// 30 test cases from LeetCodeDataset
// Run: node test.js

const { integerBreak } = require("./solution");

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

console.log("\n343. Integer Break\n");

test(integerBreak(11), 54, 'Test 1');
test(integerBreak(30), 59049, 'Test 2');
test(integerBreak(20), 1458, 'Test 3');
test(integerBreak(2), 1, 'Test 4');
test(integerBreak(10), 36, 'Test 5');
test(integerBreak(58), 1549681956, 'Test 6');
test(integerBreak(29), 39366, 'Test 7');
test(integerBreak(45), 14348907, 'Test 8');
test(integerBreak(49), 57395628, 'Test 9');
test(integerBreak(12), 81, 'Test 10');
test(integerBreak(47), 28697814, 'Test 11');
test(integerBreak(53), 258280326, 'Test 12');
test(integerBreak(57), 1162261467, 'Test 13');
test(integerBreak(50), 86093442, 'Test 14');
test(integerBreak(28), 26244, 'Test 15');
test(integerBreak(56), 774840978, 'Test 16');
test(integerBreak(40), 2125764, 'Test 17');
test(integerBreak(37), 708588, 'Test 18');
test(integerBreak(42), 4782969, 'Test 19');
test(integerBreak(35), 354294, 'Test 20');
test(integerBreak(18), 729, 'Test 21');
test(integerBreak(32), 118098, 'Test 22');
test(integerBreak(36), 531441, 'Test 23');
test(integerBreak(19), 972, 'Test 24');
test(integerBreak(48), 43046721, 'Test 25');
test(integerBreak(15), 243, 'Test 26');
test(integerBreak(6), 9, 'Test 27');
test(integerBreak(55), 516560652, 'Test 28');
test(integerBreak(13), 108, 'Test 29');
test(integerBreak(25), 8748, 'Test 30');

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
