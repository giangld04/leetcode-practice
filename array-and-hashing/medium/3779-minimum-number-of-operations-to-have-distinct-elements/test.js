// Test: 3779. Minimum Number of Operations to Have Distinct Elements
// Run: node test.js

const { minOperations } = require("./solution");

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

console.log("\n3779. Minimum Number of Operations to Have Distinct Elements\n");

test(minOperations([3,8,3,6,5,8]), 1, 'Example 1: minOperations([3,8,3,6,5,8]) → 1');
test(minOperations([2,2]), 1, 'Example 2: minOperations([2,2]) → 1');
test(minOperations([4,3,5,1,2]), 0, 'Example 3: minOperations([4,3,5,1,2]) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

