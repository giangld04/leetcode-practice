// Test: 3801. Minimum Cost to Merge Sorted Lists
// Run: node test.js

const { minMergeCost } = require("./solution");

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

console.log("\n3801. Minimum Cost to Merge Sorted Lists\n");

test(minMergeCost([[1,3,5],[2,4],[6,7,8]]), 18, 'Example 1: minMergeCost([[1,3,5],[2,4],[6,7,8]]) → 18');
test(minMergeCost([[1,1,5],[1,4,7,8]]), 10, 'Example 2: minMergeCost([[1,1,5],[1,4,7,8]]) → 10');
test(minMergeCost([[1],[3]]), 4, 'Example 3: minMergeCost([[1],[3]]) → 4');
test(minMergeCost([[1],[1]]), 2, 'Example 4: minMergeCost([[1],[1]]) → 2');

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
