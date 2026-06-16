// Test: 3809. Best Reachable Tower
// Run: node test.js

const { bestTower } = require("./solution");

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

console.log("\n3809. Best Reachable Tower\n");

test(bestTower([[1,2,5], [2,1,7], [3,1,9]], [1,1], 2), [3,1], 'Example 1: bestTower([[1,2,5], [2,1,7], [3,1,9]], [1,1], 2) → [3,1]');
test(bestTower([[1,3,4], [2,2,4], [4,4,7]], [0,0], 5), [1,3], 'Example 2: bestTower([[1,3,4], [2,2,4], [4,4,7]], [0,0], 5) → [1,3]');
test(bestTower([[5,6,8], [0,3,5]], [1,2], 1), [-1,-1], 'Example 3: bestTower([[5,6,8], [0,3,5]], [1,2], 1) → [-1,-1]');

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
