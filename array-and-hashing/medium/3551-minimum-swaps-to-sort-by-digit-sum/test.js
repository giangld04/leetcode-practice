// Test: 3551. Minimum Swaps to Sort by Digit Sum
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

console.log("\n3551. Minimum Swaps to Sort by Digit Sum\n");

test(minSwaps([37,100]), 1, 'Example 1: minSwaps([37,100]) → 1');
test(minSwaps([22,14,33,7]), 0, 'Example 2: minSwaps([22,14,33,7]) → 0');
test(minSwaps([18,43,34,16]), 2, 'Example 3: minSwaps([18,43,34,16]) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

