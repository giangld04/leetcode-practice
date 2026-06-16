// Test: 3430. Maximum and Minimum Sums of at Most Size K Subarrays
// Run: node test.js

const { minMaxSubarraySum } = require("./solution");

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

console.log("\n3430. Maximum and Minimum Sums of at Most Size K Subarrays\n");

test(minMaxSubarraySum([1,2,3], 2), 20, 'Example 1: minMaxSubarraySum([1,2,3], 2) → 20');
test(minMaxSubarraySum([1,-3,1], 2), -6, 'Example 2: minMaxSubarraySum([1,-3,1], 2) → -6');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

