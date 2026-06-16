// Test: 3920. Maximize Fixed Points After Deletions
// Run: node test.js

const { maxFixedPoints } = require("./solution");

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

console.log("\n3920. Maximize Fixed Points After Deletions\n");

test(maxFixedPoints([0,2,1]), 2, 'Example 1: maxFixedPoints([0,2,1]) → 2');
test(maxFixedPoints([3,1,2]), 2, 'Example 2: maxFixedPoints([3,1,2]) → 2');
test(maxFixedPoints([1,0,1,2]), 3, 'Example 3: maxFixedPoints([1,0,1,2]) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

