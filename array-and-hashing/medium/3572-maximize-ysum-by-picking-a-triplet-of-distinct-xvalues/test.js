// Test: 3572. Maximize Y‑Sum by Picking a Triplet of Distinct X‑Values
// Run: node test.js

const { maxSumDistinctTriplet } = require("./solution");

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

console.log("\n3572. Maximize Y‑Sum by Picking a Triplet of Distinct X‑Values\n");

test(maxSumDistinctTriplet([1,2,1,3,2], [5,3,4,6,2]), 14, 'Example 1: maxSumDistinctTriplet([1,2,1,3,2], [5,3,4,6,2]) → 14');
test(maxSumDistinctTriplet([1,2,1,2], [4,5,6,7]), -1, 'Example 2: maxSumDistinctTriplet([1,2,1,2], [4,5,6,7]) → -1');

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
