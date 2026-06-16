// Test: 2626. Array Reduce Transformation
// Run: node test.js

const { reduce } = require("./solution");

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

console.log("\n2626. Array Reduce Transformation\n");

test(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr; }, 0), 10, 'Example 1: reduce([1,2,3,4], function sum(accum, curr) { return accum + curr; }, 0) → 10');
test(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr * curr; }, 100), 130, 'Example 2: reduce([1,2,3,4], function sum(accum, curr) { return accum + curr * curr; }, 100) → 130');
test(reduce([], function sum(accum, curr) { return 0; }, 25), 25, 'Example 3: reduce([], function sum(accum, curr) { return 0; }, 25) → 25');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

