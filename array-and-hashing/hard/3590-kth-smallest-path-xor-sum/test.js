// Test: 3590. Kth Smallest Path XOR Sum
// Run: node test.js

const { kthSmallest } = require("./solution");

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

console.log("\n3590. Kth Smallest Path XOR Sum\n");

test(kthSmallest([-1,0,0], [1,1,1], [[0,1],[0,2],[0,3]]), [0,1,-1], 'Example 1: kthSmallest([-1,0,0], [1,1,1], [[0,1],[0,2],[0,3]]) → [0,1,-1]');
test(kthSmallest([-1,0,1], [5,2,7], [[0,1],[1,2],[1,3],[2,1]]), [0,7,-1,0], 'Example 2: kthSmallest([-1,0,1], [5,2,7], [[0,1],[1,2],[1,3],[2,1]]) → [0,7,-1,0]');

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
