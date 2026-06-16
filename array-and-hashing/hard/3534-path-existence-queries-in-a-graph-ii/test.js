// Test: 3534. Path Existence Queries in a Graph II
// Run: node test.js

const { pathExistenceQueries } = require("./solution");

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

console.log("\n3534. Path Existence Queries in a Graph II\n");

test(pathExistenceQueries(5, [1,8,3,4,2], 3, [[0,3],[2,4]]), [1,1], 'Example 1: pathExistenceQueries(5, [1,8,3,4,2], 3, [[0,3],[2,4]]) → [1,1]');
test(pathExistenceQueries(5, [5,3,1,9,10], 2, [[0,1],[0,2],[2,3],[4,3]]), [1,2,-1,1], 'Example 2: pathExistenceQueries(5, [5,3,1,9,10], 2, [[0,1],[0,2],[2,3],[4,3]]) → [1,2,-1,1]');
test(pathExistenceQueries(3, [3,6,1], 1, [[0,0],[0,1],[1,2]]), [0,-1,-1], 'Example 3: pathExistenceQueries(3, [3,6,1], 1, [[0,0],[0,1],[1,2]]) → [0,-1,-1]');

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
