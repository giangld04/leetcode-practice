// Test: 3814. Maximum Capacity Within Budget
// Run: node test.js

const { maxCapacity } = require("./solution");

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

console.log("\n3814. Maximum Capacity Within Budget\n");

test(maxCapacity([4,8,5,3], [1,5,2,7], 8), 8, 'Example 1: maxCapacity([4,8,5,3], [1,5,2,7], 8) → 8');
test(maxCapacity([3,5,7,4], [2,4,3,6], 7), 6, 'Example 2: maxCapacity([3,5,7,4], [2,4,3,6], 7) → 6');
test(maxCapacity([2,2,2], [3,5,4], 5), 9, 'Example 3: maxCapacity([2,2,2], [3,5,4], 5) → 9');

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
