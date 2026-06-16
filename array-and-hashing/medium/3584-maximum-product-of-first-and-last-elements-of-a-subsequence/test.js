// Test: 3584. Maximum Product of First and Last Elements of a Subsequence
// Run: node test.js

const { maximumProduct } = require("./solution");

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

console.log("\n3584. Maximum Product of First and Last Elements of a Subsequence\n");

test(maximumProduct([-1,-9,2,3,-2,-3,1], 1), 81, 'Example 1: maximumProduct([-1,-9,2,3,-2,-3,1], 1) → 81');
test(maximumProduct([1,3,-5,5,6,-4], 3), 20, 'Example 2: maximumProduct([1,3,-5,5,6,-4], 3) → 20');
test(maximumProduct([2,-1,2,-6,5,2,-5,7], 2), 35, 'Example 3: maximumProduct([2,-1,2,-6,5,2,-5,7], 2) → 35');

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
