// Test: 3755. Find Maximum Balanced XOR Subarray Length
// Run: node test.js

const { maxBalancedSubarray } = require("./solution");

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

console.log("\n3755. Find Maximum Balanced XOR Subarray Length\n");

test(maxBalancedSubarray([3,1,3,2,0]), 4, 'Example 1: maxBalancedSubarray([3,1,3,2,0]) → 4');
test(maxBalancedSubarray([3,2,8,5,4,14,9,15]), 8, 'Example 2: maxBalancedSubarray([3,2,8,5,4,14,9,15]) → 8');
test(maxBalancedSubarray([0]), 0, 'Example 3: maxBalancedSubarray([0]) → 0');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

