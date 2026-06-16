// Test: 3769. Sort Integers by Binary Reflection
// Run: node test.js

const { sortByReflection } = require("./solution");

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

console.log("\n3769. Sort Integers by Binary Reflection\n");

test(sortByReflection([4,5,4]), [4,4,5], 'Example 1: sortByReflection([4,5,4]) → [4,4,5]');
test(sortByReflection([3,6,5,8]), [8,3,6,5], 'Example 2: sortByReflection([3,6,5,8]) → [8,3,6,5]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

