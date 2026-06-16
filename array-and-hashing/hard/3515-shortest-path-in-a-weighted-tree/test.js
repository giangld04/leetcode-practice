// Test: 3515. Shortest Path in a Weighted Tree
// Run: node test.js

const { treeQueries } = require("./solution");

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

console.log("\n3515. Shortest Path in a Weighted Tree\n");

test(treeQueries(2, [[1,2,7]], [[2,2],[1,1,2,4],[2,2]]), [7,4], 'Example 1: treeQueries(2, [[1,2,7]], [[2,2],[1,1,2,4],[2,2]]) → [7,4]');
test(treeQueries(3, [[1,2,2],[1,3,4]], [[2,1],[2,3],[1,1,3,7],[2,2],[2,3]]), [0,4,2,7], 'Example 2: treeQueries(3, [[1,2,2],[1,3,4]], [[2,1],[2,3],[1,1,3,7],[2,2],[2,3]]) → [0,4,2,7]');
test(treeQueries(4, [[1,2,2],[2,3,1],[3,4,5]], [[2,4],[2,3],[1,2,3,3],[2,2],[2,3]]), [8,3,2,5], 'Example 3: treeQueries(4, [[1,2,2],[2,3,1],[3,4,5]], [[2,4],[2,3],[1,2,3,3],[2,2],[2,3]]) → [8,3,2,5]');

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
