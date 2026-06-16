// Test: 3880. Minimum Absolute Difference Between Two Values
// Run: node test.js

const { minAbsoluteDifference } = require("./solution");

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

console.log("\n3880. Minimum Absolute Difference Between Two Values\n");

test(minAbsoluteDifference([1,0,0,2,0,1]), 2, 'Example 1: minAbsoluteDifference([1,0,0,2,0,1]) → 2');
test(minAbsoluteDifference([1,0,1,0]), -1, 'Example 2: minAbsoluteDifference([1,0,1,0]) → -1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

