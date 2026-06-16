// Test: 2629. Function Composition
// Run: node test.js

const { compose } = require("./solution");

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

console.log("\n2629. Function Composition\n");

test(compose([, > x + 1, > x * x, > 2 * x], 4), 65, 'Example 1: compose([, > x + 1, > x * x, > 2 * x], 4) → 65');
test(compose([, > 10 * x, > 10 * x, > 10 * x], 1), 1000, 'Example 2: compose([, > 10 * x, > 10 * x, > 10 * x], 1) → 1000');
test(compose([], 42), 42, 'Example 3: compose([], 42) → 42');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

