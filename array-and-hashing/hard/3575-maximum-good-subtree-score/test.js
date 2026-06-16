// Test: 3575. Maximum Good Subtree Score
// Run: node test.js

const { goodSubtreeSum } = require("./solution");

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

console.log("\n3575. Maximum Good Subtree Score\n");

test(goodSubtreeSum([2,3], [-1,0]), 8, 'Example 1: goodSubtreeSum([2,3], [-1,0]) → 8');
test(goodSubtreeSum([1,5,2], [-1,0,0]), 15, 'Example 2: goodSubtreeSum([1,5,2], [-1,0,0]) → 15');
test(goodSubtreeSum([34,1,2], [-1,0,1]), 42, 'Example 3: goodSubtreeSum([34,1,2], [-1,0,1]) → 42');
test(goodSubtreeSum([3,22,5], [-1,0,1]), 18, 'Example 4: goodSubtreeSum([3,22,5], [-1,0,1]) → 18');

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
