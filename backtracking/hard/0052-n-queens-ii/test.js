// Test: 52. N Queens Ii
// 9 test cases from LeetCodeDataset
// Run: node test.js

const { totalNQueens } = require("./solution");

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

console.log("\n52. N Queens Ii\n");

test(totalNQueens(8), 92, 'Test 1');
test(totalNQueens(3), 0, 'Test 2');
test(totalNQueens(4), 2, 'Test 3');
test(totalNQueens(9), 352, 'Test 4');
test(totalNQueens(6), 4, 'Test 5');
test(totalNQueens(2), 0, 'Test 6');
test(totalNQueens(1), 1, 'Test 7');
test(totalNQueens(7), 40, 'Test 8');
test(totalNQueens(5), 10, 'Test 9');

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
