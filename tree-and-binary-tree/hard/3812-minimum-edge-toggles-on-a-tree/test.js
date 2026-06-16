// Test: 3812. Minimum Edge Toggles on a Tree
// Run: node test.js

const { minimumFlips } = require("./solution");

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

console.log("\n3812. Minimum Edge Toggles on a Tree\n");

test(minimumFlips(3, [[0,1],[1,2]], "010", "100"), [0], 'Example 1: minimumFlips(3, [[0,1],[1,2]], "010", "100") → [0]');
test(minimumFlips(7, [[0,1],[1,2],[2,3],[3,4],[3,5],[1,6]], "0011000", "0010001"), [1,2,5], 'Example 2: minimumFlips(7, [[0,1],[1,2],[2,3],[3,4],[3,5],[1,6]], "0011000", "0010001") → [1,2,5]');
test(minimumFlips(2, [[0,1]], "00", "01"), [-1], 'Example 3: minimumFlips(2, [[0,1]], "00", "01") → [-1]');

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
