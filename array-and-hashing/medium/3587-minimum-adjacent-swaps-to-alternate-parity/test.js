// Test: 3587. Minimum Adjacent Swaps to Alternate Parity
// Run: node test.js

const { minSwaps } = require("./solution");

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

console.log("\n3587. Minimum Adjacent Swaps to Alternate Parity\n");

test(minSwaps([2,4,6,5,7]), 3, 'Example 1: minSwaps([2,4,6,5,7]) → 3');
test(minSwaps([2,4,5,7]), 1, 'Example 2: minSwaps([2,4,5,7]) → 1');
test(minSwaps([1,2,3]), 0, 'Example 3: minSwaps([1,2,3]) → 0');
test(minSwaps([4,5,6,8]), -1, 'Example 4: minSwaps([4,5,6,8]) → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

