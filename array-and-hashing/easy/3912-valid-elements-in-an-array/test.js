// Test: 3912. Valid Elements in an Array
// Run: node test.js

const { findValidElements } = require("./solution");

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

console.log("\n3912. Valid Elements in an Array\n");

test(findValidElements([1,2,4,2,3,2]), [1,2,4,3,2], 'Example 1: findValidElements([1,2,4,2,3,2]) → [1,2,4,3,2]');
test(findValidElements([5,5,5,5]), [5,5], 'Example 2: findValidElements([5,5,5,5]) → [5,5]');
test(findValidElements([1]), [1], 'Example 3: findValidElements([1]) → [1]');

// --- Add your own test cases below ---


console.log(`\nResult: ${passed} passed, ${failed} failed\n`);
if (failed) process.exitCode = 1;

