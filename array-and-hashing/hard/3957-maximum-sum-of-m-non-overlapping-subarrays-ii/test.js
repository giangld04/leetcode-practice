// Test: 3957. Maximum Sum of M Non-Overlapping Subarrays II
// Run: node test.js

const { maximumSum } = require("./solution");

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

console.log("\n3957. Maximum Sum of M Non-Overlapping Subarrays II\n");

test(maximumSum([4,1,-5,2], 2, 1, 3), 7, 'Example 1: maximumSum([4,1,-5,2], 2, 1, 3) → 7');
test(maximumSum([1,0,3,4], 2, 1, 2), 8, 'Example 2: maximumSum([1,0,3,4], 2, 1, 2) → 8');
test(maximumSum([-1,7,-4], 1, 2, 3), 6, 'Example 3: maximumSum([-1,7,-4], 1, 2, 3) → 6');
test(maximumSum([-3,-4,-1], 2, 1, 2), -1, 'Example 4: maximumSum([-3,-4,-1], 2, 1, 2) → -1');

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
