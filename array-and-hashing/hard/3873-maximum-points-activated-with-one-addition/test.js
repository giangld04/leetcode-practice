// Test: 3873. Maximum Points Activated with One Addition
// Run: node test.js

const { maxActivated } = require("./solution");

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

console.log("\n3873. Maximum Points Activated with One Addition\n");

test(maxActivated([[1,1],[1,2],[2,2]]), 4, 'Example 1: maxActivated([[1,1],[1,2],[2,2]]) → 4');
test(maxActivated([[2,2],[1,1],[3,3]]), 3, 'Example 2: maxActivated([[2,2],[1,1],[3,3]]) → 3');
test(maxActivated([[2,3],[2,2],[1,1],[4,5]]), 4, 'Example 3: maxActivated([[2,3],[2,2],[1,1],[4,5]]) → 4');

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
