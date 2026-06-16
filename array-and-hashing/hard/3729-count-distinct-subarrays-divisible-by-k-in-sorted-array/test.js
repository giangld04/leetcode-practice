// Test: 3729. Count Distinct Subarrays Divisible by K in Sorted Array
// Run: node test.js

const { numGoodSubarrays } = require("./solution");

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

console.log("\n3729. Count Distinct Subarrays Divisible by K in Sorted Array\n");

test(numGoodSubarrays([1,2,3], 3), 3, 'Example 1: numGoodSubarrays([1,2,3], 3) → 3');
test(numGoodSubarrays([2,2,2,2,2,2], 6), 2, 'Example 2: numGoodSubarrays([2,2,2,2,2,2], 6) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

