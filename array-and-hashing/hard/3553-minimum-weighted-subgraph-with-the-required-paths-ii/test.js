// Test: 3553. Minimum Weighted Subgraph With the Required Paths II
// Run: node test.js

const { minimumWeight } = require("./solution");

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

console.log("\n3553. Minimum Weighted Subgraph With the Required Paths II\n");

test(minimumWeight([[0,1,2],[1,2,3],[1,3,5],[1,4,4],[2,5,6]], [[2,3,4],[0,2,5]]), [12,11], 'Example 1: minimumWeight([[0,1,2],[1,2,3],[1,3,5],[1,4,4],[2,5,6]], [[2,3,4],[0,2,5]]) → [12,11]');
test(minimumWeight([[1,0,8],[0,2,7]], [[0,1,2]]), [15], 'Example 2: minimumWeight([[1,0,8],[0,2,7]], [[0,1,2]]) → [15]');

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
