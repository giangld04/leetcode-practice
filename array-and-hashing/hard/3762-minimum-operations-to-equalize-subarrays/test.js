// Test: 3762. Minimum Operations to Equalize Subarrays
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

console.log("\n3762. Minimum Operations to Equalize Subarrays\n");

test(minOperations([1,4,7], 3, [[0,1],[0,2]]), [1,2], 'Example 1: minOperations([1,4,7], 3, [[0,1],[0,2]]) → [1,2]');
test(minOperations([1,2,4], 2, [[0,2],[0,0],[1,2]]), [-1,0,1], 'Example 2: minOperations([1,2,4], 2, [[0,2],[0,0],[1,2]]) → [-1,0,1]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

