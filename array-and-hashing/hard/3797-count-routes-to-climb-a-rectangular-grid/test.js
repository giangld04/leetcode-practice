// Test: 3797. Count Routes to Climb a Rectangular Grid
// Run: node test.js

const { numberOfRoutes } = require("./solution");

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

console.log("\n3797. Count Routes to Climb a Rectangular Grid\n");

test(numberOfRoutes(["..","#."], 1), 2, 'Example 1: numberOfRoutes(["..","#."], 1) → 2');
test(numberOfRoutes(["..","#."], 2), 4, 'Example 2: numberOfRoutes(["..","#."], 2) → 4');
test(numberOfRoutes(["#"], 750), 0, 'Example 3: numberOfRoutes(["#"], 750) → 0');
test(numberOfRoutes([".."], 1), 4, 'Example 4: numberOfRoutes([".."], 1) → 4');

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
