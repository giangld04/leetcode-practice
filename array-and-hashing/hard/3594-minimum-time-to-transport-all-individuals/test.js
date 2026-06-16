// Test: 3594. Minimum Time to Transport All Individuals
// Run: node test.js

const { minTime } = require("./solution");

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

console.log("\n3594. Minimum Time to Transport All Individuals\n");

test(minTime(1, 1, 2, [5], [1.0,1.3]), 5.00000, 'Example 1: minTime(1, 1, 2, [5], [1.0,1.3]) → 5.00000');
test(minTime(3, 2, 3, [2,5,8], [1.0,1.5,0.75]), 14.50000, 'Example 2: minTime(3, 2, 3, [2,5,8], [1.0,1.5,0.75]) → 14.50000');
test(minTime(2, 1, 2, [10,10], [2.0,2.0]), -1.00000, 'Example 3: minTime(2, 1, 2, [10,10], [2.0,2.0]) → -1.00000');

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
