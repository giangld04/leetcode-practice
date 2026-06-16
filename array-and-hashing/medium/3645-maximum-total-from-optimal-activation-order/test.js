// Test: 3645. Maximum Total from Optimal Activation Order
// Run: node test.js

const { maxTotal } = require("./solution");

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

console.log("\n3645. Maximum Total from Optimal Activation Order\n");

test(maxTotal([3,5,8], [2,1,3]), 16, 'Example 1: maxTotal([3,5,8], [2,1,3]) → 16');
test(maxTotal([4,2,6], [1,1,1]), 6, 'Example 2: maxTotal([4,2,6], [1,1,1]) → 6');
test(maxTotal([4,1,5,2], [3,3,2,3]), 12, 'Example 3: maxTotal([4,1,5,2], [3,3,2,3]) → 12');

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
