// Test: 3688. Bitwise OR of Even Numbers in an Array
// Run: node test.js

const { evenNumberBitwiseORs } = require("./solution");

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

console.log("\n3688. Bitwise OR of Even Numbers in an Array\n");

test(evenNumberBitwiseORs([1,2,3,4,5,6]), 6, 'Example 1: evenNumberBitwiseORs([1,2,3,4,5,6]) → 6');
test(evenNumberBitwiseORs([7,9,11]), 0, 'Example 2: evenNumberBitwiseORs([7,9,11]) → 0');
test(evenNumberBitwiseORs([1,8,16]), 24, 'Example 3: evenNumberBitwiseORs([1,8,16]) → 24');

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
