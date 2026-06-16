// Test: 3886. Sum of Sortable Integers
// Run: node test.js

const { sortableIntegers } = require("./solution");

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

console.log("\n3886. Sum of Sortable Integers\n");

test(sortableIntegers([3,1,2]), 3, 'Example 1: sortableIntegers([3,1,2]) → 3');
test(sortableIntegers([7,6,5]), 0, 'Example 2: sortableIntegers([7,6,5]) → 0');
test(sortableIntegers([5,8]), 3, 'Example 3: sortableIntegers([5,8]) → 3');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

