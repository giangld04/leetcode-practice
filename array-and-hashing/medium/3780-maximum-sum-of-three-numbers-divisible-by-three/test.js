// Test: 3780. Maximum Sum of Three Numbers Divisible by Three
// Run: node test.js

const { maximumSum } = require("./solution");

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

console.log("\n3780. Maximum Sum of Three Numbers Divisible by Three\n");

test(maximumSum([4,2,3,1]), 9, 'Example 1: maximumSum([4,2,3,1]) → 9');
test(maximumSum([2,1,5]), 0, 'Example 2: maximumSum([2,1,5]) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

