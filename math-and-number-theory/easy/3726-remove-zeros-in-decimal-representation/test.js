// Test: 3726. Remove Zeros in Decimal Representation
// Run: node test.js

const { removeZeros } = require("./solution");

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

console.log("\n3726. Remove Zeros in Decimal Representation\n");

test(removeZeros(1020030), 123, 'Example 1: removeZeros(1020030) → 123');
test(removeZeros(1), 1, 'Example 2: removeZeros(1) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

