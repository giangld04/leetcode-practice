// Test: 2622. Cache With Time Limit
// Run: node test.js

const { TimeLimitedCache } = require("./solution");

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

console.log("\n2622. Cache With Time Limit\n");

test(TimeLimitedCache(["TimeLimitedCache", "set", "get", "count", "get"], [[], [1, 42, 100], [1], [], [1]], [0, 0, 50, 50, 150]), [null, false, 42, 1, -1], 'Example 1: TimeLimitedCache(["TimeLimitedCache", "set", "get", "count", "get"], [[], [1, 42, 100], [1], [], [1]], [0, 0, 50, 50, 150]) → [null, false, 42, 1, -1]');
test(TimeLimitedCache(["TimeLimitedCache", "set", "set", "get", "get", "get", "count"], [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []], [0, 0, 40, 50, 120, 200, 250]), [null, false, true, 50, 50, -1, 0], 'Example 2: TimeLimitedCache(["TimeLimitedCache", "set", "set", "get", "get", "get", "count"], [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []], [0, 0, 40, 50, 120, 200, 250]) → [null, false, true, 50, 50, -1, 0]');

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
