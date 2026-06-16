// Test: 3800. Minimum Cost to Make Two Binary Strings Equal
// Run: node test.js

const { minimumCost } = require("./solution");

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

console.log("\n3800. Minimum Cost to Make Two Binary Strings Equal\n");

test(minimumCost("01000", "10111", 10, 2, 2), 16, 'Example 1: minimumCost("01000", "10111", 10, 2, 2) → 16');
test(minimumCost("001", "110", 2, 100, 100), 6, 'Example 2: minimumCost("001", "110", 2, 100, 100) → 6');
test(minimumCost("1010", "1010", 5, 5, 5), 0, 'Example 3: minimumCost("1010", "1010", 5, 5, 5) → 0');

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
