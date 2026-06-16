// Test: 3767. Maximize Points After Choosing K Tasks
// Run: node test.js

const { maxPoints } = require("./solution");

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

console.log("\n3767. Maximize Points After Choosing K Tasks\n");

test(maxPoints([5,2,10], [10,3,8], 2), 22, 'Example 1: maxPoints([5,2,10], [10,3,8], 2) → 22');
test(maxPoints([10,20,30], [5,15,25], 2), 60, 'Example 2: maxPoints([10,20,30], [5,15,25], 2) → 60');
test(maxPoints([1,2,3], [4,5,6], 0), 15, 'Example 3: maxPoints([1,2,3], [4,5,6], 0) → 15');

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
