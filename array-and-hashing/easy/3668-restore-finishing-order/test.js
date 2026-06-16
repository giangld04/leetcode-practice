// Test: 3668. Restore Finishing Order
// Run: node test.js

const { recoverOrder } = require("./solution");

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

console.log("\n3668. Restore Finishing Order\n");

test(recoverOrder([3,1,2,5,4], [1,3,4]), [3,1,4], 'Example 1: recoverOrder([3,1,2,5,4], [1,3,4]) → [3,1,4]');
test(recoverOrder([1,4,5,3,2], [2,5]), [5,2], 'Example 2: recoverOrder([1,4,5,3,2], [2,5]) → [5,2]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

