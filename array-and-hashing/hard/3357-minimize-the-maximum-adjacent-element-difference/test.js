// Test: 3357. Minimize the Maximum Adjacent Element Difference
// Run: node test.js

const { minDifference } = require("./solution");

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

console.log("\n3357. Minimize the Maximum Adjacent Element Difference\n");

test(minDifference([1,2,-1,10,8]), 4, 'Example 1: minDifference([1,2,-1,10,8]) → 4');
test(minDifference([-1,-1,-1]), 0, 'Example 2: minDifference([-1,-1,-1]) → 0');
test(minDifference([-1,10,-1,8]), 1, 'Example 3: minDifference([-1,10,-1,8]) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

