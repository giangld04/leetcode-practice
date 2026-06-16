// Test: 3732. Maximum Product of Three Elements After One Replacement
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

console.log("\n3732. Maximum Product of Three Elements After One Replacement\n");

test(maxProduct([-5,7,0]), 3500000, 'Example 1: maxProduct([-5,7,0]) → 3500000');
test(maxProduct([-4,-2,-1,-3]), 1200000, 'Example 2: maxProduct([-4,-2,-1,-3]) → 1200000');
test(maxProduct([0,10,0]), 0, 'Example 3: maxProduct([0,10,0]) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

