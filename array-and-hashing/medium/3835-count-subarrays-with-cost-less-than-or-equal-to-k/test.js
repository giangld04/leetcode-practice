// Test: 3835. Count Subarrays With Cost Less Than or Equal to K
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

console.log("\n3835. Count Subarrays With Cost Less Than or Equal to K\n");

test(countSubarrays([1,3,2], 4), 5, 'Example 1: countSubarrays([1,3,2], 4) → 5');
test(countSubarrays([5,5,5,5], 0), 10, 'Example 2: countSubarrays([5,5,5,5], 0) → 10');
test(countSubarrays([1,2,3], 0), 3, 'Example 3: countSubarrays([1,2,3], 0) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

