// Test: 3936. Minimum Swaps to Move Zeros to End
// Run: node test.js

const { minimumSwaps } = require("./solution");

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

console.log("\n3936. Minimum Swaps to Move Zeros to End\n");

test(minimumSwaps([0,1,0,3,12]), 2, 'Example 1: minimumSwaps([0,1,0,3,12]) → 2');
test(minimumSwaps([0,1,0,2]), 1, 'Example 2: minimumSwaps([0,1,0,2]) → 1');
test(minimumSwaps([1,2,0]), 0, 'Example 3: minimumSwaps([1,2,0]) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

