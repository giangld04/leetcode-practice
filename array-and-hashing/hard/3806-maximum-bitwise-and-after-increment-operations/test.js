// Test: 3806. Maximum Bitwise AND After Increment Operations
// Run: node test.js

const { maximumAND } = require("./solution");

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

console.log("\n3806. Maximum Bitwise AND After Increment Operations\n");

test(maximumAND([3,1,2], 8, 2), 6, 'Example 1: maximumAND([3,1,2], 8, 2) → 6');
test(maximumAND([1,2,8,4], 7, 3), 4, 'Example 2: maximumAND([1,2,8,4], 7, 3) → 4');
test(maximumAND([1,1], 3, 2), 2, 'Example 3: maximumAND([1,1], 3, 2) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

