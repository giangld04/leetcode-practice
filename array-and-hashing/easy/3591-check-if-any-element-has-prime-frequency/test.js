// Test: 3591. Check if Any Element Has Prime Frequency
// Run: node test.js

const { checkPrimeFrequency } = require("./solution");

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

console.log("\n3591. Check if Any Element Has Prime Frequency\n");

test(checkPrimeFrequency([1,2,3,4,5,4]), true, 'Example 1: checkPrimeFrequency([1,2,3,4,5,4]) → true');
test(checkPrimeFrequency([1,2,3,4,5]), false, 'Example 2: checkPrimeFrequency([1,2,3,4,5]) → false');
test(checkPrimeFrequency([2,2,2,4,4]), true, 'Example 3: checkPrimeFrequency([2,2,2,4,4]) → true');

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
