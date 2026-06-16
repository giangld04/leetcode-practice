// Test: 3738. Longest Non-Decreasing Subarray After Replacing at Most One Element
// Run: node test.js

const { longestSubarray } = require("./solution");

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

console.log("\n3738. Longest Non-Decreasing Subarray After Replacing at Most One Element\n");

test(longestSubarray([1,2,3,1,2]), 4, 'Example 1: longestSubarray([1,2,3,1,2]) → 4');
test(longestSubarray([2,2,2,2,2]), 5, 'Example 2: longestSubarray([2,2,2,2,2]) → 5');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

