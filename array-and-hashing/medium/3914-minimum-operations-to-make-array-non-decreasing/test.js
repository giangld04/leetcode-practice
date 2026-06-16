// Test: 3914. Minimum Operations to Make Array Non Decreasing
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

console.log("\n3914. Minimum Operations to Make Array Non Decreasing\n");

test(minOperations([3,3,2,1]), 2, 'Example 1: minOperations([3,3,2,1]) → 2');
test(minOperations([5,1,2,3]), 4, 'Example 2: minOperations([5,1,2,3]) → 4');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

