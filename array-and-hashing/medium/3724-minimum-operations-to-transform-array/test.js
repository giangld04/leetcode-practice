// Test: 3724. Minimum Operations to Transform Array
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

console.log("\n3724. Minimum Operations to Transform Array\n");

test(minOperations([2,8], [1,7,3]), 4, 'Example 1: minOperations([2,8], [1,7,3]) → 4');
test(minOperations([1,3,6], [2,4,5,3]), 4, 'Example 2: minOperations([1,3,6], [2,4,5,3]) → 4');
test(minOperations([2], [3,4]), 3, 'Example 3: minOperations([2], [3,4]) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

