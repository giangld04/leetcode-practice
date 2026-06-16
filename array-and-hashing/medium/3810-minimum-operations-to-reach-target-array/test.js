// Test: 3810. Minimum Operations to Reach Target Array
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

console.log("\n3810. Minimum Operations to Reach Target Array\n");

test(minOperations([1,2,3], [2,1,3]), 2, 'Example 1: minOperations([1,2,3], [2,1,3]) → 2');
test(minOperations([4,1,4], [5,1,4]), 1, 'Example 2: minOperations([4,1,4], [5,1,4]) → 1');
test(minOperations([7,3,7], [5,5,9]), 2, 'Example 3: minOperations([7,3,7], [5,5,9]) → 2');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

