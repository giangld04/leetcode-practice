// Test: 3748. Count Stable Subarrays
// Run: node test.js

const { countStableSubarrays } = require("./solution");

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

console.log("\n3748. Count Stable Subarrays\n");

test(countStableSubarrays([3,1,2], [[0,1],[1,2],[0,2]]), [2,3,4], 'Example 1: countStableSubarrays([3,1,2], [[0,1],[1,2],[0,2]]) → [2,3,4]');
test(countStableSubarrays([2,2], [[0,1],[0,0]]), [3,1], 'Example 2: countStableSubarrays([2,2], [[0,1],[0,0]]) → [3,1]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

