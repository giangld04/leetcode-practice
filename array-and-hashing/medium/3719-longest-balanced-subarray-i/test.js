// Test: 3719. Longest Balanced Subarray I
// Run: node test.js

const { longestBalanced } = require("./solution");

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

console.log("\n3719. Longest Balanced Subarray I\n");

test(longestBalanced([2,5,4,3]), 4, 'Example 1: longestBalanced([2,5,4,3]) → 4');
test(longestBalanced([3,2,2,5,4]), 5, 'Example 2: longestBalanced([3,2,2,5,4]) → 5');
test(longestBalanced([1,2,3,2]), 3, 'Example 3: longestBalanced([1,2,3,2]) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

