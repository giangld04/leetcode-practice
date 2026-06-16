// Test: 3962. Maximum Subarray Sum After at Most K Swaps
// Run: node test.js

const { maxSum } = require("./solution");

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

console.log("\n3962. Maximum Subarray Sum After at Most K Swaps\n");

test(maxSum([1,-1,0,2], 1), 3, 'Example 1: maxSum([1,-1,0,2], 1) → 3');
test(maxSum([4,3,2,4], 2), 13, 'Example 2: maxSum([4,3,2,4], 2) → 13');
test(maxSum([-1,-2], 0), -1, 'Example 3: maxSum([-1,-2], 0) → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

