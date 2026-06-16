// Test: 2627. Debounce
// Run: node test.js

const { debounce } = require("./solution");

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

console.log("\n2627. Debounce\n");

test(debounce(50, [
  {"t": 50, inputs: [1]},
  {"t": 75, inputs: [2]}
]), [{"t": 125, inputs: [2]}], 'Example 1: debounce(50, [
  {"t": 50, inputs: [1]},
  {"t": 75, inputs: [2]}
]) → [{"t": 125, inputs: [2]}]');
test(debounce(20, [
  {"t": 50, inputs: [1]},
  {"t": 100, inputs: [2]}
]), [{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}], 'Example 2: debounce(20, [
  {"t": 50, inputs: [1]},
  {"t": 100, inputs: [2]}
]) → [{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}]');
test(debounce(150, [
  {"t": 50, inputs: [1, 2]},
  {"t": 300, inputs: [3, 4]},
  {"t": 300, inputs: [5, 6]}
]), [{"t": 200, inputs: [1,2]}, {"t": 450, inputs: [5, 6]}], 'Example 3: debounce(150, [
  {"t": 50, inputs: [1, 2]},
  {"t": 300, inputs: [3, 4]},
  {"t": 300, inputs: [5, 6]}
]) → [{"t": 200, inputs: [1,2]}, {"t": 450, inputs: [5, 6]}]');

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
