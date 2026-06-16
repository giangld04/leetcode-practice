// Test: 3674. Minimum Operations to Equalize Array
// Run: node test.js

const { minOperations } = require("./solution");

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

console.log("\n3674. Minimum Operations to Equalize Array\n");

test(minOperations([1,2]), 1, 'Example 1: minOperations([1,2]) → 1');
test(minOperations([5,5,5]), 0, 'Example 2: minOperations([5,5,5]) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

