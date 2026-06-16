// Test: 3756. Concatenate Non-Zero Digits and Multiply by Sum II
// Run: node test.js

const { sumAndMultiply } = require("./solution");

let passed = 0, failed = 0;
function test(actual, expected, label) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) {
    console.log(`  ✓ ${label}`);
    passed++;
  } else {
    console.log(`  ✗ ${label}`);
    console.log(`    Expected: ${e}`);
    console.log(`    Actual:   ${a}`);
    failed++;
  }
}

console.log("\n3756. Concatenate Non-Zero Digits and Multiply by Sum II\n");

test(sumAndMultiply("10203004", [[0,7],[1,3],[4,6]]), [12340, 4, 9], 'Example 1: sumAndMultiply("10203004", [[0,7],[1,3],[4,6]]) → [12340, 4, 9]');
test(sumAndMultiply("1000", [[0,3],[1,1]]), [1, 0], 'Example 2: sumAndMultiply("1000", [[0,3],[1,1]]) → [1, 0]');
test(sumAndMultiply("9876543210", [[0,9]]), [444444137], 'Example 3: sumAndMultiply("9876543210", [[0,9]]) → [444444137]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
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
