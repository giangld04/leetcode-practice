// Test: 3509. Maximum Product of Subsequences With an Alternating Sum Equal to K
// Run: node test.js

const { maxProduct } = require("./solution");

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

console.log("\n3509. Maximum Product of Subsequences With an Alternating Sum Equal to K\n");

test(maxProduct([1,2,3], 2, 10), 6, 'Example 1: maxProduct([1,2,3], 2, 10) → 6');
test(maxProduct([0,2,3], -5, 12), -1, 'Example 2: maxProduct([0,2,3], -5, 12) → -1');
test(maxProduct([2,2,3,3], 0, 9), 9, 'Example 3: maxProduct([2,2,3,3], 0, 9) → 9');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

