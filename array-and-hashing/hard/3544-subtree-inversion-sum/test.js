// Test: 3544. Subtree Inversion Sum
// Run: node test.js

const { subtreeInversionSum } = require("./solution");

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

console.log("\n3544. Subtree Inversion Sum\n");

test(subtreeInversionSum([[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]], [4,-8,-6,3,7,-2,5], 2), 27, 'Example 1: subtreeInversionSum([[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]], [4,-8,-6,3,7,-2,5], 2) → 27');
test(subtreeInversionSum([[0,1],[1,2],[2,3],[3,4]], [-1,3,-2,4,-5], 2), 9, 'Example 2: subtreeInversionSum([[0,1],[1,2],[2,3],[3,4]], [-1,3,-2,4,-5], 2) → 9');
test(subtreeInversionSum([[0,1],[0,2]], [0,-1,-2], 3), 3, 'Example 3: subtreeInversionSum([[0,1],[0,2]], [0,-1,-2], 3) → 3');

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
