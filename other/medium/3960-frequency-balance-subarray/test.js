// Test: 3960. Frequency Balance Subarray
// Run: node test.js

const { getLength } = require("./solution");

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

console.log("\n3960. Frequency Balance Subarray\n");

test(getLength([1,2,2,1,2,3,3,3]), 5, 'Example 1: getLength([1,2,2,1,2,3,3,3]) → 5');
test(getLength([5,5,5,5]), 4, 'Example 2: getLength([5,5,5,5]) → 4');
test(getLength([1,2,3,4]), 1, 'Example 3: getLength([1,2,3,4]) → 1');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

