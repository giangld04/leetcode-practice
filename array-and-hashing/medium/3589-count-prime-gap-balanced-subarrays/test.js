// Test: 3589. Count Prime-Gap Balanced Subarrays
// Run: node test.js

const { primeSubarray } = require("./solution");

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

console.log("\n3589. Count Prime-Gap Balanced Subarrays\n");

test(primeSubarray([1,2,3], 1), 2, 'Example 1: primeSubarray([1,2,3], 1) → 2');
test(primeSubarray([2,3,5,7], 3), 4, 'Example 2: primeSubarray([2,3,5,7], 3) → 4');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

