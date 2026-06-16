// Test: 3937. Minimum Operations to Make Array Modulo Alternating I
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

console.log("\n3937. Minimum Operations to Make Array Modulo Alternating I\n");

test(minOperations([1,4,2,8], 3), 2, 'Example 1: minOperations([1,4,2,8], 3) → 2');
test(minOperations([1,1,1], 3), 1, 'Example 2: minOperations([1,1,1], 3) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

