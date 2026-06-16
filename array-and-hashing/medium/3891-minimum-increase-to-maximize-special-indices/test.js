// Test: 3891. Minimum Increase to Maximize Special Indices
// Run: node test.js

const { minIncrease } = require("./solution");

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

console.log("\n3891. Minimum Increase to Maximize Special Indices\n");

test(minIncrease([1,2,2]), 1, 'Example 1: minIncrease([1,2,2]) → 1');
test(minIncrease([2,1,1,3]), 2, 'Example 2: minIncrease([2,1,1,3]) → 2');
test(minIncrease([5,2,1,4,3]), 4, 'Example 3: minIncrease([5,2,1,4,3]) → 4');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

