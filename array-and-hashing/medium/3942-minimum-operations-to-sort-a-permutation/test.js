// Test: 3942. Minimum Operations to Sort a Permutation
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

console.log("\n3942. Minimum Operations to Sort a Permutation\n");

test(minOperations([0,2,1]), 2, 'Example 1: minOperations([0,2,1]) → 2');
test(minOperations([1,0,2]), 2, 'Example 2: minOperations([1,0,2]) → 2');
test(minOperations([2,0,1,3]), -1, 'Example 3: minOperations([2,0,1,3]) → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

