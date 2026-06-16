// Test: 3928. Minimum Cost to Buy Apples II
// Run: node test.js

const { minCost } = require("./solution");

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

console.log("\n3928. Minimum Cost to Buy Apples II\n");

test(minCost(2, [8,3], [[0,1,1,2]]), [6,3], 'Example 1: minCost(2, [8,3], [[0,1,1,2]]) → [6,3]');
test(minCost(3, [9,4,6], [[0,1,1,3],[1,2,4,2]]), [8,4,6], 'Example 2: minCost(3, [9,4,6], [[0,1,1,3],[1,2,4,2]]) → [8,4,6]');
test(minCost(3, [10,11,1], [[0,2,1,3],[1,2,3,4],[0,1,5,2]]), [5,11,1], 'Example 3: minCost(3, [10,11,1], [[0,2,1,3],[1,2,3,4],[0,1,5,2]]) → [5,11,1]');

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
