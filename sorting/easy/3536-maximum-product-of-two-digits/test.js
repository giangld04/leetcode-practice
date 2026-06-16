// Test: 3536. Maximum Product of Two Digits
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

console.log("\n3536. Maximum Product of Two Digits\n");

test(maxProduct(31), 3, 'Example 1: maxProduct(31) → 3');
test(maxProduct(22), 4, 'Example 2: maxProduct(22) → 4');
test(maxProduct(124), 8, 'Example 3: maxProduct(124) → 8');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

