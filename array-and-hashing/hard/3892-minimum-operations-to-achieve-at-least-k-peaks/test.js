// Test: 3892. Minimum Operations to Achieve At Least K Peaks
// Run: node test.js

const { minOperations } = require("./solution");

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

console.log("\n3892. Minimum Operations to Achieve At Least K Peaks\n");

test(minOperations([2,1,2], 1), 1, 'Example 1: minOperations([2,1,2], 1) → 1');
test(minOperations([4,5,3,6], 2), 0, 'Example 2: minOperations([4,5,3,6], 2) → 0');
test(minOperations([3,7,3], 2), -1, 'Example 3: minOperations([3,7,3], 2) → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

