// Test: 3819. Rotate Non Negative Elements
// Run: node test.js

const { rotateElements } = require("./solution");

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

console.log("\n3819. Rotate Non Negative Elements\n");

test(rotateElements([1,-2,3,-4], 3), [3,-2,1,-4], 'Example 1: rotateElements([1,-2,3,-4], 3) → [3,-2,1,-4]');
test(rotateElements([-3,-2,7], 1), [-3,-2,7], 'Example 2: rotateElements([-3,-2,7], 1) → [-3,-2,7]');
test(rotateElements([5,4,-9,6], 2), [6,5,-9,4], 'Example 3: rotateElements([5,4,-9,6], 2) → [6,5,-9,4]');

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
