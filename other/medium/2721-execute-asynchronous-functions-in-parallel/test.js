// Test: 2721. Execute Asynchronous Functions in Parallel
// Run: node test.js

const { promiseAll } = require("./solution");

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

console.log("\n2721. Execute Asynchronous Functions in Parallel\n");

test(promiseAll([
  () => new Promise(, > setTimeout(() => resolve(5), 200))
]), {"t": 200, "resolved": [5]}, 'Example 1: promiseAll([
  () => new Promise(, > setTimeout(() => resolve(5), 200))
]) → {"t": 200, "resolved": [5]}');
test(promiseAll([
    () => new Promise(, > setTimeout(() => resolve(1), 200)), 
    () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
]), {"t": 100, "rejected": "Error"}, 'Example 2: promiseAll([
    () => new Promise(, > setTimeout(() => resolve(1), 200)), 
    () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
]) → {"t": 100, "rejected": "Error"}');
test(promiseAll([
    () => new Promise(, > setTimeout(() => resolve(4), 50)), 
    () => new Promise(, > setTimeout(() => resolve(10), 150)), 
    () => new Promise(, > setTimeout(() => resolve(16), 100))
]), {"t": 150, "resolved": [4, 10, 16]}, 'Example 3: promiseAll([
    () => new Promise(, > setTimeout(() => resolve(4), 50)), 
    () => new Promise(, > setTimeout(() => resolve(10), 150)), 
    () => new Promise(, > setTimeout(() => resolve(16), 100))
]) → {"t": 150, "resolved": [4, 10, 16]}');

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
