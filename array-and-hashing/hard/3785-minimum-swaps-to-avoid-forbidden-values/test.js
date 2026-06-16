// Test: 3785. Minimum Swaps to Avoid Forbidden Values
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

console.log("\n3785. Minimum Swaps to Avoid Forbidden Values\n");

test(minSwaps([1,2,3], [3,2,1]), 1, 'Example 1: minSwaps([1,2,3], [3,2,1]) → 1');
test(minSwaps([4,6,6,5], [4,6,5,5]), 2, 'Example 2: minSwaps([4,6,6,5], [4,6,5,5]) → 2');
test(minSwaps([7,7], [8,7]), -1, 'Example 3: minSwaps([7,7], [8,7]) → -1');
test(minSwaps([1,2], [2,1]), 0, 'Example 4: minSwaps([1,2], [2,1]) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

