// Test: 3739. Count Subarrays With Majority Element II
// Run: node test.js

const { countMajoritySubarrays } = require("./solution");

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

console.log("\n3739. Count Subarrays With Majority Element II\n");

test(countMajoritySubarrays([1,2,2,3], 2), 5, 'Example 1: countMajoritySubarrays([1,2,2,3], 2) → 5');
test(countMajoritySubarrays([1,1,1,1], 1), 10, 'Example 2: countMajoritySubarrays([1,1,1,1], 1) → 10');
test(countMajoritySubarrays([1,2,3], 4), 0, 'Example 3: countMajoritySubarrays([1,2,3], 4) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

