// Test: 3818. Minimum Prefix Removal to Make Array Strictly Increasing
// Run: node test.js

const { minimumPrefixLength } = require("./solution");

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

console.log("\n3818. Minimum Prefix Removal to Make Array Strictly Increasing\n");

test(minimumPrefixLength([1,-1,2,3,3,4,5]), 4, 'Example 1: minimumPrefixLength([1,-1,2,3,3,4,5]) → 4');
test(minimumPrefixLength([4,3,-2,-5]), 3, 'Example 2: minimumPrefixLength([4,3,-2,-5]) → 3');
test(minimumPrefixLength([1,2,3,4]), 0, 'Example 3: minimumPrefixLength([1,2,3,4]) → 0');

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
