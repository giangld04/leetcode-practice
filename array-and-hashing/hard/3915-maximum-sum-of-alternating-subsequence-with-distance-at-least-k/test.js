// Test: 3915. Maximum Sum of Alternating Subsequence With Distance at Least K
// Run: node test.js

const { maxAlternatingSum } = require("./solution");

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

console.log("\n3915. Maximum Sum of Alternating Subsequence With Distance at Least K\n");

test(maxAlternatingSum([5,4,2], 2), 7, 'Example 1: maxAlternatingSum([5,4,2], 2) → 7');
test(maxAlternatingSum([3,5,4,2,4], 1), 14, 'Example 2: maxAlternatingSum([3,5,4,2,4], 1) → 14');
test(maxAlternatingSum([5], 1), 5, 'Example 3: maxAlternatingSum([5], 1) → 5');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

