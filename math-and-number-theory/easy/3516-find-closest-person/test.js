// Test: 3516. Find Closest Person
// Run: node test.js

const { findClosest } = require("./solution");

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

console.log("\n3516. Find Closest Person\n");

test(findClosest(2, 7, 4), 1, 'Example 1: findClosest(2, 7, 4) → 1');
test(findClosest(2, 5, 6), 2, 'Example 2: findClosest(2, 5, 6) → 2');
test(findClosest(1, 5, 3), 0, 'Example 3: findClosest(1, 5, 3) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

