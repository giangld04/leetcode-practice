// Test: 3542. Minimum Operations to Convert All Elements to Zero
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

console.log("\n3542. Minimum Operations to Convert All Elements to Zero\n");

test(minOperations([0,2]), 1, 'Example 1: minOperations([0,2]) → 1');
test(minOperations([3,1,2,1]), 3, 'Example 2: minOperations([3,1,2,1]) → 3');
test(minOperations([1,2,1,2,1,2]), 4, 'Example 3: minOperations([1,2,1,2,1,2]) → 4');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

