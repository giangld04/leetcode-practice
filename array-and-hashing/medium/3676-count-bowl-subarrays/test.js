// Test: 3676. Count Bowl Subarrays
// Run: node test.js

const { bowlSubarrays } = require("./solution");

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

console.log("\n3676. Count Bowl Subarrays\n");

test(bowlSubarrays([2,5,3,1,4]), 2, 'Example 1: bowlSubarrays([2,5,3,1,4]) → 2');
test(bowlSubarrays([5,1,2,3,4]), 3, 'Example 2: bowlSubarrays([5,1,2,3,4]) → 3');
test(bowlSubarrays([1000000000,999999999,999999998]), 0, 'Example 3: bowlSubarrays([1000000000,999999999,999999998]) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

