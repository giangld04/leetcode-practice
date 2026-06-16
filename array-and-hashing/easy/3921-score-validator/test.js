// Test: 3921. Score Validator
// Run: node test.js

const { scoreValidator } = require("./solution");

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

console.log("\n3921. Score Validator\n");

test(scoreValidator(["1","4","W","6","WD"]), [12,1], 'Example 1: scoreValidator(["1","4","W","6","WD"]) → [12,1]');
test(scoreValidator(["WD","NB","0","4","4"]), [10,0], 'Example 2: scoreValidator(["WD","NB","0","4","4"]) → [10,0]');
test(scoreValidator(["W","W","W","W","W","W","W","W","W","W","W"]), [0,10], 'Example 3: scoreValidator(["W","W","W","W","W","W","W","W","W","W","W"]) → [0,10]');

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
