// Test: 3654. Minimum Sum After Divisible Sum Deletions
// Run: node test.js

const { minArraySum } = require("./solution");

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

console.log("\n3654. Minimum Sum After Divisible Sum Deletions\n");

test(minArraySum([1,1,1], 2), 1, 'Example 1: minArraySum([1,1,1], 2) → 1');
test(minArraySum([3,1,4,1,5], 3), 5, 'Example 2: minArraySum([3,1,4,1,5], 3) → 5');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

