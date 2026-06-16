// Test: 3901. Good Subsequence Queries
// Run: node test.js

const { countGoodSubseq } = require("./solution");

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

console.log("\n3901. Good Subsequence Queries\n");

test(countGoodSubseq([4,8,12,16], 2, [[0,3],[2,6]]), 1, 'Example 1: countGoodSubseq([4,8,12,16], 2, [[0,3],[2,6]]) → 1');
test(countGoodSubseq([4,5,7,8], 3, [[0,6],[1,9],[2,3]]), 2, 'Example 2: countGoodSubseq([4,5,7,8], 3, [[0,6],[1,9],[2,3]]) → 2');
test(countGoodSubseq([5,7,9], 2, [[1,4],[2,8]]), 0, 'Example 3: countGoodSubseq([5,7,9], 2, [[1,4],[2,8]]) → 0');

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
