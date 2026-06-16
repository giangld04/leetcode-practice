// Test: 3795. Minimum Subarray Length With Distinct Sum At Least K
// Run: node test.js

const { minLength } = require("./solution");

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

console.log("\n3795. Minimum Subarray Length With Distinct Sum At Least K\n");

test(minLength([2,2,3,1], 4), 2, 'Example 1: minLength([2,2,3,1], 4) → 2');
test(minLength([3,2,3,4], 5), 2, 'Example 2: minLength([3,2,3,4], 5) → 2');
test(minLength([5,5,4], 5), 1, 'Example 3: minLength([5,5,4], 5) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

