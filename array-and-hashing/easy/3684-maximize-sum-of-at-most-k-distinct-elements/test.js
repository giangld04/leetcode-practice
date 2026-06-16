// Test: 3684. Maximize Sum of At Most K Distinct Elements
// Run: node test.js

const { maxKDistinct } = require("./solution");

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

console.log("\n3684. Maximize Sum of At Most K Distinct Elements\n");

test(maxKDistinct([84,93,100,77,90], 3), [100,93,90], 'Example 1: maxKDistinct([84,93,100,77,90], 3) → [100,93,90]');
test(maxKDistinct([84,93,100,77,93], 3), [100,93,84], 'Example 2: maxKDistinct([84,93,100,77,93], 3) → [100,93,84]');
test(maxKDistinct([1,1,1,2,2,2], 6), [2,1], 'Example 3: maxKDistinct([1,1,1,2,2,2], 6) → [2,1]');

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
