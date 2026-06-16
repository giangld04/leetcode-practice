// Test: 3671. Sum of Beautiful Subsequences
// Run: node test.js

const { totalBeauty } = require("./solution");

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

console.log("\n3671. Sum of Beautiful Subsequences\n");

test(totalBeauty([1,2,3]), 10, 'Example 1: totalBeauty([1,2,3]) → 10');
test(totalBeauty([4,6]), 12, 'Example 2: totalBeauty([4,6]) → 12');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

