// Test: 2715. Timeout Cancellation
// Run: node test.js

const { cancellable } = require("./solution");

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

console.log("\n2715. Timeout Cancellation\n");

test(cancellable((x) => x * 5, [2], 20), [{"time": 20, "returned": 10}], 'Example 1: cancellable((x) => x * 5, [2], 20) → [{"time": 20, "returned": 10}]');
test(cancellable((x) => x**2, [2], 100), [], 'Example 2: cancellable((x) => x**2, [2], 100) → []');
test(cancellable((x1, x2) => x1 * x2, [2,4], 30), [{"time": 30, "returned": 8}], 'Example 3: cancellable((x1, x2) => x1 * x2, [2,4], 30) → [{"time": 30, "returned": 8}]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

