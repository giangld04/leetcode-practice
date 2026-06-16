// Test: 3859. Count Subarrays With K Distinct Integers
// Run: node test.js

const { countSubarrays } = require("./solution");

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

console.log("\n3859. Count Subarrays With K Distinct Integers\n");

test(countSubarrays([1,2,1,2,2], 2, 2), 2, 'Example 1: countSubarrays([1,2,1,2,2], 2, 2) → 2');
test(countSubarrays([3,1,2,4], 2, 1), 3, 'Example 2: countSubarrays([3,1,2,4], 2, 1) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

