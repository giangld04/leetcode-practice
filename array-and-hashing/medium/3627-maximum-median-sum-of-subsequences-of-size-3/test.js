// Test: 3627. Maximum Median Sum of Subsequences of Size 3
// Run: node test.js

const { maximumMedianSum } = require("./solution");

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

console.log("\n3627. Maximum Median Sum of Subsequences of Size 3\n");

test(maximumMedianSum([2,1,3,2,1,3]), 5, 'Example 1: maximumMedianSum([2,1,3,2,1,3]) → 5');
test(maximumMedianSum([1,1,10,10,10,10]), 20, 'Example 2: maximumMedianSum([1,1,10,10,10,10]) → 20');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

