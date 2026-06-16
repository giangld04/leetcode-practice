// Test: 3923. Minimum Generations to Target Point
// Run: node test.js

const { minGenerations } = require("./solution");

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

console.log("\n3923. Minimum Generations to Target Point\n");

test(minGenerations([[0,0,0],[6,6,6]], [3,3,3]), 1, 'Example 1: minGenerations([[0,0,0],[6,6,6]], [3,3,3]) → 1');
test(minGenerations([[0,0,0],[5,5,5]], [1,1,1]), 2, 'Example 2: minGenerations([[0,0,0],[5,5,5]], [1,1,1]) → 2');
test(minGenerations([[0,0,0],[2,2,2],[3,3,3]], [2,2,2]), 0, 'Example 3: minGenerations([[0,0,0],[2,2,2],[3,3,3]], [2,2,2]) → 0');
test(minGenerations([[1,2,3]], [5,5,5]), -1, 'Example 4: minGenerations([[1,2,3]], [5,5,5]) → -1');

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
