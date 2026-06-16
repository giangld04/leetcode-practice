// Test: 3934. Smallest Unique Subarray
// Run: node test.js

const { smallestUniqueSubarray } = require("./solution");

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

console.log("\n3934. Smallest Unique Subarray\n");

test(smallestUniqueSubarray([3,3,3]), 3, 'Example 1: smallestUniqueSubarray([3,3,3]) → 3');
test(smallestUniqueSubarray([2,1,2,3,3]), 1, 'Example 2: smallestUniqueSubarray([2,1,2,3,3]) → 1');
test(smallestUniqueSubarray([1,1,2,2,1]), 2, 'Example 3: smallestUniqueSubarray([1,1,2,2,1]) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

