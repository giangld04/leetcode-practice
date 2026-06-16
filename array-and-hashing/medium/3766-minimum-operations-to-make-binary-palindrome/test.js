// Test: 3766. Minimum Operations to Make Binary Palindrome
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

console.log("\n3766. Minimum Operations to Make Binary Palindrome\n");

test(minOperations([1,2,4]), [0,1,1], 'Example 1: minOperations([1,2,4]) → [0,1,1]');
test(minOperations([6,7,12]), [1,0,3], 'Example 2: minOperations([6,7,12]) → [1,0,3]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

