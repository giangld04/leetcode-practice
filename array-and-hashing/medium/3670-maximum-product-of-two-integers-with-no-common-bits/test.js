// Test: 3670. Maximum Product of Two Integers With No Common Bits
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

console.log("\n3670. Maximum Product of Two Integers With No Common Bits\n");

test(maxProduct([1,2,3,4,5,6,7]), 12, 'Example 1: maxProduct([1,2,3,4,5,6,7]) → 12');
test(maxProduct([5,6,4]), 0, 'Example 2: maxProduct([5,6,4]) → 0');
test(maxProduct([64,8,32]), 2048, 'Example 3: maxProduct([64,8,32]) → 2048');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

